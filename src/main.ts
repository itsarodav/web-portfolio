import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";
import { initEmojiRotator } from "./emoji-rotator";
import { initMobileMenu } from "./mobile-menu";

gsap.registerPlugin(ScrollTrigger);

function initCopyEmail() {
    const buttons = document.querySelectorAll<HTMLButtonElement>("[data-copy-email]");

    buttons.forEach((button) => {
        const feedback = button.parentElement?.querySelector<HTMLElement>("[data-copy-feedback]");

        button.addEventListener("click", async () => {
            const text = button.dataset.copyText?.trim() || "";
            if (!text) return;

            try {
                await navigator.clipboard.writeText(text);
                if (feedback) feedback.textContent = "Email copied to clipboard.";
            } catch {
                if (feedback) feedback.textContent = "Couldn't copy automatically. Please copy it manually.";
            }
        });
    });
}

// Hero entrada
const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });
heroTl
    .fromTo(
        ".hero-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 },
    )
    .fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3",
    );

gsap.from([".about-title", ".about-body"], {
    y: 12,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: "power2.out",
});

// Work cards - responsive animation (desktop loads 2, mobile loads 1)
const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
        ".work-card:nth-child(-n+2)",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.4 },
    );

    gsap.utils.toArray<HTMLElement>(".work-card:nth-child(n+3)").forEach((card) => {
        gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.15,
                ease: "power2.out",
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
            },
        );
    });
});

mm.add("(max-width: 767px)", () => {
    gsap.fromTo(
        ".work-card:first-child",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.4 },
    );

    gsap.utils.toArray<HTMLElement>(".work-card:nth-child(n+2)").forEach((card) => {
        gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.15,
                ease: "power2.out",
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
            },
        );
    });
});

window.addEventListener("DOMContentLoaded", () => {
    initEmojiRotator();
});

await loadPartials();
setActiveNav();
initThemeToggle();
initCopyEmail();
initMobileMenu();

// ScrollTrigger animations for partial-loaded sections
gsap.fromTo(
    "[data-anim='exp-title']",
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: "[data-anim='exp-title']", start: "top 85%" } },
);

gsap.fromTo(
    "[data-anim='exp-list'] > li",
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: "[data-anim='exp-list']", start: "top 80%" } },
);

gsap.fromTo(
    "[data-anim='contact']",
    { scale: 0.96, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: "[data-anim='contact']", start: "top 80%" } },
);

gsap.fromTo(
    "[data-anim='social-links'] a",
    { y: 12, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out", scrollTrigger: { trigger: "[data-anim='social-links']", start: "top 85%" } },
);

gsap.fromTo(
    "[data-anim='footer']",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power1.out", scrollTrigger: { trigger: "[data-anim='footer']", start: "top 90%" } },
);

