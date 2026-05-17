import React from "react";
import { Presentation, UsersRound, Star, MessageSquare } from "lucide-react";

import Image from "next/image";
import { getCourseDetailsByInstructor } from "@/queries/courses";
import Link from "next/link";

const CourseInstructor = async ({ course }) => {
  const instructor = course?.instructor;

  const fullName = `${instructor?.firstName} ${instructor?.lastName}`;

  const courseDetailsByInstructor = await getCourseDetailsByInstructor(
    instructor._id.toString(),
  );

  //console.log(courseDetailsByInstructor);

  return (
    <div className="bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md p-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-8">
        {/* Image */}
        <div className="h-[310px] w-[270px] flex-none overflow-hidden rounded-lg">
          <Image
            src={instructor?.profilePicture}
            alt={fullName}
            width={270}
            height={310}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-[34px] font-bold leading-[51px] text-slate-100">
            {fullName}
          </h4>

          <div className="text-slate-400 font-medium mb-6">
            {instructor?.designation}
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-300">
              <Presentation className="text-indigo-400" />
              <div>{courseDetailsByInstructor?.courses} Courses</div>
            </li>

            <li className="flex items-center gap-3 text-slate-300">
              <UsersRound className="text-indigo-400" />
              <div>
                {courseDetailsByInstructor?.enrollments}+ Student Learned
              </div>
            </li>

            <li className="flex items-center gap-3 text-slate-300">
              <MessageSquare className="text-indigo-400" />
              <div>{courseDetailsByInstructor?.reviews}+ Reviews</div>
            </li>

            <li className="flex items-center gap-3 text-slate-300">
              <Star className="text-indigo-400" />
              <div>{courseDetailsByInstructor?.ratings} Average Rating</div>
            </li>
            <li className="flex space-x-3">
              <Link href={`/inst-profile/${instructor?._id}`}>
                <div className="text-indigo-600 font-bold">See Profile</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bio Below Both */}
      <div className="border-t border-slate-800 pt-6">
        <p className="text-slate-400 leading-8">{instructor?.bio}</p>
      </div>
    </div>
  );
};

export default CourseInstructor;
