import gsap from "gsap";
import { t } from "./i18n";

export function initCopyEmail() {
    const buttons = document.querySelectorAll<HTMLButtonElement>("[data-copy-email]");

    buttons.forEach((button) => {
        const feedbackRoot = button.closest("[data-copy-email]")?.parentElement?.parentElement;
        const feedback = feedbackRoot?.querySelector<HTMLElement>("[data-copy-feedback]");

        button.addEventListener("click", async () => {
            const text = button.dataset.copyText?.trim() || "";
            if (!text) return;

            let copied = false;
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                    copied = true;
                } else {
                    // Fallback for mobile / non-secure contexts
                    const ta = document.createElement("textarea");
                    ta.value = text;
                    ta.style.position = "fixed";
                    ta.style.left = "-9999px";
                    ta.style.opacity = "0";
                    document.body.appendChild(ta);
                    ta.focus();
                    ta.select();
                    copied = document.execCommand("copy");
                    document.body.removeChild(ta);
                }
            } catch {
                copied = false;
            }

            if (feedback) {
                if (copied) {
                    feedback.textContent = t("contact.copied");
                    feedback.classList.remove("bg-red-500");
                    feedback.classList.add("bg-brand-1");
                } else {
                    feedback.textContent = t("contact.copy.fail");
                    feedback.classList.remove("bg-brand-1");
                    feedback.classList.add("bg-red-500");
                }
                gsap.killTweensOf(feedback);
                gsap.fromTo(
                    feedback,
                    { y: 6, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out",
                        onComplete() {
                            gsap.to(feedback, { y: -4, opacity: 0, duration: 0.25, ease: "power2.in", delay: 1.8 });
                        },
                    },
                );
            }

            // Button pulse
            if (copied) {
                gsap.fromTo(
                    button,
                    { scale: 1 },
                    { scale: 1.03, duration: 0.15, ease: "power2.out", yoyo: true, repeat: 1 },
                );
            }
        });
    });
}
