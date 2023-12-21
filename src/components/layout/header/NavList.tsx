"use client";
import {
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { CSSProperties } from "react";

interface SimpleRoute {
  name: string;
  url: string;
}

interface NestedRoute {
  name: string;
  routes: SimpleRoute[];
}

type Route = SimpleRoute | NestedRoute;

export const routes: Route[] = [
  {
    name: "Home",
    url: "/",
  },
  { name: "Daily Offers", url: "/offers" },
  { name: "Benefits", url: "/benefits" },
  { name: "Plans", url: "/plans" },
  {
    name: "Categories",
    routes: [
      {
        name: "Gourmet",
        url: "/categories/gourmet",
      },
    ],
  },
];

interface ItemProps {
  route: Route;
  selected?: boolean;
}

const highlightStyle: CSSProperties = {
  borderBottomWidth: 2,
  borderBottomColor: "var(--mantine-primary-color-filled)",
};

export const HeaderItem = ({ route, selected }: ItemProps) => {
  return (
    <motion.div
      whileHover={{
        ...(!selected && {
          borderBottomColor: highlightStyle.borderBottomColor,
          borderBottomWidth: highlightStyle.borderBottomWidth,
        }),
        transition: { type: "tween", ease: "backOut" },
      }}
      style={{ paddingBottom: "0.25rem", ...(!!selected && highlightStyle) }}
    >
      {"routes" in route ? (
        <Menu trigger="hover">
          <MenuTarget>
            <Group gap={2}>
              {" "}
              <span> {route.name}</span>
              <IconChevronDown size="0.9rem" />
            </Group>
          </MenuTarget>
          <MenuDropdown>
            {route.routes.map((r, i) => (
              <MenuItem className="cursor-pointer" key={i}>
                <Link href={r.url}>
                  <MenuLabel>{r.name}</MenuLabel>
                </Link>
              </MenuItem>
            ))}
          </MenuDropdown>
        </Menu>
      ) : (
        <Link href={route.url}>{route.name}</Link>
      )}
    </motion.div>
  );
};

export function NavList() {
  const pathname = usePathname();
  return (
    <div className="flex md:flex-row flex-col gap-10 items-center">
      {routes.map((route, index) => (
        <HeaderItem
          route={route}
          key={index}
          selected={"url" in route ? pathname === route.url : false}
        />
      ))}
    </div>
  );
}
