import { BookingForm } from "./BookingForm";

export const dynamic = "force-static";

const services = [
  { number: "01", title: "Bridal artistry", copy: "A considered, camera-ready look that still feels unmistakably like you—from first look to last dance.", meta: "Includes trial · hair · draping" },
  { number: "02", title: "Occasion glam", copy: "Fresh, polished makeup for celebrations, sangeets, receptions, and every beautifully dressed evening.", meta: "Studio or on-location" },
  { number: "03", title: "Editorial & campaign", copy: "Concept-led beauty direction for fashion, jewellery, brand campaigns, and the moving image.", meta: "Creative teams welcome" },
];

export default function Home() {
  const assetPrefix = process.env.GITHUB_PAGES === "true" ? "/Aaroo_studios" : "";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aaroo Studios home">
          <span>AAROO</span>
          <small>MAKEUP ATELIER</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#book">Book your date</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">BRIDAL · EDITORIAL · OCCASION</p>
          <h1>Soft glam.<br /><em>Strong presence.</em></h1>
          <p className="hero-intro">
            Modern makeup artistry rooted in you. Thoughtful looks, skin-first
            finishes, and a calm chair—wherever your celebration takes you.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#book">Find your look <span>↗</span></a>
            <a className="text-link" href="#work">Explore our work <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art">
          <img src={`${assetPrefix}/aaroo-beauty-campaign.png`} alt="Three South Asian women wearing modern Aaroo beauty looks" />
          <div className="hero-stamp"><span>✦</span> MADE IN INDIA<br />WORN EVERYWHERE</div>
        </div>
        <p className="hero-note">Based in India · Available worldwide</p>
      </section>

      <section className="ticker" aria-label="Studio values">
        <div><span>SKIN, NOT A MASK</span><b>✦</b><span>CALM IN THE CHAIR</span><b>✦</b><span>CAMERA-READY, ALWAYS</span><b>✦</b><span>MADE FOR YOUR MOMENT</span></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Beauty that holds<br /><em>the whole room.</em></h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <p className="service-number">{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span>{service.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-title">
          <p className="eyebrow light">THE AAROO EDIT</p>
          <h2>One face.<br /><em>Endless moods.</em></h2>
          <p>We build every look around your features, your clothes, your light, and how you want to feel.</p>
        </div>
        <div className="look-grid">
          <figure className="look-card look-one">
            <img src={`${assetPrefix}/aaroo-beauty-campaign.png`} alt="Luminous soft bronze makeup look" />
            <figcaption><span>01</span><p>The Luminous Bride<small>Soft bronze · lived-in glow</small></p></figcaption>
          </figure>
          <figure className="look-card look-two">
            <img src={`${assetPrefix}/aaroo-beauty-campaign.png`} alt="Editorial berry lip makeup look" />
            <figcaption><span>02</span><p>The Modern Muse<small>Berry lip · sculpted skin</small></p></figcaption>
          </figure>
          <figure className="look-card look-three">
            <img src={`${assetPrefix}/aaroo-beauty-campaign.png`} alt="Warm terracotta occasion makeup look" />
            <figcaption><span>03</span><p>The Golden Hour<small>Warm tones · quiet drama</small></p></figcaption>
          </figure>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-mark" aria-hidden="true"><span>A</span><i>✦</i></div>
        <div className="about-copy">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2>Makeup should<br />meet you <em>where you are.</em></h2>
          <p className="about-lead">Aaroo is a modern makeup atelier born in India, built on honest skin, thoughtful detail, and the belief that beauty never needs a template.</p>
          <div className="about-columns">
            <p>We listen before we lift a brush. Your face, your rituals, your comfort, and the feeling you want to carry into the room shape every choice we make.</p>
            <p>From intimate home ceremonies to destination weddings and campaign sets, our artists bring a calm, considered energy to the day.</p>
          </div>
          <a className="text-link" href="#book">Meet us in the chair <span>→</span></a>
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-heading compact">
          <p className="eyebrow light">THE EXPERIENCE</p>
          <h2>Easy from hello<br /><em>to final touch.</em></h2>
        </div>
        <ol className="process-list">
          <li><span>01</span><h3>Tell us your date</h3><p>Share your event, city, and the look you have in mind.</p></li>
          <li><span>02</span><h3>Let’s find your mood</h3><p>We talk references, clothes, skin, schedule, and everything in between.</p></li>
          <li><span>03</span><h3>Take your seat</h3><p>We arrive prepared, on time, and ready to make the getting-ready part feel good.</p></li>
        </ol>
      </section>

      <section className="booking section-pad" id="book">
        <div className="booking-intro">
          <p className="eyebrow">BOOK AAROO</p>
          <h2>Your date.<br /><em>Your look.</em><br />Let’s begin.</h2>
          <p>Tell us what you’re planning. We’ll come back with availability, a tailored recommendation, and a clear quote.</p>
          <div className="availability"><span /><p>Now accepting bookings<br /><small>India · Destination · Worldwide</small></p></div>
        </div>
        <BookingForm />
      </section>

      <footer>
        <div className="footer-brand"><span>AAROO</span><small>MAKEUP ATELIER</small></div>
        <p>Modern artistry. Honest skin. Your moment.</p>
        <div className="footer-links"><a href="#top">Instagram</a><a href="#book">Enquire</a><a href="#top">Back to top ↑</a></div>
        <small className="copyright">© {new Date().getFullYear()} Aaroo Studios · India</small>
      </footer>
    </main>
  );
}
