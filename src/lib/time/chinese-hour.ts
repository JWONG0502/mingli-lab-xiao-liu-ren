export type ChineseHour = {
  id: string;
  label: string;
  number: number;
  rangeLabel: string;
};

export const CHINESE_HOURS: ChineseHour[] = [
  { id: "zi", label: "Zi / 子时", number: 1, rangeLabel: "23:00-00:59" },
  { id: "chou", label: "Chou / 丑时", number: 2, rangeLabel: "01:00-02:59" },
  { id: "yin", label: "Yin / 寅时", number: 3, rangeLabel: "03:00-04:59" },
  { id: "mao", label: "Mao / 卯时", number: 4, rangeLabel: "05:00-06:59" },
  { id: "chen", label: "Chen / 辰时", number: 5, rangeLabel: "07:00-08:59" },
  { id: "si", label: "Si / 巳时", number: 6, rangeLabel: "09:00-10:59" },
  { id: "wu", label: "Wu / 午时", number: 7, rangeLabel: "11:00-12:59" },
  { id: "wei", label: "Wei / 未时", number: 8, rangeLabel: "13:00-14:59" },
  { id: "shen", label: "Shen / 申时", number: 9, rangeLabel: "15:00-16:59" },
  { id: "you", label: "You / 酉时", number: 10, rangeLabel: "17:00-18:59" },
  { id: "xu", label: "Xu / 戌时", number: 11, rangeLabel: "19:00-20:59" },
  { id: "hai", label: "Hai / 亥时", number: 12, rangeLabel: "21:00-22:59" },
];

export function getChineseHour(hour: number): ChineseHour {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new Error("hour must be an integer from 0 to 23.");
  }

  if (hour === 23 || hour === 0) return CHINESE_HOURS[0];
  return CHINESE_HOURS[Math.floor((hour + 1) / 2)];
}
