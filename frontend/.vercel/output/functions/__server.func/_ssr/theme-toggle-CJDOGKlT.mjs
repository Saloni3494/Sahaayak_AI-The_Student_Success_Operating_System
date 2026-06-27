import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { n as z } from "../_libs/next-themes.mjs";
import { F as Moon, v as Sun } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-CJDOGKlT.js
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle() {
	const { theme, setTheme } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "icon",
		"aria-label": "Toggle theme",
		onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
		className: "rounded-full relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })]
	});
}
//#endregion
export { ThemeToggle as t };
