import gsap from "gsap";

export function initMobileMenu() {
    const toggleEl = document.querySelector<HTMLButtonElement>("[data-mobile-menu-toggle]");
    const panelEl = document.querySelector<HTMLElement>("[data-mobile-menu-panel]");
    if (!toggleEl || !panelEl) return;

    const toggle: HTMLButtonElement = toggleEl;
    const panel: HTMLElement = panelEl;
    const items = panel.querySelectorAll<HTMLElement>("[data-menu-item]");
    let isOpen = false;

    // Set initial hidden state
    gsap.set(panel, { autoAlpha: 0, scale: 0.92 });
    gsap.set(items, { y: 8, opacity: 0 });

    // Build paused timeline
    const tl = gsap.timeline({ paused: true });

    tl.to(panel, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)",
    }).to(
        items,
        {
            y: 0,
            opacity: 1,
            duration: 0.25,
            stagger: 0.04,
            ease: "power2.out",
        },
        "-=0.1",
    );

    tl.eventCallback("onReverseComplete", () => {
        isOpen = false;
        toggle.setAttribute("aria-expanded", "false");
    });

    function open() {
        isOpen = true;
        toggle.setAttribute("aria-expanded", "true");
        panel.classList.remove("pointer-events-none");
        tl.timeScale(1).play();
    }

    function close() {
        panel.classList.add("pointer-events-none");
        tl.timeScale(1.5).reverse();
    }

    toggle.addEventListener("click", () => {
        if (!isOpen) open();
        else close();
    });

    document.addEventListener("click", (e) => {
        if (isOpen && !panel.contains(e.target as Node) && !toggle.contains(e.target as Node)) {
            close();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen) {
            close();
        }
    });
}
