import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-DXDKMmAo.js
var import_jsx_runtime = require_jsx_runtime();
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative grid size-9 place-items-center rounded-xl text-primary-foreground shadow-glow", className),
		style: { background: "var(--gradient-primary)" },
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-5",
			fill: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 3l2.5 5.5L20 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 3z",
				fill: "currentColor",
				opacity: ".95"
			})
		})
	});
}
function BrandLogo({ collapsed = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col leading-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[15px] font-semibold tracking-tight",
				children: "Sahaayak AI"
			})
		})]
	});
}
//#endregion
export { BrandLogo as t };
