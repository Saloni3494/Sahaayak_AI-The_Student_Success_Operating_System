import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { t as API_BASE_URL } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { At as ArrowLeft, Ft as LoaderCircle, I as Mic, L as MicOff, Q as Globe, i as VolumeX, l as Type, zt as CircleQuestionMark } from "./_libs/lucide-react.mjs";
import { N as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence, t as motion } from "./_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.voice-Ce51TUjo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const navigate = useNavigate();
	const studentId = user?.id || "default_student";
	const [language, setLanguage] = (0, import_react.useState)("en");
	const [showLangMenu, setShowLangMenu] = (0, import_react.useState)(false);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [largeText, setLargeText] = (0, import_react.useState)(false);
	const [parentMode, setParentMode] = (0, import_react.useState)(false);
	const [lowLiteracyMode, setLowLiteracyMode] = (0, import_react.useState)(false);
	const [voiceState, setVoiceState] = (0, import_react.useState)("Disconnected");
	const [userTranscript, setUserTranscript] = (0, import_react.useState)("");
	const [aiResponse, setAiResponse] = (0, import_react.useState)("Tap the microphone to start a conversation.");
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
		return () => {
			disconnectSession();
		};
	}, []);
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
		disconnectSession();
		setVoiceState("Thinking");
		setUserTranscript("");
		setAiResponse("Connecting to Voice Mentor...");
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
							setAiResponse("I am listening. How can I help you?");
							if (lowLiteracyMode) speakInstruction("I am listening, please speak.");
							break;
						case "listening":
							if (data.speaking) setVoiceState("Listening");
							else setVoiceState("Listening");
							break;
						case "processing":
							setVoiceState("Processing");
							setAiResponse("Transcribing audio...");
							break;
						case "transcript":
							setUserTranscript(data.text);
							setVoiceState("Thinking");
							setAiResponse("Formulating guidance response...");
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
							toast.success(`Language updated to ${LANGUAGES.find((l) => l.code === data.language)?.name}`);
							break;
						case "error":
							toast.error(data.message || "An error occurred.");
							disconnectSession();
							break;
					}
				} catch (err) {
					console.error("Error processing websocket message:", err);
				}
			};
			socket.onclose = () => {
				loggerDisconnect();
			};
			socket.onerror = (err) => {
				console.error("WebSocket error:", err);
				toast.error("Network connection error. Reconnecting...");
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
			console.error("Voice initialization error:", err);
			toast.error("Microphone access denied or audio device not found.");
			disconnectSession();
		}
	};
	const loggerDisconnect = () => {
		setVoiceState("Disconnected");
		setAiResponse("Conversation finished. Tap the mic to restart.");
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
				console.error("Audio playback error:", err);
				setVoiceState("Listening");
			});
		} catch (e) {
			console.error("Failed to decode speech response:", e);
			setVoiceState("Listening");
		}
	};
	const speakInstruction = (text) => {
		if ("speechSynthesis" in window) {
			window.speechSynthesis.cancel();
			const utterance = new SpeechSynthesisUtterance(text);
			utterance.lang = language === "hi" ? "hi-IN" : language === "mr" ? "mr-IN" : "en-US";
			window.speechSynthesis.speak(utterance);
		}
	};
	const toggleSession = () => {
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
		else toast.success(`Language set to ${LANGUAGES.find((l) => l.code === langCode)?.name}`);
	};
	const getWaveScale = (index) => {
		if (voiceState === "Listening") return [
			1,
			2.5 + Math.sin(index) * 1.5,
			1
		];
		if (voiceState === "Speaking") return [
			1,
			4 + Math.cos(index) * 2,
			1
		];
		if (voiceState === "Thinking" || voiceState === "Processing") return [
			1.2,
			1.2,
			1.2
		];
		return [
			.2,
			.2,
			.2
		];
	};
	const getEmotionColor = () => {
		switch (emotion) {
			case "happy": return "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]";
			case "sad": return "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]";
			case "stressed": return "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]";
			case "confused": return "text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]";
			default: return "text-primary/70";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between p-6 md:p-10 overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] -z-10 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex items-center justify-between z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						disconnectSession();
						navigate({ to: "/dashboard" });
					},
					className: "flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Exit" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsMuted(!isMuted),
							className: `p-3 rounded-full border transition-all ${isMuted ? "bg-red-500/20 border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "bg-white/5 border-white/10 hover:bg-white/10 text-white"}`,
							title: isMuted ? "Unmute Mic" : "Mute Mic",
							children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLargeText(!largeText),
							className: `p-3 rounded-full border transition-all ${largeText ? "bg-primary/20 border-primary/30 text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-white/5 border-white/10 hover:bg-white/10 text-white"}`,
							title: "Toggle Large Text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setParentMode(!parentMode);
								toast.success(`Parent Guidance Mode ${!parentMode ? "Enabled" : "Disabled"}`);
							},
							className: `p-3 rounded-full border transition-all ${parentMode ? "bg-orange-500/20 border-orange-500/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]" : "bg-white/5 border-white/10 hover:bg-white/10 text-white"}`,
							title: "Toggle Parent Mode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setShowLangMenu(!showLangMenu),
								className: "flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-sm",
									children: LANGUAGES.find((l) => l.code === language)?.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showLangMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								className: "absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900/95 border border-white/10 p-2 shadow-2xl backdrop-blur-xl z-55 max-h-64 overflow-y-auto scrollbar-thin",
								children: LANGUAGES.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => changeLanguage(lang.code),
									className: `w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${language === lang.code ? "bg-primary text-white" : "hover:bg-white/5 text-slate-300 hover:text-white"}`,
									children: lang.name
								}, lang.code))
							}) })]
						})
					]
				})]
			}),
			parentMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full flex justify-center z-10 -mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs px-4 py-1.5 rounded-full flex items-center gap-2 font-medium tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-orange-400 animate-pulse" }), "PARENT COMPANION MODE ACTIVE (SIMPLE INSTRUCTIONS)"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 md:px-8 z-10 space-y-6",
				children: [userTranscript && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: .6 },
					className: "text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed italic",
					children: [
						"\"",
						userTranscript,
						"\""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							type: "spring",
							stiffness: 100
						},
						className: `font-bold leading-relaxed tracking-tight select-text selection:bg-primary/30 ${largeText ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"} ${voiceState === "Listening" ? "text-primary" : "text-white"}`,
						children: [
							"\"",
							aiResponse,
							"\""
						]
					}, aiResponse), voiceState !== "Disconnected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .9,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						className: "text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-500",
							children: "Emotion:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: getEmotionColor(),
							children: emotion
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex flex-col items-center z-10 pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-slate-400 text-sm font-semibold tracking-widest uppercase mb-6 flex items-center gap-2",
						children: [
							voiceState === "Thinking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }),
							voiceState === "Processing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-orange-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: voiceState })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 h-16 mb-8 justify-center",
						children: [...Array(9)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { scaleY: getWaveScale(i) },
							transition: {
								repeat: Infinity,
								duration: .5 + i % 3 * .15,
								ease: "easeInOut"
							},
							className: `w-3.5 rounded-full transition-colors duration-500 ${voiceState === "Listening" ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" : voiceState === "Speaking" ? "bg-primary shadow-[0_0_15px_rgba(59,130,246,0.4)]" : voiceState === "Thinking" || voiceState === "Processing" ? "bg-amber-500 animate-pulse" : "bg-slate-800"}`,
							style: {
								height: "8px",
								transformOrigin: "center"
							}
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: toggleSession,
						disabled: voiceState === "Thinking" || voiceState === "Processing",
						className: `size-24 md:size-28 rounded-full flex items-center justify-center border transition-all duration-300 relative ${voiceState === "Disconnected" ? "bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:scale-105" : "bg-red-500/20 border-red-500/30 hover:bg-red-500/30 text-red-400 shadow-[0_0_45px_rgba(239,68,68,0.3)] hover:scale-95"} ${voiceState === "Thinking" || voiceState === "Processing" ? "opacity-40 cursor-not-allowed" : ""}`,
						children: [voiceState !== "Disconnected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-0 rounded-full border border-red-500/40 animate-ping opacity-60",
							style: { animationDuration: "1.8s" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -inset-3 rounded-full border border-red-500/20 animate-ping opacity-30",
							style: { animationDuration: "2.4s" }
						})] }), voiceState === "Disconnected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-10" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-10" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-slate-500 text-xs font-medium max-w-sm text-center leading-relaxed",
						children: voiceState === "Disconnected" ? "Tap once to call Sahaayak. Make sure your mic is enabled." : "Sahaayak can hear you now. Simply start speaking!"
					})
				]
			})
		]
	});
}
//#endregion
export { VoiceAssistant as component };
