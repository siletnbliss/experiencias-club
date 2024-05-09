import { Box, Grid, GridCol, Title } from "@mantine/core";

import serveImg from "@/../public/landing/benefits/serve.png";
import giftImg from "@/../public/landing/benefits/present.png";
import movieImg from "@/../public/landing/benefits/movies.png";
import discountImg from "@/../public/landing/benefits/discount.png";

import classes from "./List.module.css";

import { BenefitCard } from "./Card";
import { StaticImageData } from "next/image";
import { Circle } from "@/components/common/Circle";

const items: { title: string; img: StaticImageData }[] = [
  {
    title: "Courtesy Menus",
    img: serveImg,
  },
  {
    title: "Special birthday gifts",
    img: giftImg,
  },
  {
    title: "Cinema, big screen and premieres",
    img: movieImg,
  },
  {
    title: "Daily offers up to 50% OFF",
    img: discountImg,
  },
];

export const BenefitsList = () => {
  return (
    <Box>
      <Title
        maw={"700px"}
        fz={{ xs: "2rem", sm: "3rem" }}
        mb="4rem"
        mx={"auto"}
      >
        Take a moment to pause and explore our benefits
      </Title>
      <Grid
        align="stretch"
        justify="center"
        className="relative"
        gutter={{ base: "xs", sm: "xl", md: "4rem" }}
        w={"100%"}
      >
        <Circle size={"6rem"} className={`absolute -left-5 ${classes.green}`} />
        <Circle
          size={"6rem"}
          className={`absolute -right-2 sm:-right-10 bottom-1/2 ${classes.gray}`}
        />

        {items.map((item, i) => (
          <GridCol
            mb={{ base: "4rem", md: "xs" }}
            key={i}
            span={{ xs: 1, sm: 3 }}
          >
            <BenefitCard title={item.title} img={item.img} />
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
};
