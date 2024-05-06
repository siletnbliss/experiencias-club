import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header/Header";
import { Container } from "@mantine/core";
import React, { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      {" "}
      <Header />
      <Container size={"xl"} className="px-5">
        {children}
      </Container>
      <Footer />
    </>
  );
}
