# Spruce

Landing page layanan laundry berbasis Next.js (App Router), React, TypeScript,
dan Tailwind CSS 4.

## Struktur

| Lokasi | Isi |
|---|---|
| `src/app` | `layout.tsx` (font, metadata), `page.tsx` (beranda), `error.tsx` (tampilan galat) |
| `src/components/layout` | `Navbar`, `MobileMenu` (dimuat lazy lewat `next/dynamic`) |
| `src/components/sections` | `hero` |
| `src/constants/navigation.ts` | Tautan navigasi dan interface `NavLink` |

Semua komponen punya header file dan TSDoc (bahasa Indonesia).

## Optimasi

- `next/image` dengan `priority` pada gambar hero (LCP).
- `next/font` untuk Poppins dan DM Sans (tanpa request font eksternal saat runtime).
- Menu mobile dipisah dan dimuat dengan `next/dynamic`; kodenya hanya diunduh
  saat menu dibuka (terpisah dari bundle awal di `.next/static/chunks`).

## Menjalankan

```bash
pnpm install
pnpm dev      # pengembangan
pnpm lint     # ESLint
pnpm build    # build produksi
```

## Pembaruan dependensi

```bash
pnpm outdated
pnpm update --latest next react react-dom eslint-config-next
pnpm lint && pnpm build
```

Terakhir diperbarui: Next.js 16.2.9 → 16.4.6, React 19.2.4 → 19.3.1.
