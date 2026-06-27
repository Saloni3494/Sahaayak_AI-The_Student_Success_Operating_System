import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { jt as Activity } from "./_libs/lucide-react.mjs";
import "./_ssr/router-B3e8z2q8.mjs";
import { a as YAxis, c as Line, g as ResponsiveContainer, h as Tooltip, i as LineChart, l as CartesianGrid, n as AreaChart, o as XAxis, s as Area } from "./_libs/recharts+victory-vendor.mjs";
import { t as CalendarHeatmap } from "./_libs/react-calendar-heatmap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.analytics-B6THeGlb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsDashboard() {
	const [trends, setTrends] = (0, import_react.useState)(null);
	const [heatmap, setHeatmap] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setTrends([
			{
				name: "Week 1",
				success: 65,
				roadmap: 10
			},
			{
				name: "Week 2",
				success: 68,
				roadmap: 15
			},
			{
				name: "Week 3",
				success: 70,
				roadmap: 20
			},
			{
				name: "Week 4",
				success: 72,
				roadmap: 25
			}
		]);
		setHeatmap([
			{
				date: "2026-06-01",
				count: 2
			},
			{
				date: "2026-06-02",
				count: 5
			},
			{
				date: "2026-06-04",
				count: 8
			},
			{
				date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
				count: 3
			}
		]);
	}, []);
	if (!trends) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading..." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "glass-strong shadow-soft overflow-hidden rounded-3xl p-6 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Longitudinal Analytics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Track your educational velocity over time."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold text-lg mb-6",
						children: "Success Score Trend (Weekly)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: trends,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "colorSuccess",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "5%",
											stopColor: "hsl(var(--primary))",
											stopOpacity: .3
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "95%",
											stopColor: "hsl(var(--primary))",
											stopOpacity: 0
										})]
									}) }),
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
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										borderRadius: "1rem",
										border: "1px solid hsl(var(--border))"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "success",
										stroke: "hsl(var(--primary))",
										strokeWidth: 3,
										fillOpacity: 1,
										fill: "url(#colorSuccess)"
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold text-lg mb-6",
						children: "Roadmap Completion Trend"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: trends,
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
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										borderRadius: "1rem",
										border: "1px solid hsl(var(--border))"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "roadmap",
										stroke: "#10b981",
										strokeWidth: 3,
										dot: { r: 4 },
										activeDot: { r: 6 }
									})
								]
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6 shadow-soft overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold text-lg mb-6",
					children: "Activity Heatmap"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-[700px] text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeatmap, {
						startDate: /* @__PURE__ */ new Date("2026-01-01"),
						endDate: /* @__PURE__ */ new Date("2026-12-31"),
						values: heatmap,
						classForValue: (value) => {
							if (!value || value.count === 0) return "fill-muted/30";
							if (value.count < 3) return "fill-primary/40";
							if (value.count < 6) return "fill-primary/70";
							return "fill-primary";
						}
					})
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsDashboard as component };
