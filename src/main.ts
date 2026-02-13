import "./styles.css";
import gsap from "gsap";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";
import { initEmojiRotator } from "./emoji-rotator";

gsap.from([".hero-kicker", ".hero-title", ".hero-sub", ".hero-cta"], {
    y: 14,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: "power2.out",
});

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


