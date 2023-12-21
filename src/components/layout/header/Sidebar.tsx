import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { NavList } from "./NavList";

export default function Sidebar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer size="100%" opened={opened} onClose={close} position="right">
        <NavList />
      </Drawer>
      <Burger opened={opened} onClick={open} />
    </>
  );
}
