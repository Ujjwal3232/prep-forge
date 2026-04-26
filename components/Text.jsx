"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Text = () => {

  const handleClick = (mode) => {
    mode 
      ? toast.success("Test Success") 
      : toast.error("Test Error");
  };

  return (
    <div className="bg-slate-100 text-black">
      <p>This is the page</p>

      <Button
        className="bg-red-100"
        variant="outline"
        onClick={() => handleClick(true)}
      >
        Click me
      </Button>
    </div>
  );
};

export default Text;