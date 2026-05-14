"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
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
import { X, Menu } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const MainNav = ({ items, children }) => {
  const { data: session, status } = useSession();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef(null);

  // Don't render until session is loaded
  if (status === "loading") {
    return (
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    );
  }

  const handleNavigation = (href) => {
    router.push(href);
    setShowProfileMenu(false);
  };

  const handleLogout = async () => {
    setShowProfileMenu(false);

    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6 lg:gap-10">
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
                  "flex items-center text-lg font-medium text-slate-300 transition-colors hover:text-indigo-400 sm:text-sm"
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
      <div className="flex items-center gap-3 ml-auto">
        {/* LOGIN + REGISTER */}
        {!session && (
          <div className="items-center gap-3 hidden lg:flex">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "sm" }),
                "px-4 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-indigo-400"
              )}
            >
              Login
            </Link>

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
                <DropdownMenuItem
                  className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400"
                  onClick={() => {
                    router.push("/register/student");
                  }}
                >
                  Student
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="cursor-pointer hover:bg-slate-800 hover:text-indigo-400"
                  onClick={() => {
                    router.push("/register/instructor");
                  }}
                >
                  Instructor
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* AVATAR */}
        {session && (
          <div className="relative flex items-center" ref={dropdownRef}>
            <button
              onClick={() => setShowProfileMenu((prev) => !prev)}
              className="cursor-pointer relative z-40 focus:outline-none"
            >
              <Avatar className="h-12 w-12 border border-indigo-500/30 hover:border-indigo-400 transition shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                <AvatarImage
                  src="/assets/images/cropped_circle_image.png"
                  alt="PrepForge User"
                />
                <AvatarFallback className="bg-slate-800 text-slate-300">
                  CN
                </AvatarFallback>
              </Avatar>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 top-16 w-56 rounded-lg border border-slate-800 bg-slate-900 shadow-lg z-50 overflow-hidden">
                <button
                  onClick={() => handleNavigation("/account")}
                  className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition"
                >
                  Profile
                </button>

                <button
                  onClick={() =>
                    handleNavigation("/account/enrolled-courses")
                  }
                  className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition"
                >
                  My Courses
                </button>

                <button
                  onClick={() => handleNavigation("/testimonials")}
                  className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition"
                >
                  Testimonials & Certificates
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-red-400 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          className="flex items-center justify-center lg:hidden text-slate-300"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  );
};

export default MainNav;