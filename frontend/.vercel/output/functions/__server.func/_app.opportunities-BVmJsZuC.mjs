import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { d as OpportunitiesAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { H as MapPin, St as Briefcase, _ as Target, kt as ArrowRight, ot as ExternalLink, t as Zap, xt as Building2 } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.opportunities-BVmJsZuC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Opportunities() {
	const { user } = useUser();
	const [opportunities, setOpportunities] = (0, import_react.useState)([]);
	const [studentId, setStudentId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (user?.id) setStudentId(user.id);
		else setStudentId("student_123");
	}, [user]);
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const loadOpportunities = async () => {
			try {
				const res = await OpportunitiesAPI.getRecommended(studentId);
				if (res.success && res.data) setOpportunities(res.data);
			} catch (err) {
				console.error("Failed to load opportunities", err);
			}
		};
		loadOpportunities();
	}, [studentId]);
	const handleApply = async (opportunityId) => {
		try {
			if ((await OpportunitiesAPI.apply(opportunityId, studentId)).success) toast.success("Successfully applied!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to submit application.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-7" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight md:text-3xl",
					children: "Opportunity Copilot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "AI-curated internships and jobs matching your digital twin."
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: opportunities.map((match, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunityCard, {
				match,
				onApply: handleApply
			}, idx))
		})]
	});
}
function OpportunityCard({ match, onApply }) {
	const { opportunity, eligibility_score, readiness, missing_skills, recommended_actions } = match;
	const isReady = readiness === "Ready";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `glass shadow-soft flex flex-col rounded-3xl p-5 border border-border/50`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-start mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-12 rounded-xl bg-muted grid place-items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-6 text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-lg",
						children: opportunity.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: opportunity.company
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold px-2 py-1 rounded-full bg-background border border-border",
						children: opportunity.type
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `text-xs font-bold px-2 py-1 rounded-full ${isReady ? "bg-success/20 text-success" : "bg-primary/20 text-primary"}`,
						children: [eligibility_score, "% Match"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-4 text-xs text-muted-foreground mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
						" ",
						opportunity.location
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-4 mb-6",
				children: [!isReady && missing_skills && missing_skills.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-2 text-xs font-semibold text-warning",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" }), " Missing Skills"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: missing_skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs bg-warning/10 text-warning px-2 py-1 rounded-md",
						children: s
					}, i))
				})] }), recommended_actions && recommended_actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-primary/5 rounded-xl p-3 border border-primary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-2 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" }), " Recommended Actions"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: recommended_actions.map((act, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-xs text-foreground/80 flex items-start gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 mt-0.5 shrink-0 text-primary/60" }),
								" ",
								act
							]
						}, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => onApply(opportunity.id),
				className: "w-full rounded-xl gap-2 shadow-glow",
				variant: isReady ? "default" : "outline",
				children: [
					isReady ? "Apply Now" : "Save for Later",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
				]
			})
		]
	});
}
//#endregion
export { Opportunities as component };
