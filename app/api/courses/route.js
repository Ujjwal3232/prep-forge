import { getCourses } from "@/queries/courses";

export async function GET() {
  try {
    const courses = await getCourses();

    return Response.json(courses);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}