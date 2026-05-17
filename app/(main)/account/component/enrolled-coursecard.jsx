import React from "react";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { getCategoryDetails } from "@/queries/categories";
import { getReport } from "@/queries/reports";

const EnrolledCourseCard = async ({ enrollment }) => {
  /// console.log(enrollment);
  const courseCategory = await getCategoryDetails(
    enrollment?.course?.category?._id,
  );

  const filter = {
    course: enrollment?.course?._id,
    student: enrollment?.student?._id,
  };

  const report = await getReport(filter);
  // console.log(report);

  /// Total Completed Modules
  const totalCompletedModules = report?.totalCompletedModules?.length;

  // Get all Quizzes and Assignments
  const quizzes = report?.quizAssessment?.assessments;
  const totalQuizzes = quizzes?.length;

  // Find attempted quizzes
  const quizzesTaken = quizzes?.filter((q) => q.attempted) || [];
  //console.log(quizzesTaken);

  // find how many quizzes answered correct
  const totalCorrect = quizzesTaken
    .map((quiz) => {
      const item = quiz.options;
      return item.filter((o) => {
        return o.isCorrect === true && o.isSelected === true;
      });
    })
    .filter((elem) => elem.length > 0)
    .flat();

  const marksFromQuizzes = totalCorrect?.length * 5;
  const otherMarks = report?.quizAssessment?.otherMarks;
  const totalMarks = marksFromQuizzes + otherMarks;

  return (
    <div className="group bg-slate-900 hover:bg-slate-800 hover:shadow-sm transition overflow-hidden border border-slate-800 rounded-lg p-3 h-full">
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image
          src={`/assets/images/courses/${enrollment?.course?.thumbnail}`}
          alt={enrollment?.course?.title}
          className="object-cover"
          fill
        />
      </div>

      <div className="flex flex-col pt-2">
        <div className="text-lg md:text-base font-small text-slate-100 group-hover:text-indigo-400 line-clamp-2 transition">
          {enrollment?.course?.title}
        </div>

        <span className="text-xs text-slate-400">{courseCategory?.title}</span>

        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div className="flex items-center gap-x-1 text-slate-400">
            <BookOpen className="w-4" />
            <span> {enrollment?.course?.modules?.length} Chapters</span>
          </div>
        </div>

        <div className="border-b border-slate-800 group-hover:border-indigo-500/60 transition-colors duration-300 pb-2 mb-2">
          <div className="flex items-center justify-between">
            <span className="text-md md:text-sm font-small text-slate-300">
              Total Modules: {enrollment?.course?.modules?.length}
            </span>

            <div className="text-md md:text-sm font-small text-indigo-300">
              Completed Modules{" "}
              <Badge
                variant="success"
                className="bg-indigo-400 text-slate-950 hover:bg-indigo-500"
              >
                {totalCompletedModules}
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-md md:text-sm font-small text-slate-300">
              Total Quizzes: {totalQuizzes}
            </span>

            <div className="text-md md:text-sm font-small text-indigo-300">
              Quiz taken{" "}
              <Badge
                variant="success"
                className="bg-indigo-400 text-slate-950 hover:bg-indigo-500"
              >
                {quizzesTaken?.length}
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-md md:text-sm font-small text-slate-300">
              Mark from Quizzes
            </span>

            <span className="text-md md:text-sm font-small text-slate-300">
              {marksFromQuizzes}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-md md:text-sm font-small text-slate-300">
              Others
            </span>

            <span className="text-md md:text-sm font-small text-slate-300">
              {otherMarks}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-md md:text-sm font-small text-slate-200">
            Total Marks
          </span>

          <span className="text-md md:text-sm font-small text-indigo-400">
            {totalMarks}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
