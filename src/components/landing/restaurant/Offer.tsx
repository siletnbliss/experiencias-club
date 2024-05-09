import { Button, Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconBolt } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: string | StaticImageData;
  title: string;
  price: number;
  background?: string;
}

export const RestaurantOffer = ({
  title,
  price,
  img,
  background = "#C6E7FE",
}: Props) => {
  return (
    <Card bg={background} px={{ xs: "5%", lg: "10%" }}>
      <Group gap={"xl"} justify="space-around">
        <Image loading="lazy" width={268} height={231} src={img} alt={title} />
        <Stack>
          <Group gap={"xs"}>
            <IconBolt />
            <Text fz={"lg"} fw={500}>
              Flash offer
            </Text>
          </Group>
          <Title>{title}</Title>
          <Group gap={"xl"}>
            <Text fw={700} fz={"2rem"}>
              ${price}
            </Text>{" "}
            <Button size="compact-lg" color={"dark"}>
              View offer
            </Button>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};
