import bannerImg from "@/assets/landing/banner-burgers.png";
import Image from "next/image";

export const LandingBanner = () => {
  return <Image src={bannerImg} alt="banner" />;
};
