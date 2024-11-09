"use client";

import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../constants";
import { Button } from "../ui/button";
import { SheetTrigger, SheetContent, SheetClose, Sheet } from "../ui/sheet";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          alt="menu"
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            alt="DevQuery"
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Dev<span className="text-primary-500">Query</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-10 w-full rounded-lg border-none px-4 py-3 shadow-none outline-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10 w-full rounded-lg border-none px-4 py-3 shadow-none outline-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map(({ label, route, imgURL }) => {
        const isActive =
          (pathname.includes(route) && route.length > 1) || pathname === route;
        return (
          <SheetClose key={label} asChild>
            <Link
              href={route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center gap-4 bg-transparent p-4`}
            >
              <Image
                alt={label}
                width={20}
                height={20}
                src={imgURL}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export default MobileNavbar;
