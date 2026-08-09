async function inject(selector: string, url: string) {
    const host = document.querySelector(selector);
    if (!host) return;

    const res = await fetch(url);
    host.innerHTML = await res.text();
}

export async function loadPartials() {
    await Promise.all([
        inject('[data-include="header"]', "/partials/header.html"),
        inject('[data-include="experience"]', "/partials/experience.html"),
        inject('[data-include="contact"]', "/partials/contact.html"),
        inject('[data-include="footer"]', "/partials/footer.html"),
    ]);
}

const ACTIVE_CLASSES = ["bg-zinc-200", "dark:bg-zinc-700", "text-zinc-900", "dark:text-white"];

function setDesktopActive(name: string | null) {
    document.querySelectorAll<HTMLElement>("[data-nav]").forEach((el) => {
        el.classList.remove(...ACTIVE_CLASSES);
    });
    if (name) {
        document.querySelector(`[data-nav="${name}"]`)?.classList.add(...ACTIVE_CLASSES);
    }
}

export function setActiveNav() {
    const path = window.location.pathname;

    if (path.endsWith("about.html")) {
        setDesktopActive("about");
    } else if (path.endsWith("resume.html")) {
        setDesktopActive("resume");
    } else {
        // Home — no active by default, scroll spy takes over
        setDesktopActive(null);
    }
}

export { setDesktopActive };
