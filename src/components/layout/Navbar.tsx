"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const NAV_LINKS = [
	{ href: "#", label: "Home" },
	{ href: "#", label: "About" },
	{ href: "#", label: "Services" },
	{ href: "#", label: "FAQ" },
	{ href: "#", label: "Contacts" },
];

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
								className="hover:text-[#00C950] transition-colors"
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

				{isOpen && (
					<div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
						<ul className="flex flex-col p-5 gap-4 font-medium text-slate-700">
							{NAV_LINKS.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										className="block py-2 hover:text-[#00C950] transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
