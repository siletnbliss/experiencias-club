"use client";
import { Center, Divider, Group, Paper } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconUserPlus } from "@tabler/icons-react";
import { SearchBar } from "./SearchBar";
import { Logo } from "@/components/common/Logo";
import { MyButton } from "@/components/common/Button";
import Sidebar from "./Sidebar";
import { NavList } from "./NavList";
import { HeaderActions } from "./Actions";

export function Header() {
  return (
    <Center className="md:mx-10 ">
      <Paper
        shadow="xl"
        radius="lg"
        display="flex"
        className="max-w-screen-2xl w-full py-5 pt-12 md:px-4 px-8 flex items-center flex-row md:justify-evenly flex-wrap justify-between"
      >
        <Link href={"/"} className="sm:mb-0 mb-5">
          <Logo />
        </Link>
        <div className="hidden md:flex">
          <NavList />
        </div>
        <div className="hidden md:flex">
          <HeaderActions />
        </div>
        <div className="flex md:hidden">
          <Sidebar />
        </div>
      </Paper>
    </Center>
  );
}
