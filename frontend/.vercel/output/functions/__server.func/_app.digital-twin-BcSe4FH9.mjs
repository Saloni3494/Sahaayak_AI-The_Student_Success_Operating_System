import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { g as TwinAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { Ft as LoaderCircle, Nt as TriangleAlert, O as RefreshCw, Ot as ArrowUpRight, Pt as Sparkles, Y as HeartPulse, _ as Target, d as TrendingUp, ft as Clock, t as Zap, ut as Compass, wt as BrainCircuit, x as ShieldCheck } from "./_libs/lucide-react.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as YAxis, d as Radar, f as PolarAngleAxis, g as ResponsiveContainer, h as Tooltip, l as CartesianGrid, m as PolarGrid, n as AreaChart, o as XAxis, p as PolarRadiusAxis, r as RadarChart, s as Area, t as RadialBarChart, u as RadialBar } from "./_libs/recharts+victory-vendor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.digital-twin-BcSe4FH9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function timeAgo(dateStr) {
	const diff = Date.now() - new Date(dateStr).getTime();
	const mins = Math.floor(diff / 6e4);
	if (mins < 1) return "Just now";
	if (mins < 60) return `${mins}m ago`;
	const hrs = Math.floor(mins / 60);
	if (hrs < 24) return `${hrs}h ago`;
	return `${Math.floor(hrs / 24)}d ago`;
}
function scoreColor(score) {
	if (score >= 75) return "var(--success, #22c55e)";
	if (score >= 50) return "var(--primary)";
	if (score >= 30) return "orange";
	return "var(--destructive, #ef4444)";
}
function riskLabel(score) {
	if (score <= 25) return {
		text: "Low Risk",
		color: "var(--success, #22c55e)"
	};
	if (score <= 50) return {
		text: "Moderate",
		color: "orange"
	};
	return {
		text: "High Risk",
		color: "var(--destructive, #ef4444)"
	};
}
function DigitalTwin() {
	const { user, student } = useUser();
	const [twin, setTwin] = (0, import_react.useState)(null);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [recalculating, setRecalculating] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const firstName = user?.full_name?.split(" ")[0] || "Student";
	const fetchTwin = (0, import_react.useCallback)(async () => {
		setLoading(true);
		setError(null);
		try {
			const [twinRes, historyRes] = await Promise.allSettled([TwinAPI.getMe(), TwinAPI.getHistory()]);
			if (twinRes.status === "fulfilled" && twinRes.value.data) setTwin(twinRes.value.data);
			else setTwin(null);
			if (historyRes.status === "fulfilled" && historyRes.value.data) setHistory(historyRes.value.data);
		} catch (err) {
			setError(err?.message || "Failed to load Digital Twin");
		} finally {
			setLoading(false);
		}
	}, []);
	const handleRecalculate = async () => {
		setRecalculating(true);
		setError(null);
		try {
			const res = await TwinAPI.recalculate();
			if (res.data) {
				setTwin(res.data);
				toast.success("Digital Twin recalculated successfully!");
				TwinAPI.getHistory().then((h) => h.data && setHistory(h.data)).catch(() => {});
			}
		} catch (err) {
			setError(err?.message || "Recalculation failed.");
			toast.error("Recalculation failed. Please try again.");
		} finally {
			setRecalculating(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchTwin();
	}, [fetchTwin]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-64 flex-col items-center justify-center gap-4 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-10 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: "Initializing your Digital Twin..."
		})]
	});
	if (error && !twin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-strong shadow-soft flex flex-col items-center gap-4 rounded-3xl p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-10 text-destructive" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: fetchTwin,
				className: "mt-2 flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), " Try Again"]
			})
		]
	});
	if (!twin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-strong shadow-soft flex flex-col items-center gap-6 rounded-3xl p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-20 place-items-center rounded-3xl bg-primary/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-10 text-primary" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-xl font-bold",
				children: [firstName, ", your Digital Twin is not ready yet"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Complete your onboarding to generate your personalized AI model."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/onboarding",
					className: "flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-muted",
					children: "Complete Onboarding"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleRecalculate,
					disabled: recalculating,
					className: "flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60",
					children: [recalculating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Generate Now"]
				})]
			})
		]
	});
	const radarData = [
		{
			subject: "Academic",
			A: twin.academic_score
		},
		{
			subject: "Financial",
			A: twin.financial_stability
		},
		{
			subject: "Career",
			A: twin.career_readiness
		},
		{
			subject: "Confidence",
			A: twin.confidence_score
		},
		{
			subject: "Engagement",
			A: twin.engagement_score
		}
	];
	const risk = riskLabel(twin.risk_score);
	const trendData = history.length > 0 ? history.map((h, i) => ({
		label: h.created_at ? new Date(h.created_at).toLocaleDateString("en", {
			month: "short",
			day: "numeric"
		}) : `#${i + 1}`,
		success: Math.round(h.success_score),
		academic: Math.round(h.academic_score),
		career: Math.round(h.career_readiness)
	})) : [{
		label: "Now",
		success: Math.round(twin.success_score),
		academic: Math.round(twin.academic_score),
		career: Math.round(twin.career_readiness)
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -right-10 -top-10 size-64 rounded-full blur-3xl",
						style: {
							background: "var(--gradient-primary)",
							opacity: .15
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-7" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-2xl font-bold tracking-tight md:text-3xl",
								children: [firstName, "'s Digital Twin"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Real-time analysis of your academic and career trajectory" }), twin.last_updated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }),
										"Updated ",
										timeAgo(twin.last_updated)
									]
								})]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleRecalculate,
							disabled: recalculating,
							id: "recalculate-twin-btn",
							className: "flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm font-medium transition hover:bg-muted disabled:opacity-60",
							children: [recalculating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), recalculating ? "Recalculating..." : "Recalculate"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 grid grid-cols-2 gap-3 md:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiPill, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" }),
								label: "Success Score",
								value: Math.round(twin.success_score),
								suffix: "%",
								color: scoreColor(twin.success_score)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiPill, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4" }),
								label: "Academic",
								value: Math.round(twin.academic_score),
								suffix: "/100",
								color: scoreColor(twin.academic_score)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiPill, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4" }),
								label: "Career",
								value: Math.round(twin.career_readiness),
								suffix: "/100",
								color: scoreColor(twin.career_readiness)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiPill, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4" }),
								label: "Confidence",
								value: Math.round(twin.confidence_score),
								suffix: "%",
								color: scoreColor(twin.confidence_score)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiPill, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" }),
								label: "Risk",
								value: Math.round(twin.risk_score),
								suffix: "%",
								color: risk.color,
								tag: risk.text
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Readiness Map",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 text-primary" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[280px] w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
							data: radarData,
							outerRadius: "70%",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, { stroke: "var(--border)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
									dataKey: "subject",
									tick: {
										fontSize: 11,
										fill: "var(--muted-foreground)"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
									angle: 30,
									domain: [0, 100],
									tick: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
									name: "Student",
									dataKey: "A",
									stroke: "var(--primary)",
									fill: "var(--primary)",
									fillOpacity: .35,
									strokeWidth: 2
								})
							]
						}) })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Score Trends",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-primary" }),
					subtitle: history.length > 1 ? `${history.length} snapshots recorded` : "Recalculate again to build trend data",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[280px] w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: trendData,
							margin: {
								top: 10,
								right: 10,
								bottom: 0,
								left: -16
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "trendFill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--primary)",
										stopOpacity: .4
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--primary)",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									tick: {
										fill: "var(--muted-foreground)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [0, 100],
									tick: {
										fill: "var(--muted-foreground)",
										fontSize: 11
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: 12,
									color: "var(--foreground)",
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "success",
									name: "Success",
									stroke: "var(--primary)",
									strokeWidth: 2.5,
									fill: "url(#trendFill)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "academic",
									name: "Academic",
									stroke: "oklch(0.65 0.18 160)",
									strokeWidth: 1.5,
									fill: "none",
									strokeDasharray: "5 3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "career",
									name: "Career",
									stroke: "oklch(0.65 0.18 40)",
									strokeWidth: 1.5,
									fill: "none",
									strokeDasharray: "5 3"
								})
							]
						}) })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "Confidence Meter",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4 text-primary" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-[200px] items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBarChart, {
									innerRadius: "70%",
									outerRadius: "100%",
									startAngle: 180,
									endAngle: 0,
									data: [{ value: twin.confidence_score }],
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBar, {
										dataKey: "value",
										cornerRadius: 10,
										fill: "var(--primary)",
										background: { fill: "var(--muted)" }
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-bold",
									children: Math.round(twin.confidence_score)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "out of 100"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-xs text-muted-foreground",
							children: "Based on your self-assessment: confidence, motivation & communication"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "Financial Stability",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-4",
							style: { color: scoreColor(twin.financial_stability) }
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-[200px] flex-col justify-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Score"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold",
									style: { color: scoreColor(twin.financial_stability) },
									children: Math.round(twin.financial_stability)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2.5 w-full overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full transition-all duration-700",
									style: {
										width: `${twin.financial_stability}%`,
										background: scoreColor(twin.financial_stability)
									}
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-primary" }), "Based on your family income profile"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-primary" }), "Scholarship eligibility factored in"]
									}),
									student?.college && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-primary" }),
											"Studying at ",
											student.college
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-xs text-muted-foreground",
							children: twin.financial_stability <= 50 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/schemes",
								className: "text-primary hover:underline",
								children: "Explore government schemes →"
							}) : "Your financial standing is stable."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Success & Risk",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-[200px] flex-col justify-center space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
									name: "Success Index",
									description: "Weighted score across all dimensions",
									value: twin.success_score,
									color: scoreColor(twin.success_score)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
									name: "Risk Score",
									description: "Dropout / struggle probability",
									value: twin.risk_score,
									color: risk.color,
									tag: risk.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
									name: "Engagement",
									description: "Platform activity level",
									value: twin.engagement_score,
									color: scoreColor(twin.engagement_score)
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "AI Insights",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }),
					className: "lg:col-span-2",
					subtitle: `${twin.ai_insights?.length || 0} personalized recommendations`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: twin.ai_insights && twin.ai_insights.length > 0 ? twin.ai_insights.map((insight, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-background/50 p-4 text-sm leading-relaxed transition-colors hover:bg-background/70",
							children: insight
						}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-2 flex flex-col items-center justify-center gap-2 py-8 text-center text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6 text-primary/40" }), "Recalculate to generate personalized insights."]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Quick Actions",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-primary" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/ai-mentor",
								label: "Ask AI Mentor",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/career-gps",
								label: "Open Career GPS",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/scholarships",
								label: "Browse Scholarships",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/mentors",
								label: "Find a Mentor",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/settings",
								label: "Update Profile",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" })
							})
						]
					})
				})]
			})
		]
	});
}
function Card({ title, children, className, icon, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `glass shadow-soft flex flex-col rounded-3xl p-5 md:p-6 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: title
				})]
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[11px] text-muted-foreground",
				children: subtitle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1",
			children
		})]
	});
}
function KpiPill({ icon, label, value, suffix, color, tag }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background/40 p-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-[11px] font-medium text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-6 place-items-center rounded-md bg-primary/15 text-primary",
				children: icon
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-baseline gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-bold",
					style: { color },
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: suffix
				}),
				tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold",
					style: {
						color,
						background: `color-mix(in oklab, ${color} 15%, transparent)`
					},
					children: tag
				})
			]
		})]
	});
}
function ScoreBar({ name, description, value, color, tag }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background/40 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground",
				children: description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full px-2 py-0.5 text-[10px] font-semibold",
					style: {
						color,
						background: `color-mix(in oklab, ${color} 15%, transparent)`
					},
					children: tag
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-bold",
					style: { color },
					children: [Math.round(value), "%"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full transition-all duration-700",
				style: {
					width: `${value}%`,
					background: color
				}
			})
		})]
	});
}
function ActionLink({ to, label, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex items-center gap-3 rounded-2xl bg-background/40 p-3 text-sm font-medium transition-colors hover:bg-accent/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-8 place-items-center rounded-xl bg-primary/10 text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground" })
		]
	});
}
//#endregion
export { DigitalTwin as component };
