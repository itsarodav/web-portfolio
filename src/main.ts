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

// Hero entrance timeline
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
heroTl
    .fromTo(
        ".hero-title",
        { y: 40, opacity: 0, scale: 0.97, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 1.1 },
    )
    .fromTo(
        ".hero-cta",
        { y: 24, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        "-=0.35",
    );

gsap.from([".about-title", ".about-body"], {
    y: 12,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power2.out",
});

// Work cards: first 2 animate on load, rest on scroll
gsap.fromTo(
    ".work-card:nth-child(-n+2)",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.4 },
);

gsap.utils.toArray<HTMLElement>(".work-card:nth-child(n+3)").forEach((card) => {
    gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        },
    );
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

