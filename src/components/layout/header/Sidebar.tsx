import { Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { NavList } from "./NavList";
import { HeaderActions } from "./Actions";

export default function Sidebar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer size="100%" opened={opened} onClose={close} position="right">
        <Stack align="center" gap={60}>
          <HeaderActions />
          <NavList />
        </Stack>
      </Drawer>
      <Burger opened={opened} onClick={open} />
    </>
  );
}
