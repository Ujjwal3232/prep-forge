import React from 'react';
import { Tv } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLesson } from '@/queries/lessons';

const CourseLessonList = async ({lessonId}) => {

    const lesson = await getLesson(lessonId)
    //console.log(lesson);
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-md p-4 space-y-3">
            
            {/* item */}
            <button
                type="button"
                className={cn(
                    "flex items-center justify-between w-full text-slate-300 text-sm font-medium",
                    "transition-all hover:text-indigo-400"
                )}
            >
                <div className="flex items-center gap-x-2">
                    <Tv size={16} className="text-indigo-400" />
                    {lesson?.title}
                </div>
            </button>

        </div>
    );
};

export default CourseLessonList;