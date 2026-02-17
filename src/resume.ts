import "./styles.css";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";

await loadPartials();
setActiveNav();
initThemeToggle();
