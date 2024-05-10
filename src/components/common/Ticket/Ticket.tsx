import { Box, BoxProps } from "@mantine/core";

import classes from "./Ticket.module.css";

interface Props extends React.PropsWithChildren<BoxProps> {}

export const Ticket = ({ children, ...rest }: Props) => {
  return (
    <Box {...rest}>
      <Box
        fz={"xl"}
        fw={700}
        c="white"
        py={"xs"}
        px={"sm"}
        pr={"lg"}
        pos={"absolute"}
        className={classes.ticket}
      >
        {children}
      </Box>
      <Box pos={"absolute"} className={classes["ticket-tip"]} />
    </Box>
  );
};
