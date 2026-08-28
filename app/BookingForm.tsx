"use client";

import { FormEvent, useState } from "react";

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h3>Your date is on our radar.</h3>
        <p>Thank you. The Aaroo team will share availability and next steps shortly.</p>
        <button type="button" onClick={() => setSent(false)}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <label>
        <span>Your name</span>
        <input name="name" type="text" placeholder="How should we address you?" required />
      </label>
      <label>
        <span>WhatsApp number</span>
        <input name="phone" type="tel" inputMode="tel" placeholder="+91 98XXX XXXXX" required />
      </label>
      <label>
        <span>Event date</span>
        <input name="date" type="date" required />
      </label>
      <label>
        <span>City / venue</span>
        <input name="city" type="text" placeholder="Mumbai, Jaipur, Goa…" required />
      </label>
      <label className="wide-field">
        <span>I’m looking for</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>Choose a service</option>
          <option>Bridal artistry</option>
          <option>Wedding party</option>
          <option>Occasion makeup</option>
          <option>Editorial / campaign</option>
        </select>
      </label>
      <label className="wide-field">
        <span>Tell us a little more <small>(optional)</small></span>
        <textarea name="notes" rows={3} placeholder="Your outfit, mood, number of people, or anything else we should know." />
      </label>
      <button className="submit-button" type="submit">Request availability <span>↗</span></button>
      <p className="form-note">We usually reply within one working day.</p>
    </form>
  );
}
