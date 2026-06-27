import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { f as ParentAPI, n as AccessibilityAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { C as Settings$1, Ft as LoaderCircle, G as Lock, Mt as Accessibility, b as Shield, kt as ArrowRight, o as Users, s as User } from "./_libs/lucide-react.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Label } from "./_ssr/label-B4PTMSG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.settings-COAcfiSc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Settings() {
	const { user } = useUser();
	const [activeTab, setActiveTab] = (0, import_react.useState)("accessibility");
	const [studentId, setStudentId] = (0, import_react.useState)("");
	const [accPrefs, setAccPrefs] = (0, import_react.useState)({
		theme: "DARK",
		contrast: "HIGH",
		text_size: "LARGE",
		reduced_motion: true,
		screen_reader_friendly: true
	});
	const [loadingAcc, setLoadingAcc] = (0, import_react.useState)(false);
	const [savingAcc, setSavingAcc] = (0, import_react.useState)(false);
	const [parentPrefs, setParentPrefs] = (0, import_react.useState)({
		parent_name: "",
		preferred_language: "hi",
		digital_literacy_level: "LOW"
	});
	const [parentModeEnabled, setParentModeEnabled] = (0, import_react.useState)(false);
	const [loadingParent, setLoadingParent] = (0, import_react.useState)(false);
	const [savingParent, setSavingParent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user?.id) setStudentId(user.id);
		else setStudentId("student_123");
	}, [user]);
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const fetchAcc = async () => {
			setLoadingAcc(true);
			try {
				const response = await AccessibilityAPI.getPreferences(studentId);
				if (response.success && response.data) setAccPrefs(response.data);
			} catch (err) {
				console.error("Failed to fetch accessibility preferences", err);
			} finally {
				setLoadingAcc(false);
			}
		};
		fetchAcc();
	}, [studentId]);
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const fetchParent = async () => {
			setLoadingParent(true);
			try {
				const response = await ParentAPI.getProfile(studentId);
				if (response.success && response.data) setParentPrefs(response.data);
			} catch (err) {
				console.error("Failed to fetch parent profile", err);
			} finally {
				setLoadingParent(false);
			}
		};
		fetchParent();
	}, [studentId]);
	const saveAccessibility = async () => {
		setSavingAcc(true);
		try {
			if ((await AccessibilityAPI.updatePreferences(studentId, accPrefs)).success) {
				toast.success("Accessibility preferences updated successfully!");
				if (typeof document !== "undefined") {
					if (accPrefs.contrast === "HIGH") document.documentElement.classList.add("high-contrast");
					else document.documentElement.classList.remove("high-contrast");
					if (accPrefs.text_size === "LARGE") document.documentElement.style.fontSize = "18px";
					else document.documentElement.style.fontSize = "16px";
				}
			}
		} catch (err) {
			console.error(err);
			toast.error("Failed to save accessibility preferences.");
		} finally {
			setSavingAcc(false);
		}
	};
	const saveParentProfile = async () => {
		setSavingParent(true);
		try {
			if ((await ParentAPI.updateProfile(studentId, parentPrefs)).success) toast.success("Parent profile configuration updated successfully!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to save parent profile.");
		} finally {
			setSavingParent(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 max-w-4xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings$1, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Manage your account and preferences."
					})] })]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-1 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						active: activeTab === "profile",
						onClick: () => setActiveTab("profile"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {}),
						label: "Profile"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						active: activeTab === "parent",
						onClick: () => setActiveTab("parent"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}),
						label: "Parent Mode",
						highlight: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						active: activeTab === "accessibility",
						onClick: () => setActiveTab("accessibility"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accessibility, {}),
						label: "Accessibility"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						active: activeTab === "privacy",
						onClick: () => setActiveTab("privacy"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {}),
						label: "Privacy & Security"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2 space-y-4",
				children: [
					activeTab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Student Profile",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4 text-primary" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-primary/5 border border-primary/20 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold mb-2",
									children: "Dedicated Profile Workspace"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Sahaayak AI now features a dedicated Profile workspace. Here, you can view your real-time completeness score, follow a guided checklist, and edit your academic and career baseline details."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-background/25 border border-border/30 rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: "Manage Profile Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Update your name, age, CGPA, dream career, skills, and household income."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/profile",
									className: "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow shrink-0",
									style: { background: "var(--gradient-primary)" },
									children: ["Open Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})]
						})
					}),
					activeTab === "parent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Parent Mode Configuration",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-primary" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-primary/5 border border-primary/20 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold mb-2",
										children: "What is Parent Mode?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Parent Mode simplifies the dashboard to display high-level academic progress and financial updates in your native language."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-base font-semibold",
										children: "Enable Parent Mode UI"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Toggle to switch the current view to Parent Mode."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setParentModeEnabled(!parentModeEnabled),
										className: `w-12 h-6 rounded-full transition-colors relative ${parentModeEnabled ? "bg-primary" : "bg-muted"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-5 bg-white rounded-full absolute top-0.5 transition-transform ${parentModeEnabled ? "translate-x-6" : "translate-x-0.5"}` })
									})]
								}),
								loadingParent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center p-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-primary" })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 pt-4 border-t border-border/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Parent Credentials & Preferences"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs",
												children: "Parent Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												className: "w-full bg-background/50 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground",
												value: parentPrefs.parent_name,
												onChange: (e) => setParentPrefs({
													...parentPrefs,
													parent_name: e.target.value
												}),
												placeholder: "Enter Parent Name"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs",
													children: "Preferred Language"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													className: "w-full bg-background/50 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground",
													value: parentPrefs.preferred_language,
													onChange: (e) => setParentPrefs({
														...parentPrefs,
														preferred_language: e.target.value
													}),
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
														})
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-xs",
													children: "Digital Literacy Level"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													className: "w-full bg-background/50 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground",
													value: parentPrefs.digital_literacy_level,
													onChange: (e) => setParentPrefs({
														...parentPrefs,
														digital_literacy_level: e.target.value
													}),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "LOW",
															children: "Low"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "MEDIUM",
															children: "Medium"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "HIGH",
															children: "High"
														})
													]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: saveParentProfile,
											disabled: savingParent,
											className: "w-full rounded-xl mt-2",
											children: [savingParent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin mr-2" }) : null, "Save Parent Configuration"]
										})
									]
								})
							]
						})
					}),
					activeTab === "accessibility" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Accessibility Preferences",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accessibility, { className: "size-4 text-primary" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-primary/5 border border-primary/20 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold mb-2",
									children: "Accessibility Features"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Adjust UI parameters like text size, contrast, and themes to fit your workflow."
								})]
							}), loadingAcc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-primary" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-semibold",
											children: "Contrast Level"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Select system contrast enhancement"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "bg-background border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground",
											value: accPrefs.contrast,
											onChange: (e) => setAccPrefs({
												...accPrefs,
												contrast: e.target.value
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "STANDARD",
												children: "Standard Contrast"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "HIGH",
												children: "High Contrast"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/30 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-semibold",
											children: "Text Size"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Adjust display font scale"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "bg-background border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground",
											value: accPrefs.text_size,
											onChange: (e) => setAccPrefs({
												...accPrefs,
												text_size: e.target.value
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "STANDARD",
												children: "Standard (16px)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "LARGE",
												children: "Large (18px)"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/30 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-semibold",
											children: "Reduced Motion"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Minimize animations and transitions"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setAccPrefs({
												...accPrefs,
												reduced_motion: !accPrefs.reduced_motion
											}),
											className: `w-12 h-6 rounded-full transition-colors relative ${accPrefs.reduced_motion ? "bg-primary" : "bg-muted"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-5 bg-white rounded-full absolute top-0.5 transition-transform ${accPrefs.reduced_motion ? "translate-x-6" : "translate-x-0.5"}` })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/30 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-semibold",
											children: "Screen Reader Optimization"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Enable semantic-first structure tags"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setAccPrefs({
												...accPrefs,
												screen_reader_friendly: !accPrefs.screen_reader_friendly
											}),
											className: `w-12 h-6 rounded-full transition-colors relative ${accPrefs.screen_reader_friendly ? "bg-primary" : "bg-muted"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `size-5 bg-white rounded-full absolute top-0.5 transition-transform ${accPrefs.screen_reader_friendly ? "translate-x-6" : "translate-x-0.5"}` })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/30 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-sm font-semibold",
											children: "Theme Mode"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Switch color scheme"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "bg-background border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground",
											value: accPrefs.theme,
											onChange: (e) => setAccPrefs({
												...accPrefs,
												theme: e.target.value
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "LIGHT",
												children: "Light Theme"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "DARK",
												children: "Dark Theme"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: saveAccessibility,
										disabled: savingAcc,
										className: "w-full rounded-xl mt-4",
										children: [savingAcc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin mr-2" }) : null, "Save Accessibility Preferences"]
									})
								]
							})]
						})
					}),
					activeTab === "privacy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Account Security",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-muted-foreground" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm",
									children: "Two-Factor Authentication"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Add an extra layer of security"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "rounded-full",
									children: "Setup"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm text-destructive",
									children: "Delete Account"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Permanently remove your data"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "destructive",
									size: "sm",
									className: "rounded-full",
									children: "Delete"
								})]
							})]
						})
					})
				]
			})]
		})]
	});
}
function NavButton({ icon, label, active, highlight, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${active ? "bg-primary text-primary-foreground shadow-glow" : highlight ? "bg-accent/10 text-accent hover:bg-accent/20" : "hover:bg-background/40 text-muted-foreground hover:text-foreground"}`,
		style: active ? { background: "var(--gradient-primary)" } : {},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "size-4 [&>svg]:size-full",
			children: icon
		}), label]
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
export { Settings as component };
