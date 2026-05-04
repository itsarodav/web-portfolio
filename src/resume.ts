import "./styles.css";
import { loadPartials, setActiveNav } from "./includes";
import { initThemeToggle } from "./theme";
import { initMobileMenu } from "./mobile-menu";

await loadPartials();
setActiveNav();
initThemeToggle();
initMobileMenu();
