import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { getCourseDetailsByInstructor } from "@/queries/courses";
import {
  ArrowRight,
  BookOpen,
  MessageSquare,
  Presentation,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const InstructorProfile = async ({ params: { id } }) => {
  const courseDetailsByInstructor = await getCourseDetailsByInstructor(
    id.toString(),
  );

  //console.log(courseDetailsByInstructor);

  return (
    <section
      id="categories"
      className="space-y-6 py-6 lg:py-12 bg-slate-950 text-slate-100 min-h-screen"
    >
      <div className="container grid grid-cols-12 lg:gap-x-8 gap-y-8">
        {/* Instructor Info */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow hover:bg-slate-800 transition-all duration-300">
            <div className="mb-6">
              <div className="w-36 h-36 rounded-full mb-5 mx-auto overflow-hidden border-4 border-indigo-400">
                <Image
                  src={courseDetailsByInstructor?.insImage}
                  alt={courseDetailsByInstructor?.fullInsName}
                  width={300}
                  height={300}
                />
              </div>

              <div>
                <h4 className="text-xl lg:text-2xl text-center text-slate-100 font-semibold">
                  {courseDetailsByInstructor?.fullInsName}
                </h4>

                <div className="text-slate-400 font-medium mb-6 text-sm text-center">
                  {courseDetailsByInstructor?.designation}
                </div>

                <ul className="items-center gap-3 flex-wrap text-sm text-slate-300 font-medium grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-4">
                  <li className="flex items-center space-x-3">
                    <Presentation className="text-indigo-400 w-4" />
                    <div>{courseDetailsByInstructor?.courses} Courses</div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <UsersRound className="text-indigo-400 w-4" />
                    <div>
                      {courseDetailsByInstructor?.enrollments}+ Students
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <MessageSquare className="text-indigo-400 w-4" />
                    <div>{courseDetailsByInstructor?.reviews} Reviews</div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <Star className="text-indigo-400 w-4" />
                    <div>
                      {courseDetailsByInstructor?.ratings} Average Rating
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 text-xs leading-[1.8] text-justify">
              {courseDetailsByInstructor?.bio}
            </p>
          </div>
        </div>

        {/* Courses */}
        <div className="col-span-12 lg:col-span-8">
          <div>
            <SectionTitle className="mb-6 text-slate-100">Courses</SectionTitle>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {Array.isArray(courseDetailsByInstructor?.inscourses) &&
                courseDetailsByInstructor?.inscourses.map((course) => {
                  return (
                    <Link key={course._id} href={`/courses/${course._id}`}>
                      <div className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500 transition-all duration-300 overflow-hidden rounded-lg p-3 h-full">
                        <div className="relative w-full aspect-video rounded-md overflow-hidden">
                          <Image
                            src={`/assets/images/courses/${course?.thumbnail}`}
                            alt={course.title}
                            className="object-cover"
                            fill
                          />
                        </div>

                        <div className="flex flex-col pt-2">
                          <div className="text-lg md:text-base font-medium text-slate-100 group-hover:text-indigo-400 line-clamp-2 transition-colors">
                            {course?.title}
                          </div>

                          <p className="text-xs text-slate-400">
                            {course?.category?.title}
                          </p>

                          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                            <div className="flex items-center gap-x-1 text-slate-400">
                              <div>
                                <BookOpen className="w-4 text-indigo-400" />
                              </div>

                              <span>{course?.modules?.length} Chapters</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <p className="text-md md:text-sm font-medium text-slate-200">
                              {formatPrice(course?.price)}
                            </p>

                            <Button
                              variant="ghost"
                              className="text-xs text-indigo-400 hover:text-indigo-500 hover:bg-slate-700 h-7 gap-1 transition-all"
                            >
                              Enroll
                              <ArrowRight className="w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
