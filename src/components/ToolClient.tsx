"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { copy } from "@/content/copy";
import { getPalace } from "@/content/palaces";
import { reflectionContexts } from "@/data/contexts";
import { assetPath } from "@/lib/assets";
import { castXiaoLiuRen, type CastResult } from "@/lib/xiao-liu-ren/cast";
import type { PalaceId, ReflectionContext } from "@/lib/xiao-liu-ren/types";
import { getBrowserTimeZone, getSuggestedTimeZones } from "@/lib/time/timezone";

type ToolStatus = "form" | "casting" | "result" | "error";

const gestureFrames = [
  "/assets/images/xlr/gesture-1-da-an.png",
  "/assets/images/xlr/gesture-2-liu-lian.png",
  "/assets/images/xlr/gesture-3-su-xi.png",
  "/assets/images/xlr/gesture-4-chi-kou.png",
  "/assets/images/xlr/gesture-5-xiao-ji.png",
  "/assets/images/xlr/gesture-6-kong-wang.png",
];

const castingSteps = [
  copy.casting.countingMonth,
  copy.casting.countingDay,
  copy.casting.countingHour,
  copy.casting.finalReached,
];

function todayInputValue() {
  return new Date().toISOString().slice(0, 10);
}

function timeInputValue() {
  return new Date().toTimeString().slice(0, 5);
}

function palaceLine(id: PalaceId) {
  const palace = getPalace(id);
  return `${palace.english} · ${palace.chinese} · ${palace.pinyin}`;
}

export default function ToolClient() {
  const [status, setStatus] = useState<ToolStatus>("form");
  const [context, setContext] = useState<ReflectionContext>("general_reflection");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState(todayInputValue);
  const [time, setTime] = useState(timeInputValue);
  const [timeZone, setTimeZone] = useState("Asia/Shanghai");
  const [result, setResult] = useState<CastResult | null>(null);
  const [error, setError] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const timeZones = useMemo(() => getSuggestedTimeZones().slice(0, 80), []);

  useEffect(() => {
    setTimeZone(getBrowserTimeZone());
  }, []);

  useEffect(() => {
    if (status !== "casting" || !result) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setStatus("result");
      return;
    }

    const interval = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % gestureFrames.length);
    }, 220);

    const stepTimer = window.setInterval(() => {
      setStepIndex((current) => Math.min(current + 1, castingSteps.length - 1));
    }, 900);

    const finishTimer = window.setTimeout(() => {
      setStatus("result");
      window.clearInterval(interval);
      window.clearInterval(stepTimer);
    }, 4600);

    return () => {
      window.clearInterval(interval);
      window.clearInterval(stepTimer);
      window.clearTimeout(finishTimer);
    };
  }, [result, status]);

  function handleCast() {
    try {
      const castResult = castXiaoLiuRen({ date, time, timeZone });
      setResult(castResult);
      setError("");
      setStepIndex(0);
      setFrameIndex(0);
      setStatus("casting");
    } catch {
      setError(copy.errors.lunarConversionFailed);
      setStatus("error");
    }
  }

  function skipAnimation() {
    setStatus("result");
  }

  if (status === "casting" && result) {
    return (
      <main className="tool-panel">
        <div className="tool-stage">
          <p className="eyebrow">Casting Animation</p>
          <h1>{castingSteps[stepIndex]}</h1>
          <div className="hand-frame" aria-live="polite">
            <img src={assetPath(gestureFrames[frameIndex])} alt="Xiao Liu Ren hand gesture frame" />
          </div>
          <ul className="process-list">
            <li>
              <span>{copy.casting.monthPalace}</span>
              <span>{palaceLine(result.monthPalace)}</span>
            </li>
            <li>
              <span>{copy.casting.dayPalace}</span>
              <span>{palaceLine(result.dayPalace)}</span>
            </li>
            <li>
              <span>{copy.casting.hourPalace}</span>
              <span>{palaceLine(result.hourPalace)}</span>
            </li>
            <li>
              <span>{copy.casting.finalPalace}</span>
              <span>{palaceLine(result.finalPalace)}</span>
            </li>
          </ul>
          <button className="secondary-button" type="button" onClick={skipAnimation}>
            {copy.casting.skip}
          </button>
        </div>
      </main>
    );
  }

  if (status === "result" && result) {
    const finalPalace = getPalace(result.finalPalace);
    const monthPalace = getPalace(result.monthPalace);
    const dayPalace = getPalace(result.dayPalace);
    const hourPalace = getPalace(result.hourPalace);
    const pattern = copy.result.patternTemplate
      .replace("{monthTheme}", monthPalace.themes.process)
      .replace("{dayTheme}", dayPalace.themes.process)
      .replace("{hourTheme}", hourPalace.themes.process)
      .replace("{finalTheme}", finalPalace.themes.short);

    return (
      <main className="tool-panel result-grid">
        <aside className="card">
          <p className="eyebrow">{copy.result.finalResult}</p>
          <h1>{finalPalace.english}</h1>
          <p className="palace-term">
            {finalPalace.chinese} · {finalPalace.pinyin}
          </p>
          <ul className="keyword-list">
            {finalPalace.keywords.slice(0, 6).map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
          <Link className="button" href={`/six-palaces/${finalPalace.id}`}>
            {copy.result.learnAboutPalace.replace("{palace}", finalPalace.english)}
          </Link>
        </aside>
        <section className="result-sections">
          <section>
            <h2>{copy.result.process}</h2>
            <ul className="process-list">
              <li>
                <span>{copy.casting.monthPalace}</span>
                <span>{palaceLine(result.monthPalace)}</span>
              </li>
              <li>
                <span>{copy.casting.dayPalace}</span>
                <span>{palaceLine(result.dayPalace)}</span>
              </li>
              <li>
                <span>{copy.casting.hourPalace}</span>
                <span>{palaceLine(result.hourPalace)}</span>
              </li>
            </ul>
          </section>
          <section>
            <h2>{copy.result.whatThisMaySuggest}</h2>
            <p>{pattern}</p>
          </section>
          <section>
            <h2>{copy.result.finalPalaceMeaning}</h2>
            <p>{finalPalace.positions.final}</p>
            <p>{finalPalace.basicMeaning}</p>
          </section>
          <section>
            <h2>{copy.result.contextualReflection}</h2>
            <p>{finalPalace.contexts[context]}</p>
          </section>
          <section>
            <h2>{copy.result.payAttentionTo}</h2>
            <ul>
              {finalPalace.attentionPoints.slice(0, 3).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>{copy.result.reflectionQuestions}</h2>
            <ul>
              {finalPalace.reflectionQuestions.slice(0, 3).map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
          <details>
            <summary>{copy.result.howThisWasCast}</summary>
            <ul className="process-list">
              <li>
                <span>Selected time</span>
                <span>
                  {result.date}, {result.time}
                </span>
              </li>
              <li>
                <span>Time zone used</span>
                <span>{result.timeZone}</span>
              </li>
              <li>
                <span>Converted lunar date</span>
                <span>
                  Lunar Month {result.lunarMonth}, Day {result.lunarDay}
                  {result.isLeapMonth ? " (leap month)" : ""}
                </span>
              </li>
              <li>
                <span>Chinese hour</span>
                <span>
                  {result.chineseHourLabel} · {result.hourNumber}
                </span>
              </li>
            </ul>
          </details>
          <div className="inline-actions">
            <Link className="secondary-button" href="/six-palaces">
              {copy.result.readSixPalaces}
            </Link>
            <Link className="secondary-button" href="/method">
              {copy.result.seeFullMethod}
            </Link>
            <button className="ghost-button" type="button" onClick={() => setStatus("form")}>
              Cast another reflection
            </button>
          </div>
          <p className="disclaimer">{copy.result.disclaimer}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="tool-panel">
      <p className="eyebrow">Tool</p>
      <h1>{copy.tool.title}</h1>
      <p className="lead">{copy.tool.intro}</p>
      {status === "error" && <p className="disclaimer">{error}</p>}
      <div className="tool-stage" style={{ marginTop: 26 }}>
        <fieldset className="context-options">
          <legend>{copy.tool.reflectionContext}</legend>
          <div className="context-grid">
            {reflectionContexts.map((item) => (
              <button
                className={`context-card ${context === item.id ? "is-selected" : ""}`}
                key={item.id}
                type="button"
                onClick={() => setContext(item.id)}
              >
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="field">
          <label htmlFor="reflection-topic">{copy.tool.reflectionTopic}</label>
          <textarea
            id="reflection-topic"
            placeholder={copy.tool.reflectionTopicPlaceholder}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
          <small>{copy.tool.reflectionTopicNote}</small>
        </div>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="date">Date</label>
            <input id="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="time">Time</label>
            <input id="time" type="time" value={time} onChange={(event) => setTime(event.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="timezone">Time Zone</label>
            <select id="timezone" value={timeZone} onChange={(event) => setTimeZone(event.target.value)}>
              {timeZones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="notice">
          <p>{copy.tool.timeZoneNote}</p>
          <p>{copy.tool.timeZoneHelp}</p>
        </div>
        <button className="button" type="button" onClick={handleCast}>
          {copy.tool.castCta}
        </button>
      </div>
    </main>
  );
}
