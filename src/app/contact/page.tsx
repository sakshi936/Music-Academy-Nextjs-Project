"use client";

import { Meteors } from "@/components/ui/meteors";
import { log } from "console";
import { useState } from "react";

function MusicSchoolContactUs() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	return (
		<div className=" min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative text-center">
			<div className="max-w-2xl mx-auto p-4 relative z-10">
				<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white"> Contact Us</h1>
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
					We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
				</p>

				<div>
					<form
						onSubmit={() => {
							console.log(`Submmited: email:${email} message:${message} `);
						}}
						className="space-y-4 mt-4"
					>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your email address"
							className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
							required
						/>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Your message"
							className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
							rows={5}
							required
						></textarea>

						<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block">
							<span className="absolute inset-0 overflow-hidden rounded-md">
								<span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
							</span>
							<div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-2  px-4 ring-1 ring-white/10 ">
								<span>{`Send`}</span>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path>
								</svg>
							</div>
							<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
						</button>
					</form>
				</div>
			</div>
			<Meteors number={20} />
		</div>
	);
}

export default MusicSchoolContactUs;
