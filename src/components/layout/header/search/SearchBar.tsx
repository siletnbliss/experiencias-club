"use client";
import { Box, Button, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import classes from "./Searchbar.module.css";
export interface SearchBarProps {
  marginTop: string | number;
}

export function SearchBar({ marginTop }: SearchBarProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        styles={{
          content: {
            borderRadius: "12px",
            backgroundColor: "#0000004D",
          },
        }}
        yOffset={marginTop}
        overlayProps={{ backgroundOpacity: 0 }}
        size="lg"
        opened={opened}
        withCloseButton={false}
        onClose={close}
      >
        <Box>
          <TextInput
            placeholder="Search for restaurants and other services"
            leftSection={<IconSearch />}
            radius={"xl"}
            className={classes.input}
          />
        </Box>
      </Modal>
      <Button
        px={0}
        variant="transparent"
        color="dark"
        leftSection={<IconSearch />}
        onClick={open}
      >
        Search
      </Button>
    </>
  );
}
