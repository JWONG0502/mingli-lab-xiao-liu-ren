import { PALACE_IDS, type PalaceId, type XiaoLiuRenInput, type XiaoLiuRenResult } from "./types";

function palaceAt(index: number): PalaceId {
  const normalized = ((index % PALACE_IDS.length) + PALACE_IDS.length) % PALACE_IDS.length;
  return PALACE_IDS[normalized];
}

export function calculateXiaoLiuRen(input: XiaoLiuRenInput): XiaoLiuRenResult {
  if (!Number.isInteger(input.lunarMonth) || input.lunarMonth < 1 || input.lunarMonth > 12) {
    throw new Error("lunarMonth must be an integer from 1 to 12.");
  }
  if (!Number.isInteger(input.lunarDay) || input.lunarDay < 1 || input.lunarDay > 30) {
    throw new Error("lunarDay must be an integer from 1 to 30.");
  }
  if (!Number.isInteger(input.hourNumber) || input.hourNumber < 1 || input.hourNumber > 12) {
    throw new Error("hourNumber must be an integer from 1 to 12.");
  }

  const monthIndex = (input.lunarMonth - 1) % 6;
  const dayIndex = (monthIndex + input.lunarDay - 1) % 6;
  const hourIndex = (dayIndex + input.hourNumber - 1) % 6;
  const checkIndex = (input.lunarMonth + input.lunarDay + input.hourNumber - 3) % 6;

  if (hourIndex !== checkIndex) {
    throw new Error("Xiao Liu Ren formula check failed.");
  }

  const monthPalace = palaceAt(monthIndex);
  const dayPalace = palaceAt(dayIndex);
  const hourPalace = palaceAt(hourIndex);

  return {
    monthPalace,
    dayPalace,
    hourPalace,
    finalPalace: hourPalace,
    path: [monthPalace, dayPalace, hourPalace],
  };
}
