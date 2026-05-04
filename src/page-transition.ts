import gsap from "gsap";

let isBound = false;

export function initPageTransition() {
    const main = document.querySelector("main");
    if (!main) return;

    // Entry animation — autoAlpha handles visibility + opacity together
    gsap.fromTo(
        main,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );

    if (isBound) return;
    isBound = true;

    // Exit animation on internal link clicks
    document.addEventListener("click", (e) => {
        const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href) return;

        // Only handle internal page links (not anchors, external, or same-page)
        const isInternal =
            (href.endsWith(".html") || href === "/") &&
            !href.startsWith("http") &&
            !href.startsWith("mailto:");

        if (!isInternal) return;

        e.preventDefault();

        gsap.to(main, {
            autoAlpha: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                window.location.href = href;
            },
        });
    });
}
