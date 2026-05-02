import { dbConnect } from "@/service/mongoose";
import { Course } from "@/model/course-model";

import "@/model/category-model";
import "@/model/user-model";
import "@/model/testimonial-model";
import "@/model/module.model";   

export async function getCourses() {
  await dbConnect();

  const courses = await Course.find({})
    .populate("category")
    .populate("instructor")
    .populate("testimonials")
    .populate("modules");

  return courses;
}

/* this function does the following:
 * Retrieves all courses from the database and populates their category field with the corresponding category documents.
 * Returns the list of courses with populated category information.
 */