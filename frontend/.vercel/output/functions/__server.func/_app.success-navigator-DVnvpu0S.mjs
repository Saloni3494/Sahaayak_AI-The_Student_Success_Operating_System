import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { _ as getWebSocketUrl, h as SuccessAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { r as useQueryClient, t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { E as RotateCcw, It as Layers, J as Heart, Nt as TriangleAlert, Pt as Sparkles, S as ShieldAlert, St as Briefcase, Tt as BookOpen, ct as DollarSign, d as TrendingUp, ft as Clock, ht as ChevronRight, jt as Activity, o as Users, t as Zap } from "./_libs/lucide-react.mjs";
import "./_ssr/router-B3e8z2q8.mjs";
import { a as YAxis, c as Line, g as ResponsiveContainer, h as Tooltip, i as LineChart, l as CartesianGrid, n as AreaChart, o as XAxis, s as Area } from "./_libs/recharts+victory-vendor.mjs";
import { t as CalendarHeatmap } from "./_libs/react-calendar-heatmap.mjs";
import { t as motion } from "./_libs/framer-motion.mjs";
import { t as require_build } from "./_libs/react-countup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.success-navigator-DVnvpu0S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_build = /* @__PURE__ */ __toESM(require_build());
var SafeCalendarHeatmap = CalendarHeatmap.default || CalendarHeatmap;
var SafeCountUp = import_build.default.default || import_build.default;
function SuccessNavigator() {
	const queryClient = useQueryClient();
	const { user, student, isLoading: userLoading } = useUser();
	const [trendFilter, setTrendFilter] = (0, import_react.useState)("monthly");
	const studentId = student?.id || user?.id || "";
	const { data: indexRes, isLoading: indexLoading, error: indexError } = useQuery({
		queryKey: ["successIndex", studentId],
		queryFn: () => SuccessAPI.getMe(studentId),
		enabled: !!studentId
	});
	const { data: historyRes, isLoading: historyLoading } = useQuery({
		queryKey: ["successHistory", studentId],
		queryFn: () => SuccessAPI.getHistory(studentId),
		enabled: !!studentId
	});
	const { data: trendsRes, isLoading: trendsLoading } = useQuery({
		queryKey: ["successTrends", studentId],
		queryFn: () => SuccessAPI.getTrends(studentId),
		enabled: !!studentId
	});
	const { data: recommendationsRes, isLoading: recommendationsLoading } = useQuery({
		queryKey: ["successRecommendations", studentId],
		queryFn: () => SuccessAPI.getRecommendations(studentId),
		enabled: !!studentId
	});
	const { data: predictionsRes, isLoading: predictionsLoading } = useQuery({
		queryKey: ["successPredictions", studentId],
		queryFn: () => SuccessAPI.getPredictions(studentId),
		enabled: !!studentId
	});
	const { data: forecastRes, isLoading: forecastLoading } = useQuery({
		queryKey: ["successForecast", studentId],
		queryFn: () => SuccessAPI.getForecast(studentId),
		enabled: !!studentId
	});
	const { data: explanationsRes, isLoading: explanationsLoading } = useQuery({
		queryKey: ["successExplanations", studentId],
		queryFn: () => SuccessAPI.getExplanations(studentId),
		enabled: !!studentId
	});
	const { data: engagementRes, isLoading: engagementLoading } = useQuery({
		queryKey: ["successEngagement", studentId],
		queryFn: () => SuccessAPI.getAnalyticsEngagement(studentId),
		enabled: !!studentId
	});
	const { data: interventionsRes, isLoading: interventionsLoading } = useQuery({
		queryKey: ["successInterventions", studentId],
		queryFn: () => SuccessAPI.getInterventions(studentId),
		enabled: !!studentId
	});
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const wsUrl = getWebSocketUrl(`/success/ws/success/${studentId}`);
		const socket = new WebSocket(wsUrl);
		socket.onopen = () => {
			console.log("[WebSocket] Connected to Success Index updates.");
		};
		socket.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);
				console.log("[WebSocket] Success event received:", data);
				if (data.event) {
					queryClient.invalidateQueries({ queryKey: ["successIndex", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successHistory", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successTrends", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successRecommendations", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successPredictions", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successForecast", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successExplanations", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successEngagement", studentId] });
					queryClient.invalidateQueries({ queryKey: ["successInterventions", studentId] });
					if (data.event === "success.index_updated") toast.info(`Success index re-calculated: ${data.payload.overall_score}%!`);
					else if (data.event === "prediction.generated") toast.success("AI predictive risk analysis updated.");
					else if (data.event === "forecast.updated") toast.success("Future success projections updated.");
				}
			} catch (err) {
				console.error("[WebSocket] Failed to parse success event message:", err);
			}
		};
		return () => {
			socket.close();
		};
	}, [studentId, queryClient]);
	const index = indexRes?.data || {
		overall_score: 75,
		academic_score: 80,
		career_score: 70,
		engagement_score: 75,
		financial_score: 85,
		social_capital_score: 60,
		wellness_score: 75,
		level: "Good",
		last_updated: (/* @__PURE__ */ new Date()).toISOString()
	};
	const history = historyRes?.data || [];
	trendsRes?.data;
	const recommendations = recommendationsRes?.data || [];
	const predictions = predictionsRes?.data || {
		dropout_risk: 15,
		placement_probability: 75,
		financial_risk: 20,
		burnout_risk: 25,
		scholarship_probability: 80
	};
	const forecast = forecastRes?.data || {
		"30_days": 80,
		"90_days": 85,
		"180_days": 90
	};
	const explanations = explanationsRes?.data || [];
	const engagement = engagementRes?.data || [];
	const interventions = interventionsRes?.data || [];
	const lineChartData = history.map((h) => ({
		name: h.date.substring(5),
		Score: h.score
	}));
	const forecastChartData = [
		{
			name: "Today",
			Projection: index.overall_score
		},
		{
			name: "+30 Days",
			Projection: forecast["30_days"]
		},
		{
			name: "+90 Days",
			Projection: forecast["90_days"]
		},
		{
			name: "+180 Days",
			Projection: forecast["180_days"]
		}
	];
	if (userLoading || indexLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-card/50 rounded-3xl w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 bg-card/50 rounded-3xl lg:col-span-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 bg-card/50 rounded-3xl lg:col-span-2" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-60 bg-card/50 rounded-3xl w-full" })
		]
	});
	if (indexError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[70vh] grid place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center p-8 glass-strong rounded-3xl border border-border/50 max-w-md shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-16 bg-destructive/10 text-destructive rounded-2xl grid place-items-center mx-auto mb-4 shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold mb-2",
					children: "Unable to load Success Navigator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mb-6",
					children: "There was a problem connecting to the student intelligence database."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => queryClient.invalidateQueries(),
					className: "rounded-full shadow-glow",
					style: { background: "var(--gradient-primary)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4 mr-2" }), " Retry Connection"]
				})
			]
		})
	});
	const formatDate = (isoStr) => {
		try {
			return new Date(isoStr).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			});
		} catch {
			return "Just now";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 border border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-emerald-500/5 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-8" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase font-semibold tracking-wider text-primary",
								children: "Student Intelligence Center"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-bold tracking-tight md:text-3xl mt-0.5",
								children: "Success Navigator"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: "Your continuous educational health report and predictive success analytics."
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right shrink-0 bg-background/40 backdrop-blur-md border border-border/40 rounded-2xl p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground block flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }), " Last Synced"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-foreground",
							children: formatDate(index.last_updated)
						})]
					})]
				})]
			}),
			interventions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-bold uppercase tracking-wider text-destructive flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 animate-bounce" }), " Active Intervention Actions Required"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: interventions.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: i * .05 },
						className: "p-4 rounded-2xl border bg-destructive/5 border-destructive/20 shadow-glow flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-black bg-destructive/10 text-destructive border border-destructive/20 px-2 py-0.5 rounded-full uppercase",
									children: item.type
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[8px] font-bold text-muted-foreground uppercase",
									children: ["Severity: ", item.severity]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground mt-2",
								children: item.reason
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground mt-1",
								children: ["Action: ", item.recommended_action]
							})
						] })]
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Success Index Score",
					className: "lg:col-span-1 flex flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full max-w-[240px] mt-2 relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 100 50",
								className: "w-full h-auto drop-shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 10 50 A 40 40 0 0 1 90 50",
									fill: "none",
									stroke: "rgba(255,255,255,0.1)",
									strokeWidth: "10",
									strokeLinecap: "round"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 10 50 A 40 40 0 0 1 90 50",
									fill: "none",
									stroke: "var(--primary)",
									strokeWidth: "10",
									strokeLinecap: "round",
									strokeDasharray: "125.6",
									strokeDashoffset: 125.6 * (1 - index.overall_score / 100),
									className: "transition-all duration-1000 ease-out"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-5xl font-black text-primary mt-2 flex items-baseline justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeCountUp, {
								end: index.overall_score,
								decimals: 1,
								duration: 1.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold ml-0.5",
								children: "%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-extrabold text-lg text-emerald-400",
								children: [index.level, " Standing"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-2 leading-relaxed max-w-[240px] mx-auto",
							children: "Overall educational health computed dynamically across six intelligence metrics."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Component Breakdown",
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 gap-4 h-full items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentScoreCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5" }),
								label: "Academic Readiness",
								score: index.academic_score,
								weight: "20%",
								trend: "+4.2%",
								status: "Improving",
								color: "text-blue-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentScoreCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-5" }),
								label: "Career Preparedness",
								score: index.career_score,
								weight: "25%",
								trend: "+8.5%",
								status: "Improving",
								color: "text-purple-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentScoreCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5" }),
								label: "Engagement Index",
								score: index.engagement_score,
								weight: "15%",
								trend: "+1.2%",
								status: "Steady",
								color: "text-emerald-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentScoreCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "size-5" }),
								label: "Financial Stability",
								score: index.financial_score,
								weight: "15%",
								trend: "0%",
								status: "Steady",
								color: "text-amber-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentScoreCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5" }),
								label: "Social Capital",
								score: index.social_capital_score,
								weight: "15%",
								trend: "+6.1%",
								status: "Improving",
								color: "text-pink-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentScoreCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5" }),
								label: "Mental Wellness",
								score: index.wellness_score,
								weight: "10%",
								trend: "-2.1%",
								status: "Declining",
								color: "text-red-400"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Success Index Progression",
					className: "lg:col-span-2 min-h-[360px]",
					headerAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex bg-background/50 rounded-full p-1 border border-border",
						children: [
							"weekly",
							"monthly",
							"yearly"
						].map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTrendFilter(filter),
							className: `text-[10px] px-2.5 py-1 rounded-full uppercase font-bold transition-all ${trendFilter === filter ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: filter
						}, filter))
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-64 mt-4",
						children: lineChartData.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: lineChartData,
								margin: {
									top: 5,
									right: 20,
									left: 0,
									bottom: 5
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#1e293b"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										stroke: "#64748b",
										style: { fontSize: "10px" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "#64748b",
										domain: [40, 100],
										style: { fontSize: "10px" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "#0b0f19",
											border: "1px solid #1e293b",
											borderRadius: "12px"
										},
										labelStyle: { fontWeight: "bold" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "Score",
										stroke: "#6366f1",
										strokeWidth: 3,
										dot: {
											fill: "#6366f1",
											r: 4
										},
										activeDot: { r: 6 }
									})
								]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full grid place-items-center text-xs text-muted-foreground",
							children: "No historical records found."
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Engagement Heatmap",
					className: "lg:col-span-1 min-h-[360px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col justify-between h-full pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground mb-4 block",
								children: "Continuous student action log intensity mapping (logins, chats, roadmap completions)."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "calendar-heatmap-container pr-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeCalendarHeatmap, {
									startDate: new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 60)),
									endDate: /* @__PURE__ */ new Date(),
									values: engagement,
									classForValue: (value) => {
										if (!value || value.count === 0) return "color-empty";
										return `color-github-${Math.min(4, Math.ceil(value.count / 2))}`;
									},
									tooltipDataAttrs: (value) => {
										return { "data-tip": `${value.date}: ${value.count || 0} activities` };
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-[10px] text-muted-foreground mt-4 justify-end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Less" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 bg-muted rounded-sm" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 bg-primary/20 rounded-sm" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 bg-primary/40 rounded-sm" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 bg-primary/70 rounded-sm" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 bg-primary rounded-sm" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "More" })
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Predictive Intelligence Engine",
					className: "lg:col-span-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 max-h-[380px] overflow-y-auto pr-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1",
								children: "AI Future Readiness Predictions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictiveProgressCard, {
								title: "Placement Probability",
								value: predictions.placement_probability,
								isSuccessChance: true,
								action: "Mock Interviews"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictiveProgressCard, {
								title: "Scholarship Probability",
								value: predictions.scholarship_probability,
								isSuccessChance: true,
								action: "Submit applications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictiveProgressCard, {
								title: "Dropout Risk",
								value: predictions.dropout_risk,
								isSuccessChance: false,
								action: "Mentor review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictiveProgressCard, {
								title: "Burnout Risk",
								value: predictions.burnout_risk,
								isSuccessChance: false,
								action: "Study breaks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictiveProgressCard, {
								title: "Financial Risk",
								value: predictions.financial_risk,
								isSuccessChance: false,
								action: "Apply waivers"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Future Success Forecast",
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-semibold text-foreground",
							children: "Success Index Area Projections"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Calculated based on your progress slope velocity."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-glow",
							children: "Positive progression trajectory"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-64 mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: forecastChartData,
								margin: {
									top: 10,
									right: 10,
									left: 0,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "colorProjection",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "5%",
											stopColor: "#10b981",
											stopOpacity: .4
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "95%",
											stopColor: "#10b981",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#1e293b"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										stroke: "#64748b",
										style: { fontSize: "10px" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "#64748b",
										domain: [40, 100],
										style: { fontSize: "10px" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "#0b0f19",
											border: "1px solid #1e293b",
											borderRadius: "12px"
										},
										labelStyle: { fontWeight: "bold" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "Projection",
										stroke: "#10b981",
										strokeWidth: 3,
										fillOpacity: 1,
										fill: "url(#colorProjection)"
									})
								]
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Why Did My Score Change? (Explainability)",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-primary" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 max-h-[300px] overflow-y-auto pr-1",
						children: explanations.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 bg-background/30 rounded-2xl border border-border/40 hover:border-border transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm text-foreground",
										children: item.factor
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `text-[9px] font-black px-2 py-0.5 rounded-full uppercase border ${item.impact === "High" ? "bg-red-500/10 text-red-400 border-red-500/20" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`,
										children: [item.impact, " Impact"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed mt-2",
									children: item.reason
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 mt-3 text-[10px] font-bold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Action: ", item.action] })]
								})
							]
						}, idx))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "AI Success Optimization Plan",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 max-h-[300px] overflow-y-auto pr-1",
						children: recommendations.map((rec, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-3.5 rounded-2xl bg-background/30 border border-border/40 hover:border-border transition-all gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${rec.priority === "HIGH" ? "bg-red-500/15 text-red-400 border-red-500/20 shadow-glow" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`,
											children: rec.priority
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-sm mt-2 text-foreground truncate",
										children: rec.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground mt-1 truncate",
										children: rec.reason
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "h-8 rounded-full text-xs shadow-glow hover:scale-105 active:scale-95 transition-all",
								style: { background: "var(--gradient-primary)" },
								children: ["Action ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 ml-0.5" })]
							})]
						}, idx))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .react-calendar-heatmap .color-empty { fill: rgba(30, 41, 59, 0.4); }
        .react-calendar-heatmap .color-github-1 { fill: rgba(99, 102, 241, 0.2); }
        .react-calendar-heatmap .color-github-2 { fill: rgba(99, 102, 241, 0.4); }
        .react-calendar-heatmap .color-github-3 { fill: rgba(99, 102, 241, 0.7); }
        .react-calendar-heatmap .color-github-4 { fill: rgba(99, 102, 241, 1); }
        .react-calendar-heatmap rect { rx: 2px; ry: 2px; }
      ` })
		]
	});
}
function ComponentScoreCard({ icon, label, score, weight, trend, status, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background/20 rounded-2xl p-4 border border-border/40 hover:border-border transition-all flex flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `size-10 rounded-full bg-primary/10 ${color} grid place-items-center mb-2 shadow-glow`,
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-bold text-foreground mb-1 leading-snug min-h-[32px] flex items-center justify-center",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-2xl font-black text-foreground mt-1",
				children: [typeof score === "number" ? Math.round(score * 10) / 10 : score, "%"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 mt-2 text-[9px] font-semibold text-muted-foreground uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-emerald-400",
						children: trend
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 w-1 rounded-full bg-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[8px] text-muted-foreground uppercase font-black mt-2 tracking-wider",
				children: ["Weight: ", weight]
			})
		]
	});
}
function PredictiveProgressCard({ title, value, isSuccessChance, action }) {
	let color = "text-emerald-400";
	let barBg = "bg-emerald-500";
	if (isSuccessChance) {
		if (value < 30) {
			color = "text-red-400";
			barBg = "bg-red-500";
		} else if (value < 60) {
			color = "text-yellow-400";
			barBg = "bg-yellow-500";
		}
	} else if (value > 60) {
		color = "text-red-400";
		barBg = "bg-red-500";
	} else if (value > 30) {
		color = "text-yellow-400";
		barBg = "bg-yellow-500";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-3 bg-background/30 rounded-2xl border border-border/40 hover:border-border transition-all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center mb-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-xs text-foreground",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `text-xs font-black ${color}`,
					children: [typeof value === "number" ? Math.round(value * 10) / 10 : value, "%"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 w-full rounded-full bg-muted/60 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-full rounded-full transition-all duration-1000 ${barBg}`,
					style: { width: `${value}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 mt-2 text-[9px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate",
					children: ["AI Action: ", action]
				})]
			})
		]
	});
}
function Card({ title, children, className, icon, headerAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `glass shadow-soft flex flex-col rounded-3xl p-5 md:p-6 border border-border/30 relative overflow-hidden ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [icon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold tracking-tight text-foreground",
					children: title
				})]
			}), headerAction]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 flex flex-col",
			children
		})]
	});
}
//#endregion
export { SuccessNavigator as component };
