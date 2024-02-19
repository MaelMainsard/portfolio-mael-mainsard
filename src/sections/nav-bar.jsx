import React, { useState, useEffect } from 'react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button,Image} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { LangPicker } from "../components/LangPicker"
import {ThemeSwitcher} from "../components/ThemeToggle"
import LinkedinLogo from '../assets/in.png';

export const NavBar = () => {

  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    t("navbar.home"),
    t("navbar.skills"),
    t("navbar.projects"),
    t("navbar.reviews"),
    t("navbar.contact"),
  ];

  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <img src="/Logo.png" className="w-5 mr-2"/>
          <p className="font-bold text-inherit">Maël Mainsard</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <img src="/Logo.png" className="w-5 mr-2"/>
          <p className="font-bold text-inherit">Maël Mainsard</p>
        </NavbarBrand>


        <NavbarItem isActive={scrollY < 500} >
          <Link href="#" aria-current="page" color={scrollY < 500 ? `warning` : 'foreground'}>
            {t('navbar.home')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={scrollY > 500 && scrollY < 1050} >
          <Link href="#skills" color={scrollY > 500 && scrollY < 1050 ? `warning` : 'foreground'}>
            {t('navbar.skills')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={scrollY > 1050 && scrollY < 1532} >
          <Link href="#projects" color={scrollY > 1050 && scrollY < 1532 ? `warning` : 'foreground'}>
            {t('navbar.projects')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={scrollY > 1532 && scrollY < 1950} >
          <Link href="#reviews" color={scrollY > 1532 && scrollY < 1950 ? `warning` : 'foreground'} >
            {t('navbar.reviews')}
          </Link>
        </NavbarItem>



      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="https://www.linkedin.com/in/maël-mainsard-8a94191b8/" target='_blank'>
            <Image width={40} alt="linkedin logo" src={LinkedinLogo} className="cursor-pointer"/>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="#contact">
            <Button radius="md" variant="bordered">
              {t('navbar.contact')}
            </Button>
          </Link>
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
