import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header/Header";
import React, { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      {" "}
      <Header />
      <div className="px-5">{children}</div>
      <Footer />
    </>
  );
}
