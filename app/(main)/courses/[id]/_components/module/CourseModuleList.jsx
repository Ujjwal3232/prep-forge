import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Radio, Video, NotepadText, FileQuestion } from "lucide-react";
import CourseLessonList from './CourseLessonList';

const CourseModuleList = () => {
    return (
        <div className="bg-slate-950">
            <AccordionItem 
                className="border border-slate-800 bg-slate-900 hover:bg-slate-800 rounded-md px-4"
                value="item-1"
            >
                <AccordionTrigger className="text-slate-200 hover:text-indigo-400">
                    Introduction
                </AccordionTrigger>

                <AccordionContent>
                    {/* header */}
                    <div className="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-slate-400 text-sm">

                        <span className="flex items-center gap-1.5">
                            <Video className="w-4 h-4 text-indigo-400" />
                            12 Lessons
                        </span>

                        <span className="flex items-center gap-1.5">
                            <NotepadText className="w-4 h-4 text-indigo-400" />
                            10 Notes
                        </span>

                        <span className="flex items-center gap-1.5">
                            <FileQuestion className="w-4 h-4 text-indigo-400" />
                            10 Quiz
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Radio className="w-4 h-4 text-indigo-400" />
                            1 Live Class
                        </span>

                    </div>
                    {/* header ends */}

                    <div className="space-y-3">
                        <CourseLessonList />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </div>
    );
};

export default CourseModuleList;