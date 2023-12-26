import { MyButton } from "@/components/common/Button";
import { Divider, Group } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons-react";
import React from "react";
import { SearchBar } from "./search/SearchBar";
import Link from "next/link";

interface Props {}

export function HeaderActions({}: Props) {
  return (
    <Group>
      <Link href={"/auth"}>
        <MyButton size="md" leftSection={<IconUserPlus />}>
          {" "}
          Sign In
        </MyButton>
      </Link>
      <Divider mx="md" orientation="vertical" />
      <SearchBar marginTop={"15vh"} />
    </Group>
  );
}
