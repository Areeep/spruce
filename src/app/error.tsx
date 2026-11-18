/**
 * ============================================================================
 * Component   : ErrorBoundary
 * Layer       : App Router Error UI
 *
 * Description:
 * Tampilan cadangan saat terjadi galat render pada segmen halaman. Galat
 * dicatat ke konsol dan pengguna dapat mencoba memuat ulang segmen tersebut.
 * ============================================================================
 */

"use client";

import { useEffect } from "react";

/**
 * Properti komponen ErrorBoundary.
 */
export interface ErrorBoundaryProps {
	/** Galat yang tertangkap; `digest` adalah id galat sisi server bila ada. */
	error: Error & { digest?: string };
	/** Fungsi dari Next.js untuk mencoba merender ulang segmen. */
	reset: () => void;
}

/**
 * Menampilkan pesan galat dan tombol coba lagi.
 *
 * @param props Properti komponen.
 * @param props.error Galat yang tertangkap.
 * @param props.reset Fungsi untuk mencoba lagi.
 * @returns Elemen tampilan galat.
 */
export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
	useEffect(() => {
		console.error("Galat render halaman:", error);
	}, [error]);

	return (
		<main className="h-dvh flex flex-col items-center justify-center gap-4 px-5 text-center">
			<h1 className="font-poppins font-semibold text-2xl">
				Terjadi kesalahan
			</h1>
			<p className="text-sm">Halaman gagal dimuat. Silakan coba lagi.</p>
			<button
				onClick={reset}
				className="bg-accent rounded-lg px-4 py-2.5 text-sm"
			>
				Coba lagi
			</button>
		</main>
	);
}
