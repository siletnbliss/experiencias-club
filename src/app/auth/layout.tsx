import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box className="max-w-screen-xl min-h-screen w-full mx-auto   ">
      {children}
    </Box>
  );
}
