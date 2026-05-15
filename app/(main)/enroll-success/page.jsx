import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-6">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center bg-slate-900 border border-slate-800 rounded-2xl p-10 hover:bg-slate-800 transition-all duration-300 shadow-xl">
        
        <CircleCheck className="w-32 h-32 bg-indigo-400 rounded-full p-5 text-white shadow-lg shadow-indigo-500/20" />

        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-100 leading-relaxed">
          Congratulations! Your Enrollment was Successful
        </h1>

        <p className="text-sm md:text-base text-slate-400 max-w-[500px]">
          Your course access has been activated successfully. You can now
          continue exploring courses or start learning immediately.
        </p>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="bg-indigo-400 hover:bg-indigo-500 text-white border border-indigo-400"
          >
            <Link href="/courses">Browse Courses</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
          >
            <Link href="#">Play Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;