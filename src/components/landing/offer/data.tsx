import { Offer } from "@/models/offer";

import img1 from "@/assets/landing/offers/offer1.png";
import img2 from "@/assets/landing/offers/offer2.png";
import img3 from "@/assets/landing/offers/offer3.png";

export const data: Offer[] = [
  {
    description: "Enjoy today's premium lunch option...",
    title: "Executive meal for 2, with 2 proteins and 3 sides",
    location: "Caracas",
    price: 24.99,
    discount: 30,
    img: img1,
  },
  {
    description: "Enjoy today's premium lunch option...",
    title: "Texas Smash burger, animal style fries and drink",
    location: "Caracas",
    price: 15.99,
    discount: 20,
    img: img2,
  },
  {
    description: "Enjoy today's premium lunch option...",
    title: "Grade A beef cuts with parsley and olive oil",
    location: "Caracas",
    price: 11.99,
    discount: 10,
    img: img3,
  },
];
