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
import { getCourseList } from "@/queries/courses";
import CourseCard from "./courses/_components/CourseCard";
import { getCategories } from "@/queries/categories";



const HomePage = async () => {

  const courses = await getCourseList(); 
  // console.log(courses);

  const categories = await getCategories();
  // console.log(categories);
  
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
              href="/courses"
              className="px-6 py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
            >
              Explore Now
            </Link>

            <Link
              href="/register/instructor"
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
            <Link key={category.id} href={`/categories/${category.id}`}>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:bg-slate-800 transition">

                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={`/assets/images/categories/${category.thumbnail}`}
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

          <Link className="text-sm text-slate-400 hover:text-indigo-400 flex items-center gap-1" href={"/courses"}>
            Browse All <ArrowRightIcon className="w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
      <Support/>
    </div>
  );
};

export default HomePage;