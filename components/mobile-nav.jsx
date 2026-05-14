import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

import { X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useLockBody } from "@/hooks/use-lock-body";
import Link from "next/link";
import { useSession , signOut } from 'next-auth/react';

const MobileNav = ({ items, children }) => {
   useLockBody(); 

    const {data:session} = useSession();
    const [loginSession, setLoginSession] = useState(null);
    useEffect(() => {
        console.log("Test information");
        setLoginSession(session);
    },[session]);

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-900",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-slate-900/80 backdrop-blur p-4 text-pink-100 shadow-md border border-purple-700">
        <nav className="grid grid-flow-row auto-rows-auto text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disable ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium text-pink-200 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:no-underline",
                item.disable && "cursor-not-allowed opacity-60",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {!loginSession && (
        <div className="items-center gap-3 flex lg:hidden">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "sm" }),
              "px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:opacity-90"
            )}
          >
            Login
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="border border-purple-500 text-pink-200 px-3 py-1.5 rounded-md text-sm hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
            >
              Register
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-4 bg-slate-900 text-pink-100 border border-purple-700" align="end">
              <DropdownMenuItem className="cursor-pointer hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
                <Link href="/register/student">Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
                <Link href="/register/instructor">Instructor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        )}

      </div>
    </div>
  );
};

export default MobileNav;