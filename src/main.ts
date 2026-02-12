import "./styles.css";
import gsap from "gsap";
import { loadPartials, setActiveNav } from "./includes";

gsap.from([".hero-kicker", ".hero-title", ".hero-sub", ".hero-cta"], {
    y: 14,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: "power2.out",
});


await loadPartials();
setActiveNav();
