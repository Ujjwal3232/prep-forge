import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";

function EnrolledCourses() {
	return (
		<div className="grid sm:grid-cols-2 gap-6">
			{[1, 2, 3, 4].map((_, index) => (
				<div
					key={index}
					className="group bg-slate-900 hover:bg-slate-800 hover:shadow-sm transition overflow-hidden border border-slate-800 rounded-lg p-3 h-full"
				>
					<div className="relative w-full aspect-video rounded-md overflow-hidden">
						<Image
							src="/assets/images/courses/course_1.png"
							alt={"course"}
							className="object-cover"
							fill
						/>
					</div>

					<div className="flex flex-col pt-2">
						<div className="text-lg md:text-base font-medium text-slate-100 group-hover:text-indigo-400 line-clamp-2 transition">
							Reactive Accelerator
						</div>

						<span className="text-xs text-slate-400">
							Development
						</span>

						<div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
							<div className="flex items-center gap-x-1 text-slate-400">
								<BookOpen className="w-4" />
								<span>4 Chapters</span>
							</div>
						</div>

						<div className="border-b border-slate-800 pb-2 mb-2">
							<div className="flex items-center justify-between">
								<span className="text-md md:text-sm font-medium text-slate-300">
									Total Modules: 10
								</span>

								<div className="text-md md:text-sm font-medium text-slate-300">
									Completed Modules{" "}
									<Badge
										variant="success"
										className="bg-indigo-400 text-slate-950 hover:bg-indigo-500"
									>
										05
									</Badge>
								</div>
							</div>

							<div className="flex items-center justify-between mt-2">
								<span className="text-md md:text-sm font-medium text-slate-300">
									Total Quizzes: 10
								</span>

								<div className="text-md md:text-sm font-medium text-slate-300">
									Quiz taken{" "}
									<Badge
										variant="success"
										className="bg-indigo-400 text-slate-950 hover:bg-indigo-500"
									>
										10
									</Badge>
								</div>
							</div>

							<div className="flex items-center justify-between mt-2">
								<span className="text-md md:text-sm font-medium text-slate-300">
									Mark from Quizzes
								</span>

								<span className="text-md md:text-sm font-medium text-slate-300">
									50
								</span>
							</div>

							<div className="flex items-center justify-between mt-2">
								<span className="text-md md:text-sm font-medium text-slate-300">
									Others
								</span>

								<span className="text-md md:text-sm font-medium text-slate-300">
									50
								</span>
							</div>
						</div>

						<div className="flex items-center justify-between mb-4">
							<span className="text-md md:text-sm font-medium text-slate-200">
								Total Marks
							</span>

							<span className="text-md md:text-sm font-medium text-indigo-400">
								100
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default EnrolledCourses;