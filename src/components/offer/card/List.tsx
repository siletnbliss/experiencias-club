import { Offer } from "@/models/offer";
import { SimpleGrid } from "@mantine/core";
import { OfferCard } from "./Card";

interface Props {
  offers: Offer[];
}

export const OffersList = ({ offers }: Props) => {
  return (
    <SimpleGrid spacing={"xl"} cols={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
      {offers.map((offer, i) => (
        <OfferCard key={i} offer={offer} />
      ))}
    </SimpleGrid>
  );
};
