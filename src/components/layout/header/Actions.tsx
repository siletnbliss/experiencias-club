import { MyButton } from "@/components/common/Button";
import { Divider, Group } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons-react";
import React from "react";
import { SearchBar } from "./SearchBar";

export function HeaderActions() {
  return (
    <Group>
      <MyButton size="md" leftSection={<IconUserPlus />}>
        {" "}
        Sign In
      </MyButton>
      <Divider mx="md" orientation="vertical" />
      <SearchBar />
    </Group>
  );
}
