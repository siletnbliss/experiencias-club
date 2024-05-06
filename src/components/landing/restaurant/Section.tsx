import { Box, Grid, GridCol, Image, Title } from "@mantine/core";
import { RestaurantCard } from "./Card";
import { RestaurantOffer } from "./Offer";
import { RestaurantDiscount } from "./discount/Discount";
import { Circle } from "@/components/common/Circle";

interface Props {
  restaurant: {
    title: string;
    rating: number;
    img: string;
  };
  offer: {
    title: string;
    price: number;
    img: string;
    location: string;
    discount: number;
  };
}

const CIRCLE_HEIGHT = "400px";

const CIRCLE_OFFSET = "200px";

const BottomCircle = ({ xs = false }: { xs?: boolean }) => (
  <Circle
    className="-z-10"
    left={"50px"}
    bottom={"-150px"}
    size={CIRCLE_HEIGHT}
    pos={"absolute"}
    hiddenFrom={xs ? "md" : undefined}
    visibleFrom={xs ? "xs" : "md"}
  />
);

export const ReastaurantSection = ({ restaurant, offer }: Props) => {
  return (
    <Box mb={CIRCLE_OFFSET} className="flex flex-col items-center">
      <Title maw={"600px"} fz={{ xs: "2rem", sm: "3rem" }} mb="xl" mx={"auto"}>
        Here's our top selection, today's hottest deal
      </Title>
      <Grid align="stretch" gutter={{ base: "lg", lg: "lg" }}>
        <GridCol span={{ xs: 12, md: 8 }}>
          <RestaurantCard {...restaurant} />
        </GridCol>
        <GridCol pos={"relative"} visibleFrom="md" span={"auto"}>
          <Circle
            className="-z-10"
            left={"75px"}
            top={"-75px"}
            size={200}
            pos={"absolute"}
          />
          <Image
            h={"100%"}
            fit="cover"
            radius={"26px"}
            loading="lazy"
            src={restaurant.img}
            alt={restaurant.title}
          />
        </GridCol>
        <GridCol pos={"relative"} span={{ xs: 12, md: 8 }}>
          <RestaurantOffer {...offer} />
          <BottomCircle />
        </GridCol>
        <GridCol pos={"relative"} span={"auto"}>
          <RestaurantDiscount {...offer} />
          <BottomCircle xs />
        </GridCol>
      </Grid>
    </Box>
  );
};
