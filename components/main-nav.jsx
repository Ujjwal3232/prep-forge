"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileNav from "./mobile-nav";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const MainNav = ({ items, children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* LEFT SIDE */}
      <div className="flex gap-6 lg:gap-10">
        <Link href="/">
          <Logo />
        </Link>

        {items?.length ? (
          <nav className="hidden gap-6 lg:flex">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disable ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium text-slate-300 transition-colors hover:text-indigo-400 sm:text-sm",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>

      {/* RIGHT SIDE */}
      <nav className="flex items-center gap-3">
        <div className="items-center gap-3 hidden lg:flex">
          {/* LOGIN */}
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "sm" }),
              "px-4 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-indigo-400",
            )}
          >
            Login
          </Link>

          {/* REGISTER DROPDOWN (PROPER FIX) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-1 rounded-md border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition text-sm font-medium">
                Register
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 mt-4 bg-slate-900 border border-slate-800 text-slate-300"
            >
              <DropdownMenuItem className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400">
                <Link href="/register/student">Student</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400">
                <Link href="/register/instructor">Instructor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* AVATAR DROPDOWN */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <Avatar className="h-16 w-16 border border-indigo-500/30 hover:border-indigo-400 transition shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                <AvatarImage
                  src="/assets/images/cropped_circle_image.png"
                  alt="PrepForge User"
                />
                <AvatarFallback className="bg-slate-800 text-slate-300">
                  CN
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 mt-4 bg-slate-900 border border-slate-800 text-slate-300"
          >
            <DropdownMenuItem
              className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400"
              asChild
            >
              <Link href="/account">Profile</Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400"
              asChild
            >
              <Link href="/account/enrolled-courses">My Courses</Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400"
              asChild
            >
              <Link href="/testimonials">Testimonials &amp; Certificates</Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400"
              asChild
            >
              <Link href="/logout">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </nav>
    </>
  );
};

export default MainNav;
