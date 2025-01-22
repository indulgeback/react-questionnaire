import React from "react";
import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import ShareButton from "@/components/shareButton";
import { ThemeSwitch } from "@/components/themeSwitch";
import { GithubIcon, Logo } from "@/components/icons";
import { Tooltip } from "@heroui/tooltip";
export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">XM_questionnaire</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-3">
          <Tooltip content="GitHub" showArrow={true}>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
          </Tooltip>
          <ShareButton />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ShareButton />
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
