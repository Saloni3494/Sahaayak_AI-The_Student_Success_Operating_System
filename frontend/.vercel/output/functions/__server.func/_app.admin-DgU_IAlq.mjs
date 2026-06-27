import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { Bt as CircleCheckBig, Nt as TriangleAlert, S as ShieldAlert, d as TrendingUp, m as ToggleLeft, o as Users, p as ToggleRight } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.admin-DgU_IAlq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const [metrics, setMetrics] = (0, import_react.useState)(null);
	const [featureFlags, setFeatureFlags] = (0, import_react.useState)([
		{
			name: "VOICE_ASSISTANT",
			enabled: true,
			allowed: "STUDENT"
		},
		{
			name: "PARENT_MODE",
			enabled: true,
			allowed: "PARENT,ADMIN"
		},
		{
			name: "PREDICTIVE_ENGINE",
			enabled: true,
			allowed: "ADMIN,MENTOR"
		},
		{
			name: "COMMUNITY_FORUM",
			enabled: false,
			allowed: "STUDENT"
		}
	]);
	(0, import_react.useEffect)(() => {
		setMetrics({
			total_students: 1250,
			total_mentors: 45,
			active_sessions: 12,
			success_index_avg: 76.5,
			interventions_triggered: 34
		});
	}, []);
	const toggleFlag = (idx) => {
		const newFlags = [...featureFlags];
		newFlags[idx].enabled = !newFlags[idx].enabled;
		setFeatureFlags(newFlags);
	};
	if (!metrics) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading Admin Portal..." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "glass-strong shadow-soft overflow-hidden rounded-3xl p-6 md:p-8 border border-destructive/20 bg-destructive/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-destructive text-destructive-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl text-destructive",
						children: "Platform Administration"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive/80 font-medium",
						children: "Production Control Center - Restricted Access"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-5 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						title: "Total Students",
						value: metrics.total_students,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						title: "Total Mentors",
						value: metrics.total_mentors,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						title: "Active Sessions",
						value: metrics.active_sessions,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						title: "Avg Success Score",
						value: metrics.success_index_avg,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						title: "Interventions",
						value: metrics.interventions_triggered,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "text-warning" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold text-xl mb-4 border-b border-border/50 pb-2",
						children: "Feature Flags"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: featureFlags.map((flag, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4 bg-background border border-border/50 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: flag.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground uppercase font-bold tracking-wider mt-1",
								children: ["Allowed: ", flag.allowed]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleFlag(idx),
								className: `p-2 rounded-xl transition-colors ${flag.enabled ? "text-success bg-success/10" : "text-muted-foreground bg-muted/20"}`,
								children: flag.enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRight, { className: "size-8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleLeft, { className: "size-8" })
							})]
						}, idx))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-6 shadow-soft flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold text-xl border-b border-border/50 pb-2",
							children: "User Management"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 bg-background border border-border/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-10 text-muted-foreground mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold",
									children: "Pending Mentor Approvals (0)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "All mentors have been verified."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 bg-background border border-border/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-10 text-muted-foreground mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold",
									children: "Audit Logs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "View system-wide security actions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "mt-3 px-4 py-2 bg-primary/10 text-primary font-bold rounded-xl text-sm",
									children: "View Logs"
								})
							]
						})
					]
				})]
			})
		]
	});
}
function MetricCard({ title, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-4 shadow-sm flex flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-full bg-primary/10 text-primary grid place-items-center mb-2",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-2xl font-extrabold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground font-semibold mt-1",
				children: title
			})
		]
	});
}
//#endregion
export { AdminDashboard as component };
