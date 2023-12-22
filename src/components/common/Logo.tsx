import React from "react";
import DefaultLogo from "@/assets/logo.svg";
import WhiteLogo from "@/assets/logo_white.svg";
interface Props {
  size?: number;
  variant?: "default" | "white";
}

export function Logo({ size, variant }: Props) {
  if (variant == "white") return <WhiteLogo />;
  return <DefaultLogo />;
}
