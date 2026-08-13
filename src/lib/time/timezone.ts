const FALLBACK_TIME_ZONE = "Asia/Shanghai";

export function getBrowserTimeZone(): string {
  if (typeof Intl === "undefined") return FALLBACK_TIME_ZONE;
  return Intl.DateTimeFormat().resolvedOptions().timeZone || FALLBACK_TIME_ZONE;
}

export function isSupportedTimeZone(timeZone: string): boolean {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone }).format(new Date());
    return true;
  } catch {
    return false;
  }
}

export function getSuggestedTimeZones(): string[] {
  const supported = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : [];
  const preferred = ["America/New_York", "Europe/London", "Australia/Sydney", "Asia/Shanghai"];
  const merged = [...preferred, ...supported];
  return Array.from(new Set(merged)).filter(isSupportedTimeZone);
}
