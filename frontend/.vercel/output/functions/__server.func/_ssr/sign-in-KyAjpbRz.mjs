import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SignInForm, t as AuthShell } from "./auth-ui-CRCJgsHO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sign-in-KyAjpbRz.js
var import_jsx_runtime = require_jsx_runtime();
function SignInPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Welcome back",
		subtitle: "Sign in to continue your journey.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"New here?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sign-up",
				className: "text-primary hover:underline",
				children: "Create an account"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInForm, {})
	});
}
//#endregion
export { SignInPage as component };
