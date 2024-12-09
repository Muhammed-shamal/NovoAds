"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
// import Link from "next/link.js";
import { AcmeLogo } from "./AcmeLogo.jsx";
import ThemeChanger from "../themChanger/toggleSwitch.jsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  Activity,
  Flash,
  Lock,
  Scale,
  Server,
  TagUser,
} from "../icons/icon.js";

export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isActive = (path) => pathname === path; //here this will return true / false;

  const color =
    theme == "dark"
      ? "text-secondary border-b-2 border-secondary"
      : "text-primary border-b-2 border-primary";

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar shouldHideOnScroll className="dark:bg-black font-medium">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">NovoAds</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className={` dark:text-tertiary ${
              isActive("/") ? color : "text-secondary"
            }`}
            //color={isActive("/") ? "tertiary" : "primary"}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className={`dark:text-tertiary  ${
              isActive("/about") ? color : "text-secondary"
            }`}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About us
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Services"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {/* <DropdownItem
              key="software-development"
              textValue="Software Development"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              <Link href="/services/software-development">
                Software Development
              </Link>
            </DropdownItem> */}

            <DropdownItem
              key="web-development"
              textValue="Web Development"
              description="We scale apps to meet user demand, automatically, based on load."
              startContent={icons.scale}
            >
              <Link href="/services/web-development">Web Development</Link>
            </DropdownItem>

            <DropdownItem
              key="mobile-development"
              textValue="Mobile App Development"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              <Link href="/services/app-development">
                Mobile App Development
              </Link>
            </DropdownItem>

            <DropdownItem
              key="digital-marketing"
              textValue="Digital Marketing"
              description="Innovative digital marketing strategies to grow your brand."
              startContent={icons.flash}
            >
              <Link href="/services/digital-marketing">Digital Marketing</Link>
            </DropdownItem>

            <DropdownItem
              key="graphic-design"
              textValue="Graphic Design"
              description="Creative graphic design solutions to elevate your visual presence."
              startContent={icons.server}
            >
              <Link href="/services/graphic-design">Graphic Design</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            href="/contact"
            className={` dark:text-tertiary  ${
              isActive("/contact") ? color : "text-secondary"
            }`}
            //color={isActive("/contact") ? "primary" : "foreground"}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeChanger />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
