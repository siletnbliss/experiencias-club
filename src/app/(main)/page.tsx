import { LandingBanner2 } from "@/components/landing/banner/Banner2";
import { CustomLandingBanner } from "@/components/landing/banner/CustomBanner";
import { ReastaurantSection } from "@/components/landing/restaurant/Section";
import { Stack } from "@mantine/core";
import { NewsletterCard } from "../../components/landing/newsletter/Card";
import { BenefitsList } from "@/components/landing/benefits/List";
import { OfferSection } from "@/components/landing/offer/Section";

export default function Home() {
  return (
    <Stack my="4rem" className="landing-container">
      <LandingBanner2 />
      <BenefitsList />
      <OfferSection />
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
