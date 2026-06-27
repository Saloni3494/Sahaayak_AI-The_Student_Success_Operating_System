import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { f as ParentAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { I as Mic, J as Heart, Q as Globe, St as Briefcase, Z as GraduationCap, a as Volume2 } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.parent-BQFhAhj2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ParentMode() {
	const { user } = useUser();
	const [language, setLanguage] = (0, import_react.useState)("mr");
	const [studentId, setStudentId] = (0, import_react.useState)("");
	const [explanation, setExplanation] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user?.id) setStudentId(user.id);
		else setStudentId("student_123");
	}, [user]);
	const handleQuery = async (topic) => {
		setLoading(true);
		setExplanation("");
		try {
			const res = await ParentAPI.query({
				student_id: studentId,
				topic,
				language
			});
			if (res.success && res.data) setExplanation(res.data.explanation);
		} catch (err) {
			console.error(err);
			toast.error("Failed to fetch explanation.");
		} finally {
			setLoading(false);
		}
	};
	const toggleLanguage = () => {
		const nextLang = language === "mr" ? "en" : "mr";
		setLanguage(nextLang);
		toast.success(`Language changed to ${nextLang === "mr" ? "Marathi" : "English"}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl mx-auto space-y-6 md:space-y-8 p-4 md:p-6 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl md:text-4xl font-extrabold tracking-tight",
					children: "सहा्यक"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: toggleLanguage,
					variant: "outline",
					size: "lg",
					className: "rounded-full text-lg h-12 px-6 shadow-sm border-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5 mr-2" }), language === "mr" ? "मराठी" : "English"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-8 shadow-lg border-2 border-primary/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl md:text-3xl font-bold leading-relaxed",
						children: language === "mr" ? "नमस्कार! तुम्हाला तुमच्या मुलाच्या शिक्षणाबद्दल काही प्रश्न आहेत का?" : "Hello! Do you have questions about your child's education?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleQuery(language === "mr" ? "अभ्यासक्रम" : "Curriculum"),
						className: "size-24 md:size-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-105 transition-transform active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-10 md:size-14" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg md:text-xl text-muted-foreground font-medium",
						children: language === "mr" ? "प्रश्नासाठी बटण दाबा आणि बोला" : "Press button to speak"
					})
				]
			}),
			(loading || explanation) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-[2rem] p-6 shadow-md border border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold mb-2",
					children: language === "mr" ? "सहा्यक उत्तर:" : "Sahaayak Answer:"
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground animate-pulse",
					children: language === "mr" ? "उत्तर शोधत आहे..." : "Fetching explanation..."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base text-foreground/90 whitespace-pre-line",
					children: explanation
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl md:text-2xl font-bold mb-6",
					children: language === "mr" ? "किंवा हे विचारून पहा:" : "Or try asking:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {}),
							text: language === "mr" ? "प्लेसमेंट म्हणजे काय?" : "What is Placement?",
							onClick: () => handleQuery(language === "mr" ? "प्लेसमेंट म्हणजे काय?" : "What is Placement?")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {}),
							text: language === "mr" ? "शिष्यवृत्ती कशी मिळवायची?" : "How to get a scholarship?",
							onClick: () => handleQuery(language === "mr" ? "शिष्यवृत्ती कशी मिळवायची?" : "How to get a scholarship?")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}),
							text: language === "mr" ? "माझा मुलगा सध्या काय शिकत आहे?" : "What is my child studying currently?",
							onClick: () => handleQuery(language === "mr" ? "माझा मुलगा सध्या काय शिकत आहे?" : "What is my child studying currently?")
						})
					]
				})]
			})
		]
	});
}
function QuickCard({ icon, text, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "flex items-center gap-6 p-6 rounded-3xl bg-card border-2 border-border shadow-sm hover:border-primary/50 transition-colors text-left group w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-14 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:scale-110 transition-transform",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl md:text-2xl font-semibold",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ml-auto size-12 rounded-full bg-muted grid place-items-center shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6 text-muted-foreground" })
			})
		]
	});
}
//#endregion
export { ParentMode as component };
