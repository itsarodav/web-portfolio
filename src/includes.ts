async function inject(selector: string, url: string) {
    const host = document.querySelector(selector);
    if (!host) return;

    const res = await fetch(url);
    host.innerHTML = await res.text();
}

export async function loadPartials() {
    await Promise.all([
        inject('[data-include="header"]', "/partials/header.html"),
        inject('[data-include="footer"]', "/partials/footer.html"),
    ]);
}

export function setActiveNav() {
    const path = window.location.pathname;

    const about = document.querySelector('[data-nav="about"]');
    const work = document.querySelector('[data-nav="work"]');
    const contact = document.querySelector('[data-nav="contact"]');

    // reset
    [about, work, contact].forEach((el) => {
        el?.classList.remove("bg-slate-900", "text-white");
    });

    // active
    if (path.endsWith("about.html")) {
        about?.classList.add("bg-slate-900", "text-white");
    } else {
        // home
        work?.classList.add("bg-slate-900", "text-white");
    }
}
