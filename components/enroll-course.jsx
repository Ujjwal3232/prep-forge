"use client"
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { createCheckoutSession } from '@/app/actions/stripe';

const EnrollCourse = ({ asLink }) => {

const formAction = async(data) => {
        const { url } = await createCheckoutSession(data);
        window.location.assign(url);
    }

  return (
    <>
      <form action={formAction} >
        {asLink ? (
          <Button
            type="submit"
            variant="ghost"
            className="text-xs text-indigo-400 hover:text-indigo-500 hover:bg-slate-900 h-7 gap-1 border border-slate-800"
          >
            Enroll
            <ArrowRight className="w-3" />
          </Button>
        ) : (
          <Button
            type="submit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-indigo-400 hover:bg-indigo-500 text-slate-950 border border-slate-800",
            )}
          >
            Enroll Now
          </Button>
        )}
      </form>
    </>
  );
};

export default EnrollCourse;
