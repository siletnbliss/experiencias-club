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

export function Header() {
  return (
    <Center className="md:mx-10 ">
      <Paper
        shadow="xl"
        radius="lg"
        display="flex"
        className="max-w-screen-2xl w-full py-5 pt-12 px-4 flex items-center flex-row justify-evenly flex-wrap"
      >
        <Link href={"/"} className="sm:mb-0 mb-5">
          <Logo />
        </Link>
        <div className="hidden md:flex">
          <NavList />
        </div>

        <Group>
          <MyButton size="md" leftSection={<IconUserPlus />}>
            {" "}
            Sign In
          </MyButton>
          <Divider mx="md" orientation="vertical" />
          <SearchBar />
        </Group>
        <div className="flex md:hidden">
          <Sidebar />
        </div>
      </Paper>
    </Center>
  );
}
