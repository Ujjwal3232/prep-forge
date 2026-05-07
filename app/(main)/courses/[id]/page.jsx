import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import { formatPrice } from "@/lib/formatPrice";
// const courses = [
//   {
//     id: 1,
//     title: "Design",
//     thumbnail: "/assets/images/categories/design.jpg",
//   },

  
const SingleCoursePage = () => {
  return (
    <>
        <CourseDetailsIntro />
 

        <CourseDetails/>                

        <Testimonials/> 

        <RelatedCourses/>                  
    </>
  );
};
export default SingleCoursePage;