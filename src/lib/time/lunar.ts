import { Solar } from "lunar-typescript";

export type LunarDate = {
  lunarMonth: number;
  lunarDay: number;
  isLeapMonth: boolean;
};

export function convertCivilDateToLunar(date: string, time: string): LunarDate {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  if (![year, month, day, hour, minute].every(Number.isFinite)) {
    throw new Error("Invalid date or time.");
  }

  const lunar = Solar.fromYmdHms(year, month, day, hour, minute, 0).getLunar();
  const rawMonth = lunar.getMonth();

  return {
    lunarMonth: Math.abs(rawMonth),
    lunarDay: lunar.getDay(),
    isLeapMonth: rawMonth < 0,
  };
}
