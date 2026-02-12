import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
            },
        },
    },
});
