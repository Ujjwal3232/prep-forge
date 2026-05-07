import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import { BookOpen } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <Link key={course.id} href={`/courses/${course.id}`}>
      <div className="group transition overflow-hidden border border-slate-800 rounded-xl p-3 h-full bg-slate-900 hover:border-indigo-500 hover:bg-slate-800">
        
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            src={`/assets/images/courses/${course?.thumbnail}`}
            alt={"course"}
            className="object-cover"
            fill
          />
        </div>

        <div className="flex flex-col pt-2">
          
          <div className="text-lg md:text-base font-medium text-slate-200 group-hover:text-indigo-400 line-clamp-2">
            {course?.title}
          </div>

          <p className="text-xs text-slate-400">
            {course?.category?.title}
          </p>

          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs text-slate-400">
            <div className="flex items-center gap-x-1">
              <BookOpen className="w-4" />
              <span>{course?.modules?.length} Chapters</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-md md:text-sm font-medium text-white">
              {formatPrice(course?.price)}
            </p>

            <Button
              variant="ghost"
              className="text-xs text-indigo-400 hover:text-white hover:bg-indigo-500/20 h-7 gap-1"
            >
              Enroll
              <ArrowRight className="w-3" />
            </Button>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default CourseCard;