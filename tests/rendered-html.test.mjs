import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Aaroo Studios landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Aaroo Studios \| Makeup Artistry, India<\/title>/i);
  assert.match(html, /Soft glam\./);
  assert.match(html, /Bridal artistry/);
  assert.match(html, /Request availability/);
  assert.match(html, /aria-label="Main navigation"/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("uses the real GitHub repository path for Pages assets", async () => {
  const [page, nextConfig, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  for (const source of [page, nextConfig]) {
    assert.match(source, /Aaroo_studios/);
    assert.doesNotMatch(source, /aaroo-studios/);
  }

  const { scripts } = JSON.parse(packageJson);
  assert.match(scripts["finalize:pages"], /dist\/client\/Aaroo_studios\//);
  assert.doesNotMatch(scripts["finalize:pages"], /dist\/client\/aaroo-studios\//);
});
