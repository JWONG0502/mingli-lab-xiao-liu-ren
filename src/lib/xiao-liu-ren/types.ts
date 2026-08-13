export const PALACE_IDS = ["da_an", "liu_lian", "su_xi", "chi_kou", "xiao_ji", "kong_wang"] as const;

export type PalaceId = (typeof PALACE_IDS)[number];

export type ReflectionContext =
  | "general_reflection"
  | "work_study"
  | "waiting_for_news"
  | "relationship"
  | "travel_movement"
  | "personal_decision";

export type XiaoLiuRenInput = {
  lunarMonth: number;
  lunarDay: number;
  hourNumber: number;
};

export type XiaoLiuRenResult = {
  monthPalace: PalaceId;
  dayPalace: PalaceId;
  hourPalace: PalaceId;
  finalPalace: PalaceId;
  path: PalaceId[];
};

export type PalaceContent = {
  id: PalaceId;
  chinese: string;
  pinyin: string;
  english: string;
  keywords: string[];
  themes: {
    short: string;
    process: string;
  };
  basicMeaning: string;
  positiveReading: string;
  caution: string;
  positions: {
    month: string;
    day: string;
    hour: string;
    final: string;
  };
  contexts: Record<ReflectionContext, string>;
  attentionPoints: string[];
  reflectionQuestions: string[];
  avoidLanguage: string[];
};
