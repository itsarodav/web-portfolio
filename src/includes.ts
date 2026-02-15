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

export function setActiveNav() {
    const path = window.location.pathname;

    const about = document.querySelector('[data-nav="about"]');
    const work = document.querySelector('[data-nav="work"]');
    const contact = document.querySelector('[data-nav="contact"]');
    const resume = document.querySelector('[data-nav="resume"]');
    const activeClasses = ["bg-zinc-200", "dark:bg-zinc-700", "text-zinc-900", "dark:text-white"];

    // reset
    [about, work, contact, resume].forEach((el) => {
        el?.classList.remove(...activeClasses);
    });

    // active
    if (path.endsWith("about.html")) {
        about?.classList.add(...activeClasses);
    } else if (path.endsWith("resume.html")) {
        resume?.classList.add(...activeClasses);
    } else {
        // home
        work?.classList.add(...activeClasses);
    }
}
