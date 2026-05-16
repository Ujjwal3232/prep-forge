import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import Menu from "./account-menu";

const AccountSidebar = () => {
  return (
    <div className="lg:w-1/4 md:px-3">
      <div className="relative">
        <div className="p-6 rounded-md shadow bg-slate-900 hover:bg-slate-800 transition border border-slate-800">
          <div className="profile-pic text-center mb-5">
            <input
              id="pro-img"
              name="profile-image"
              type="file"
              className="hidden"
            />

            <div>
              <div className="relative size-28 mx-auto">
                <Image
                  src="/assets/images/profile.jpg"
                  className="rounded-full shadow ring-4 ring-slate-800"
                  id="profile-banner"
                  alt="profile-image"
                  width={112}
                  height={112}
                />

                <label
                  className="absolute inset-0 cursor-pointer"
                  htmlFor="pro-img"
                />
              </div>

              <div className="mt-4">
                <h5 className="text-lg font-semibold text-slate-100">
                  Jenny Jimenez
                </h5>

                <p className="text-slate-400">jennyhot@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
