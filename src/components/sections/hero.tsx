import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="h-dvh px-5 md:px-16 flex flex-col-reverse sm:flex-row items-center justify-center gap-2">
			<div className="sm:w-1/2 space-y-4 lg:space-y-8">
				<h1 className="font-poppins font-semibold text-2xl lg:text-4xl xl:text-6xl xl:leading-18">
					Spend Time on What Matters —{" "}
					<span className="highlight">We’ll Do the Laundry.</span>
				</h1>
				<p className="text-sm font-dm-sans">
					We provide reliable and efficient laundry services designed to make
					your daily routine easier. Our team handles every garment with care,
					ensuring fresh, clean results delivered straight to your door. Enjoy a
					hassle-free experience and more time to focus on what matters most.
				</p>
				<div className="flex gap-2 lg:gap-4">
					<Link
						href="#"
						className="bg-accent w-full sm:w-fit rounded-lg px-4 py-2.5 hover:shadow-md transition-shadow duration-300 text-sm lg:text-base"
					>
						Schedule a Pickup
					</Link>
					<Link
						href="#"
						className="border w-full sm:w-fit border-accent px-4 py-2.5 rounded-lg hover:shadow-md transition-shadow duration-300 shadow-accent text-sm lg:text-base text-center"
					>
						View Plans
					</Link>
				</div>
				<div className="flex gap-4 items-center">
					<div>
						<h3 className="font-bold text-2xl lg:text-3xl">5+</h3>
						<p className="text-sm lg:text-base">Years Experience</p>
					</div>
					<hr className="border h-12 border-gray-400" />
					<div>
						<h3 className="font-bold text-2xl lg:text-3xl">8k+</h3>
						<p className="text-sm lg:text-base">Customers</p>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center md:w-1/2">
				<Image
					src="/hero-img.png"
					alt="hero-img"
					width={300}
					height={300}
					className="w-68 md:w-150 h-auto aspect-square"
				/>
			</div>
		</section>
	);
}
