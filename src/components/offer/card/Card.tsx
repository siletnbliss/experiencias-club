import { Ticket } from "@/components/common/Ticket/Ticket";
import { Offer } from "@/models/offer";
import { Box, Button, Card, Group, Text, Title } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import { useMemo } from "react";

interface Props {
  offer: Offer;
}

export const OfferCard = ({ offer }: Props) => {
  const discountPrice = useMemo(
    () =>
      (offer.price - (offer.price * (offer.discount ?? 0)) / 100).toFixed(2),
    [offer.price, offer.discount]
  );

  return (
    <Card pos={"relative"} p={0} radius={"10px"} withBorder>
      <Ticket>{offer.discount}% OFF</Ticket>

      <Box h={"15rem"} className="rounded-xl">
        <Image
          src={offer.img}
          alt={offer.title}
          style={{ borderRadius: "25px" }}
          className=" object-cover p-4 h-full "
        />
      </Box>
      <Box p={"lg"}>
        <Title mb={2} lineClamp={2} size={"h4"}>
          {offer.title}
        </Title>
        <Text c={"gray.6"} fw={400} size="sm" lineClamp={1}>
          {offer.description}
        </Text>
        <Group my={"md"} gap={"5px"} c={"darkBlue.9"}>
          <IconMapPin />
          <Text fw={400}>{offer.location}</Text>
        </Group>
        <Group justify="space-between">
          <Group align="stretch">
            <Box>
              <Text size="sm" c={"gray.6"}>
                Affiliate
              </Text>
              <Text fw={700} size="xl">
                ${discountPrice}
              </Text>
            </Box>
            <Box>
              <Text size="sm" c={"gray.6"}>
                Base
              </Text>
              <Text
                c={"gray.7"}
                style={{ textDecoration: "line-through" }}
                size="lg"
              >
                ${offer.price}
              </Text>
            </Box>
          </Group>
          <Button size="lg">PURCHASE</Button>
        </Group>
      </Box>
    </Card>
  );
};
