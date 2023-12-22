import { Box, Text, Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { Logo } from "../common/Logo";
import Link from "next/link";
import classes from "./Wrapper.module.css";
import Image, { ImageProps, StaticImageData } from "next/image";
import bgVectors from "@/assets/auth/vectors.png";
import dotsImg from "@/assets/auth/dots.png";

interface Props {
  title: string;
  contentPosition?: "right" | "left";
  vector: {
    src: StaticImageData;
    props?: Omit<ImageProps, "src" | "alt">;
  };
}

export function AuthWrapper({
  title,
  children,
  contentPosition = "left",
  vector,
}: PropsWithChildren<Props>) {
  const { className: vectorClassname, ...vectorRest } = vector.props || {};
  return (
    <Box
      p={24}
      className={` min-h-screen w-full flex flex-1 justify-center ${
        contentPosition === "right" ? "flex-row-reverse" : "flex-row"
      }
        `}
    >
      <Box
        pt={60}
        w={"100%"}
        h={"100%"}
        className="flex h-full  flex-col items-center flex-1  "
      >
        <Link href={"/"}>
          <Logo />
        </Link>
        <Title size="h2" mt={50}>
          {title}
        </Title>
        {children}
        <Box className="text-gray-500 text-center" mt="auto" pt={"xl"} mb="xl">
          <Text c="inherit" fz="sm">
            © 2023 Experiencias Club. All rights reserved.
          </Text>
        </Box>
      </Box>
      <Box
        className={`${classes.background} h-full hidden relative md:flex rounded-2xl flex-1`}
        style={{}}
      >
        <Image
          className="absolute bottom-0 left-0  object-contain h-3/4 w-auto "
          src={bgVectors}
          alt="vectors"
        />
        <Box
          c="white"
          className={`${classes.overlay} rounded-2xl border-white border`}
        >
          <Box p={40}>
            <Title mb={"xl"} size="h1">
              Start to enjoy the best benefits!
            </Title>
            <Text size="xl">Sign in to continue</Text>
          </Box>
          <Image
            className={`w-11/12 mt-auto mb-5 object-contain ${
              vectorClassname || ""
            }`}
            {...vectorRest}
            src={vector.src}
            alt="vector"
          />
          <Image src={dotsImg} height={16} className="mb-9 ml-6" alt="dots" />
        </Box>
      </Box>
    </Box>
  );
}
