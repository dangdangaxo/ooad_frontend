"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo.png";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { SearchIcon } from "@/public/data/icons";
import LangDropdown from "@/components/LangDropdown";
import NotificationDropdown from "@/components/NotificationDropdown";
import ProfileDropdown from "@/components/ProfileDropdown";
import { MouseEvent, useState } from "react";
import AnimateHeight from "react-animate-height";
import { sidenavData } from "@/public/data/adminsidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [opened, setOpened] = useState<null | number>(null);
  const path = usePathname();
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };
  return (
    <>
      <section className="bg-white">
        <div
          className={`relative ${
            navOpen &&
            "after:bg-black after:bg-opacity-70 after:absolute after:inset-0 after:z-10 after:duration-300 overflow-y-hidden"
          }`}
          onClick={() => setNavOpen(false)}>
          <header className="px-4 md:px-8 py-3 lg:py-6 flex gap-2 justify-between self-start">
            <button
              onClick={handleOpen}
              className="lg:hidden order-2 select-none">
              <Bars3Icon className="w-8 h-8" />
            </button>
            <form className="rounded-3xl hidden md:flex bg-[var(--bg-1)] xl:w-[332px] px-3 lg:px-4 py-2 justify-between border items-center">
              <input
                type="text"
                className="focus:outline-none bg-[var(--bg-1)]"
                placeholder="Search"
              />
              <SearchIcon />
            </form>
            <div className="flex gap-2 items-center order-1 lg:order-2">
              <LangDropdown />
              <NotificationDropdown />
              <ProfileDropdown />
            </div>
          </header>
          <section>{children}</section>
        </div>
      </section>
    </>
  );
}
