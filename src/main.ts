import "./styles.css";
import gsap from "gsap";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";
import { initEmojiRotator } from "./emoji-rotator";
import { initMobileMenu } from "./mobile-menu";

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

window.addEventListener("DOMContentLoaded", () => {
    initEmojiRotator();
});

await loadPartials();
setActiveNav();
initThemeToggle();
initCopyEmail();
initMobileMenu();

