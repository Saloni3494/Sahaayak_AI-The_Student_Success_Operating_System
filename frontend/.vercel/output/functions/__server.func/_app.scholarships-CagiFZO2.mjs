import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { m as ScholarshipAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { Dt as Award, Nt as TriangleAlert, Vt as CircleCheck, Z as GraduationCap, ot as ExternalLink, yt as Calendar } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.scholarships-CagiFZO2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Scholarships() {
	const { user } = useUser();
	const [scholarships, setScholarships] = (0, import_react.useState)([]);
	const [studentId, setStudentId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (user?.id) setStudentId(user.id);
		else setStudentId("student_123");
	}, [user]);
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const loadScholarships = async () => {
			try {
				const res = await ScholarshipAPI.getRecommended(studentId);
				if (res.success && res.data) setScholarships(res.data);
			} catch (err) {
				console.error("Failed to load scholarships", err);
			}
		};
		loadScholarships();
	}, [studentId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-7" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight md:text-3xl",
					children: "Scholarship Hub"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Personalized scholarships matched to your profile and eligibility."
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: scholarships.map((match, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { match }, idx))
		})]
	});
}
function Card({ match }) {
	const { scholarship, eligibility_score, is_eligible, missing_requirements } = match;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `glass shadow-soft flex flex-col rounded-3xl p-5 border-2 ${is_eligible ? "border-primary/20" : "border-border/50"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-primary/10 text-primary p-2 rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `text-xs font-bold px-2 py-1 rounded-full ${is_eligible ? "bg-success/20 text-success" : "bg-warning/20 text-warning"}`,
							children: [eligibility_score, "% Match"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-lg",
						children: scholarship.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: scholarship.provider
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-4 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm text-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Deadline: ", scholarship.deadline] })]
				}), is_eligible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 text-xs text-success/80 bg-success/10 p-2 rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You meet all criteria! Apply before the deadline." })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 text-xs text-warning/80 bg-warning/10 p-2 rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold mb-1",
						children: "Missing Requirements:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc pl-4 space-y-0.5",
						children: missing_requirements.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: req }, i))
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "w-full rounded-full gap-2 shadow-glow",
				disabled: !is_eligible,
				onClick: () => window.open(scholarship.url || "https://scholarships.gov.in", "_blank"),
				children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
			})
		]
	});
}
//#endregion
export { Scholarships as component };
