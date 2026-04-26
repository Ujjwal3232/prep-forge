// app/page.js

import Text from "@/components/Text";

async function getCourses() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);

  return <Text />;
}