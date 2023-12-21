import React from "react";
import logo from "../../../public/logo.png";

import Image from "next/image";

interface Props {
  size?: number;
}

export function Logo({ size }: Props) {
  return <Image src={logo} alt="logo" height={size} />;
}
