/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// nextui
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";

// icons
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  return (
    <div className="flex w-full justify-center">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="flex w-full lg:w-8/12  justify-between"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>


        <NavbarContent className="hidden sm:flex">
          <NavbarBrand>
            <Link href="https://portofolio-andikarna.vercel.app" className="font-bold text-inherit text-2xl cursor-pointer">iBlog</Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex " justify="center">
          <NavbarItem className="space-x-2">
            <Link color="foreground" href='/' className={`link py-1 px-3 rounded-lg bg-gray-100 ${pathname === '/' ? 'active' : ''} `}>
              <BiHomeAlt2 className="mr-2" />
              Home
            </Link>
            <Link color="foreground" href='/user' className={`link py-1 px-3 rounded-lg bg-gray-100 ${pathname === '/user' ? 'active' : ''} `}>
              <AiOutlineUser className="mr-2" />
              User
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Image
              src="/andi.png"
              width={20}
              height={20}
              alt="andikarna"
              className="w-full h-full rounded-full"
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem className="flex flex-col space-y-3">
            <NavbarBrand className="flex justify-center">
              <Link href="https://portofolio-andikarna.vercel.app" className="font-bold text-inherit text-3xl cursor-pointer">iBlog</Link>
            </NavbarBrand>
            <Link color="foreground" href='/' className={`link py-1 px-3 rounded-lg bg-gray-100 ${pathname === '/' ? 'active' : ''} `}>
              <BiHomeAlt2 className="mr-2" />
              Home
            </Link>
            <Link color="foreground" href='/user' className={`link py-1 px-3 rounded-lg bg-gray-100 ${pathname === '/user' ? 'active' : ''} `}>
              <AiOutlineUser className="mr-2" />
              User
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
