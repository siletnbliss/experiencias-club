import { Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

export function SearchBar() {
  return (
    <Button
      px={0}
      variant="transparent"
      color="dark"
      leftSection={<IconSearch />}
    >
      Search
    </Button>
  );
}
