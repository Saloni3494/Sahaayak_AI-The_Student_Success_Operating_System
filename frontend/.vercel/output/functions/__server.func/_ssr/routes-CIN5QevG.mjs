import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as BrandLogo } from "./brand-DXDKMmAo.mjs";
import { D as Rocket, I as Mic, N as Network, Pt as Sparkles, Vt as CircleCheck, X as HeartHandshake, Z as GraduationCap, et as Gauge, j as Play, k as Quote, kt as ArrowRight, nt as FileText, o as Users, ut as Compass, y as Star } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-CJDOGKlT.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIN5QevG.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		icon: Sparkles,
		title: "AI Mentor",
		body: "Always-on guidance in your language, from doubts to decisions."
	},
	{
		icon: Network,
		title: "Student Digital Twin",
		body: "A living profile that learns who you are and what you need."
	},
	{
		icon: Compass,
		title: "Career GPS",
		body: "Step-by-step roadmaps from where you are to where you dream."
	},
	{
		icon: Rocket,
		title: "Opportunity Copilot",
		body: "Internships, fellowships and contests, ranked for you."
	},
	{
		icon: GraduationCap,
		title: "Scholarships",
		body: "Discover, qualify and apply — without missing deadlines."
	},
	{
		icon: FileText,
		title: "Resume Analyzer",
		body: "ATS score, gaps and rewrites — in seconds."
	},
	{
		icon: Gauge,
		title: "Success Index",
		body: "A holistic signal of your academic, career and wellness journey."
	},
	{
		icon: Mic,
		title: "Voice AI",
		body: "Speak in Hindi, Tamil, Bengali, Marathi — and 18 more."
	},
	{
		icon: HeartHandshake,
		title: "Parent Assistant",
		body: "Helps families understand placements, degrees and aid."
	}
];
var STATS = [
	{
		value: "1.2 Cr+",
		label: "First-gen learners in India"
	},
	{
		value: "73%",
		label: "Lack structured career guidance"
	},
	{
		value: "₹8,000 Cr",
		label: "Of scholarships go unclaimed yearly"
	},
	{
		value: "4.3×",
		label: "Higher confidence with a mentor"
	}
];
var STEPS = [
	{
		n: "01",
		t: "Create your profile",
		b: "Tell us your story — academics, family, dreams."
	},
	{
		n: "02",
		t: "We build your Digital Twin",
		b: "An evolving model of your strengths and gaps."
	},
	{
		n: "03",
		t: "Receive personalized guidance",
		b: "Mentorship, scholarships and roadmaps — for you."
	},
	{
		n: "04",
		t: "Track your success journey",
		b: "Watch your Success Index grow week by week."
	}
];
var TESTIMONIALS = [
	{
		name: "Anjali R.",
		where: "B.Sc · Patna",
		quote: "I'm the first in my family to go to college. Sahaayak helped me find ₹60,000 in scholarships I never knew existed."
	},
	{
		name: "Vignesh K.",
		where: "B.Tech · Coimbatore",
		quote: "The Career GPS made the data-science path feel possible. Three internships later, I know it is."
	},
	{
		name: "Pooja S.",
		where: "B.A · Bhopal",
		quote: "My parents finally understand my career — Sahaayak explained it to them in Hindi, with voice. That mattered."
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 z-40 border-b border-border/50 bg-background/60 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#impact",
									className: "hover:text-foreground",
									children: "Impact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#stories",
									className: "hover:text-foreground",
									children: "Stories"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "sm",
									className: "rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sign-in",
										children: "Sign in"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "rounded-full text-primary-foreground shadow-glow",
									style: { background: "var(--gradient-primary)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/sign-up",
										children: ["Get started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero-bg relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-5 pb-24 pt-20 lg:pt-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-success" }), "Built for first-generation college students"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
								children: [
									"Your AI companion for",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text",
										children: "academic and career"
									}),
									" ",
									"success."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-muted-foreground",
								children: "Personalized guidance, scholarships, mentorship and opportunities for every first-generation learner — in the language you think in."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-full px-7 text-primary-foreground shadow-glow",
									style: { background: "var(--gradient-primary)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/sign-up",
										children: ["Get started free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									className: "rounded-full px-6 backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#how",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), " Watch the demo"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-success" }), " Free for students"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-success" }), " 22 Indian languages"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-success" }),
											" ",
											"Privacy-first"
										]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border/60 bg-surface/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-12 md:grid-cols-4",
					children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gradient-text text-3xl font-bold md:text-4xl",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground md:text-sm",
							children: s.label
						})]
					}, s.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "mx-auto max-w-7xl px-5 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
							children: "The ecosystem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
							children: "Everything you need to thrive, in one calm place."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Sahaayak weaves together mentorship, money, opportunities and wellbeing — and adapts as you grow."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: FEATURES.map((f) => {
						const Icon = f.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass shadow-soft group relative overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100",
									style: { background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-11 place-items-center rounded-2xl text-primary-foreground shadow-glow",
									style: { background: "var(--gradient-primary)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
									children: f.body
								})
							]
						}, f.title);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how",
				className: "relative bg-surface/40 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
							children: "How it works"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
							children: "From confused to confident in four steps."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "relative mt-14 grid gap-6 md:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute left-6 right-6 top-7 hidden h-px md:block",
							style: { background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }
						}), STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "glass shadow-soft relative rounded-3xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-2xl text-sm font-bold text-primary-foreground shadow-glow",
									style: { background: "var(--gradient-primary)" },
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-semibold",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
									children: s.b
								})
							]
						}, s.n))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "stories",
				className: "mx-auto max-w-7xl px-5 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: "Stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-bold tracking-tight md:text-5xl",
						children: "Real students. Real first steps."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "glass shadow-soft rounded-3xl p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 text-base leading-relaxed text-foreground/90",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-10 place-items-center rounded-full text-sm font-bold text-primary-foreground",
										style: { background: "var(--gradient-primary)" },
										children: t.name[0]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: t.where
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "ml-auto flex text-warning",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-current" }, i))
									})
								]
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "impact",
				className: "border-y border-border/60 bg-surface/40 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 md:grid-cols-4",
					children: [
						{
							v: "120k+",
							l: "Students supported"
						},
						{
							v: "₹14 Cr",
							l: "Scholarships won"
						},
						{
							v: "38k",
							l: "Opportunities matched"
						},
						{
							v: "9.2k",
							l: "Mentors connected"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gradient-text text-4xl font-bold md:text-5xl",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground md:text-sm",
							children: s.l
						})]
					}, s.l))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-bg relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border p-12 text-center shadow-soft md:p-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto size-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl",
							children: "Your first college step shouldn't be the hardest."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-muted-foreground",
							children: "Join Sahaayak — and never figure it out alone again."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-full px-7 text-primary-foreground shadow-glow",
								style: { background: "var(--gradient-primary)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sign-up",
									children: ["Create my free account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "rounded-full px-6 backdrop-blur",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									children: "Explore the platform"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/60 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"Ensuring no first-generation student is left behind. ©",
						" ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sahaayak AI."
					] })]
				})
			})
		]
	});
}
function GridBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-40",
			style: {
				backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
				backgroundSize: "56px 56px",
				maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent 70%)"
			}
		})
	});
}
function HeroVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative isolate mx-auto aspect-[1/1] w-full max-w-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-8 rounded-full blur-3xl",
				style: {
					background: "var(--gradient-primary)",
					opacity: .35
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-12 grid place-items-center rounded-full border border-border shadow-glow",
				style: { background: "conic-gradient(from 120deg, color-mix(in oklab, var(--primary) 40%, var(--surface)), color-mix(in oklab, var(--accent) 30%, var(--surface)), color-mix(in oklab, var(--secondary) 35%, var(--surface)), color-mix(in oklab, var(--primary) 40%, var(--surface)))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-strong grid size-28 place-items-center rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10 text-primary" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
				className: "left-[-2%] top-[10%] animate-float",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4 text-success" }),
				title: "Scholarship found",
				body: "INSPIRE · ₹80,000"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
				className: "right-[-4%] top-[28%] animate-float",
				style: { animationDelay: "1.2s" },
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-accent" }),
				title: "Mentor connected",
				body: "Priya · Data Scientist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
				className: "bottom-[6%] left-[8%] animate-float",
				style: { animationDelay: "2.4s" },
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 text-primary" }),
				title: "Career roadmap",
				body: "6 milestones generated"
			})
		]
	});
}
function FloatingCard({ className, style, icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `glass-strong shadow-soft absolute flex w-[210px] items-center gap-3 rounded-2xl p-3 ${className ?? ""}`,
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid size-9 shrink-0 place-items-center rounded-xl bg-background/60",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-sm font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-xs text-muted-foreground",
				children: body
			})]
		})]
	});
}
//#endregion
export { Landing as component };
