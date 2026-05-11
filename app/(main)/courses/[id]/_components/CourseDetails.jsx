import { Tabs,TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import CourseOverview from "./CourseOverview";
import CourseCurriculam from "./CourseCurriculam";
import CourseInstructor from "./CourseInstructor";

import { formatMyDate } from "@/lib/date";

const CourseDetails = ({course}) => {

  const lastModifiedDate = formatMyDate(course.modifiedOn);
    return (
        <section className="py-8 md:py-12 lg:py-24 bg-slate-950">
        <div className="container">
          <span className="bg-indigo-400 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
            {course?.category?.title}
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3 text-slate-100">
            {course?.title}
          </h3>
          <p className="mt-3 text-slate-400 text-sm">
            {course?.subtitle}
          </p>

          <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
            <div className="flex items-center gap-2">
              <Image
                className="w-[40px] h-[40px] rounded-full"
                 src={course?.instructor?.profilePicture}
                alt={course?.instructor?.firstName}
                width={20}
                height={20}
              />
               <p className="font-bold">{course?.instructor?.firstName} {' '} {course?.instructor?.lastName}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-indigo-400 font-semibold">Last Updated: </span>
              <span className="text-slate-400">{lastModifiedDate}</span>
            </div>
          </div>

          <div className="my-6">
            <Tabs defaultValue="overview" className="w-full flex flex-col">
              <TabsList className="inline-flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 p-1 mx-auto w-fit">

                <TabsTrigger 
                  value="overview" 
                  className="px-4 py-2 text-sm rounded-md text-slate-400 transition-all 
                             bg-transparent
                             data-[state=active]:!bg-indigo-400 
                             data-[state=active]:!text-white 
                             data-[state=active]:shadow-md
                             hover:text-indigo-400"
                >
                  Overview
                </TabsTrigger>

                <TabsTrigger 
                  value="curriculum" 
                  className="px-4 py-2 text-sm rounded-md text-slate-400 transition-all 
                             bg-transparent
                             data-[state=active]:!bg-indigo-400 
                             data-[state=active]:!text-white 
                             data-[state=active]:shadow-md
                             hover:text-indigo-400"
                >
                  Carriculum
                </TabsTrigger>

                <TabsTrigger 
                  value="instructor" 
                  className="px-4 py-2 text-sm rounded-md text-slate-400 transition-all 
                             bg-transparent
                             data-[state=active]:!bg-indigo-400 
                             data-[state=active]:!text-white 
                             data-[state=active]:shadow-md
                             hover:text-indigo-400"
                >
                  Instructor
                </TabsTrigger>

              </TabsList>

              <TabsContent value="overview" className="bg-slate-900 border border-slate-800 p-4 rounded-lg mt-6">
                <CourseOverview course={course}/>
              </TabsContent>

              <TabsContent value="curriculum" className="bg-slate-900 border border-slate-800 p-4 rounded-lg mt-6">
                <CourseCurriculam course={course} />
              </TabsContent>

              <TabsContent value="instructor" className="bg-slate-900 border border-slate-800 p-4 rounded-lg mt-6">
                <CourseInstructor course={course}/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    );
};

export default CourseDetails;