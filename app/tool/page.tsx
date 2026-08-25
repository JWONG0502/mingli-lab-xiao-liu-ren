import ToolClient from "@/components/ToolClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xiao Liu Ren Lab | Online Xiao Liu Ren Tool and Guide",
  description: "Use Xiao Liu Ren as a simple reflection tool with six palaces, time-based calculation, and practical interpretation guides.",
};

export default function ToolPage() {
  return <ToolClient />;
}
