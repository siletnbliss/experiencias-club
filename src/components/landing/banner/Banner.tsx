import bannerImg from "@/../public/landing/banner-burgers.png";
import Image from "next/image";

export const LandingBanner = () => {
  return <Image src={bannerImg} alt="banner" />;
};
