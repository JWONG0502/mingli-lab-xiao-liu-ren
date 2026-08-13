import { copy } from "@/content/copy";
import { CHINESE_HOURS } from "@/lib/time/chinese-hour";

export default function MethodPage() {
  return (
    <main className="panel">
      <p className="eyebrow">Method boundary</p>
      <h1>{copy.method.title}</h1>
      <p className="lead">{copy.method.intro}</p>
      <section className="notice" style={{ marginTop: 24 }}>
        {copy.method.traditionsNote}
      </section>
      <div className="two-grid" style={{ marginTop: 24 }}>
        <section className="card">
          <h2>Formula</h2>
          <p>Month Palace = (lunarMonth - 1) % 6</p>
          <p>Day Palace = (monthIndex + lunarDay - 1) % 6</p>
          <p>Hour Palace = (dayIndex + hourNumber - 1) % 6</p>
          <p>Check: (lunarMonth + lunarDay + hourNumber - 3) % 6</p>
        </section>
        <section className="card">
          <h2>Rules</h2>
          <p>Leap lunar months use the same month number.</p>
          <p>23:00-23:59 is treated as Zi hour within the selected civil date. It does not automatically move to the next civil date.</p>
        </section>
      </div>
      <section className="card" style={{ marginTop: 24 }}>
        <h2>Chinese Hours</h2>
        <ul className="process-list">
          {CHINESE_HOURS.map((hour) => (
            <li key={hour.id}>
              <span>{hour.label}</span>
              <span>{hour.rangeLabel}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
