import { Tabs,TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import CourseOverview from "./CourseOverview";
import CourseCurriculam from "./CourseCurriculam";
import CourseInstructor from "./CourseInstructor";

const CourseDetails = () => {
    return (
        <section className="py-8 md:py-12 lg:py-24 bg-slate-950">
        <div className="container">
          <span className="bg-indigo-400 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
            Development
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3 text-slate-100">
            Reactive Accelerator
          </h3>
          <p className="mt-3 text-slate-400 text-sm">
            Master React JS & Next JS
          </p>

          <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src="https://avatars.githubusercontent.com/u/47516621?v=4"
                alt="Ariyan"
              />
              <p className="font-bold text-slate-100">Kazi Ariyan</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-indigo-400 font-semibold">Last Updated: </span>
              <span className="text-slate-400">Feb 22, 2022</span>
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
                <CourseOverview />
              </TabsContent>

              <TabsContent value="curriculum" className="bg-slate-900 border border-slate-800 p-4 rounded-lg mt-6">
                <CourseCurriculam/>
              </TabsContent>

              <TabsContent value="instructor" className="bg-slate-900 border border-slate-800 p-4 rounded-lg mt-6">
                <CourseInstructor/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    );
};

export default CourseDetails;