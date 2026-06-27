import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SignUpForm, t as AuthShell } from "./auth-ui-CRCJgsHO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sign-up-rciSQyN2.js
var import_jsx_runtime = require_jsx_runtime();
function SignUpPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Create your free account",
		subtitle: "Join 120,000+ first-generation learners building their futures.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sign-in",
				className: "text-primary hover:underline",
				children: "Sign in"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignUpForm, {})
	});
}
//#endregion
export { SignUpPage as component };
