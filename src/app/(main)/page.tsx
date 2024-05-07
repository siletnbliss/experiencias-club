import { LandingBanner2 } from "@/components/landing/banner/Banner2";
import { CustomLandingBanner } from "@/components/landing/banner/CustomBanner";
import { ReastaurantSection } from "@/components/landing/restaurant/Section";
import { Space, Stack } from "@mantine/core";
import { NewsletterCard } from "../../components/landing/newsletter/Card";
import { BenefitsList } from "@/components/landing/benefits/List";

export default function Home() {
  return (
    <Stack my="4rem" gap="6rem">
      <LandingBanner2 />
      <BenefitsList />
      <CustomLandingBanner />
      <ReastaurantSection
        restaurant={{
          title: "La Milanesa Restaurante",
          rating: 4,
          img: "/landing/restaurant.png",
        }}
        offer={{
          title: "Cheeseburger",
          price: 5.99,
          img: "/landing/food.png",
          location: "Caracas",
          discount: 20,
        }}
      />
      <NewsletterCard />
    </Stack>
  );
}
