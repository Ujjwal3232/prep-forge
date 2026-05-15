import React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import EnrollCourse from '@/components/enroll-course';

const CourseDetailsIntro = ({course}) => {
    return (
        <div className="overflow-x-hidden bg-slate-950 grainy">
        <section className="pt-12 sm:pt-16">
          <div className="container">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-slate-400 font-inter">
                   {course?.subtitle}
                </h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-slate-100 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                  <span className="relative inline-flex sm:inline">
                    <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-400 blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                    <span className="relative">{course?.title} </span>
                  </span>
                </p>

                <div className="mt-6 flex items-center justify-center flex-wrap gap-3">
                  <EnrollCourse courseId={course?.id}/>
                  <Link
                    href=""
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg", className: "border-slate-800 text-slate-300 hover:bg-slate-800" })
                    )}
                  >
                    See Intro
                  </Link>
                  <Link
                    href=""
                    className={cn(
                      buttonVariants({ variant: "destructive", size: "lg",className: " bg-indigo-800  border-slate-800 text-slate-300 hover:bg-red-950"})
                    )}
                  >
                   Price : ₹{course?.price}
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-12 mt-6">
              <div className="relative">
                <div className="absolute inset-0 h-2/3"></div>
                <div className="relative mx-auto">
                  <div className="lg:max-w-3xl lg:mx-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg">
                    <Image
                      className="w-full rounded-lg"
                      width={768}
                      height={463}
                      src={`/assets/images/courses/${course?.thumbnail}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default CourseDetailsIntro;