import { o as __toESM } from "../_runtime.mjs";
import { p as require_react } from "../_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as AuthAPI } from "./api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as useInvalidateUser } from "./useUser-DBvCy85c.mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as BrandLogo } from "./brand-DXDKMmAo.mjs";
import { Ft as LoaderCircle, G as Lock, U as Mail, at as EyeOff, it as Eye, kt as ArrowRight, s as User } from "../_libs/lucide-react.mjs";
import { N as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-ui-CRCJgsHO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthShell({ title, subtitle, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hero-bg relative grid min-h-dvh place-items-center px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-strong shadow-soft rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-semibold tracking-tight",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 text-center text-sm text-muted-foreground",
					children: footer
				})
			]
		})
	});
}
function PasswordField({ id, label = "Password", ...props }) {
	const [show, setShow] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id,
					type: show ? "text" : "password",
					className: "h-11 rounded-xl pl-10 pr-10",
					...props
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShow((v) => !v),
					className: "absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:text-foreground",
					"aria-label": show ? "Hide password" : "Show password",
					children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
				})
			]
		})]
	});
}
function IconInput({ id, label, icon, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id,
				className: "h-11 rounded-xl pl-10",
				...props
			})]
		})]
	});
}
function PrimaryButton({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		...props,
		className: "h-11 w-full rounded-xl text-primary-foreground shadow-glow",
		style: { background: "var(--gradient-primary)" },
		children
	});
}
function GoogleButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "outline",
		className: "h-11 w-full rounded-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: "size-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FFC107",
					d: "M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1 7.4 2.7l5.7-5.7C33.7 6.9 29.1 5 24 5 13.5 5 5 13.5 5 24s8.5 19 19 19 19-8.5 19-19c0-1.2-.1-2.3-.4-3.5z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FF3D00",
					d: "M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.4 1 7.4 2.7l5.7-5.7C33.7 6.9 29.1 5 24 5 16.3 5 9.6 9.3 6.3 14.7z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#4CAF50",
					d: "M24 43c5.1 0 9.7-1.9 13.2-5.1l-6.1-5c-2 1.4-4.5 2.1-7.1 2.1-5.3 0-9.7-2.6-11.3-7l-6.5 5C9.4 38.7 16.1 43 24 43z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#1976D2",
					d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4-4 5.4l6.1 5c2.6-2.4 4.6-6 5.6-9.9.4-1.4.4-2.7.4-4 0-1.2-.1-2.3-.4-3.5z"
				})
			]
		}), "Continue with Google"]
	});
}
function SignInForm() {
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const invalidateUser = useInvalidateUser();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");
		try {
			const res = await AuthAPI.login({
				email,
				password
			});
			if (res.success && res.data) {
				localStorage.setItem("access_token", res.data.access_token);
				localStorage.setItem("refresh_token", res.data.refresh_token);
				invalidateUser();
				toast.success("Welcome back!");
				navigate({ to: "/dashboard" });
			}
		} catch (err) {
			console.error("[SignIn]", err);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: handleSubmit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInput, {
				id: "email",
				name: "email",
				label: "Email",
				type: "email",
				placeholder: "you@college.edu",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
				id: "password",
				name: "password",
				placeholder: "••••••••",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "size-3.5 rounded border-border bg-background"
					}), "Remember me"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "text-primary hover:underline",
					children: "Forgot password?"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
				type: "submit",
				disabled: loading,
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Sign in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative my-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bg-card relative z-10 px-3 text-xs uppercase tracking-wider text-muted-foreground",
					children: "or"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/2 -z-0 h-px bg-border" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, {})
		]
	});
}
function SignUpForm() {
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const invalidateUser = useInvalidateUser();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.currentTarget);
		const full_name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		try {
			const res = await AuthAPI.signup({
				email,
				password,
				full_name
			});
			if (res.success && res.data) {
				localStorage.setItem("access_token", res.data.access_token);
				localStorage.setItem("refresh_token", res.data.refresh_token);
				invalidateUser();
				toast.success("Account created! Let's get you set up 🎉");
				navigate({ to: "/onboarding" });
			}
		} catch (err) {
			console.error("[SignUp]", err);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: handleSubmit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInput, {
				id: "name",
				name: "name",
				label: "Full name",
				placeholder: "Anjali Raj",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInput, {
				id: "email",
				name: "email",
				label: "Email",
				type: "email",
				placeholder: "you@college.edu",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
				id: "password",
				name: "password",
				placeholder: "At least 8 characters",
				required: true,
				minLength: 8
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
				type: "submit",
				disabled: loading,
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Create account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative my-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bg-card relative z-10 px-3 text-xs uppercase tracking-wider text-muted-foreground",
					children: "or"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/2 -z-0 h-px bg-border" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pt-1 text-center text-[11px] text-muted-foreground",
				children: "By continuing you agree to our Terms and Privacy. Sahaayak is free for all students."
			})
		]
	});
}
//#endregion
export { SignInForm as n, SignUpForm as r, AuthShell as t };
