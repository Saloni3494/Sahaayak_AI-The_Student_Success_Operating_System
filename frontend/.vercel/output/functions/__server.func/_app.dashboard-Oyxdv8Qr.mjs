import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { _ as getWebSocketUrl, a as ChatAPI, g as TwinAPI, s as DashboardAPI, u as OnboardingAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { r as useQueryClient, t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as useUser, t as useInvalidateUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { A as Plus, D as Rocket, Ft as LoaderCircle, Ht as CircleAlert, J as Heart, K as LayoutDashboard, O as RefreshCw, Ot as ArrowUpRight, Pt as Sparkles, Vt as CircleCheck, Z as GraduationCap, c as Upload, d as TrendingUp, ht as ChevronRight, nt as FileText, o as Users, rt as FileSearch, s as User, w as Send, yt as Calendar } from "./_libs/lucide-react.mjs";
import { N as useNavigate, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Markdown } from "./_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "./_libs/remark-gfm.mjs";
import { a as YAxis, g as ResponsiveContainer, h as Tooltip, l as CartesianGrid, n as AreaChart, o as XAxis, s as Area, t as RadialBarChart, u as RadialBar } from "./_libs/recharts+victory-vendor.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-Oyxdv8Qr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INCOME_OPTIONS = [
	{
		key: "below-3l",
		label: "Below ₹3L",
		value: 2e5
	},
	{
		key: "3-6l",
		label: "₹3L – ₹6L",
		value: 45e4
	},
	{
		key: "6-12l",
		label: "₹6L – ₹12L",
		value: 8e5
	},
	{
		key: "12l+",
		label: "Above ₹12L",
		value: 15e5
	},
	{
		key: "skip",
		label: "Prefer not to say",
		value: 0
	}
];
var YEAR_OPTIONS = [
	"1st year",
	"2nd year",
	"3rd year",
	"4th year",
	"PG"
];
var CHAT_PRESETS = [
	"How can I improve my CGPA?",
	"Recommend need-based scholarships for me",
	"Help me prepare for an SDE Interview",
	"Explain DSA Graph Traversals in simple terms"
];
function Dashboard() {
	useQueryClient();
	const navigate = useNavigate();
	const { user, student, refetch: refetchUser } = useUser();
	const invalidateUser = useInvalidateUser();
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [recalculatingTwin, setRecalculatingTwin] = (0, import_react.useState)(false);
	const { data: overviewRes, isLoading: isOverviewLoading, refetch: refetchOverview } = useQuery({
		queryKey: ["dashboardOverview"],
		queryFn: () => DashboardAPI.getOverview().then((res) => res.data)
	});
	const { data: fullProfileRes, isLoading: isProfileLoading, refetch: refetchProfileData } = useQuery({
		queryKey: ["fullProfileDetails"],
		queryFn: () => OnboardingAPI.getMe().then((res) => res.data),
		enabled: activeTab === "profile"
	});
	const [profName, setProfName] = (0, import_react.useState)("");
	const [profAge, setProfAge] = (0, import_react.useState)(18);
	const [profLang, setProfLang] = (0, import_react.useState)("English");
	const [profCollege, setProfCollege] = (0, import_react.useState)("");
	const [profBranch, setProfBranch] = (0, import_react.useState)("");
	const [profYear, setProfYear] = (0, import_react.useState)("1st year");
	const [profCgpa, setProfCgpa] = (0, import_react.useState)(0);
	const [profFirstGen, setProfFirstGen] = (0, import_react.useState)(true);
	const [profIncome, setProfIncome] = (0, import_react.useState)("below-3l");
	const [profDreamCareer, setProfDreamCareer] = (0, import_react.useState)("");
	const [profSkills, setProfSkills] = (0, import_react.useState)("");
	const [profInterests, setProfInterests] = (0, import_react.useState)("");
	const [isSavingProfile, setIsSavingProfile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (fullProfileRes) {
			const sp = fullProfileRes.student_profile || {};
			const fp = fullProfileRes.family_profile || {};
			const cp = fullProfileRes.career_profile || {};
			setProfName(user?.full_name || "");
			setProfAge(sp.age || 18);
			setProfLang(sp.preferred_language || "English");
			setProfCollege(sp.college || "");
			setProfBranch(sp.branch || "");
			setProfYear({
				1: "1st year",
				2: "2nd year",
				3: "3rd year",
				4: "4th year",
				5: "PG"
			}[sp.year] || "1st year");
			setProfCgpa(sp.cgpa || 0);
			setProfFirstGen(fp.first_generation_learner ?? true);
			const incomeVal = fp.annual_income || 0;
			setProfIncome((INCOME_OPTIONS.find((o) => o.value === incomeVal) || INCOME_OPTIONS[0]).key);
			setProfDreamCareer(cp.dream_career || "");
			setProfSkills(cp.skills ? cp.skills.join(", ") : "");
			setProfInterests(cp.interests ? cp.interests.join(", ") : "");
		}
	}, [fullProfileRes, user]);
	const handleSaveProfile = async (e) => {
		e.preventDefault();
		setIsSavingProfile(true);
		try {
			const yearMap = {
				"1st year": 1,
				"2nd year": 2,
				"3rd year": 3,
				"4th year": 4,
				PG: 5
			};
			const incomeEntry = INCOME_OPTIONS.find((o) => o.key === profIncome);
			await OnboardingAPI.saveAcademic({
				name: profName,
				age: Number(profAge),
				preferred_language: profLang,
				college: profCollege,
				branch: profBranch,
				year: yearMap[profYear] ?? 1,
				cgpa: Number(profCgpa)
			});
			await OnboardingAPI.saveFamily({
				annual_income: incomeEntry?.value ?? 0,
				first_generation_learner: profFirstGen
			});
			const skillsArray = profSkills.split(",").map((s) => s.trim()).filter(Boolean);
			const interestsArray = profInterests.split(",").map((i) => i.trim()).filter(Boolean);
			await OnboardingAPI.saveCareer({
				dream_career: profDreamCareer,
				skills: skillsArray,
				interests: interestsArray
			});
			await TwinAPI.recalculate();
			invalidateUser();
			refetchUser();
			refetchProfileData();
			refetchOverview();
			toast.success("Profile saved and Digital Twin recalculated in real-time! 🚀");
		} catch (err) {
			console.error(err);
			toast.error(err?.message || "Failed to save profile. Please try again.");
		} finally {
			setIsSavingProfile(false);
		}
	};
	const handleManualRecalculate = async () => {
		setRecalculatingTwin(true);
		try {
			await TwinAPI.recalculate();
			refetchOverview();
			toast.success("Digital Twin recalculated successfully! 🧬");
		} catch (err) {
			console.error(err);
			toast.error(err?.message || "Failed to recalculate Twin.");
		} finally {
			setRecalculatingTwin(false);
		}
	};
	const [resumeFile, setResumeFile] = (0, import_react.useState)(null);
	const [analyzingResume, setAnalyzingResume] = (0, import_react.useState)(false);
	const [resumeAnalyzed, setResumeAnalyzed] = (0, import_react.useState)(false);
	const [atsScore, setAtsScore] = (0, import_react.useState)(68);
	const handleResumeSelect = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			setResumeFile(file);
			simulateResumeAnalysis();
		}
	};
	const simulateResumeAnalysis = () => {
		setAnalyzingResume(true);
		setResumeAnalyzed(false);
		setTimeout(() => {
			setAnalyzingResume(false);
			setResumeAnalyzed(true);
			const baseScore = student?.cgpa ? Math.round(60 + student.cgpa / 10 * 25) : 72;
			setAtsScore(Math.min(baseScore, 95));
			toast.success("Resume analysis complete! 📄");
		}, 2500);
	};
	const [chatConversations, setChatConversations] = (0, import_react.useState)([]);
	const [activeChatId, setActiveChatId] = (0, import_react.useState)(null);
	const [chatMessages, setChatMessages] = (0, import_react.useState)([]);
	const [chatInput, setChatInput] = (0, import_react.useState)("");
	const [chatTyping, setChatTyping] = (0, import_react.useState)(false);
	const chatWs = (0, import_react.useRef)(null);
	const chatEndRef = (0, import_react.useRef)(null);
	const loadChatConversations = async (stdId) => {
		try {
			const list = (await ChatAPI.getConversations(stdId)).data || [];
			setChatConversations(list);
			if (list.length > 0 && !activeChatId) setActiveChatId(list[0].id);
		} catch (e) {
			console.error("Failed to load conversations in dashboard", e);
		}
	};
	(0, import_react.useEffect)(() => {
		if (activeTab === "chat" && user?.id) loadChatConversations(user.id);
	}, [activeTab, user?.id]);
	(0, import_react.useEffect)(() => {
		if (activeTab !== "chat" || !activeChatId) {
			setChatMessages([]);
			return;
		}
		const loadHistory = async () => {
			try {
				setChatMessages(((await ChatAPI.getHistory(activeChatId)).data || []).map((m) => ({
					role: m.role === "assistant" ? "ai" : m.role,
					content: m.content,
					reasoning: m.reasoning
				})));
			} catch (e) {
				console.error("Failed to load history in dashboard", e);
			}
		};
		loadHistory();
	}, [activeChatId, activeTab]);
	(0, import_react.useEffect)(() => {
		if (activeTab !== "chat" || !user?.id || !activeChatId) return;
		let reconnectTimeout;
		let heartbeatInterval;
		let lastHeartbeat = Date.now();
		const connectChatWS = () => {
			chatWs.current = new WebSocket(getWebSocketUrl(`/mentor/ws/${activeChatId}?student_id=${user.id}`));
			heartbeatInterval = setInterval(() => {
				if (Date.now() - lastHeartbeat > 15e3) {
					console.warn("Dashboard chat heartbeat timed out. Reconnecting...");
					chatWs.current?.close();
				}
			}, 5e3);
			chatWs.current.onmessage = (event) => {
				try {
					const data = JSON.parse(event.data);
					if (data.event === "heartbeat") {
						lastHeartbeat = Date.now();
						return;
					}
					if (data.type === "token.stream") {
						setChatTyping(false);
						setChatMessages((prev) => {
							const last = prev[prev.length - 1];
							if (last && last.role === "ai") {
								const copy = [...prev];
								copy[copy.length - 1] = {
									...last,
									content: last.content + data.content
								};
								return copy;
							} else return [...prev, {
								role: "ai",
								content: data.content
							}];
						});
					} else if (data.type === "reasoning.stream") {
						setChatTyping(false);
						setChatMessages((prev) => {
							const last = prev[prev.length - 1];
							if (last && last.role === "ai") {
								const copy = [...prev];
								copy[copy.length - 1] = {
									...last,
									reasoning: (last.reasoning || "") + data.content
								};
								return copy;
							} else return [...prev, {
								role: "ai",
								content: "",
								reasoning: data.content
							}];
						});
					} else if (data.type === "chat.error") {
						setChatTyping(false);
						toast.error(data.error || "Chat pipeline error occurred.");
					} else if (data.type === "message.completed") loadChatConversations(user.id);
				} catch (e) {
					console.error("Dashboard WS parse error", e);
				}
			};
			chatWs.current.onclose = () => {
				clearInterval(heartbeatInterval);
				reconnectTimeout = setTimeout(connectChatWS, 3e3);
			};
		};
		connectChatWS();
		return () => {
			clearInterval(heartbeatInterval);
			clearTimeout(reconnectTimeout);
			if (chatWs.current) {
				chatWs.current.onclose = null;
				chatWs.current.close();
			}
		};
	}, [
		activeChatId,
		activeTab,
		user?.id
	]);
	(0, import_react.useEffect)(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chatMessages]);
	const handleSendChatMessage = (textToSend) => {
		const msg = textToSend || chatInput;
		if (!msg.trim() || !chatWs.current || chatWs.current.readyState !== WebSocket.OPEN) return;
		setChatMessages((prev) => [...prev, {
			role: "user",
			content: msg
		}]);
		setChatTyping(true);
		if (!textToSend) setChatInput("");
		chatWs.current.send(JSON.stringify({
			event: "chat.message",
			message: msg
		}));
	};
	const handleCreateNewConversation = async () => {
		if (!user?.id) return;
		const tempId = `new_${Date.now()}`;
		setActiveChatId(tempId);
		setChatMessages([]);
		setChatConversations((prev) => [{
			id: tempId,
			title: "New Conversation",
			summary: "Starting a new thread...",
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev]);
	};
	const handleTailorResume = () => {
		setActiveTab("chat");
		setTimeout(() => {
			handleCreateNewConversation();
			setTimeout(() => {
				setChatInput(`Hi Sahaayak! I just ran a resume analysis for my dream career: ${profDreamCareer || "Software Engineer"}. My ATS score is ${atsScore}%. Can you help me rewrite my professional summary and add relevant keywords based on my skills: ${profSkills || "React, Node.js"}?`);
			}, 500);
		}, 200);
	};
	const greeting = (0, import_react.useMemo)(() => {
		const hour = (/* @__PURE__ */ new Date()).getHours();
		if (hour < 12) return "Good morning";
		if (hour < 17) return "Good afternoon";
		return "Good evening";
	}, []);
	(0, import_react.useEffect)(() => {
		const redirectedPrompt = sessionStorage.getItem("sahaayak_chat_prompt");
		if (redirectedPrompt) {
			sessionStorage.removeItem("sahaayak_chat_prompt");
			setActiveTab("chat");
			setTimeout(() => {
				handleCreateNewConversation();
				setTimeout(() => {
					setChatInput(redirectedPrompt);
				}, 500);
			}, 200);
		}
	}, []);
	const firstName = user?.full_name?.split(" ")[0] || "Student";
	(0, import_react.useEffect)(() => {
		if (student === null && !isOverviewLoading) navigate({ to: "/onboarding" });
	}, [
		student,
		navigate,
		isOverviewLoading
	]);
	if (isOverviewLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[400px] flex-col items-center justify-center gap-3 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: "Loading your Sahaayak dashboard..."
		})]
	});
	const data = overviewRes || {};
	const SUCCESS_DATA = [{
		name: "score",
		value: Math.round(data.success_index || 0),
		fill: "url(#gradPrimary)"
	}];
	const ACTIVITY_DATA = data.recent_activities?.length > 0 ? data.recent_activities.map((a, i) => ({
		day: `D${i}`,
		value: 10 + i * 2
	})) : [
		{
			day: "Mon",
			value: 12
		},
		{
			day: "Tue",
			value: 19
		},
		{
			day: "Wed",
			value: 15
		},
		{
			day: "Thu",
			value: 28
		},
		{
			day: "Fri",
			value: 22
		},
		{
			day: "Sat",
			value: 35
		},
		{
			day: "Sun",
			value: 42
		}
	];
	const opportunities = data.opportunities || [];
	const deadlines = data.upcoming_deadlines || [];
	const mentors = data.mentor_suggestions || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "glass shadow-soft flex flex-col gap-4 rounded-3xl p-5 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
					children: [
						greeting,
						", ",
						firstName
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight mt-1",
					children: "Student Success Dashboard"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1.5 rounded-2xl bg-background/50 p-1 border border-border/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all bg-card text-foreground shadow-soft border border-border/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "size-4" }), " Overview"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/profile",
							className: "flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), " My Profile"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resume",
							className: "flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), " Resume AI"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ai-mentor",
							className: "flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " Ask AI Mentor"]
						})
					]
				})]
			}),
			activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -right-20 -top-24 size-72 rounded-full blur-3xl",
								style: {
									background: "var(--gradient-primary)",
									opacity: .25
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-3xl font-semibold tracking-tight md:text-4xl",
									children: [
										"You're ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gradient-text",
											children: "3 actions away"
										}),
										" ",
										"from this week's goal."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 max-w-xl text-sm text-muted-foreground",
									children: [
										"Your Digital Twin has mapped your engineering path. You have",
										" ",
										opportunities.length,
										" new recommended scholarships and",
										" ",
										mentors.length,
										" mentor matches."
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
										label: "Ask AI Mentor",
										to: "#",
										onClick: () => setActiveTab("chat"),
										primary: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleManualRecalculate,
										disabled: recalculatingTwin,
										className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-semibold hover:bg-accent/45 transition-colors disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-4 ${recalculatingTwin ? "animate-spin" : ""}` }), recalculatingTwin ? "Analyzing..." : "Recalculate Twin"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-7 grid grid-cols-2 gap-3 md:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4" }),
										label: "Success Score",
										value: Math.round(data.success_index || 0).toString(),
										delta: "Live Track"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "size-4" }),
										label: "Profile completeness",
										value: `${Math.round(data.profile_completeness || 0)}%`,
										delta: ""
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4" }),
										label: "Completed Goals",
										value: (data.goals_progress?.completed || 0).toString(),
										delta: ""
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }),
										label: "Pending Goals",
										value: (data.goals_progress?.pending || 0).toString(),
										delta: ""
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "lg:col-span-2",
							title: "Recent Activity",
							subtitle: "Score progress based on mock assessments & activities",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[220px] w-full mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: ACTIVITY_DATA,
									margin: {
										top: 10,
										right: 10,
										bottom: 0,
										left: -16
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "actFill",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "oklch(0.65 0.20 280)",
												stopOpacity: .4
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "oklch(0.65 0.20 280)",
												stopOpacity: 0
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "day",
											tick: {
												fill: "var(--muted-foreground)",
												fontSize: 11
											},
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
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
											color: "var(--foreground)"
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "value",
											stroke: "oklch(0.65 0.20 280)",
											strokeWidth: 2.5,
											fill: "url(#actFill)"
										})
									]
								}) })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Success Index Breakdown",
							subtitle: "Combined tracking metrics",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-[220px] mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadialBarChart, {
									innerRadius: 75,
									outerRadius: 100,
									startAngle: 90,
									endAngle: -270,
									data: SUCCESS_DATA,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "gradPrimary",
										x1: "0",
										y1: "0",
										x2: "1",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "oklch(0.58 0.22 280)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "oklch(0.55 0.24 300)"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBar, {
										dataKey: "value",
										cornerRadius: 20,
										background: { fill: "var(--muted)" }
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-4xl font-bold tracking-tight",
											children: Math.round(data.success_index || 0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "overall index"
										})]
									})
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "lg:col-span-2",
							title: "Today's Recommendations",
							subtitle: "Ranked dynamically by your Digital Twin",
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderLink, {
								to: "/opportunities",
								children: "View all"
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "divide-y divide-border/60 mt-2",
								children: opportunities.length > 0 ? opportunities.map((o, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-4 py-3 first:pt-0 last:pb-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-xl text-primary",
											style: { background: "color-mix(in oklab, var(--primary) 14%, transparent)" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-sm font-semibold",
												children: o.t || o.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-xs text-muted-foreground",
												children: o.sub || o.description
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchBadge, { value: o.match || 88 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-accent/40 hover:text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
										})
									]
								}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "py-3.5 text-sm text-muted-foreground text-center",
									children: "No recommendations found. Complete your profile fields to unlock."
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Upcoming Deadlines",
							subtitle: "Keep track of calendar dates",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 mt-2",
								children: deadlines.length > 0 ? deadlines.map((d, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl bg-background/40 p-3.5 border border-border/35",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-primary",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }),
												" ",
												d.tag || "Scholarship"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-sm font-semibold",
											children: d.t || d.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: d.d || d.date
										})
									]
								}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "py-3 text-sm text-muted-foreground text-center",
									children: "No upcoming deadlines."
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "lg:col-span-2",
							title: "Compounding Action Suggestions",
							subtitle: "Daily tiny steps compiled by Sahaayak AI",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 mt-2",
								children: data.recommendations && data.recommendations.length > 0 ? data.recommendations.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 rounded-2xl bg-background/40 p-3.5 border border-border/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 size-4 shrink-0 text-primary animate-pulse" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm flex-1",
											children: typeof s === "string" ? s : s.message
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveTab("chat"),
											className: "inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/25 transition-colors",
											children: ["Ask Mentor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })]
										})
									]
								}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "py-3 text-sm text-muted-foreground text-center",
									children: "No action suggestions. Keep up the good work!"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Matched Peer Mentors",
							subtitle: "Connect with students or alumni",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 mt-2",
								children: mentors.length > 0 ? mentors.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 rounded-2xl bg-background/40 p-3 border border-border/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold text-primary-foreground",
											style: { background: "var(--gradient-primary)" },
											children: (m.n || m.name || "M")[0]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-sm font-semibold",
												children: m.n || m.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-xs text-muted-foreground",
												children: m.r || m.role
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchBadge, {
											value: m.m || m.match || 92,
											compact: true
										})
									]
								}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "py-3 text-sm text-muted-foreground text-center",
									children: "No matched mentors."
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "lg:col-span-2",
							title: "Digital Twin Dimension Score",
							subtitle: "Core metrics mapped on a 100-point scale",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center p-4 bg-background/40 rounded-2xl border border-border/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-primary",
											children: Math.round(data.digital_twin_summary?.academic_score || 0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: "Academic"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center p-4 bg-background/40 rounded-2xl border border-border/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-accent",
											children: Math.round(data.digital_twin_summary?.financial_stability || 0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: "Financial"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center p-4 bg-background/40 rounded-2xl border border-border/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-success",
											children: Math.round(data.digital_twin_summary?.career_readiness || 0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: "Career"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center p-4 bg-background/40 rounded-2xl border border-border/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold text-warning",
											children: Math.round(data.digital_twin_summary?.confidence_score || 0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: "Confidence"
										})]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Live Support Channels",
							subtitle: "Circles with active peer discussions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 mt-2",
								children: [
									{
										n: "First-gen Support Circle",
										c: "342 active"
									},
									{
										n: "Scholarship Hunters",
										c: "118 active"
									},
									{
										n: "Tech Interview Prep",
										c: "201 active"
									}
								].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-2xl bg-background/40 p-3 border border-border/25",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-sm font-semibold",
												children: g.n
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: g.c
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-success animate-pulse" })
									]
								}, g.n))
							})
						})]
					})
				]
			}),
			activeTab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Profile Completeness",
							subtitle: "Update all fields to reach 100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center p-6 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative size-32",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "size-full",
										viewBox: "0 0 36 36",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											className: "text-muted",
											strokeWidth: "3",
											stroke: "currentColor",
											fill: "none",
											d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											className: "text-primary transition-all duration-1000",
											strokeWidth: "3",
											strokeDasharray: `${Math.round(student?.profile_completeness || 0)}, 100`,
											strokeLinecap: "round",
											stroke: "currentColor",
											fill: "none",
											d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-0 flex items-center justify-center flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-3xl font-extrabold",
											children: [Math.round(student?.profile_completeness || 0), "%"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wider",
											children: "Done"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs text-muted-foreground max-w-xs",
									children: "Your profile data is encrypted, private by default, and used solely by your local Digital Twin to recommend matching opportunities."
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Database Synced",
							subtitle: "Direct PostgreSQL connection status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 p-2 rounded-2xl bg-background/20 border border-border/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-success animate-ping shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-foreground",
									children: "Real-time Sync Active"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Changes propagate in milliseconds"
								})] })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2",
						children: isProfileLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-[300px] flex-col items-center justify-center gap-2 text-muted-foreground bg-card rounded-3xl border border-border/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs",
								children: "Loading profile from database..."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveProfile,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "1. Personal & Academic Profile",
									subtitle: "Your education baseline details",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2 mt-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Full Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: profName,
													onChange: (e) => setProfName(e.target.value),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "Anjali Raj"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Age"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													required: true,
													value: profAge,
													onChange: (e) => setProfAge(Number(e.target.value)),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "19"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "College / University"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: profCollege,
													onChange: (e) => setProfCollege(e.target.value),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "College name"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Branch / Specialization"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: profBranch,
													onChange: (e) => setProfBranch(e.target.value),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "Computer Science"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Academic Year"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: profYear,
													onChange: (e) => setProfYear(e.target.value),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3 text-sm focus:outline-none focus:border-primary transition-colors",
													children: YEAR_OPTIONS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: y,
														children: y
													}, y))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "CGPA / Percentage"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													step: "0.01",
													required: true,
													value: profCgpa,
													onChange: (e) => setProfCgpa(Number(e.target.value)),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "8.5"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5 sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Preferred Communication Language"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: profLang,
													onChange: (e) => setProfLang(e.target.value),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "English, Hindi, etc."
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "2. Family & Economic Background",
									subtitle: "Helps match with financial schemes and scholarships",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-semibold text-muted-foreground",
												children: "Annual Household Income"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: profIncome,
												onChange: (e) => setProfIncome(e.target.value),
												className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3 text-sm focus:outline-none focus:border-primary transition-colors",
												children: INCOME_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: o.key,
													children: o.label
												}, o.key))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-3.5 bg-background/30 border border-border/50 rounded-2xl sm:mt-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-semibold",
												children: "First-Generation Learner"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-muted-foreground",
												children: "First in family to attend college"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: profFirstGen,
												onChange: (e) => setProfFirstGen(e.target.checked),
												className: "size-5 rounded border-border text-primary focus:ring-primary"
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									title: "3. Career Aspirations & Skills",
									subtitle: "Drives recommendations in Career GPS and Opportunity channels",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 mt-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Dream Career Path"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: profDreamCareer,
													onChange: (e) => setProfDreamCareer(e.target.value),
													className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3.5 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "Software Engineer, Civil Servant, Designer, etc."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Skills (Comma-separated)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													value: profSkills,
													onChange: (e) => setProfSkills(e.target.value),
													className: "w-full min-h-[70px] bg-background/50 border border-border/60 rounded-xl p-3 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "React, Python, SQL, Communication, Excel"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-muted-foreground",
													children: "Interests (Comma-separated)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													value: profInterests,
													onChange: (e) => setProfInterests(e.target.value),
													className: "w-full min-h-[70px] bg-background/50 border border-border/60 rounded-xl p-3 text-sm focus:outline-none focus:border-primary transition-colors",
													placeholder: "Coding, Design, Public Speaking, Finance"
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-end pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: isSavingProfile,
										className: "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50",
										style: { background: "var(--gradient-primary)" },
										children: isSavingProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Saving Changes..."] }) : "Save Profile & Recalculate"
									})
								})
							]
						})
					})]
				})
			}),
			activeTab === "resume" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Upload Resume",
						className: "lg:col-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-background/20 p-6 text-center hover:bg-background/45 transition-colors cursor-pointer relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".pdf,.docx",
									onChange: handleResumeSelect,
									className: "absolute inset-0 opacity-0 cursor-pointer",
									disabled: analyzingResume
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-14 place-items-center rounded-full bg-primary/10 text-primary mb-4 animate-bounce",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Click to upload or drag & drop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-2",
									children: "PDF or DOCX (max. 5MB)"
								}),
								resumeFile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-xs bg-card/65 px-3 py-1.5 rounded-full border border-border/45 truncate max-w-xs",
									children: ["📄 ", resumeFile.name]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2",
						children: analyzingResume ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-[320px] flex-col items-center justify-center gap-4 text-center bg-card rounded-3xl border border-border/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-10 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-md",
								children: "AI Resume Analysis In Progress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1 max-w-xs mx-auto",
								children: "Sahaayak AI is scanning your resume formatting, layout, action verbs, and matching keywords..."
							})] })]
						}) : resumeAnalyzed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "ATS Analysis Feedback Report",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSearch, { className: "size-4 text-primary" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 mt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center size-24 rounded-full border-[6px] border-success text-2xl font-extrabold text-success shadow-[0_0_20px_var(--success)]/20 bg-background/25",
											children: [atsScore, "%"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-lg font-bold",
											children: "Competitive Resume Score!"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-1 max-w-md",
											children: [
												"Your resume is highly optimized, but keyword matching for ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: profDreamCareer || "Software Engineer" }),
												" ",
												"can be further strengthened."
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-success/10 border border-success/20 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
												className: "flex items-center gap-2 text-xs font-bold text-success mb-2.5 uppercase tracking-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Strong Aspects"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "space-y-2 text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-1.5 rounded-full bg-success shrink-0" }), "Excellent action-oriented project descriptions."]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-1.5 rounded-full bg-success shrink-0" }), "ATS-friendly single column template layout."]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-destructive/10 border border-destructive/20 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
												className: "flex items-center gap-2 text-xs font-bold text-destructive mb-2.5 uppercase tracking-wide",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4" }), " Areas to Optimize"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "space-y-2 text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-1.5 rounded-full bg-destructive shrink-0" }), "Add missing key industry terms: \"Agile\", \"APIs\"."]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-1.5 rounded-full bg-destructive shrink-0" }), "Quantify project impacts (e.g. state performance percentages)."]
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-background/20 border border-border/30 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-bold uppercase tracking-wide mb-2",
											children: "Target Skills Keyword Match"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: profSkills ? profSkills.split(",").map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 text-[10px] font-semibold bg-success/15 text-success border border-success/20 px-2 py-0.5 rounded-full",
												children: ["✓ ", s.trim()]
											}, s)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 text-[10px] font-semibold bg-success/15 text-success border border-success/20 px-2 py-0.5 rounded-full",
													children: "✓ React"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 text-[10px] font-semibold bg-success/15 text-success border border-success/20 px-2 py-0.5 rounded-full",
													children: "✓ Python"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 text-[10px] font-semibold bg-destructive/15 text-destructive border border-destructive/20 px-2 py-0.5 rounded-full",
													children: "✗ Agile"
												})
											] })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-end gap-2 mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: handleTailorResume,
											className: "inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold text-primary-foreground shadow-glow",
											style: { background: "var(--gradient-primary)" },
											children: ["Tailor with AI Mentor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" })]
										})
									})
								]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-[320px] flex-col items-center justify-center text-center bg-card rounded-3xl border border-border/30 p-6 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSearch, { className: "size-10 text-muted-foreground/60 mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-sm",
									children: "Waiting for Resume File"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs max-w-xs mt-1",
									children: "Upload your resume to get instant ATS scores and personalized career optimization suggestions."
								})
							]
						})
					})]
				})
			}),
			activeTab === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass shadow-soft rounded-3xl overflow-hidden border border-border/30 h-[520px] flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-60 border-r border-border/40 bg-background/20 flex flex-col h-full shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 border-b border-border/40 flex items-center justify-between shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: "Chat History"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleCreateNewConversation,
							className: "grid size-7 place-items-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors",
							title: "New Chat",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto p-2 space-y-1",
						children: [chatConversations.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveChatId(c.id),
							className: `w-full text-left p-2.5 rounded-xl text-xs font-medium transition-colors truncate block ${activeChatId === c.id ? "bg-primary/15 text-primary border border-primary/25" : "text-muted-foreground hover:bg-accent/45 hover:text-foreground"}`,
							children: ["💬 ", c.title || "New Chat"]
						}, c.id)), chatConversations.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 text-center text-[11px] text-muted-foreground",
							children: "No chats found. Click + to start."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col h-full bg-background/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-3 border-b border-border/40 flex items-center justify-between bg-background/30 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold",
									children: "Sahaayak Success AI Mentor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted-foreground",
									children: "Synced with your Digital Twin metrics"
								})] })]
							}), student && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20 font-semibold",
								children: [
									"CGPA: ",
									student.cgpa || "N/A",
									" | ",
									student.branch || "CS"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-4",
							children: [
								chatMessages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center justify-center h-full text-center text-muted-foreground p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-12 place-items-center rounded-full bg-primary/10 text-primary mb-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-sm",
											children: "Ask Sahaayak Mentor"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs max-w-xs mt-1 mb-4",
											children: "Get answers about career opportunities, skill roadmaps, or scholarship eligibility."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-2 sm:grid-cols-2 max-w-md w-full",
											children: CHAT_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleSendChatMessage(p),
												className: "p-2.5 bg-background/50 border border-border/45 rounded-xl text-left text-xs hover:bg-accent/40 hover:text-foreground transition-colors",
												children: p
											}, p))
										})
									]
								}),
								chatMessages.map((msg, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `max-w-[75%] rounded-2xl p-3 text-xs ${msg.role === "user" ? "bg-primary text-primary-foreground font-medium rounded-br-none" : "bg-card border border-border/40 rounded-bl-none text-foreground"}`,
										children: [msg.reasoning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
											className: "mb-2 border-b border-border/30 pb-1.5 text-[10px] text-muted-foreground/80 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
												className: "font-semibold",
												children: "Reasoning Process"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-mono leading-relaxed whitespace-pre-wrap",
												children: msg.reasoning
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "markdown-content",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
												remarkPlugins: [remarkGfm],
												children: msg.content
											})
										})]
									})
								}, idx)),
								chatTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-card border border-border/40 rounded-2xl rounded-bl-none p-3.5 text-xs text-muted-foreground flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-muted-foreground/85 animate-bounce" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-muted-foreground/85 animate-bounce [animation-delay:0.2s]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-muted-foreground/85 animate-bounce [animation-delay:0.4s]" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: chatEndRef })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 border-t border-border/40 bg-background/30 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									handleSendChatMessage();
								},
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: chatInput,
									onChange: (e) => setChatInput(e.target.value),
									placeholder: "Ask about opportunities, skills, or your digital twin...",
									className: "flex-1 h-10 bg-background/50 border border-border/60 rounded-xl px-3.5 text-xs focus:outline-none focus:border-primary transition-colors"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !chatInput.trim(),
									className: "grid size-10 place-items-center rounded-xl text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-45 shrink-0",
									style: { background: "var(--gradient-primary)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
								})]
							})
						})
					]
				})]
			})
		]
	});
}
function Card({ title, subtitle, children, action, className, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `glass shadow-soft rounded-3xl p-5 md:p-6 flex flex-col ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-3.5 flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex items-center gap-2",
				children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "truncate text-sm font-semibold",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-[11px] text-muted-foreground",
					children: subtitle
				})] })]
			}), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1",
			children
		})]
	});
}
function Kpi({ icon, label, value, delta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background/40 p-3.5 border border-border/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-[11px] font-medium text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-6 place-items-center rounded-md bg-primary/15 text-primary",
				children: icon
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xl font-semibold tracking-tight",
				children: value
			}), delta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[9px] font-semibold bg-success/15 text-success px-1.5 py-0.5 rounded border border-success/25 uppercase tracking-wide",
				children: delta
			})]
		})]
	});
}
function MatchBadge({ value, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${compact ? "" : "min-w-[60px] text-center"}`,
		style: {
			background: "color-mix(in oklab, var(--primary) 16%, transparent)",
			color: "oklch(0.78 0.16 280)"
		},
		children: [value, "% match"]
	});
}
function PillButton({ icon, label, to, primary, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: primary ? "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow" : "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold hover:bg-accent/40",
		style: primary ? { background: "var(--gradient-primary)" } : void 0,
		children: [
			icon,
			" ",
			label
		]
	});
}
function HeaderLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline",
		children: [
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })
		]
	});
}
//#endregion
export { Dashboard as component };
