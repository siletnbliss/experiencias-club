import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@mantine/core";
interface Props extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export function MyButton({ ...rest }: PropsWithChildren<Props>) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { ease: "circOut", type: "spring" },
      }}
    >
      <Button {...rest} />
    </motion.div>
  );
}
