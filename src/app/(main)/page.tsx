import { Stack } from "@mantine/core";
import { NewsletterCard } from "../../components/landing/newsletter/Card";
import { ReastaurantSection } from "@/components/landing/restaurant/Section";
import { LandingBanner } from "@/components/landing/banner/Banner";
import { CustomLandingBanner } from "@/components/landing/banner/CustomBanner";

export default function Home() {
  return (
    <Stack my="4rem" gap="xl">
      <CustomLandingBanner />
      <LandingBanner />
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
