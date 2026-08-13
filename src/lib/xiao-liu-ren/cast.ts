import { convertCivilDateToLunar } from "../time/lunar";
import { getChineseHour } from "../time/chinese-hour";
import { isSupportedTimeZone } from "../time/timezone";
import { calculateXiaoLiuRen } from "./calculate";
import type { XiaoLiuRenResult } from "./types";

export type CastInput = {
  date: string;
  time: string;
  timeZone: string;
};

export type CastResult = XiaoLiuRenResult & {
  date: string;
  time: string;
  timeZone: string;
  lunarMonth: number;
  lunarDay: number;
  isLeapMonth: boolean;
  hourNumber: number;
  chineseHourLabel: string;
};

export function castXiaoLiuRen(input: CastInput): CastResult {
  if (!isSupportedTimeZone(input.timeZone)) {
    throw new Error("Unsupported time zone.");
  }

  const lunar = convertCivilDateToLunar(input.date, input.time);
  const hour = getChineseHour(Number(input.time.slice(0, 2)));
  const result = calculateXiaoLiuRen({
    lunarMonth: lunar.lunarMonth,
    lunarDay: lunar.lunarDay,
    hourNumber: hour.number,
  });

  return {
    ...result,
    ...lunar,
    date: input.date,
    time: input.time,
    timeZone: input.timeZone,
    hourNumber: hour.number,
    chineseHourLabel: hour.label,
  };
}
