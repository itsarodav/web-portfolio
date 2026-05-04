import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";
import { initMobileMenu } from "./mobile-menu";
import { initPageTransition } from "./page-transition";

gsap.registerPlugin(ScrollTrigger);

// Bio card — entrance animation (above the fold)
gsap.fromTo(
    ".about-bio-card",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" },
);

// Extended bio text — scroll triggered
gsap.fromTo(
    ".about-bio-text",
    { y: 20, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-bio-text", start: "top 85%", toggleActions: "play none none none" },
    },
);

// Polaroid collage
gsap.fromTo(
    ".about-polaroids",
    { scale: 0.95, opacity: 0 },
    {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-polaroids", start: "top 80%", toggleActions: "play none none none" },
    },
);

// Skill kit title
gsap.fromTo(
    ".about-skills-title",
    { y: 15, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-skills-title", start: "top 85%", toggleActions: "play none none none" },
    },
);

// Skill cards — staggered
gsap.fromTo(
    ".about-skill-card",
    { y: 25, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-skill-card", start: "top 85%", toggleActions: "play none none none" },
    },
);

await loadPartials();
setActiveNav();
initThemeToggle();
initMobileMenu();
initPageTransition();

// Partial-loaded sections (contact, footer)
gsap.fromTo(
    "[data-anim='contact']",
    { scale: 0.96, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: "[data-anim='contact']", start: "top 80%", toggleActions: "play none none none" } },
);

gsap.fromTo(
    "[data-anim='social-links'] a",
    { y: 12, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out", scrollTrigger: { trigger: "[data-anim='social-links']", start: "top 85%", toggleActions: "play none none none" } },
);

gsap.fromTo(
    "[data-anim='footer']",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power1.out", scrollTrigger: { trigger: "[data-anim='footer']", start: "top 90%", toggleActions: "play none none none" } },
);
