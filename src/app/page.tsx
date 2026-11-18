/**
 * ============================================================================
 * Page        : Home
 * Layer       : App Router Page
 *
 * Description:
 * Halaman beranda yang menyusun Navbar dan section Hero.
 * ============================================================================
 */

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero";

/**
 * Menyusun halaman beranda.
 *
 * @returns Elemen halaman beranda.
 */
export default function Home() {
	return (
		<main className="relative">
			<Navbar />

			<Hero />
		</main>
	);
}
