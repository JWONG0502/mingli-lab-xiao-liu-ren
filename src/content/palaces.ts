import palaceContent from "./palace-content.json";
import type { PalaceContent, PalaceId } from "@/lib/xiao-liu-ren/types";

export const palaces = palaceContent.palaces as PalaceContent[];

export function getPalace(id: PalaceId): PalaceContent {
  const palace = palaces.find((item) => item.id === id);
  if (!palace) throw new Error(`Unknown palace: ${id}`);
  return palace;
}

export function formatPalaceTerm(palace: PalaceContent): string {
  return `${palace.english}\n${palace.chinese} · ${palace.pinyin}`;
}
