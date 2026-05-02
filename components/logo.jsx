import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = ({ className = "" }) => {
  return (
    <div>
      <Image
        className={cn("max-w-[200px]", className)}
        src="/assets/images/plogo.png"
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Logo;