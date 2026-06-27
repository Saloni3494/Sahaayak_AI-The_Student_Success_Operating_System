import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { _ as getWebSocketUrl, a as ChatAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { A as Plus, I as Mic, M as Paperclip, Pt as Sparkles, R as MessageSquare, T as Search, Tt as BookOpen, a as Volume2, f as Trash2, g as ThumbsDown, h as ThumbsUp, i as VolumeX, lt as Copy, w as Send, wt as BrainCircuit } from "./_libs/lucide-react.mjs";
import { t as Markdown } from "./_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "./_libs/remark-gfm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.ai-mentor-CBJOYxY5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRESETS = [
	"Review my latest resume",
	"Any scholarships matching my profile?",
	"Help me prepare for TCS interview",
	"Explain DSA graphs in Hindi"
];
function AIMentor() {
	const { user, student, isLoading } = useUser();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const [conversations, setConversations] = (0, import_react.useState)([]);
	const [activeConversationId, setActiveConversationId] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [language, setLanguage] = (0, import_react.useState)("en");
	const [speakingMsgIdx, setSpeakingMsgIdx] = (0, import_react.useState)(null);
	const ws = (0, import_react.useRef)(null);
	const messagesEndRef = (0, import_react.useRef)(null);
	const textareaRef = (0, import_react.useRef)(null);
	const studentId = user?.id;
	const loadConversations = async (id) => {
		try {
			const data = (await ChatAPI.getConversations(id)).data || [];
			setConversations(data);
			if (data.length > 0) {
				if (!activeConversationId) setActiveConversationId(data[0].id);
			} else if (!activeConversationId) setActiveConversationId("new_" + Date.now().toString());
		} catch (e) {
			console.error("Failed to load conversations", e);
			if (!activeConversationId) setActiveConversationId("new_" + Date.now().toString());
		}
	};
	(0, import_react.useEffect)(() => {
		if (studentId) loadConversations(studentId);
	}, [studentId]);
	const historyLoadedFor = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.speechSynthesis) {
			window.speechSynthesis.cancel();
			setSpeakingMsgIdx(null);
		}
		if (!activeConversationId) {
			setMessages([]);
			historyLoadedFor.current = null;
			return;
		}
		if (activeConversationId && !activeConversationId.startsWith("new_") && historyLoadedFor.current && historyLoadedFor.current.startsWith("new_")) {
			console.log("Suppressing history load during conversation ID resolution");
			historyLoadedFor.current = activeConversationId;
			return;
		}
		const loadHistory = async () => {
			try {
				const history = (await ChatAPI.getHistory(activeConversationId)).data || [];
				if (history && history.length > 0) setMessages(history.map((m) => ({
					id: m.id,
					role: m.role === "assistant" ? "ai" : m.role,
					content: m.content,
					language: m.language,
					sources: m.retrieved_sources,
					followups: m.followups
				})));
				else setMessages([]);
				historyLoadedFor.current = activeConversationId;
			} catch (e) {
				console.error("Failed to load history", e);
			}
		};
		if (activeConversationId.startsWith("new_")) {
			setMessages([]);
			historyLoadedFor.current = activeConversationId;
		} else loadHistory();
	}, [activeConversationId]);
	const wsConversationId = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!studentId || !activeConversationId) return;
		if (ws.current && ws.current.readyState === WebSocket.OPEN && wsConversationId.current && (wsConversationId.current === activeConversationId || !activeConversationId.startsWith("new_") && wsConversationId.current.startsWith("new_"))) {
			console.log("Suppressing WS reconnect during conversation ID resolution", activeConversationId);
			wsConversationId.current = activeConversationId;
			return;
		}
		let reconnectTimeout;
		let heartbeatCheckInterval;
		const connectWS = () => {
			let lastHeartbeat = Date.now();
			wsConversationId.current = activeConversationId;
			ws.current = new WebSocket(getWebSocketUrl(`/mentor/ws/${activeConversationId}?student_id=${studentId}`));
			heartbeatCheckInterval = setInterval(() => {
				if (Date.now() - lastHeartbeat > 15e3) {
					console.warn("No heartbeat received for 15s, reconnecting WebSocket...");
					ws.current?.close();
				}
			}, 5e3);
			ws.current.onmessage = (event) => {
				try {
					const data = JSON.parse(event.data);
					if (data.event === "heartbeat") {
						lastHeartbeat = Date.now();
						return;
					}
					if (data.type === "chat.conversation_created") {
						setActiveConversationId(data.conversation_id);
						loadConversations(studentId);
						return;
					}
					if (data.type === "token.stream") {
						setIsTyping(false);
						setMessages((prev) => {
							const lastMsg = prev[prev.length - 1];
							if (lastMsg && lastMsg.role === "ai") {
								const updated = [...prev];
								updated[updated.length - 1] = {
									...lastMsg,
									content: data.replace ? data.content : lastMsg.content + data.content
								};
								return updated;
							} else return [...prev, {
								role: "ai",
								content: data.content
							}];
						});
					} else if (data.type === "reasoning.stream") {
						setIsTyping(false);
						setMessages((prev) => {
							const lastMsg = prev[prev.length - 1];
							if (lastMsg && lastMsg.role === "ai") {
								const updated = [...prev];
								updated[updated.length - 1] = {
									...lastMsg,
									reasoning: (lastMsg.reasoning || "") + data.content
								};
								return updated;
							} else return [...prev, {
								role: "ai",
								content: "",
								reasoning: data.content
							}];
						});
					} else if (data.type === "chat.followups") setMessages((prev) => {
						const updated = [...prev];
						if (updated.length > 0 && updated[updated.length - 1].role === "ai") updated[updated.length - 1] = {
							...updated[updated.length - 1],
							followups: data.followups
						};
						return updated;
					});
					else if (data.type === "chat.error") {
						setIsTyping(false);
						toast.error(data.error || "A connection error occurred.");
					} else if (data.type === "message.completed" || data.type === "chat.completed") {
						if (data.sources && data.sources.length > 0) setMessages((prev) => {
							const updated = [...prev];
							updated[updated.length - 1] = {
								...updated[updated.length - 1],
								sources: data.sources
							};
							return updated;
						});
						if (conversations.length === 0 || !conversations.find((c) => c.id === activeConversationId)) loadConversations(studentId);
					}
				} catch (err) {
					console.error("Failed to parse WS message", err);
				}
			};
			ws.current.onclose = () => {
				console.log("WebSocket disconnected, retrying...");
				clearInterval(heartbeatCheckInterval);
				reconnectTimeout = setTimeout(connectWS, 3e3);
			};
		};
		connectWS();
		return () => {
			clearTimeout(reconnectTimeout);
			clearInterval(heartbeatCheckInterval);
			if (ws.current) {
				ws.current.onclose = null;
				ws.current.close();
			}
		};
	}, [studentId, activeConversationId]);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		scrollToBottom();
	}, [messages, isTyping]);
	const handleInput = (e) => {
		setInput(e.target.value);
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
		}
	};
	const handleSend = (text) => {
		if (!text.trim() || !ws.current) return;
		if (ws.current.readyState !== WebSocket.OPEN) {
			toast.error("WebSocket is not connected. Please wait a moment.");
			return;
		}
		if (typeof window !== "undefined" && window.speechSynthesis) {
			window.speechSynthesis.cancel();
			setSpeakingMsgIdx(null);
		}
		setMessages((m) => [...m, {
			role: "user",
			content: text
		}]);
		setInput("");
		if (textareaRef.current) textareaRef.current.style.height = "auto";
		setIsTyping(true);
		ws.current.send(JSON.stringify({
			event: "chat.message",
			message: text,
			language
		}));
	};
	const createNewChat = () => {
		if (typeof window !== "undefined" && window.speechSynthesis) {
			window.speechSynthesis.cancel();
			setSpeakingMsgIdx(null);
		}
		setActiveConversationId("new_" + Date.now().toString());
		setMessages([]);
	};
	const deleteConversation = async (e, id) => {
		e.stopPropagation();
		try {
			await ChatAPI.deleteConversation(id);
			const updated = conversations.filter((c) => c.id !== id);
			setConversations(updated);
			if (activeConversationId === id) setActiveConversationId(updated.length > 0 ? updated[0].id : null);
		} catch (err) {
			console.error("Failed to delete conversation", err);
		}
	};
	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		toast.success("Message copied to clipboard!");
	};
	const handleSpeakText = (text, index) => {
		if (typeof window === "undefined" || !window.speechSynthesis) {
			toast.error("Text-to-speech is not supported in this browser.");
			return;
		}
		const synth = window.speechSynthesis;
		if (synth.speaking) {
			synth.cancel();
			if (speakingMsgIdx === index) {
				setSpeakingMsgIdx(null);
				return;
			}
		}
		const cleanText = text.replace(/[*#_`~>\[\]()\-+]/g, " ").replace(/\s+/g, " ").trim();
		const utterance = new SpeechSynthesisUtterance(cleanText);
		const msgLang = messages[index]?.language || language || "en";
		if (msgLang === "hi") utterance.lang = "hi-IN";
		else if (msgLang === "mr") utterance.lang = "mr-IN";
		else if (msgLang === "ta") utterance.lang = "ta-IN";
		else if (msgLang === "te") utterance.lang = "te-IN";
		else if (msgLang === "kn") utterance.lang = "kn-IN";
		else if (msgLang === "gu") utterance.lang = "gu-IN";
		else if (msgLang === "bn") utterance.lang = "bn-IN";
		else utterance.lang = "en-US";
		utterance.rate = .95;
		utterance.onend = () => {
			setSpeakingMsgIdx(null);
		};
		utterance.onerror = (e) => {
			console.error("SpeechSynthesis error:", e);
			setSpeakingMsgIdx(null);
		};
		synth.speak(utterance);
		setSpeakingMsgIdx(index);
	};
	const handleSpeakLastResponse = () => {
		let lastAiIdx = -1;
		for (let idx = messages.length - 1; idx >= 0; idx--) if (messages[idx].role === "ai" || messages[idx].role === "assistant") {
			lastAiIdx = idx;
			break;
		}
		if (lastAiIdx !== -1) handleSpeakText(messages[lastAiIdx].content, lastAiIdx);
		else toast.info("No AI response available to read aloud.");
	};
	const isSpeakingAny = speakingMsgIdx !== null;
	if (!mounted || isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[calc(100vh-8rem)] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-12 rounded-full border-4 border-primary border-t-transparent animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground animate-pulse",
				children: "Loading your Sahaayak AI Mentor..."
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[calc(100vh-8rem)] gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden w-72 flex-col gap-4 lg:flex glass rounded-3xl p-4 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: createNewChat,
					className: "flex items-center justify-center gap-2 w-full text-center px-4 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " New Chat"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search chats...",
						className: "w-full bg-background/50 border border-border/50 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 text-foreground"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto space-y-1 mt-2 pr-1 custom-scrollbar",
					children: [conversations.map((conv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setActiveConversationId(conv.id),
						className: `group flex items-center justify-between w-full text-left px-3 py-3 text-sm rounded-xl cursor-pointer transition-all ${activeConversationId === conv.id ? "bg-primary/10 text-primary font-bold border border-primary/20" : "hover:bg-accent/10 text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4 shrink-0 text-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: conv.title || "New Conversation"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => deleteConversation(e, conv.id),
							className: "opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity shrink-0 p-1",
							title: "Delete chat",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
						})]
					}, conv.id)), conversations.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center text-muted-foreground text-xs p-4",
						children: "No recent chats"
					})]
				}),
				student && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto p-4 rounded-2xl bg-primary/5 border border-primary/15 space-y-2.5 animate-in fade-in duration-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-9 place-items-center rounded-full text-sm font-bold text-primary-foreground shadow-glow",
							style: { background: "var(--gradient-primary)" },
							children: user?.full_name ? user.full_name[0].toUpperCase() : "S"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs font-bold text-foreground",
								children: user?.full_name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-[10px] text-muted-foreground",
								children: student.college || "Update college"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 bg-background/45 rounded-xl border border-border/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-extrabold text-primary",
								children: student.cgpa ? student.cgpa.toFixed(1) : "N/A"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] text-muted-foreground mt-0.5",
								children: "CGPA"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 bg-background/45 rounded-xl border border-border/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-extrabold text-success",
								children: [Math.round(student.profile_completeness), "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] text-muted-foreground mt-0.5",
								children: "Profile"
							})]
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col overflow-hidden rounded-3xl glass shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between border-b border-border/50 bg-background/50 p-4 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary shadow-inner",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 animate-pulse" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-foreground",
							children: "AI Mentor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Always-on, personalized guidance"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: language,
						onChange: (e) => setLanguage(e.target.value),
						className: "bg-background border border-border/50 rounded-lg px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:border-primary text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "en",
								children: "English"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "hi",
								children: "Hindi (हिन्दी)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "mr",
								children: "Marathi (मराठी)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "ta",
								children: "Tamil (தமிழ்)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "te",
								children: "Telugu (తెలుగు)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "kn",
								children: "Kannada (ಕನ್ನಡ)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "gu",
								children: "Gujarati (ગુજરાતી)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bn",
								children: "Bengali (বাংলা)"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-background/5",
					children: [
						messages.length === 0 && !isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-4 animate-in fade-in duration-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-8" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-foreground mt-4",
									children: "Ask your first question"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: "I'm your AI Mentor, synced with your Digital Twin context. I can help with career planning, scholarship matches, and academic guidance."
								})
							]
						}),
						messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex gap-3 animate-in fade-in-0 slide-in-from-bottom-3 duration-300 ${m.role === "user" ? "flex-row-reverse" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid size-8 shrink-0 place-items-center rounded-full mt-1 font-bold ${m.role === "user" ? "bg-accent/15 text-accent text-xs" : "bg-primary/20 text-primary text-xs"}`,
								children: m.role === "user" ? user?.full_name ? user.full_name[0].toUpperCase() : "U" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[80%] rounded-2xl p-4 text-sm ${m.role === "user" ? "bg-accent/10 rounded-tr-none text-foreground font-medium" : "bg-card border border-border/40 rounded-tl-none text-foreground shadow-sm"}`,
								children: [
									m.role === "ai" || m.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "prose prose-sm dark:prose-invert max-w-none",
										children: [m.reasoning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
											className: "mb-4 rounded-xl border border-border/50 bg-background/40 p-3 group shadow-inner",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
												className: "flex cursor-pointer items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground list-none transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-4 text-primary/70 group-open:text-primary" }), isTyping && i === messages.length - 1 ? "Thinking in progress..." : "AI Reasoning"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 text-[11px] text-muted-foreground/90 whitespace-pre-wrap font-mono leading-relaxed border-t border-border/50 pt-3",
												children: m.reasoning
											})]
										}), m.content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "markdown-content leading-relaxed text-foreground/90",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
												remarkPlugins: [remarkGfm],
												children: m.content
											})
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "whitespace-pre-wrap leading-relaxed",
										children: m.content
									}),
									m.sources && m.sources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 pt-3.5 border-t border-border/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] font-bold mb-2 flex items-center gap-1 text-foreground/80 uppercase tracking-wide",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }), " Sources Used:"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1.5",
											children: m.sources.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "text-xs text-muted-foreground flex items-start gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 rounded-full bg-primary/60 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													src.source,
													" ",
													src.page ? `(Page ${src.page})` : ""
												] })]
											}, idx))
										})]
									}),
									(m.role === "ai" || m.role === "assistant") && i >= 0 && !isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5 mt-4 pt-3 text-muted-foreground border-t border-border/30 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => copyToClipboard(m.content),
												className: "hover:text-primary transition-colors flex items-center gap-1",
												title: "Copy message",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), " Copy"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleSpeakText(m.content, i),
												className: `transition-colors flex items-center gap-1 ${speakingMsgIdx === i ? "text-success font-bold" : "hover:text-primary"}`,
												title: speakingMsgIdx === i ? "Stop reading" : "Read aloud",
												children: speakingMsgIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-3.5 text-success animate-pulse" }),
													" ",
													"Stop"
												] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" }), " Speak"] })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "hover:text-success transition-colors",
												title: "Thumbs up",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "hover:text-destructive transition-colors",
												title: "Thumbs down",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, { className: "size-3.5" })
											})
										]
									}),
									(m.role === "ai" || m.role === "assistant") && m.followups && !isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-col gap-2 border-t border-border/35 pt-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-muted-foreground",
											children: "Suggested Follow-ups:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: m.followups.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleSend(f),
												className: "rounded-xl border border-border bg-background/50 px-3 py-2 text-xs text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-left transition-colors",
												children: f
											}, idx))
										})]
									})
								]
							})]
						}, i)),
						isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 animate-in fade-in duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-8 shrink-0 place-items-center rounded-full bg-primary/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 animate-spin" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background/60 border border-border/50 rounded-2xl rounded-tl-none p-4 text-sm flex items-center gap-1.5 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary/50 animate-bounce" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary/50 animate-bounce [animation-delay:0.2s]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary/50 animate-bounce [animation-delay:0.4s]" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
					]
				}),
				messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pb-4 max-w-3xl mx-auto w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2",
						children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSend(p),
							className: "rounded-xl border border-border/60 bg-background/40 px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30",
							children: p
						}, p))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-background/40 border-t border-border/50 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl mx-auto flex items-end gap-2 rounded-2xl border border-border bg-background px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "grid size-9 mb-1 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-accent/20 hover:text-foreground transition-colors",
								title: "Attach file",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: textareaRef,
								value: input,
								onChange: handleInput,
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSend(input);
									}
								},
								placeholder: "Ask your AI Mentor... (Shift+Enter for new line)",
								className: "w-full resize-none border-0 bg-transparent px-2 py-2.5 text-sm shadow-none focus:outline-none focus:ring-0 custom-scrollbar text-foreground",
								style: {
									minHeight: "40px",
									maxHeight: "120px"
								},
								rows: 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleSpeakLastResponse,
								className: `grid size-9 mb-1 shrink-0 place-items-center rounded-full transition-all border ${isSpeakingAny ? "bg-success/15 border-success text-success animate-pulse shadow-[0_0_12px_var(--success)]/25" : "text-muted-foreground hover:bg-accent/20 hover:text-foreground border-transparent"}`,
								title: isSpeakingAny ? "Stop reading last response" : "Read aloud most recent response",
								children: isSpeakingAny ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleSend(input),
								disabled: !input.trim() || !activeConversationId,
								className: "grid size-9 mb-1 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: "AI can make mistakes. Consider verifying important information."
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { AIMentor as component };
