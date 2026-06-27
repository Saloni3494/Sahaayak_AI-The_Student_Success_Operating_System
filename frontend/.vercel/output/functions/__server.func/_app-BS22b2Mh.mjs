import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { t as API_BASE_URL } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { n as cn, t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { t as BrandLogo } from "./_ssr/brand-DXDKMmAo.mjs";
import { B as Maximize2, C as Settings, D as Rocket, Et as Bell, Ft as LoaderCircle, I as Mic, K as LayoutDashboard, L as MicOff, Mt as Accessibility, N as Network, Pt as Sparkles, Q as Globe, R as MessageSquare, S as ShieldAlert, T as Search, V as Map, W as LogOut, X as HeartHandshake, Z as GraduationCap, _t as ChevronDown, a as Volume2, c as Upload, gt as ChevronLeft, ht as ChevronRight, n as X, nt as FileText, o as Users, q as Landmark, r as Waves, s as User, ut as Compass, wt as BrainCircuit } from "./_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./_ssr/theme-toggle-CJDOGKlT.mjs";
import { N as useNavigate, f as Outlet, g as Link, l as useRouterState } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-BS22b2Mh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		label: "Dashboard",
		to: "/dashboard",
		icon: LayoutDashboard,
		group: "Core"
	},
	{
		label: "AI Mentor",
		to: "/ai-mentor",
		icon: Sparkles,
		group: "Core"
	},
	{
		label: "Digital Twin",
		to: "/digital-twin",
		icon: BrainCircuit,
		group: "Core"
	},
	{
		label: "Career GPS",
		to: "/career-gps",
		icon: Compass,
		group: "Core"
	},
	{
		label: "Success Navigator",
		to: "/success-navigator",
		icon: Map,
		group: "Core"
	},
	{
		label: "Switch to Disability Mode",
		to: "/accessibility",
		icon: Accessibility,
		group: "Core"
	},
	{
		label: "Opportunities",
		to: "/opportunities",
		icon: Rocket,
		group: "Discover"
	},
	{
		label: "Scholarships",
		to: "/scholarships",
		icon: GraduationCap,
		group: "Discover"
	},
	{
		label: "Govt. Schemes",
		to: "/schemes",
		icon: Landmark,
		group: "Discover"
	},
	{
		label: "Knowledge Graph",
		to: "/knowledge-graph",
		icon: Network,
		group: "Discover"
	},
	{
		label: "Resume Analyzer",
		to: "/resume",
		icon: FileText,
		group: "Growth"
	},
	{
		label: "Mentor Network",
		to: "/mentors",
		icon: Users,
		group: "Growth"
	},
	{
		label: "Community",
		to: "/community",
		icon: MessageSquare,
		group: "Growth"
	},
	{
		label: "Interventions",
		to: "/interventions",
		icon: ShieldAlert,
		group: "Growth"
	},
	{
		label: "Profile",
		to: "/profile",
		icon: User,
		group: "You"
	},
	{
		label: "Parent Mode",
		to: "/parent",
		icon: HeartHandshake,
		group: "You"
	},
	{
		label: "Voice Assistant",
		to: "/voice",
		icon: Mic,
		group: "You"
	},
	{
		label: "Notifications",
		to: "/notifications",
		icon: Bell,
		group: "You"
	},
	{
		label: "Settings",
		to: "/settings",
		icon: Settings,
		group: "You"
	}
];
var GROUPS = [
	{
		key: "Core",
		label: "Core"
	},
	{
		key: "Discover",
		label: "Discover"
	},
	{
		key: "Growth",
		label: "Growth"
	},
	{
		key: "You",
		label: "You"
	}
];
function AppSidebar() {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: cn("sticky top-3 z-30 hidden h-[calc(100dvh-1.5rem)] shrink-0 lg:flex", "ml-3 flex-col", collapsed ? "w-[76px]" : "w-[260px]", "transition-[width] duration-300"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass shadow-soft flex h-full flex-col overflow-hidden rounded-3xl p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex items-center gap-2 px-2 pb-3 pt-1", collapsed && "justify-center"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { collapsed })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 overflow-y-auto pr-1",
					children: GROUPS.map((g) => {
						const items = NAV.filter((n) => n.group === g.key);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 first:mt-0",
							children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80",
								children: g.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-0.5",
								children: items.map((item) => {
									const active = pathname === item.to;
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.to,
										"aria-label": item.label,
										title: collapsed ? item.label : void 0,
										className: cn("group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", active ? "text-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground", collapsed && "justify-center px-0"),
										style: active ? { background: "color-mix(in oklab, var(--primary) 18%, transparent)" } : void 0,
										children: [
											active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												className: "absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full",
												style: { background: "var(--gradient-primary)" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("size-[18px] shrink-0", active ? "text-primary" : "text-current") }),
											!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: item.label
											})
										]
									}) }, item.to);
								})
							})]
						}, g.key);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCollapsed((c) => !c),
					className: "mt-2 flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-background/40 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground",
					"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
					children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collapse" })] })
				})
			]
		})
	});
}
function MobileNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-3 bottom-3 z-40 lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong shadow-soft mx-auto flex max-w-md items-center justify-between rounded-2xl px-2 py-1.5",
			children: NAV.filter((n) => [
				"/dashboard",
				"/digital-twin",
				"/ai-mentor",
				"/career-gps",
				"/scholarships"
			].includes(n.to)).map((it) => {
				const Icon = it.icon;
				const active = pathname === it.to;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: it.to,
					className: cn("flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[10px] font-medium transition-colors", active ? "text-primary" : "text-muted-foreground"),
					"aria-label": it.label,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: it.label.split(" ")[0]
					})]
				}, it.to);
			})
		})
	});
}
function Topbar() {
	const { user, student } = useUser();
	const navigate = useNavigate();
	const [profileOpen, setProfileOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const profileRef = (0, import_react.useRef)(null);
	const searchInputRef = (0, import_react.useRef)(null);
	const initials = user?.full_name ? user.full_name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() : "?";
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				setSearchOpen(true);
				setTimeout(() => searchInputRef.current?.focus(), 50);
			}
			if (e.key === "Escape") {
				setSearchOpen(false);
				setSearchQuery("");
			}
		};
		document.addEventListener("keydown", handler);
		return () => document.removeEventListener("keydown", handler);
	}, []);
	const handleLogout = (0, import_react.useCallback)(() => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		setProfileOpen(false);
		navigate({ to: "/sign-in" });
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-3 z-20 mx-3 mt-3 lg:mt-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong shadow-soft flex h-14 items-center gap-2 rounded-2xl px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-background/40 px-3 py-2", searchOpen && "ring-1 ring-primary/40"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: searchInputRef,
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search scholarships, mentors, careers, schemes…",
							className: "min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground",
							"aria-label": "Global search",
							onFocus: () => setSearchOpen(true),
							onBlur: () => {
								if (!searchQuery) setSearchOpen(false);
							}
						}),
						searchOpen && searchQuery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setSearchQuery("");
								setSearchOpen(false);
							},
							className: "rounded p-0.5 text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "hidden rounded border border-border/60 px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline",
							children: "⌘K"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ai-mentor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "rounded-full text-primary-foreground",
								style: { background: "var(--gradient-primary)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Ask AI"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resume",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "ghost",
								className: "rounded-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Resume"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/voice",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "rounded-full",
								"aria-label": "Voice mode",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/digital-twin",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "rounded-full",
								"aria-label": "Digital Twin",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-4" })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 hidden h-6 w-px bg-border md:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					className: "rounded-full",
					"aria-label": "Language",
					title: student?.preferred_language || "Language",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/notifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "icon",
						variant: "ghost",
						className: "relative rounded-full",
						"aria-label": "Notifications",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1.5 top-1.5 size-2 rounded-full bg-primary animate-pulse-glow" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					ref: profileRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setProfileOpen((o) => !o),
						className: "ml-1 flex items-center gap-1.5",
						"aria-label": "Profile menu",
						"aria-expanded": profileOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-full text-sm font-semibold text-primary-foreground shadow-glow",
							style: { background: "var(--gradient-primary)" },
							children: initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("hidden size-3.5 text-muted-foreground transition-transform md:block", profileOpen && "rotate-180") })]
					}), profileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong shadow-soft absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-border/60 p-1.5 animate-in fade-in slide-in-from-top-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-background/40 px-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-semibold",
									children: user?.full_name || "Student"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs text-muted-foreground",
									children: user?.email || ""
								}),
								student?.college && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 truncate text-[11px] text-muted-foreground",
									children: [student.college, student.year ? ` · Year ${student.year}` : ""]
								}),
								(student?.profile_completeness ?? 0) < 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Profile completeness" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(student?.profile_completeness ?? 0), "%"] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 h-1 w-full overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-full transition-all",
											style: {
												width: `${student?.profile_completeness ?? 0}%`,
												background: "var(--gradient-primary)"
											}
										})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 space-y-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownItem, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }),
									label: "My Profile",
									onClick: () => {
										setProfileOpen(false);
										navigate({ to: "/profile" });
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownItem, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-4" }),
									label: "Digital Twin",
									onClick: () => {
										setProfileOpen(false);
										navigate({ to: "/digital-twin" });
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownItem, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
									label: "Resume Analyzer",
									onClick: () => {
										setProfileOpen(false);
										navigate({ to: "/resume" });
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownItem, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }),
									label: "Settings",
									onClick: () => {
										setProfileOpen(false);
										navigate({ to: "/settings" });
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-px bg-border/60" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownItem, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }),
									label: "Sign out",
									onClick: handleLogout,
									destructive: true
								})
							]
						})]
					})]
				})
			]
		})
	});
}
function DropdownItem({ icon, label, onClick, destructive }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors", destructive ? "text-destructive hover:bg-destructive/10" : "text-foreground hover:bg-accent/40"),
		children: [icon, label]
	});
}
var LANGUAGES = [
	{
		code: "en",
		name: "English"
	},
	{
		code: "hi",
		name: "Hindi"
	},
	{
		code: "mr",
		name: "Marathi"
	},
	{
		code: "ta",
		name: "Tamil"
	},
	{
		code: "te",
		name: "Telugu"
	},
	{
		code: "kn",
		name: "Kannada"
	},
	{
		code: "gu",
		name: "Gujarati"
	},
	{
		code: "bn",
		name: "Bengali"
	}
];
function VoiceAssistant() {
	const { user } = useUser();
	const studentId = user?.id || "default_student";
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [language, setLanguage] = (0, import_react.useState)("en");
	const [showLangMenu, setShowLangMenu] = (0, import_react.useState)(false);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [voiceState, setVoiceState] = (0, import_react.useState)("Disconnected");
	const [transcript, setTranscript] = (0, import_react.useState)("Tap the microphone to start speaking.");
	const [aiResponse, setAiResponse] = (0, import_react.useState)("");
	const [emotion, setEmotion] = (0, import_react.useState)("neutral");
	const wsRef = (0, import_react.useRef)(null);
	const audioContextRef = (0, import_react.useRef)(null);
	const processorRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const audioPlaybackRef = (0, import_react.useRef)(null);
	const voiceStateRef = (0, import_react.useRef)(voiceState);
	(0, import_react.useEffect)(() => {
		voiceStateRef.current = voiceState;
	}, [voiceState]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) disconnectSession();
		return () => {
			disconnectSession();
		};
	}, [isOpen]);
	const disconnectSession = () => {
		if (audioPlaybackRef.current) {
			audioPlaybackRef.current.pause();
			audioPlaybackRef.current = null;
		}
		if (processorRef.current) {
			processorRef.current.disconnect();
			processorRef.current = null;
		}
		if (audioContextRef.current) {
			audioContextRef.current.close().catch(() => {});
			audioContextRef.current = null;
		}
		if (streamRef.current) {
			streamRef.current.getTracks().forEach((track) => track.stop());
			streamRef.current = null;
		}
		if (wsRef.current) {
			if (wsRef.current.readyState === WebSocket.OPEN) {
				wsRef.current.send(JSON.stringify({ event: "stop" }));
				wsRef.current.close();
			}
			wsRef.current = null;
		}
		setVoiceState("Disconnected");
	};
	const startSession = async () => {
		setVoiceState("Thinking");
		setTranscript("Connecting to voice gateway...");
		setAiResponse("");
		try {
			window.location.protocol;
			let wsUrl = "";
			if ("http://localhost:8000/api/v1".startsWith("http")) wsUrl = API_BASE_URL.replace(/^http/, "ws") + `/voice/ws/voice/${studentId}`;
			const socket = new WebSocket(wsUrl);
			wsRef.current = socket;
			socket.onopen = () => {
				socket.send(JSON.stringify({
					event: "start",
					language
				}));
			};
			socket.onmessage = async (event) => {
				try {
					const data = JSON.parse(event.data);
					switch (data.event) {
						case "ready":
							setVoiceState("Listening");
							setTranscript("I am listening. How can I help you?");
							break;
						case "listening":
							setVoiceState("Listening");
							break;
						case "processing":
							setVoiceState("Processing");
							setTranscript("Processing your voice input...");
							break;
						case "transcript":
							setTranscript(`"${data.text}"`);
							setVoiceState("Thinking");
							break;
						case "ai.response":
							setAiResponse(data.text);
							break;
						case "emotion":
							setEmotion(data.emotion);
							break;
						case "audio.chunk":
							playAudioResponse(data.audio);
							break;
						case "language.changed":
							toast.success(`Language: ${LANGUAGES.find((l) => l.code === data.language)?.name}`);
							break;
						case "error":
							toast.error(data.message);
							disconnectSession();
							break;
					}
				} catch (err) {
					console.error("Error processing message:", err);
				}
			};
			socket.onclose = () => {
				setVoiceState("Disconnected");
			};
			socket.onerror = () => {
				disconnectSession();
			};
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			streamRef.current = stream;
			const context = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16e3 });
			audioContextRef.current = context;
			if (context.state === "suspended") await context.resume();
			const source = context.createMediaStreamSource(stream);
			const processor = context.createScriptProcessor(4096, 1, 1);
			processorRef.current = processor;
			processor.onaudioprocess = (e) => {
				if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN && voiceStateRef.current === "Listening" && !isMuted) {
					const inputData = e.inputBuffer.getChannelData(0);
					const pcmBuffer = new Int16Array(inputData.length);
					for (let i = 0; i < inputData.length; i++) {
						const s = Math.max(-1, Math.min(1, inputData[i]));
						pcmBuffer[i] = s < 0 ? s * 32768 : s * 32767;
					}
					wsRef.current.send(pcmBuffer.buffer);
				}
			};
			source.connect(processor);
			processor.connect(context.destination);
		} catch (err) {
			console.error(err);
			toast.error("Failed to access microphone.");
			disconnectSession();
		}
	};
	const playAudioResponse = (base64Audio) => {
		try {
			if (audioPlaybackRef.current) {
				audioPlaybackRef.current.pause();
				audioPlaybackRef.current = null;
			}
			setVoiceState("Speaking");
			const binaryString = atob(base64Audio);
			const len = binaryString.length;
			const bytes = new Uint8Array(len);
			for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
			const blob = new Blob([bytes.buffer], { type: "audio/mp3" });
			const url = URL.createObjectURL(blob);
			const audio = new Audio(url);
			audioPlaybackRef.current = audio;
			audio.onended = () => {
				URL.revokeObjectURL(url);
				audioPlaybackRef.current = null;
				setVoiceState("Listening");
			};
			audio.onerror = () => {
				URL.revokeObjectURL(url);
				audioPlaybackRef.current = null;
				setVoiceState("Listening");
			};
			audio.play().catch((err) => {
				console.error(err);
				setVoiceState("Listening");
			});
		} catch (e) {
			console.error(e);
			setVoiceState("Listening");
		}
	};
	const toggleVoice = () => {
		if (voiceState === "Disconnected") startSession();
		else disconnectSession();
	};
	const changeLanguage = (langCode) => {
		setLanguage(langCode);
		setShowLangMenu(false);
		if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) wsRef.current.send(JSON.stringify({
			event: "language",
			language: langCode
		}));
	};
	const getEmotionColor = () => {
		switch (emotion) {
			case "happy": return "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]";
			case "sad": return "text-sky-400 font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]";
			case "stressed": return "text-amber-400 font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]";
			case "confused": return "text-violet-400 font-bold drop-shadow-[0_0_8px_rgba(167,139,250,0.3)]";
			default: return "text-primary/90 font-bold";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => setIsOpen(true),
			className: "size-14 rounded-full shadow-glow shadow-primary/50 text-primary-foreground hover:scale-105 transition-transform",
			style: { background: "var(--gradient-primary)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-6" })
		})
	}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-md transition-all duration-300 animate-in fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-slate-900/95 border border-white/10 text-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl relative flex flex-col items-center select-none overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -left-12 w-28 h-28 bg-primary/20 rounded-full blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full flex items-center justify-between mb-4 z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowLangMenu(!showLangMenu),
							className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: LANGUAGES.find((l) => l.code === language)?.name })]
						}), showLangMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 mt-1.5 w-32 rounded-xl bg-slate-950 border border-white/10 p-1 shadow-2xl max-h-40 overflow-y-auto z-[110] scrollbar-thin",
							children: LANGUAGES.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => changeLanguage(lang.code),
								className: cn("w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors", language === lang.code ? "bg-primary text-white" : "hover:bg-white/5 text-slate-300 hover:text-white"),
								children: lang.name
							}, lang.code))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsOpen(false),
						className: "p-1.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors",
						"aria-label": "Close assistant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4.5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5 z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-lg tracking-tight",
						children: "AI Voice Companion"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-0.5",
						children: "Sahaayak Intelligent Success Voice"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-[6.5rem] max-h-[8.5rem] overflow-y-auto mb-6 flex flex-col justify-center text-center z-10 scrollbar-thin",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400 italic leading-relaxed",
						children: transcript
					}), aiResponse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-white font-medium mt-2.5 leading-relaxed",
						children: [
							"\"",
							aiResponse,
							"\""
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-6 z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 rounded-full blur-3xl transition-all duration-1000 scale-90 opacity-0", voiceState === "Listening" && "bg-emerald-500/30 scale-125 opacity-100", voiceState === "Speaking" && "bg-primary/30 scale-125 opacity-100", (voiceState === "Thinking" || voiceState === "Processing") && "bg-amber-500/20 scale-110 opacity-80") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: toggleVoice,
						disabled: voiceState === "Thinking" || voiceState === "Processing",
						className: cn("relative size-24 rounded-full border transition-all duration-300 shadow-lg flex items-center justify-center text-white", voiceState === "Disconnected" ? "bg-primary hover:bg-primary/95 border-primary/20 hover:scale-105" : "bg-red-500/10 border-red-500/30 hover:bg-red-500/20 text-red-400 hover:scale-95"),
						style: voiceState === "Disconnected" ? { background: "var(--gradient-primary)" } : void 0,
						children: voiceState === "Listening" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "size-10 text-white animate-pulse" }) : voiceState === "Speaking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-10 text-white animate-bounce" }) : voiceState === "Thinking" || voiceState === "Processing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-10 text-white animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-10 text-white" })
					})]
				}),
				voiceState !== "Disconnected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10px] tracking-widest uppercase font-bold text-slate-500 mb-4 z-10",
					children: ["Emotion: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: getEmotionColor(),
						children: emotion
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-8 flex items-center justify-center w-full mb-6 z-10",
					children: voiceState === "Listening" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5 items-center justify-center w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-4 bg-emerald-400 rounded-full animate-[bounce_1s_infinite_100ms]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-7 bg-emerald-400 rounded-full animate-[bounce_1s_infinite_200ms]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-5 bg-emerald-400 rounded-full animate-[bounce_1s_infinite_300ms]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-3 bg-emerald-400 rounded-full animate-[bounce_1s_infinite_400ms]" })
						]
					}) : voiceState === "Speaking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5 items-center justify-center w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-3 bg-primary rounded-full animate-[bounce_1.2s_infinite_150ms]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-6 bg-primary rounded-full animate-[bounce_1.2s_infinite_300ms]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-8 bg-primary rounded-full animate-[bounce_1.2s_infinite_450ms]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-4 bg-primary rounded-full animate-[bounce_1.2s_infinite_600ms]" })
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-400 text-[10px] font-bold uppercase tracking-wider",
						children: voiceState === "Disconnected" ? "Tap to speak" : voiceState
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 w-full z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setIsMuted(!isMuted),
						className: cn("flex-1 rounded-full text-xs h-10 font-semibold border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors", isMuted && "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20 hover:text-red-400"),
						children: [isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "size-3.5 mr-1.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-3.5 mr-1.5" }), isMuted ? "Unmute" : "Mute Mic"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => {
							disconnectSession();
							setIsOpen(false);
							toast.info("Opening Full Screen companion...");
							window.location.hash = "#/voice";
						},
						className: "flex-1 rounded-full text-xs h-10 font-semibold border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-3.5 mr-1.5" }), "Full Screen"]
					})]
				})
			]
		})
	})] });
}
function AppLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "mx-3 mt-4 pb-28 lg:pb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceAssistant, {})
		]
	});
}
//#endregion
export { AppLayout as component };
