import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { H as MapPin, Pt as Sparkles, _ as Target, xt as Building2, y as Star } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.success-stories-DSda_KC8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SuccessStories() {
	const [stories, setStories] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setStories([{
			id: "story1",
			title: "From Rural Maharashtra to Google",
			story: "Coming from a village with poor internet, I started learning Python on my phone. The roadmap provided by Sahaayak AI helped me structure my learning. I eventually got an internship at TCS, which opened the door to Google.",
			career_outcome: "Software Engineer",
			company: "Google",
			similarity_score: 92,
			featured: true,
			author: "Ravi S.",
			location: "Solapur, MH"
		}, {
			id: "story2",
			title: "Breaking into ML without a Tier-1 college",
			story: "I didn't have the IIT tag, so I focused purely on Kaggle competitions and open-source contributions. A mentor I met here reviewed my projects and referred me to NVIDIA.",
			career_outcome: "ML Engineer",
			company: "NVIDIA",
			similarity_score: 85,
			featured: false,
			author: "Anjali M.",
			location: "Pune, MH"
		}]);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 bg-gradient-to-br from-primary/10 to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/20 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Success Stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Inspiring journeys from students with backgrounds just like yours."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "default",
						className: "rounded-full h-8 text-xs",
						children: "Recommended for You"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-full h-8 text-xs",
						children: "First Generation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-full h-8 text-xs",
						children: "Rural Background"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-full h-8 text-xs",
						children: "ML Engineering"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: stories.map((story, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { story }, idx))
			})
		]
	});
}
function StoryCard({ story }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `glass shadow-soft rounded-3xl p-6 border ${story.featured ? "border-primary/30 bg-primary/5" : "border-border/50"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-start mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-12 rounded-full bg-muted grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-lg text-muted-foreground",
							children: story.author[0]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-bold",
						children: story.author
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
							" ",
							story.location
						]
					})] })]
				}), story.similarity_score >= 90 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }),
						" ",
						story.similarity_score,
						"% Similar Background"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold text-xl mb-3 leading-tight",
				children: story.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-foreground/80 mb-6 italic leading-relaxed",
				children: [
					"\"",
					story.story,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background rounded-2xl p-4 border border-border/50 flex flex-col sm:flex-row sm:items-center gap-4 justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-1 uppercase font-semibold tracking-wider",
						children: "Current Role"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-sm",
							children: story.career_outcome
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full sm:h-8 sm:w-px bg-border/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-1 uppercase font-semibold tracking-wider",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-sm",
							children: story.company
						})]
					})] })
				]
			})
		]
	});
}
//#endregion
export { SuccessStories as component };
