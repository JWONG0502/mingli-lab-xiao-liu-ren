import type { Metadata } from "next";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
  title: "Privacy Policy | Xiao Liu Ren Lab",
  description:
    "Read the Xiao Liu Ren Lab privacy policy, including local calculation, reflection topic handling, analytics, and external services.",
};

export default function PrivacyPage() {
  return (
    <main className="panel">
      <p className="eyebrow">Privacy</p>
      <h1>{copy.staticPages.privacyTitle}</h1>
      <p className="lead">{copy.staticPages.privacyBody}</p>
      <div className="result-sections" style={{ marginTop: 24 }}>
        <section className="card">
          <h2>Reflection Topic</h2>
          <p>The optional Reflection Topic is kept only in the current page state. It is not stored in localStorage, cookies, the URL, or analytics payloads.</p>
        </section>
        <section className="card">
          <h2>Time and Calculation</h2>
          <p>Date, time, and time zone are used locally in the browser to calculate the result. No self-hosted backend is used in phase one.</p>
        </section>
        <section className="card">
          <h2>External Services</h2>
          <p>The Beginner Guide may be hosted on an external download page. That provider handles its own access data under its own policy.</p>
        </section>
      </div>
    </main>
  );
}
