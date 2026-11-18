/**
 * ============================================================================
 * Component   : MobileMenu
 * Layer       : Layout Component
 *
 * Description:
 * Panel menu navigasi untuk layar kecil. Komponen ini dimuat secara lazy oleh
 * Navbar (next/dynamic) sehingga kodenya tidak ikut bundle awal dan baru
 * diunduh saat pengguna pertama kali membuka menu.
 * ============================================================================
 */

import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

/**
 * Properti komponen MobileMenu.
 */
interface MobileMenuProps {
	/** Dipanggil saat salah satu tautan dipilih, biasanya untuk menutup menu. */
	onNavigate: () => void;
}

/**
 * Menampilkan daftar tautan navigasi dalam panel yang turun dari header.
 *
 * @param props Properti komponen.
 * @param props.onNavigate Callback saat tautan dipilih.
 * @returns Elemen panel menu mobile.
 */
export default function MobileMenu({ onNavigate }: MobileMenuProps) {
	return (
		<div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
			<ul className="flex flex-col p-5 gap-4 font-medium text-slate-700">
				{NAV_LINKS.map((link) => (
					<li key={link.label}>
						<Link
							href={link.href}
							onClick={onNavigate}
							className="block py-2 hover:text-accent transition-colors"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
