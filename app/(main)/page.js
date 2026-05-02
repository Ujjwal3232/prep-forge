import {Element} from "@/components/element";
import { SectionTitle } from "@/components/section-title";
import {Support} from "@/components/support";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const categories = [
  { id: 1, title: "Design", thumbnail: "/assets/images/categories/design.jpg" },
  { id: 3, title: "Development", thumbnail: "/assets/images/categories/development.jpg" },
  { id: 4, title: "Marketing", thumbnail: "/assets/images/categories/marketing.jpg" },
  { id: 5, title: "IT & Software", thumbnail: "/assets/images/categories/it_software.jpg" },
  { id: 6, title: "Personal Development", thumbnail: "/assets/images/categories/personal_development.jpg" },
  { id: 7, title: "Business", thumbnail: "/assets/images/categories/programming.jpg" },
  { id: 8, title: "Photography", thumbnail: "/assets/images/categories/photography.jpg" },
  { id: 9, title: "Music", thumbnail: "/assets/images/categories/music.jpg" },
];

const courses = [
  { id: 1, title: "Design" },
  { id: 3, title: "Development" },
  { id: 4, title: "Marketing" },
  { id: 5, title: "IT & Software" },
  { id: 6, title: "Personal Development" },
  { id: 7, title: "Business" },
  { id: 8, title: "Photography" },
  { id: 9, title: "Music" },
];

const HomePage = () => {
  return (
    <div className="bg-slate-950 text-slate-100">
      
      {/* HERO */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto text-center space-y-6">

          <span className="px-4 py-1 rounded-full text-sm bg-slate-800 border border-slate-700 text-slate-300">
            Welcome
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Shape Your Skills by Doing it with
            <span className="block text-indigo-400">PrepForge</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Knowledge is light but it shines only when you use it
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href=""
              className="px-6 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
            >
              Explore Now
            </Link>

            <Link
              href=""
              className="px-6 py-3 rounded-md border border-slate-700 hover:bg-slate-800 text-slate-300 transition"
            >
              Become Instructor
            </Link>
          </div>
        </div>
      </section>

      <Element />

      {/* CATEGORIES */}
      <section className="container py-16 space-y-6">
        <div className="flex justify-between items-center">
          <SectionTitle>Categories</SectionTitle>

          <Link className="text-sm text-slate-400 hover:text-indigo-400 flex items-center gap-1" href="">
            Browse All <ArrowRightIcon className="w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href="">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-slate-800 transition">

                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={category.thumbnail}
                    alt={category.title}
                    width={70}
                    height={70}
                  />

                  <h3 className="font-medium text-slate-200">
                    {category.title}
                  </h3>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="container py-16 space-y-6">
        <div className="flex justify-between items-center">
          <SectionTitle>Courses</SectionTitle>

          <Link className="text-sm text-slate-400 hover:text-indigo-400 flex items-center gap-1" href="">
            Browse All <ArrowRightIcon className="w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-slate-800 transition group">

                <div className="relative aspect-video">
                  <Image
                    src="/assets/images/courses/course_1.png"
                    alt="course"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-medium text-slate-200 group-hover:text-indigo-400">
                    Reactive Accelerator
                  </h3>

                  <p className="text-xs text-slate-400">Development</p>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <BookOpen className="w-4" />
                    4 Chapters
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <span className="font-medium text-white">
                      {formatPrice(49)}
                    </span>

                    <Button
                      variant="ghost"
                      className="text-xs text-indigo-400 hover:text-white hover:bg-indigo-500/20"
                    >
                      Enroll <ArrowRight className="w-3" />
                    </Button>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>
      <Support/>
    </div>
  );
};

export default HomePage;