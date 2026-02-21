# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.7.0] - 2026-02-21

### Changed

- Static assets reorganized into `public/assets/` folder (images, SVGs, logos)
- Work section images updated to optimized WebP format
- Work section grid layout and cards redesigned
- Asset references updated across all pages and partials

## [0.6.1] - 2026-02-19

### Changed

- Work section content updated

## [0.6.0] - 2026-02-18

### Added

- Education section with full rounded logo images (EOI, Platzi, UOC, URP)

### Changed

- Resume info updated and translated to English
- Homepage content updates

## [0.5.0] - 2026-02-17

### Added

- Resume page TypeScript entry point (`src/resume.ts`)
- Downloadable CV in PDF format (`public/cv/`)
- Vite config updated with resume build input

### Changed

- Experience section content updates
- Resume page layout improvements

## [0.4.0] - 2026-02-16

### Added

- Company logos for experience section (Odilo, Peruke, PitayApp, PKTNM)
- About page cartoon avatar (`public/arodav-cartoon.webp`)

### Changed

- Experience component updated with logos and improved layout
- Contact section layout refinements
- Footer improvements across all pages
- Header and footer styling updates

## [0.3.0] - 2026-02-15

### Added

- Experience section first version with partial component

### Changed

- Contact section design improvements

## [0.2.0] - 2026-02-14

### Added

- Resume page (`resume.html`)
- Contact component first version with copy-to-clipboard functionality
- Experience partial placeholder (`public/partials/experience.html`)
- Full logo variant (`public/arodav-logo-completo.svg`)
- Sun/moon icons for theme toggle

### Changed

- Footer redesigned with new components
- Header background styling updated
- Dark/light mode color palette adjusted
- Emoji rotator logic improved

## [0.1.0] - 2026-02-12

### Added

- Initial project layout with Vite + Tailwind + TypeScript
- Dark and light mode with theme toggle (`src/theme.ts`)
- Hero section with profile photo and emoji rotator
- Header and footer partials system (`src/includes.ts`)
- Favicon and brand logo (`public/arodav-logo.svg`)
- Social icons (GitHub, LinkedIn)
- Mobile-responsive spacing
- About page base structure
