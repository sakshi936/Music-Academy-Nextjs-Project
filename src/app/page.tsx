import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialsCards from "@/components/TestimonialsCards";
import TstimonialsCards from "@/components/TestimonialsCards";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutMusicAcademy from "./about/page";
// import ABC from "@/components/about/abc";

export default function Home() {
	return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
			<HeroSection />
			<AboutMusicAcademy />
			<FeaturedCourses />
			<WhyChooseUs />
			<TestimonialsCards />
			<UpcommingWebinars />
			<Instructors />
			<Footer />
			{/* <ABC /> */}
		</main>
	);
}
