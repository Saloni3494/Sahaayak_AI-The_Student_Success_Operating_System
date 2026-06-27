import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { Nt as TriangleAlert, Ut as ChartLine, _ as Target, wt as BrainCircuit } from "./_libs/lucide-react.mjs";
import { a as YAxis, c as Line, g as ResponsiveContainer, h as Tooltip, i as LineChart, l as CartesianGrid, o as XAxis } from "./_libs/recharts+victory-vendor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.predictions-Boh8-40_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PredictionsDashboard() {
	const [predictions, setPredictions] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setPredictions({
			risks: [{
				type: "Career Risk",
				risk_level: "MEDIUM",
				prediction: "May face difficulties in upcoming placement season.",
				explanation: "Career readiness dropped because roadmap completion decreased by 12%.",
				recommended_action: "Complete two roadmap milestones this week."
			}],
			placement_probability: 81,
			forecast: [
				{
					name: "Today",
					score: 72
				},
				{
					name: "30 Days",
					score: 74
				},
				{
					name: "90 Days",
					score: 78
				},
				{
					name: "180 Days",
					score: 84
				}
			]
		});
	}, []);
	if (!predictions) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading..." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "glass-strong shadow-soft overflow-hidden rounded-3xl p-6 md:p-8 bg-gradient-to-r from-primary/10 via-background to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Predictive Intelligence Engine"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Forecasting your success through explainable AI."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 lg:col-span-1 shadow-soft flex flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-16 rounded-2xl bg-success/10 text-success grid place-items-center mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-lg mb-2",
							children: "Placement Probability"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-6xl font-extrabold text-foreground mb-4",
							children: [predictions.placement_probability, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm bg-primary/5 p-3 rounded-xl border border-primary/10 text-primary/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold block mb-1",
								children: "Explainability Insight:"
							}), "High probability primarily due to Mentor Session attendance and Project completion."]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 lg:col-span-2 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-semibold text-lg mb-6 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "size-5 text-primary" }), " Success Score Forecast (180 Days)"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: predictions.forecast,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										vertical: false,
										stroke: "hsl(var(--border))"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										stroke: "hsl(var(--muted-foreground))",
										fontSize: 12,
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "hsl(var(--muted-foreground))",
										fontSize: 12,
										tickLine: false,
										axisLine: false,
										domain: ["dataMin - 10", "dataMax + 10"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										borderRadius: "1rem",
										border: "1px solid hsl(var(--border))"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "score",
										stroke: "hsl(var(--primary))",
										strokeWidth: 3,
										strokeDasharray: "5 5",
										dot: { r: 5 },
										activeDot: { r: 8 }
									})
								]
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-xl pt-4",
				children: "Identified Risks & Recommendations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-4",
				children: predictions.risks.map((risk, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 border-l-4 border-l-warning shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-warning font-bold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5" }),
									" ",
									risk.type
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-bold px-2 py-1 rounded-full bg-warning/20 text-warning",
								children: [risk.risk_level, " RISK"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium mb-3",
							children: risk.prediction
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 pt-3 border-t border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1",
								children: "Why?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-foreground/80",
								children: risk.explanation
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1",
								children: "Action"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-primary",
								children: risk.recommended_action
							})] })]
						})
					]
				}, idx))
			})
		]
	});
}
//#endregion
export { PredictionsDashboard as component };
