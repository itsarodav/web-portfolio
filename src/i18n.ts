const LANG_KEY = "lang";
type Lang = "en" | "es";
let translations: Record<string, string> = {};
let isBound = false;

function getStoredLang(): Lang {
    try {
        const stored = localStorage.getItem(LANG_KEY);
        if (stored === "en" || stored === "es") return stored;
    } catch {}
    return navigator.language.startsWith("es") ? "es" : "en";
}

async function loadTranslations(lang: Lang) {
    const res = await fetch(`/locales/${lang}.json`);
    translations = await res.json();
}

function applyTranslations() {
    document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n")!;
        if (key in translations) {
            el.textContent = translations[key];
        }
    });

    document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html")!;
        if (key in translations) {
            el.innerHTML = translations[key];
        }
    });

    // Update toggle labels to show the OTHER language
    const currentLang = document.documentElement.lang as Lang;
    const label = currentLang === "en" ? "ES" : "EN";
    document.querySelectorAll<HTMLElement>("[data-lang-label]").forEach((el) => {
        el.textContent = label;
    });
}

async function setLang(lang: Lang) {
    await loadTranslations(lang);
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
}

export function t(key: string): string {
    return translations[key] ?? key;
}

export async function initI18n() {
    const lang = getStoredLang();
    await setLang(lang);

    if (isBound) return;
    isBound = true;

    document.addEventListener("click", (event) => {
        const button = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>("[data-lang-toggle]");
        if (!button) return;

        const currentLang = document.documentElement.lang as Lang;
        const nextLang: Lang = currentLang === "en" ? "es" : "en";
        setLang(nextLang);
    });
}
