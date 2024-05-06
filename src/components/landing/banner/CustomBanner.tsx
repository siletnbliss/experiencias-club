import { Box, Text, Tooltip } from "@mantine/core";
import classes from "./CustomBanner.module.css";

import burgerImg from "@/../public/landing/burger-3d.webp";
import Image from "next/image";

const Offer = () => {
  return (
    <Box w={"14rem"}>
      <Tooltip
        withArrow
        color="red.4"
        label="Up to 30% OFF"
        opened
        w={"14rem"}
        position="bottom"
        offset={-5}
        arrowSize={15}
        classNames={{ tooltip: classes.tooltip }}
        arrowRadius={5}
      >
        <Text lh={"18px"} c={"red.4"} fw={"bold"} fz={"2.5rem"}>
          The *best*{" "}
          <Text fw={"bold"} component="span" fz={"2rem"}>
            hamburgers{" "}
          </Text>
        </Text>
      </Tooltip>
    </Box>
  );
};

export const CustomLandingBanner = () => {
  return (
    <Box
      display={"flex"}
      pos={"relative"}
      className="flex-col items-center"
      w={"100%"}
    >
      <Box className="self-end" pb="xs" mr={"xl"}>
        <Offer />
      </Box>
      <Image
        src={burgerImg}
        alt="burger"
        className="absolute -bottom-5 z-10  max-w-[75%] w-96  lg:w-[28rem]  h-auto"
      />
      <Box
        className="items-center justify-center"
        display={"flex"}
        mt={"3.75rem"}
        bg={"red.4"}
        w={"100%"}
        mih={"10rem"}
        h={"13vw"}
      >
        <Text
          pos={"absolute"}
          mx={"auto"}
          my={"auto"}
          className={classes.title}
          fw={"bolder"}
          c={"red.2"}
        >
          HAMBURGERS
        </Text>
      </Box>
    </Box>
  );
};
