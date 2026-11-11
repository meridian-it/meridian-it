"use client";

import GradientASCII from "@/components/GradientASCII";
import { useIsDark } from "./theme";

const LIGHT_COLORS = ["#1e3fd8", "#38bdf8", "#a5d8ff", "#f6f8ff"];
const DARK_COLORS = ["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"];

export function HeroBackground() {
  const dark = useIsDark();
  return (
    <GradientASCII
      shape="horizon"
      lightMode={!dark}
      colors={dark ? DARK_COLORS : LIGHT_COLORS}
      cellSize={16}
      glow={dark ? 0.25 : 0.2}
      speed={0.7}
      clickEffect="wave"
    />
  );
}
