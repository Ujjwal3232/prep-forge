import React from "react";
import { cn } from "@/lib/utils";

import { BookCheck, Clock10, Radio } from "lucide-react";
import {
  Accordion,
} from "@/components/ui/accordion";

import CourseModuleList from "./module/CourseModuleList";

const CourseCurriculam = ({course}) => {
  //console.log(course);
  const totalDuration = course?.modules.reduce(function (acc, obj) 
  { return  acc + obj.duration;}, 0); 

  return (
    <div className="bg-slate-950">

      {/* Top Stats */}
      <div className="flex gap-x-6 gap-y-2 items-center justify-center flex-wrap py-3 mb-4 text-slate-400 text-sm border-b border-slate-800">

        <span className="flex items-center gap-1.5">
          <BookCheck className="w-4 h-4 text-indigo-400" />
          {course?.modules?.length} Chapters
        </span>

        <span className="flex items-center gap-1.5">
          <Clock10 className="w-4 h-4 text-indigo-400" />
           {(totalDuration/60).toPrecision(2)}+ Hours
        </span>

        <span className="flex items-center gap-1.5">
          <Radio className="w-4 h-4 text-indigo-400" />
          4 Live Class
        </span>

      </div>

      {/* Accordion Modules */}
      <Accordion
        defaultValue={["item-1", "item-2", "item-3"]}
        type="multiple"
        collapsible="true"
        className="w-full space-y-3"
      >
         {
        course?.modules && course.modules.map(( module,index ) => (
          <CourseModuleList key={module.id || index} module={module} />
        ))
      }    
      </Accordion>

    </div>
  );
};

export default CourseCurriculam;