import "./styles.css";
import gsap from "gsap";
import { loadPartials, setActiveNav } from "./includes";

gsap.from([".about-title", ".about-body"], {
    y: 12,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power2.out",
});

await loadPartials();
setActiveNav();