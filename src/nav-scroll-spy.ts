import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setDesktopActive } from "./includes";

gsap.registerPlugin(ScrollTrigger);

export function initNavScrollSpy() {
    const path = window.location.pathname;
    const isHome = path === "/" || path.endsWith("index.html");
    const isAbout = path.endsWith("about.html");
    const isResume = path.endsWith("resume.html");

    const spySections = isHome ? ["work", "contact"] : ["contact"];
    const pageActiveItem = isAbout ? "about" : isResume ? "resume" : null;

    let scrollSpyLocked = false;

    // Click on nav link → set active immediately & lock scroll spy during scroll
    document.querySelectorAll<HTMLAnchorElement>("[data-nav]").forEach((link) => {
        link.addEventListener("click", () => {
            const name = link.getAttribute("data-nav");
            if (name && spySections.includes(name)) {
                scrollSpyLocked = true;
                setDesktopActive(name);
                setTimeout(() => { scrollSpyLocked = false; }, 1000);
            }
        });
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const updateActive = (id: string | null) => {
            if (scrollSpyLocked) return;
            setDesktopActive(id);
        };

        spySections.forEach((id) => {
            const section = document.getElementById(id);
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                onEnter: () => updateActive(id),
                onEnterBack: () => updateActive(id),
                onLeaveBack: () => updateActive(pageActiveItem),
            });
        });
    });
}
