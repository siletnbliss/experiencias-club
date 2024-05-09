import { OffersList } from "@/components/offer/card/List";
import { Title } from "@mantine/core";
import { data } from "./data";

export const OfferSection = () => {
  return (
    <div>
      <Title maw={"700px"} fz={{ xs: "2rem", sm: "3rem" }} mb="xl" mx={"auto"}>
        Today&apos;s extra special offers, perfect to share and enjoy.
      </Title>
      <OffersList offers={data} />
    </div>
  );
};
