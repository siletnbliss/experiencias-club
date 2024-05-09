import { StaticImageData } from "next/image";

export interface Offer {
  discount?: number;
  title: string;
  description: string;
  price: number;
  location: string;
  img: StaticImageData;
}
