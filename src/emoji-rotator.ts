import gsap from "gsap";

export function initEmojiRotator() {
    const el = document.querySelector<HTMLElement>("[data-emoji]");
    if (!el) return;

    // Respeta reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const emojis = ["💻", "🚀", "✨", "🪄", "👾", "🤖", "🛸", "🌐", "💡"];
    let i = 0;

    setInterval(() => {
        // Exit: sube y desaparece con rotación 3D
        gsap.to(el, {
            y: -12,
            opacity: 0,
            scale: 0.7,
            rotateX: 60,
            duration: 0.2,
            ease: "power2.in",
            onComplete() {
                // Swap emoji
                i = (i + 1) % emojis.length;
                el.textContent = emojis[i];

                // Enter: entra desde abajo con rebote
                gsap.fromTo(
                    el,
                    { y: 12, opacity: 0, scale: 0.7, rotateX: -60 },
                    { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.3, ease: "back.out(1.5)" },
                );
            },
        });
    }, 2000);
}
