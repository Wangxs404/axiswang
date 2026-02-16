import type { Metadata } from "next";
import DiaryApp from "@/components/diary/diary-app";

export const metadata: Metadata = {
  title: "Diary | Axis Wang",
  description: "My personal diary.",
};

export default function DiaryPage() {
  return <DiaryApp />;
}
