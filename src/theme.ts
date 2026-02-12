const root = document.documentElement;
const THEME_KEY = "theme";
let isBound = false;

function setTheme(theme: "light" | "dark") {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem(THEME_KEY, theme);

    document
        .querySelectorAll<HTMLButtonElement>("[data-theme-toggle]")
        .forEach((button) => button.setAttribute("aria-pressed", String(isDark)));
}

function getStoredTheme(): "light" | "dark" {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
}

export function initThemeToggle() {
    setTheme(getStoredTheme());

    if (isBound) return;
    isBound = true;

    document.addEventListener("click", (event) => {
        const button = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>("[data-theme-toggle]");
        if (!button) return;

        const nextTheme = root.classList.contains("dark") ? "light" : "dark";
        setTheme(nextTheme);
    });
}
