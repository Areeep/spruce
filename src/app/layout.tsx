/**
 * ============================================================================
 * Layout      : RootLayout
 * Layer       : App Router Layout
 *
 * Description:
 * Layout akar: memuat font Poppins dan DM Sans lewat next/font, mengatur
 * metadata situs, dan membungkus seluruh halaman.
 * ============================================================================
 */

import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Spruce",
	description:
		"Provide reliable and efficient laundry services to make your daily routine easier.",
};

/**
 * Membungkus semua halaman dengan elemen html dan body.
 *
 * @param props Properti layout.
 * @param props.children Konten halaman yang dirender di dalam body.
 * @returns Struktur dokumen HTML.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${poppins.variable} ${dmSans.variable} h-full antialiased`}
		>
			<body className="font-dm-sans min-h-full flex flex-col">{children}</body>
		</html>
	);
}
