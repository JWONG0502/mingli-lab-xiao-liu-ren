import ToolClient from "@/components/ToolClient";
import type { Metadata } from "next";
import ToolClient from "@/components/ToolClient";

export const metadata: Metadata = {
  title: "Xiao Liu Ren Tool | Online Time-Based Reflection Calculator",
  description:
    "Use the Xiao Liu Ren tool to calculate a six-palace result from lunar date, Chinese hour, and time zone for personal reflection.",
};

export default function ToolPage() {
  return <ToolClient />;
}
