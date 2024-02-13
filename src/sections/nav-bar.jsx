import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button,Image} from "@nextui-org/react";
import {Logo} from "../components/Logo";
import { useTranslation } from "react-i18next";
import { LangPicker } from "../components/LangPicker"
import {ThemeSwitcher} from "../components/ThemeToggle"
import LinkedinLogo from '../assets/in.png';

export const NavBar = () => {

  const { t } = useTranslation();

  const menuItems = [
    t("navbar.home"),
    t("navbar.skills"),
    t("navbar.projects"),
    t("navbar.reviews"),
    t("navbar.contact"),
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Maël Mainsard</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Maël Mainsard</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            {t('navbar.home')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t('navbar.skills')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t('navbar.projects')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t('navbar.reviews')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Image width={40} alt="linkedin logo" src={LinkedinLogo} className="cursor-pointer"/>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button radius="md" variant="bordered">
            {t('navbar.contact')}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <LangPicker/>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0 ? "warning" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
