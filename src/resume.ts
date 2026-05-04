import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";
import { initMobileMenu } from "./mobile-menu";
import { initPageTransition } from "./page-transition";

gsap.registerPlugin(ScrollTrigger);

// Header — entrance animation (above the fold)
gsap.fromTo(
    ".resume-header",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: "power2.out" },
);

// Intro section
gsap.fromTo(
    ".resume-intro",
    { y: 15, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ".resume-intro", start: "top 85%", toggleActions: "play none none none" },
    },
);

// Section titles
gsap.utils.toArray<HTMLElement>(".resume-section-title").forEach((title) => {
    gsap.fromTo(
        title,
        { y: 15, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none none" },
        },
    );
});

// Section cards (ol/ul containers)
gsap.utils.toArray<HTMLElement>(".resume-section-card").forEach((card) => {
    gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        },
    );

    // Staggered items inside each card
    const items = card.querySelectorAll(":scope > li");
    if (items.length) {
        gsap.fromTo(
            items,
            { x: -15, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none none" },
            },
        );
    }
});

// Skills dl items
gsap.fromTo(
    ".resume-skills-card > div",
    { y: 12, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: { trigger: ".resume-skills-card", start: "top 80%", toggleActions: "play none none none" },
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
