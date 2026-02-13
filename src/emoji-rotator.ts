export function initEmojiRotator() {
    const el = document.querySelector<HTMLElement>("[data-emoji]");
    if (!el) return;

    // Respeta reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const emojis = ["💻", "🚀", "✨", "🪄", "👾"];
    let i = 0;

    const outClasses = ["opacity-0", "-translate-y-1", "scale-95"];
    const inClasses = ["opacity-100", "translate-y-0", "scale-100"];

    // Estado inicial (por si acaso)
    el.classList.add(...inClasses);

    setInterval(() => {
        // fade out
        el.classList.add(...outClasses);

        // swap en mitad de la transición
        window.setTimeout(() => {
        i = (i + 1) % emojis.length;
        el.textContent = emojis[i];

        // fade in
        el.classList.remove(...outClasses);
        el.classList.add(...inClasses);
        }, 180);
    }, 2200);
}
