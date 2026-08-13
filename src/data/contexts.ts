import { copy } from "@/content/copy";
import type { ReflectionContext } from "@/lib/xiao-liu-ren/types";

export const reflectionContexts = Object.entries(copy.contexts).map(([id, value]) => ({
  id: id as ReflectionContext,
  label: value.label,
  description: value.description,
}));
