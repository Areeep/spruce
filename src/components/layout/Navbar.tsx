/**
 * ============================================================================
 * Component   : Navbar
 * Layer       : Layout Component
 *
 * Description:
 * Header tetap di bagian atas halaman berisi logo, navigasi desktop, dan
 * tombol menu untuk layar kecil. Panel menu mobile dimuat lazy lewat
 * next/dynamic agar tidak membebani bundle awal.
 * ============================================================================
 */

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NAV_LINKS } from "@/constants/navigation";

// * Lazy loading: kode menu mobile hanya diunduh saat menu dibuka pertama kali
const MobileMenu = dynamic(() => import("./MobileMenu"));

/**
 * Menampilkan header situs dengan navigasi responsif.
 * State `isOpen` mengatur buka-tutup menu mobile.
 *
 * @returns Elemen header navigasi.
 */
export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<header className="flex justify-between px-5 lg:px-16 py-4 fixed left-0 top-0 right-0 shadow-sm items-center">
			<div className="flex gap-2 items-center font-semibold text-2xl md:text-3xl">
				<Image
					src="/spruce.svg"
					alt="spruce"
					width={28}
					height={28}
					className="aspect-square"
				/>
				<h1>Spruce</h1>
			</div>
			<nav>
				<ul className="sm:flex gap-4 hidden">
					{NAV_LINKS.map((link) => (
						<li key={link.label}>
							<Link
								href={link.href}
								className="hover:text-accent transition-colors"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				<button
					onClick={toggleMenu}
					className="flex sm:hidden"
					aria-label="Toggle Menu"
				>
					<Icon
						icon={isOpen ? "hugeicons:cancel-01" : "hugeicons:menu-02"}
						className="w-5 h-auto aspect-square"
					/>
				</button>

				{isOpen && <MobileMenu onNavigate={() => setIsOpen(false)} />}
			</nav>
		</header>
	);
}
