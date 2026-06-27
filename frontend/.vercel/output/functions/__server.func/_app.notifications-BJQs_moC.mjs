import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { Et as Bell, Lt as Funnel, Pt as Sparkles, R as MessageSquare, S as ShieldAlert, Z as GraduationCap, vt as Check } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.notifications-BJQs_moC.js
var import_jsx_runtime = require_jsx_runtime();
var NOTIFICATIONS = [
	{
		id: 1,
		type: "risk",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4" }),
		title: "Low Attendance Alert",
		desc: "You have missed 3 classes in Math II.",
		time: "2 hours ago",
		unread: true,
		color: "text-destructive",
		bg: "bg-destructive/10"
	},
	{
		id: 2,
		type: "scholarship",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4" }),
		title: "Scholarship Deadline",
		desc: "INSPIRE Scholarship application closes in 3 days.",
		time: "5 hours ago",
		unread: true,
		color: "text-warning",
		bg: "bg-warning/10"
	},
	{
		id: 3,
		type: "ai",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
		title: "New AI Recommendation",
		desc: "I found a new internship matching your Digital Twin profile.",
		time: "Yesterday",
		unread: false,
		color: "text-primary",
		bg: "bg-primary/10"
	},
	{
		id: 4,
		type: "mentor",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }),
		title: "Message from Priya Menon",
		desc: "Yes, we can schedule a mock interview this weekend.",
		time: "Yesterday",
		unread: false,
		color: "text-accent",
		bg: "bg-accent/10"
	}
];
function Notifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Notifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Stay updated on your journey."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "rounded-full bg-background/50 border-border/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-full bg-background/50 border-border/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 mr-2" }), " Mark all read"]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass shadow-soft rounded-3xl p-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/50",
				children: NOTIFICATIONS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex gap-4 p-4 hover:bg-background/40 transition-colors rounded-2xl ${n.unread ? "bg-background/20" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid size-10 shrink-0 place-items-center rounded-full ${n.bg} ${n.color}`,
							children: n.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: `text-sm ${n.unread ? "font-bold" : "font-semibold"}`,
									children: n.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground whitespace-nowrap ml-2",
									children: n.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-sm ${n.unread ? "text-foreground" : "text-muted-foreground"}`,
								children: n.desc
							})]
						}),
						n.unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-primary mt-2 shrink-0" })
					]
				}, n.id))
			})
		})]
	});
}
//#endregion
export { Notifications as component };
