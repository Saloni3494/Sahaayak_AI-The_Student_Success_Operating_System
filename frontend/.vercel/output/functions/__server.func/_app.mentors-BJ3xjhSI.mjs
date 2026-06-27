import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { l as MentorAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { Q as Globe, St as Briefcase, o as Users, xt as Building2, yt as Calendar } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.mentors-BJ3xjhSI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Mentors() {
	const { user } = useUser();
	const [mentors, setMentors] = (0, import_react.useState)([]);
	const [studentId, setStudentId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (user?.id) setStudentId(user.id);
		else setStudentId("student_123");
	}, [user]);
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const loadMentors = async () => {
			try {
				const res = await MentorAPI.getRecommended(studentId);
				if (res.success && res.data) setMentors(res.data);
			} catch (err) {
				console.error("Failed to load mentors", err);
			}
		};
		loadMentors();
	}, [studentId]);
	const handleBookSession = async (mentorId) => {
		try {
			if ((await MentorAPI.bookSession(mentorId, studentId)).success) toast.success("Session requested successfully!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to book session.");
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-7" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight md:text-3xl",
					children: "Mentor Network"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Connect with industry professionals who share your background and goals."
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: mentors.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MentorCard, {
				mentor: m,
				onBook: handleBookSession
			}, idx))
		})]
	});
}
function MentorCard({ mentor, onBook }) {
	const { id, mentor_id, mentor_name, designation, company, match_score, reason, languages, availability } = mentor;
	const targetId = mentor_id || id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass shadow-soft flex flex-col rounded-3xl p-5 border border-border/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-start mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-14 rounded-full bg-muted grid place-items-center shrink-0 border-2 border-primary/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-6 text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg",
							children: mentor_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground font-medium flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-3" }),
								" ",
								designation
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-0.5 flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3" }),
								" ",
								company
							]
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs font-bold px-2 py-1 rounded-full bg-success/20 text-success shrink-0",
					children: [match_score, "% Match"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-primary/5 rounded-xl p-3 text-xs text-primary/80 border border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold block mb-1",
						children: "Why this match?"
					}), reason]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3" }),
							" ",
							languages && languages.join(", ")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3" }),
							" ",
							availability
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => onBook(targetId),
				className: "w-full rounded-xl gap-2 shadow-glow",
				children: ["Book Session ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" })]
			})
		]
	});
}
//#endregion
export { Mentors as component };
