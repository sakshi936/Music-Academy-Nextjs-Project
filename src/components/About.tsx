"use client";

import { cn } from "@/utils/cn";
import { Boxes } from "./ui/background-boxes";

function About() {
	return (
		<div className=" relative w-full h-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
			<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

			<Boxes />
			<div className=" w-[50rem] text-center">
				<h1 className={cn("md:text-6xl text-5xl font-semibold text-white relative z-20 ")}>Welcome to Space Music Academy,</h1>
				<p className="  mt-4 text-center text-gray-100 ">
					Welcome to Space Music Academy, where passion meets excellence! At Harmony, we believe that music has the power to transform lives, and we are dedicated to nurturing the
					musical talents of our students. Founded on the principles of creativity, discipline, and artistic expression, our academy offers a comprehensive range of programs for
					students of all ages and skill levels.Our mission is to provide high-quality music education that inspires and empowers students to achieve their full potential. We strive to
					create an environment where creativity flourishes, and students can explore their musical interests with guidance from experienced instructors.
				</p>
			</div>
		</div>
	);
}

export default About;
