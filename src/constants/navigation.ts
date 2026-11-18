/**
 * ============================================================================
 * Module      : navigation
 * Layer       : Constants
 *
 * Description:
 * Daftar tautan navigasi utama yang dipakai bersama oleh Navbar desktop dan
 * menu mobile, sehingga data tautan hanya didefinisikan di satu tempat.
 * ============================================================================
 */

/**
 * Satu tautan pada navigasi utama.
 */
export interface NavLink {
	/** Tujuan tautan (path atau anchor). */
	href: string;
	/** Teks yang ditampilkan kepada pengguna. */
	label: string;
}

/**
 * Tautan navigasi utama situs, berurutan dari kiri ke kanan.
 */
export const NAV_LINKS: readonly NavLink[] = [
	{ href: "#", label: "Home" },
	{ href: "#", label: "About" },
	{ href: "#", label: "Services" },
	{ href: "#", label: "FAQ" },
	{ href: "#", label: "Contacts" },
];
