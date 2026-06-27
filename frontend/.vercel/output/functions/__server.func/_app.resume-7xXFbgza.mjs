import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { p as ResumeAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { Ht as CircleAlert, Vt as CircleCheck, c as Upload, nt as FileText, rt as FileSearch, st as Download } from "./_libs/lucide-react.mjs";
import { N as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.resume-7xXFbgza.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResumeAnalyzer() {
	const [isAnalyzing, setIsAnalyzing] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};
	const handleFileChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 5 * 1024 * 1024) {
			toast.error("File is too large. Max size is 5MB.");
			return;
		}
		setIsAnalyzing(true);
		setResult(null);
		try {
			const response = await ResumeAPI.analyze(file);
			if (response.success) {
				setResult(response.data);
				toast.success("Resume successfully analyzed!");
			} else toast.error(response.message || "Failed to analyze resume.");
		} catch (err) {
			console.error(err);
			toast.error("An unexpected error occurred during analysis.");
		} finally {
			setIsAnalyzing(false);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Resume Analyzer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Get instant feedback and ATS optimization for your resume."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "h-10 rounded-full shadow-none",
					onClick: () => {
						toast.success("Downloading ATS-friendly resume template...");
						window.open("https://docs.google.com/document/d/1Z_u10aD12Ea1X96b4rP2JdYd2a2A0J1c/edit", "_blank");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 mr-2" }), " Download Template"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Upload Resume",
				className: "lg:col-span-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: handleUploadClick,
					className: `flex h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-background/20 p-6 text-center hover:bg-background/40 transition-colors ${isAnalyzing ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							ref: fileInputRef,
							className: "hidden",
							accept: ".pdf,.docx,.txt",
							onChange: handleFileChange,
							disabled: isAnalyzing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-14 place-items-center rounded-full bg-primary/10 text-primary mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: `size-6 ${isAnalyzing ? "animate-bounce" : ""}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: isAnalyzing ? "AI is analyzing your resume..." : "Click to upload or drag & drop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-2",
							children: "PDF, DOCX, or TXT (max. 5MB)"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Latest Analysis",
				className: "lg:col-span-2",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSearch, { className: "size-4 text-primary" }),
				children: isAnalyzing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-[300px] items-center justify-center text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "NVIDIA AI is reading your resume..."
						})]
					})
				}) : result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6",
							children: [(() => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-center justify-center size-24 rounded-full border-[6px] text-2xl font-bold shadow-[0_0_15px_rgba(0,0,0,0.2)] ${result.ats_score >= 80 ? "border-success text-success" : result.ats_score >= 60 ? "border-warning text-warning" : "border-destructive text-destructive"}`,
									children: [result.ats_score, "%"]
								});
							})(), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-lg font-semibold",
								children: result.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground max-w-sm mt-1",
								children: result.summary
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-success/10 border border-success/20 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "flex items-center gap-2 text-sm font-semibold text-success mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Strengths"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-xs",
									children: result.strengths?.map((strength, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-1.5 rounded-full bg-success shrink-0" }), strength]
									}, i))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-destructive/10 border border-destructive/20 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "flex items-center gap-2 text-sm font-semibold text-destructive mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4" }), " Areas to Fix"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-xs",
									children: result.weaknesses?.map((weakness, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-1.5 rounded-full bg-destructive shrink-0" }), weakness]
									}, i))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "rounded-full shadow-glow",
								style: { background: "var(--gradient-primary)" },
								onClick: () => {
									const weaknessesStr = result.weaknesses ? result.weaknesses.join(", ") : "";
									const prompt = "Hi Sahaayak! I just ran an AI Resume Analysis and got an ATS score of " + result.ats_score + "%. The AI told me my weaknesses are: " + weaknessesStr + ". Can you help me fix these issues and rewrite my bullet points?";
									sessionStorage.setItem("sahaayak_chat_prompt", prompt);
									navigate({ to: "/dashboard" });
								},
								children: "Fix with AI Mentor"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-[300px] items-center justify-center text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Upload a resume to see your ATS score and optimization tips."
					})
				})
			})]
		})]
	});
}
function Card({ title, children, className, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `glass shadow-soft flex flex-col rounded-3xl p-5 md:p-6 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-4 flex items-center gap-2",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1",
			children
		})]
	});
}
//#endregion
export { ResumeAnalyzer as component };
