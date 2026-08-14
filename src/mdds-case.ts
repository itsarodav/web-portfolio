import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { loadPartials, setActiveNav } from "./includes";
import { initNavScrollSpy } from "./nav-scroll-spy";
import { initThemeToggle } from "./theme";
import { initI18n } from "./i18n";
import { initCopyEmail } from "./copy-email";
import { initMobileMenu } from "./mobile-menu";
import { initPageTransition } from "./page-transition";

gsap.registerPlugin(ScrollTrigger);

gsap.set("main", { autoAlpha: 1 });

// Hero container — entrance animation (above the fold)
gsap.fromTo(
    ".case-hero",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: "power2.out" },
);

// Editorial sections — scroll triggered
gsap.utils.toArray<HTMLElement>(".case-section").forEach((section) => {
    gsap.fromTo(
        section,
        { y: 25, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none none" },
        },
    );
});

// Stats grid — staggered entrance
gsap.fromTo(
    ".case-stat",
    { y: 20, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".case-stat", start: "top 85%", toggleActions: "play none none none" },
    },
);

await loadPartials();
setActiveNav();
initNavScrollSpy();
initThemeToggle();
await initI18n();
initCopyEmail();
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
