import { Box, Group, Text } from "@mantine/core";
import React from "react";
import { Logo } from "../common/Logo";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const routes = [
  {
    name: "Home",
    url: "/",
    children: [
      { name: "About us", url: "/about" },
      { name: "Special offers", url: "/offers" },
      { name: "Services", url: "/services" },
      { name: "Contact us", url: "/contact" },
    ],
  },
  {
    name: "Help",
    url: "/",
    children: [
      { name: "FAQ", url: "/faq" },
      { name: "Terms & conditions", url: "/terms" },
    ],
  },
];

const socialMedia = [
  { Icon: IconBrandX },
  { Icon: IconBrandInstagram },
  { Icon: IconBrandFacebook },
  { Icon: IconBrandTiktok },
  { Icon: IconBrandYoutube },
];

export function Footer() {
  return (
    <Box mt={100}>
      <Box
        className="rounded-t-3xl flex md:flex-row flex-col flex-wrap justify-between md:items-start items-center"
        bg="#0A3158"
        c="white"
        px={50}
        pt={50}
        pb={80}
      >
        <Box className="text-gray-300 flex flex-col lg:items-start items-center w-full mb-10 lg:mb-0  lg:w-1/4 text-justify ">
          <Logo variant="white" />
          <Text c="inherit" size="sm" mt="lg">
            Universo Bancamiga beneficia a los clientes de Bancamiga a través de
            la alianza entre LoyalFeel RIF: J-31721105-7 y Bancamiga. La
            afiliación al programa podrá ser domiciliada en las tarjetas de
            crédito, débito o cuentas bancarias del cliente.{" "}
          </Text>
        </Box>
        <Box className="md:flex hidden flex-col gap-9">
          {routes.map((route, index) => (
            <Box key={index}>
              <Text fz="xl" mb="lg" fw="700">
                {route.name}
              </Text>
              <Group gap="xl">
                {route.children.map((child, childIndex) => (
                  <Link
                    className="text-gray-300 "
                    href={child.url}
                    key={childIndex}
                  >
                    {child.name}
                  </Link>
                ))}
              </Group>
            </Box>
          ))}
        </Box>
        <Box className="mt-10 md:mt-0">
          <Text className="md:text-left text-center">
            <span className="font-semibold">Universo</span>
            <span>Bancamiga</span>
          </Text>

          <Group mt="lg">
            {socialMedia.map((item, i) => (
              <item.Icon key={i} />
            ))}
          </Group>
        </Box>
      </Box>
      <Box ta="center" my="md">
        Copyright © 2023 Experiencias Club.
      </Box>
    </Box>
  );
}
