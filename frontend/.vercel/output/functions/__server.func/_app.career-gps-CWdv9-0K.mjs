import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { _ as getWebSocketUrl, i as CareerAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { r as useQueryClient, t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { Dt as Award, E as RotateCcw, It as Layers, Nt as TriangleAlert, P as Navigation, Pt as Sparkles, Tt as BookOpen, Vt as CircleCheck, _ as Target, _t as ChevronDown, jt as Activity, kt as ArrowRight, mt as ChevronUp, pt as Circle, u as Trophy, ut as Compass, yt as Calendar } from "./_libs/lucide-react.mjs";
import { o as ReactFlow, t as Background$1 } from "./_libs/@reactflow/background+[...].mjs";
import "./_ssr/router-B3e8z2q8.mjs";
import { n as AnimatePresence, t as motion } from "./_libs/framer-motion.mjs";
import { t as Controls$1 } from "./_libs/reactflow__controls.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.career-gps-CWdv9-0K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CareerGPS() {
	const queryClient = useQueryClient();
	const { user, student, isLoading: userLoading } = useUser();
	const [viewMode, setViewMode] = (0, import_react.useState)("timeline");
	const [generating, setGenerating] = (0, import_react.useState)(false);
	const [expandedSteps, setExpandedSteps] = (0, import_react.useState)({});
	const studentId = student?.id || user?.id || "";
	const { data: summaryRes, isLoading: summaryLoading, error: summaryError } = useQuery({
		queryKey: ["careerSummary", studentId],
		queryFn: () => CareerAPI.getSummary(studentId),
		enabled: !!studentId
	});
	const { data: roadmapRes, isLoading: roadmapLoading } = useQuery({
		queryKey: ["roadmap", studentId],
		queryFn: () => CareerAPI.getRoadmap(studentId),
		enabled: !!studentId
	});
	const { data: skillGapsRes, isLoading: skillGapsLoading } = useQuery({
		queryKey: ["skillGaps", studentId],
		queryFn: () => CareerAPI.getSkillGap(studentId),
		enabled: !!studentId
	});
	const { data: recommendationsRes, isLoading: recommendationsLoading } = useQuery({
		queryKey: ["recommendations", studentId],
		queryFn: () => CareerAPI.getRecommendations(studentId),
		enabled: !!studentId
	});
	const { data: milestonesRes, isLoading: milestonesLoading } = useQuery({
		queryKey: ["milestones", studentId],
		queryFn: () => CareerAPI.getMilestones(studentId),
		enabled: !!studentId
	});
	const { data: progressRes, isLoading: progressLoading } = useQuery({
		queryKey: ["progress", studentId],
		queryFn: () => CareerAPI.getProgress(studentId),
		enabled: !!studentId
	});
	const { data: graphRes, isLoading: graphLoading } = useQuery({
		queryKey: ["graph", studentId],
		queryFn: () => CareerAPI.getGraph(studentId),
		enabled: !!studentId
	});
	const summary = summaryRes?.data || {
		dream_career: "Software Engineer",
		career_match_score: 0,
		estimated_time_months: 8,
		industry_growth: "High",
		average_salary: "₹12 LPA",
		roadmap_completion: 0
	};
	const steps = roadmapRes?.data || [];
	const skillGaps = skillGapsRes?.data || [];
	const recommendations = recommendationsRes?.data || [];
	const milestones = milestonesRes?.data || [];
	const progress = progressRes?.data || {
		roadmap_completion: 0,
		completed_steps: 0,
		total_steps: 0,
		reward_points: 0
	};
	const graphData = graphRes?.data || {
		nodes: [],
		edges: []
	};
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const wsUrl = getWebSocketUrl(`/career-gps/ws/career-gps/${studentId}`);
		const socket = new WebSocket(wsUrl);
		socket.onopen = () => {
			console.log("[WebSocket] Connected to Career GPS live updates.");
		};
		socket.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);
				console.log("[WebSocket] Event received:", data);
				if (data.event) {
					queryClient.invalidateQueries({ queryKey: ["careerSummary", studentId] });
					queryClient.invalidateQueries({ queryKey: ["roadmap", studentId] });
					queryClient.invalidateQueries({ queryKey: ["skillGaps", studentId] });
					queryClient.invalidateQueries({ queryKey: ["milestones", studentId] });
					queryClient.invalidateQueries({ queryKey: ["progress", studentId] });
					queryClient.invalidateQueries({ queryKey: ["recommendations", studentId] });
					queryClient.invalidateQueries({ queryKey: ["graph", studentId] });
					if (data.event === "step.completed") toast.success(`Step marked ${data.payload.status === "completed" ? "complete" : "pending"}!`);
					else if (data.event === "roadmap.updated") toast.info("Roadmap status updated.");
					else if (data.event === "milestone.completed") toast.success(`🏆 Milestone Achieved: ${data.payload.title}!`);
				}
			} catch (err) {
				console.error("[WebSocket] Failed to parse event message:", err);
			}
		};
		socket.onerror = (error) => {
			console.error("[WebSocket] Error:", error);
		};
		socket.onclose = () => {
			console.log("[WebSocket] Connection closed.");
		};
		return () => {
			socket.close();
		};
	}, [studentId, queryClient]);
	const toggleExpandStep = (stepId) => {
		setExpandedSteps((prev) => ({
			...prev,
			[stepId]: !prev[stepId]
		}));
	};
	const handleGenerateRoadmap = async () => {
		setGenerating(true);
		try {
			if ((await CareerAPI.generateRoadmap({ student_id: studentId })).success) {
				toast.success("AI Career Success Route Calculated!");
				queryClient.invalidateQueries({ queryKey: ["roadmap", studentId] });
				queryClient.invalidateQueries({ queryKey: ["careerSummary", studentId] });
				queryClient.invalidateQueries({ queryKey: ["skillGaps", studentId] });
				queryClient.invalidateQueries({ queryKey: ["milestones", studentId] });
				queryClient.invalidateQueries({ queryKey: ["progress", studentId] });
				queryClient.invalidateQueries({ queryKey: ["recommendations", studentId] });
				queryClient.invalidateQueries({ queryKey: ["graph", studentId] });
			}
		} catch (err) {
			console.error(err);
			toast.error(err.message || "Failed to generate roadmap.");
		} finally {
			setGenerating(false);
		}
	};
	const handleToggleStep = async (stepId) => {
		try {
			await CareerAPI.updateStep(stepId, studentId);
		} catch (err) {
			console.error(err);
			toast.error("Failed to update step status.");
		}
	};
	if (userLoading || summaryLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6 animate-pulse",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-card/50 rounded-3xl w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 lg:col-span-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 bg-card/50 rounded-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80 bg-card/50 rounded-3xl" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[600px] bg-card/50 rounded-3xl lg:col-span-2" })]
		})]
	});
	if (summaryError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
					children: "Unable to load Career GPS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mb-6",
					children: "There was a problem connecting to the real-time career systems."
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
	const showEmptyState = steps.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 border border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-8" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase font-semibold tracking-wider text-primary",
							children: "AI Success Navigator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight md:text-3xl mt-0.5",
							children: "Career GPS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Personalized, turn-by-turn routing to land your dream role."
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 bg-background/40 backdrop-blur-md rounded-2xl p-3 border border-border/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground block",
								children: "Dream Career"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sm",
								children: summary.dream_career
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-border/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground block",
								children: "Growth"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sm text-green-400",
								children: summary.industry_growth
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-border/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground block",
								children: "Avg Salary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sm text-primary",
								children: summary.average_salary
							})] })
						]
					}), !showEmptyState && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleGenerateRoadmap,
						disabled: generating,
						className: "rounded-full shadow-glow hover:scale-105 active:scale-95 transition-all",
						style: { background: "var(--gradient-primary)" },
						children: generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4 mr-2 animate-spin" }),
							" ",
							"Recalculating..."
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4 mr-2" }), " Recalculate Route"] })
					})]
				})]
			})]
		}), showEmptyState ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-[50vh] grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "text-center p-10 glass rounded-3xl border border-border/40 max-w-lg shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-20 bg-primary/10 text-primary rounded-3xl grid place-items-center mx-auto mb-6 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-extrabold mb-3 text-foreground",
						children: "No roadmap yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-8 leading-relaxed",
						children: [
							"Unlock your personalized AI-powered career roadmap. We will analyze your skills, CGPA, and interests to generate a tailored navigation plan to your dream career of",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-foreground",
								children: summary.dream_career
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleGenerateRoadmap,
						disabled: generating,
						size: "lg",
						className: "rounded-full shadow-glow px-8 py-6 text-base font-semibold hover:scale-105 active:scale-95 transition-all",
						style: { background: "var(--gradient-primary)" },
						children: generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-5 mr-2 animate-spin" }), " Computing Success Route..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 mr-2" }), " Generate your AI Roadmap"] })
					})
				]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 lg:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Route Progress",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative size-24 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "size-full transform -rotate-90",
									viewBox: "0 0 36 36",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										className: "text-muted/30",
										strokeWidth: "3.5",
										stroke: "currentColor",
										fill: "none",
										d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
										className: "text-primary",
										strokeWidth: "3.5",
										strokeDasharray: `${progress.roadmap_completion}, 100`,
										strokeLinecap: "round",
										stroke: "currentColor",
										fill: "none",
										d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
										initial: { pathLength: 0 },
										animate: { pathLength: progress.roadmap_completion / 100 },
										transition: {
											duration: 1.2,
											ease: "easeOut"
										}
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xl font-bold text-foreground",
										children: [progress.roadmap_completion, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] text-muted-foreground uppercase font-semibold",
										children: "Done"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-foreground",
									children: "On Track to Destination"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: [
										"Completed",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground font-semibold",
											children: progress.completed_steps
										}),
										" ",
										"of",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground font-semibold",
											children: progress.total_steps
										}),
										" ",
										"milestones."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 mt-3 bg-yellow-500/10 text-yellow-500 rounded-full px-2.5 py-1 text-[10px] font-bold border border-yellow-500/20 w-fit shadow-glow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [progress.reward_points, " XP Earned"] })]
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Destination Match",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4 text-primary" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-bold text-foreground",
								children: summary.dream_career
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: [
									"Estimated Time: ",
									summary.estimated_time_months,
									" Months"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-primary/15 text-primary rounded-2xl px-3 py-2 text-center border border-primary/20 shadow-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-lg font-black",
									children: [summary.career_match_score, "%"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[8px] uppercase font-bold tracking-wider",
									children: "Match Score"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Skill Gap Dashboard",
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4 max-h-[320px] overflow-y-auto pr-1",
							children: skillGaps.map((item, idx) => {
								let priorityColor = "bg-green-500/10 text-green-400 border-green-500/20";
								let barColor = "bg-green-500";
								if (item.priority === "CRITICAL") {
									priorityColor = "bg-red-500/15 text-red-400 border-red-500/20";
									barColor = "bg-red-500";
								} else if (item.priority === "HIGH") {
									priorityColor = "bg-orange-500/15 text-orange-400 border-orange-500/20";
									barColor = "bg-orange-500";
								} else if (item.priority === "MEDIUM") {
									priorityColor = "bg-yellow-500/15 text-yellow-400 border-yellow-500/20";
									barColor = "bg-yellow-500";
								}
								const widthPercent = item.current_level / item.required_level * 100;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-background/30 rounded-2xl border border-border/40 hover:border-border transition-all",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-sm text-foreground",
												children: item.skill
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[9px] font-bold px-2 py-0.5 rounded-full border ${priorityColor}`,
												children: item.priority
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[10px] text-muted-foreground mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Current: ",
												item.current_level,
												"/10"
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Req: ",
												item.required_level,
												"/10"
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-2 w-full rounded-full bg-muted/60 overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-full rounded-full transition-all duration-1000 ${barColor}`,
												style: { width: `${widthPercent}%` }
											})
										})
									]
								}, idx);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Unlocked Achievements",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-primary" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: milestones.map((ms, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-center gap-3 p-3 rounded-2xl border transition-all ${ms.completed ? "bg-yellow-500/5 border-yellow-500/25 text-foreground" : "bg-background/20 border-border/40 text-muted-foreground opacity-60"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid size-9 place-items-center rounded-xl ${ms.completed ? "bg-yellow-500/15 text-yellow-500 shadow-glow" : "bg-muted text-muted-foreground"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold truncate",
											children: ms.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[9px] text-muted-foreground",
											children: ms.completed ? `Unlocked at ${ms.completed_at}` : `Gain +${ms.reward_points} XP`
										})]
									}),
									ms.completed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-black uppercase text-yellow-500 tracking-wider",
										children: "Unlocked"
									})
								]
							}, i))
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Navigation Route",
					className: "flex-1 flex flex-col min-h-[600px]",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4 text-primary" }),
					headerAction: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex bg-background/60 backdrop-blur-md rounded-full p-1 border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setViewMode("timeline"),
							className: `text-xs px-4 py-1.5 rounded-full transition-all ${viewMode === "timeline" ? "bg-primary text-primary-foreground shadow-sm font-semibold" : "text-muted-foreground hover:text-foreground"}`,
							children: "Timeline Route"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setViewMode("graph"),
							className: `text-xs px-4 py-1.5 rounded-full transition-all ${viewMode === "graph" ? "bg-primary text-primary-foreground shadow-sm font-semibold" : "text-muted-foreground hover:text-foreground"}`,
							children: "Interactive Graph"
						})]
					}),
					children: viewMode === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-6 mt-4 overflow-y-auto flex-1 max-h-[580px] pr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-9 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary to-purple-500/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6 pb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: steps.map((step, idx) => {
								const isExpanded = !!expandedSteps[step.id];
								const isCompleted = step.status === "completed";
								const isInProgress = step.status === "in_progress";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: -20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									transition: { delay: idx * .05 },
									className: `relative flex items-start gap-4 transition-all ${isCompleted ? "opacity-80" : "opacity-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "z-10 grid size-6 place-items-center bg-background rounded-full mt-3 shrink-0",
										children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-6 text-primary shadow-glow rounded-full" }) : isInProgress ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-5 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_var(--primary)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
											className: "size-5 text-muted-foreground hover:text-primary cursor-pointer",
											onClick: () => handleToggleStep(step.id)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex-1 rounded-2xl border p-4 backdrop-blur-md transition-all ${isCompleted ? "border-primary/20 bg-primary/5" : isInProgress ? "border-purple-500/30 bg-purple-500/5 shadow-glow" : "border-border/40 bg-background/20"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-start gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 flex-wrap",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5 font-bold uppercase",
														children: step.month
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] text-muted-foreground flex items-center gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3" }),
															" ",
															step.estimated_days,
															" Days"
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: `font-bold text-base mt-2 ${isCompleted ? "line-through text-muted-foreground" : "text-foreground"}`,
													children: step.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: isCompleted ? "outline" : "default",
													onClick: () => handleToggleStep(step.id),
													className: "h-8 rounded-full text-xs",
													children: isCompleted ? "Completed" : "Mark Done"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "icon",
													variant: "ghost",
													onClick: () => toggleExpandStep(step.id),
													className: "size-8 rounded-full",
													children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												height: 0,
												opacity: 0
											},
											animate: {
												height: "auto",
												opacity: 1
											},
											exit: {
												height: 0,
												opacity: 0
											},
											className: "overflow-hidden mt-4 pt-4 border-t border-border/50 space-y-3 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground leading-relaxed",
													children: step.description
												}),
												step.resources && step.resources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
														className: "text-xs font-bold uppercase text-muted-foreground tracking-wider",
														children: "Recommended Learning resources"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid gap-2 sm:grid-cols-2",
														children: step.resources.map((res, rIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
															href: res.url,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "flex items-center gap-2 p-2.5 bg-background/50 rounded-xl border border-border/40 hover:border-primary/30 transition-all text-xs",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4 text-primary shrink-0" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "min-w-0",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "font-bold text-foreground truncate",
																		children: res.title
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-[10px] text-muted-foreground",
																		children: res.provider
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 text-muted-foreground ml-auto shrink-0" })
															]
														}, rIdx))
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "bg-background/30 rounded-xl p-3 border border-border/20 text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-foreground block mb-1",
														children: "Mentor Insights:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-muted-foreground",
														children: "Complete the lab project to earn extra XP and automatically unlock the milestones."
													})]
												})
											]
										}) })]
									})]
								}, step.id);
							}) })
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-full min-h-[500px] flex-1 rounded-2xl overflow-hidden border border-border/40 mt-4 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReactFlow, {
							nodes: graphData.nodes,
							edges: graphData.edges,
							fitView: true,
							style: { background: "#0b0f19" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background$1, {
								color: "#1e293b",
								gap: 16
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls$1, { className: "fill-foreground bg-card border-border" })]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "AI Recommendations & Career Steps",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: recommendations.map((rec, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 bg-background/40 backdrop-blur-md rounded-2xl border border-border/40 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2 mb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-black uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 px-2 py-0.5 rounded-full",
										children: rec.type
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-sm text-foreground",
									children: rec.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
									children: rec.reason
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "mt-4 rounded-full text-xs w-fit border-primary/20 hover:border-primary/40 hover:bg-primary/5",
								children: ["Take Action ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 ml-1.5" })]
							})]
						}, idx))
					})
				})]
			})]
		})]
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
export { CareerGPS as component };
