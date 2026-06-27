import { o as __toESM } from "../_runtime.mjs";
import { p as require_react } from "../_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as OnboardingAPI } from "./api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as useInvalidateUser } from "./useUser-DBvCy85c.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as BrandLogo } from "./brand-DXDKMmAo.mjs";
import { At as ArrowLeft, Ft as LoaderCircle, Pt as Sparkles, kt as ArrowRight, vt as Check } from "../_libs/lucide-react.mjs";
import { N as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as stringType, i as objectType, n as booleanType, r as coerce, t as arrayType } from "../_libs/zod.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding-uhUnW05A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formSchema = objectType({
	name: stringType().min(2, "Name must be at least 2 characters"),
	age: coerce.number().min(10).max(100),
	language: stringType().min(1),
	firstGen: booleanType(),
	income: stringType().min(1),
	college: stringType().min(1, "College name is required"),
	branch: stringType().min(1, "Branch is required"),
	year: stringType().min(1),
	cgpa: coerce.number().min(0).max(10).optional(),
	careers: arrayType(stringType()).min(0),
	interests: arrayType(stringType()).min(0)
});
var STEPS = [
	{
		key: "intro",
		title: "Welcome to Sahaayak"
	},
	{
		key: "personal",
		title: "About you"
	},
	{
		key: "language",
		title: "Your language"
	},
	{
		key: "family",
		title: "Family background"
	},
	{
		key: "academic",
		title: "Academic life"
	},
	{
		key: "career",
		title: "Career dreams"
	},
	{
		key: "interests",
		title: "Interests & skills"
	},
	{
		key: "done",
		title: "All set"
	}
];
var INCOME_OPTIONS = [
	{
		key: "below-3l",
		label: "Below ₹3L",
		value: 2e5
	},
	{
		key: "3-6l",
		label: "₹3L – ₹6L",
		value: 45e4
	},
	{
		key: "6-12l",
		label: "₹6L – ₹12L",
		value: 8e5
	},
	{
		key: "12l+",
		label: "Above ₹12L",
		value: 15e5
	},
	{
		key: "skip",
		label: "Prefer not to say",
		value: 0
	}
];
var LANGUAGES = [
	"English",
	"हिन्दी",
	"தமிழ்",
	"తెలుగు",
	"বাংলা",
	"मराठी",
	"ગુજરાતી",
	"ಕನ್ನಡ",
	"മലയാളം",
	"ਪੰਜਾਬੀ",
	"ଓଡ଼ିଆ",
	"اردو"
];
var CAREERS = [
	"Software Engineering",
	"Data Science",
	"Civil Services",
	"Medicine",
	"Design",
	"Teaching",
	"Business",
	"Research",
	"Law",
	"Finance"
];
var INTERESTS = [
	"Coding",
	"Writing",
	"Math",
	"Sports",
	"Music",
	"Public speaking",
	"Art",
	"Volunteering",
	"Languages",
	"Entrepreneurship"
];
var YEAR_OPTIONS = [
	"1st year",
	"2nd year",
	"3rd year",
	"4th year",
	"PG"
];
function Onboarding() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(0);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const invalidateUser = useInvalidateUser();
	const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm({
		resolver: u(formSchema),
		defaultValues: {
			name: "",
			age: 18,
			language: "English",
			firstGen: true,
			income: "below-3l",
			college: "",
			branch: "",
			year: "1st year",
			cgpa: 0,
			careers: [],
			interests: []
		}
	});
	(0, import_react.useEffect)(() => {
		OnboardingAPI.getStatus().then((res) => {
			if (res.data?.current_step && res.data.current_step > 1) setStep(Math.min(res.data.current_step - 1, STEPS.length - 1));
		}).catch(() => {});
	}, []);
	const progress = (0, import_react.useMemo)(() => Math.round((step + 1) / STEPS.length * 100), [step]);
	const current = STEPS[step];
	const saveCurrentStep = async (data) => {
		try {
			if (step === 1) {
				await OnboardingAPI.saveAcademic({
					name: data.name,
					age: data.age
				});
				invalidateUser();
			} else if (step === 2) await OnboardingAPI.saveAcademic({ preferred_language: data.language });
			else if (step === 3) {
				const incomeEntry = INCOME_OPTIONS.find((o) => o.key === data.income);
				await OnboardingAPI.saveFamily({
					annual_income: incomeEntry?.value ?? 0,
					first_generation_learner: data.firstGen
				});
			} else if (step === 4) await OnboardingAPI.saveAcademic({
				college: data.college,
				branch: data.branch,
				year: {
					"1st year": 1,
					"2nd year": 2,
					"3rd year": 3,
					"4th year": 4,
					PG: 5
				}[data.year] ?? 1,
				cgpa: data.cgpa || 0
			});
			else if (step === 5) await OnboardingAPI.saveCareer({
				dream_career: data.careers[0] || "",
				skills: data.careers,
				interests: data.interests
			});
			else if (step === 6) {
				await OnboardingAPI.saveCareer({ interests: data.interests });
				await OnboardingAPI.saveAssessment({
					motivation_level: 7,
					confidence_level: 7,
					communication_skill: 7
				});
			}
			return true;
		} catch (err) {
			toast.error(err?.message || "Failed to save. Please try again.");
			return false;
		}
	};
	const next = async () => {
		const data = watch();
		setLoading(true);
		try {
			if (!await saveCurrentStep(data)) return;
			if (step === STEPS.length - 1) {
				await OnboardingAPI.complete();
				invalidateUser();
				toast.success("Your Digital Twin is being generated! 🎉");
				navigate({ to: "/dashboard" });
			} else setStep((s) => s + 1);
		} catch (err) {
			toast.error(err?.message || "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	const back = () => setStep((s) => Math.max(0, s - 1));
	const toggle = (k, v) => {
		const curr = watch(k);
		setValue(k, curr.includes(v) ? curr.filter((x) => x !== v) : [...curr, v]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hero-bg min-h-dvh px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							"Step ",
							step + 1,
							" of ",
							STEPS.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full transition-[width] duration-500",
						style: {
							width: `${progress}%`,
							background: "var(--gradient-primary)"
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-strong shadow-soft mt-6 rounded-3xl p-8 md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: current.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							next();
						},
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-3xl font-semibold tracking-tight md:text-4xl",
										children: "Hi 👋 Let's set things up — gently."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											"This takes about a minute. We'll use your answers to build your ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Digital Twin" }),
											" — a private model that gets you better matches and guidance. You can edit anything later."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "grid gap-2 text-sm text-muted-foreground sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, { children: "Private by default" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, { children: "Skip anything you want" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, { children: "22 Indian languages" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, { children: "Free forever" })
										]
									})
								]
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: "Your name",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
										name: "name",
										control,
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...field,
											id: "name",
											className: "h-11 rounded-xl",
											placeholder: "Anjali Raj"
										})
									}), errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive",
										children: errors.name.message
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Age",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
										name: "age",
										control,
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...field,
											id: "age",
											type: "number",
											className: "h-11 rounded-xl",
											placeholder: "18",
											inputMode: "numeric"
										})
									})
								})]
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Pick the language you think in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
									children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										selected: watch("language") === l,
										onClick: () => setValue("language", l),
										children: l
									}, l))
								})]
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Are you the first in your family to attend college?",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
											selected: watch("firstGen"),
											onClick: () => setValue("firstGen", true),
											children: "Yes"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
											selected: !watch("firstGen"),
											onClick: () => setValue("firstGen", false),
											children: "No"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Annual family income",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: INCOME_OPTIONS.map(({ key, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
											selected: watch("income") === key,
											onClick: () => setValue("income", key),
											children: label
										}, key))
									})
								})]
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "College / Institute",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
											name: "college",
											control,
											render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...field,
												id: "college",
												className: "h-11 rounded-xl",
												placeholder: "e.g. Patna Women's College"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch / Major",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
											name: "branch",
											control,
											render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...field,
												id: "branch",
												className: "h-11 rounded-xl",
												placeholder: "e.g. Computer Science"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Current year",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: YEAR_OPTIONS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
												selected: watch("year") === y,
												onClick: () => setValue("year", y),
												children: y
											}, y))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "CGPA (optional)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
											name: "cgpa",
											control,
											render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...field,
												id: "cgpa",
												type: "number",
												step: "0.1",
												min: "0",
												max: "10",
												className: "h-11 rounded-xl",
												placeholder: "e.g. 8.2",
												inputMode: "decimal"
											})
										})
									})
								]
							}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Which careers excite you? (pick any)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: CAREERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										selected: watch("careers").includes(c),
										onClick: () => toggle("careers", c),
										children: c
									}, c))
								})]
							}),
							step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "What lights you up?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: INTERESTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										selected: watch("interests").includes(c),
										onClick: () => toggle("interests", c),
										children: c
									}, c))
								})]
							}),
							step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto grid size-16 place-items-center rounded-2xl text-primary-foreground shadow-glow",
										style: { background: "var(--gradient-primary)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-7" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-semibold tracking-tight",
										children: "Your Digital Twin is ready."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto max-w-md text-muted-foreground",
										children: "We've created your first dashboard — with personalized scholarships, mentors and a career roadmap waiting."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "ghost",
									onClick: back,
									disabled: step === 0 || loading,
									className: "rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: loading,
									className: "rounded-full px-6 text-primary-foreground shadow-glow",
									style: { background: "var(--gradient-primary)" },
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : step === STEPS.length - 1 ? "Enter dashboard" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })] })
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function Chip({ children, selected, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-all", selected ? "border-transparent text-primary-foreground shadow-glow" : "border-border bg-background/40 text-foreground hover:bg-accent/40"),
		style: selected ? { background: "var(--gradient-primary)" } : void 0,
		children
	});
}
function Li({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-success" }),
			" ",
			children
		]
	});
}
//#endregion
export { Onboarding as component };
