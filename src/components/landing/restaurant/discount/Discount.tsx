import { Anchor, Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconDiscount2, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";

import classes from "./Discount.module.css";

interface Props {
  location: string;
  discount: number;
}

export const RestaurantDiscount = ({ location, discount }: Props) => {
  return (
    <SimpleGrid h={"100%"} spacing={0} cols={{ xs: 1, sm: 2 }}>
      <Card className={classes.card1} pb={"xl"} bg={"green.4"}>
        <Stack align="center" c={"white"}>
          <IconMapPin size={"4.5rem"} color="white" />
          <Title fz={{ xs: "2rem", lg: "2.5rem" }}>{location}</Title>
          <Anchor underline="always" c={"white"} component={Link} href={"/"}>
            See location
          </Anchor>
        </Stack>
      </Card>
      <Card className={classes.card2} pb={"xl"} bg={"yellow.3"}>
        <Stack h={"100%"} align="center" justify="space-between">
          <IconDiscount2 size={"4.5rem"} />
          <Text ta={"center"} lh={"3rem"} fz={"3rem"} fw={700}>
            {discount}% OFF
          </Text>
        </Stack>
      </Card>
    </SimpleGrid>
  );
};
