import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { Lt as Funnel, Ot as ArrowUpRight, T as Search, bt as Building, q as Landmark, x as ShieldCheck } from "./_libs/lucide-react.mjs";
import { t as Input } from "./_ssr/input-DicJzR9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.schemes-LHz-dfYV.js
var import_jsx_runtime = require_jsx_runtime();
var SCHEMES = [
	{
		id: 1,
		title: "Post Matric Scholarship for SC Students",
		dept: "Ministry of Social Justice",
		eligible: true,
		type: "Central",
		amount: "Full Tuition + Maintenance",
		deadline: "Dec 31, 2026"
	},
	{
		id: 2,
		title: "Central Sector Scheme of Scholarships",
		dept: "Dept of Higher Education",
		eligible: true,
		type: "Central",
		amount: "₹10,000/year",
		deadline: "Oct 31, 2026"
	},
	{
		id: 3,
		title: "Chief Minister's Higher Education Scholarship",
		dept: "State Government",
		eligible: false,
		type: "State",
		amount: "Variable",
		deadline: "Rolling"
	}
];
function Schemes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Government Schemes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Discover state and central financial aid programs."
					})] })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col sm:flex-row gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "pl-9 rounded-full h-11 bg-background/50 border-border/50",
						placeholder: "Search schemes..."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "h-11 rounded-full bg-background/50 border-border/50 px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4 mr-2" }), " Filters"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: SCHEMES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass shadow-soft flex flex-col rounded-3xl p-5 hover:border-primary/30 transition-colors opacity-100",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3" }),
								" ",
								s.dept
							]
						}), s.eligible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 text-[10px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3" }), " Eligible"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full",
							children: "Not Eligible"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg mb-2 leading-tight",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] bg-background/60 border border-border/50 px-2 py-1 rounded-md text-muted-foreground",
							children: [s.type, " Scheme"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto space-y-2 pt-4 border-t border-border/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground flex items-center gap-1",
								children: "Amount"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-right max-w-[150px] truncate",
								children: s.amount
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground flex items-center gap-1",
								children: "Deadline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-warning",
								children: s.deadline
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: `w-full mt-4 rounded-full shadow-none transition-all group ${s.eligible ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" : "opacity-50 cursor-not-allowed"}`,
						disabled: !s.eligible,
						children: [
							"View Details",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 ml-1 opacity-50 group-hover:opacity-100" })
						]
					})
				]
			}, s.id))
		})]
	});
}
//#endregion
export { Schemes as component };
