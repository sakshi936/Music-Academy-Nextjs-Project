"use client";

function About() {
	return (
		<div className="h-[40rem] w-full dark:bg-slate-900 bg-white  dark:bg-grid-blck/[0.2] bg-grid-black/[0.3] relative flex items-center justify-center px-10">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className="mx-auto w-[50rem]">
				<h1 className="text-6xl font-semibold text-center">Welcome to Harmony Musical Academy,</h1>
				<p className="mt-4 text-center">
					Welcome to Harmony Musical Academy, where passion meets excellence! At Harmony, we believe that music has the power to transform lives, and we are dedicated to nurturing the
					musical talents of our students. Founded on the principles of creativity, discipline, and artistic expression, our academy offers a comprehensive range of programs for
					students of all ages and skill levels.
				</p>
				<p className="mt-4 text-center">
					Our mission is to provide high-quality music education that inspires and empowers students to achieve their full potential. We strive to create an environment where creativity
					flourishes, and students can explore their musical interests with guidance from experienced instructors.
				</p>
			</div>
			{/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Backgrounds</p> */}
		</div>
	);
}

export default About;
