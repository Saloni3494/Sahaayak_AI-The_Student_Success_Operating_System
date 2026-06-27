import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { g as TwinAPI, u as OnboardingAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as useUser, t as useInvalidateUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { Dt as Award, Ft as LoaderCircle, Ht as CircleAlert, Vt as CircleCheck, Z as GraduationCap, kt as ArrowRight, o as Users, s as User, ut as Compass } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.profile-C8TD8GRY.js
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
function ProfilePage() {
	const { user, student, refetch: refetchUser } = useUser();
	const invalidateUser = useInvalidateUser();
	const { data: fullProfileRes, isLoading: isProfileLoading, refetch: refetchProfileData } = useQuery({
		queryKey: ["fullProfileDetailsForPage"],
		queryFn: () => OnboardingAPI.getMe().then((res) => res.data)
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
	const checklist = (0, import_react.useMemo)(() => {
		const sp = fullProfileRes?.student_profile || {};
		const fp = fullProfileRes?.family_profile || {};
		const cp = fullProfileRes?.career_profile || {};
		return [
			{
				label: "Personal & Academic Info",
				desc: "Name, Age, Language, College, Branch, Year, CGPA",
				done: !!(user?.full_name && sp.age && sp.college && sp.branch && sp.year && sp.cgpa)
			},
			{
				label: "Family & Economic Background",
				desc: "Annual Income, First-Gen learner status",
				done: !!fp.id
			},
			{
				label: "Career Aspirations",
				desc: "Dream Career path",
				done: !!cp.dream_career
			},
			{
				label: "Skills & Interests",
				desc: "Core skills and personal interests",
				done: !!(cp.skills?.length && cp.interests?.length)
			}
		];
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
			await refetchUser();
			await refetchProfileData();
			toast.success("Profile saved and Digital Twin recalculated in real-time! 🚀");
		} catch (err) {
			console.error(err);
			toast.error(err?.message || "Failed to save profile. Please try again.");
		} finally {
			setIsSavingProfile(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute -right-20 -top-24 size-72 rounded-full blur-3xl",
				style: {
					background: "var(--gradient-primary)",
					opacity: .25
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "My Profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Manage your credentials, academic details, and career aspirations in real-time."
					})] })]
				}), student && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-2xl bg-success/15 border border-success/20 px-4 py-2 text-xs font-semibold text-success shadow-[0_0_15px_var(--success)]/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-success animate-pulse" }), "Real-time Database Synced"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-1 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass shadow-soft rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-semibold mb-4 w-full text-left flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-primary" }), " Completion Progress"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative size-36",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "size-full",
								viewBox: "0 0 36 36",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "text-muted",
									strokeWidth: "2.5",
									stroke: "currentColor",
									fill: "none",
									d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "text-primary transition-all duration-1000",
									strokeWidth: "2.5",
									strokeDasharray: `${Math.round(student?.profile_completeness || 0)}, 100`,
									strokeLinecap: "round",
									stroke: "currentColor",
									fill: "none",
									d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex items-center justify-center flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold tracking-tight",
									children: [Math.round(student?.profile_completeness || 0), "%"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5",
									children: "Complete"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "A 100% complete profile improves matching accuracy for scholarships and career path roadmaps by up to 4x."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass shadow-soft rounded-3xl p-5 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold mb-3",
						children: "Profile Checklist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: checklist.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `flex items-start gap-3 rounded-2xl p-3 border transition-colors ${item.done ? "bg-success/5 border-success/25" : "bg-background/40 border-border/40"}`,
							children: [item.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 mt-0.5 shrink-0 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 mt-0.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `text-xs font-bold ${item.done ? "text-success" : "text-foreground"}`,
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-muted-foreground mt-0.5",
								children: item.desc
							})] })]
						}, idx))
					})]
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "glass shadow-soft rounded-3xl p-5 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
								className: "mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: "1. Personal & Academic Details"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
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
											children: "College Name"
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
											className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground",
											children: YEAR_OPTIONS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: y,
												className: "bg-card",
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
											placeholder: "English, Hindi, Telugu, etc."
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "glass shadow-soft rounded-3xl p-5 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
								className: "mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: "2. Family & Economic Status"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground",
										children: "Annual Household Income"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: profIncome,
										onChange: (e) => setProfIncome(e.target.value),
										className: "w-full h-11 bg-background/50 border border-border/60 rounded-xl px-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground",
										children: INCOME_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: o.key,
											className: "bg-card",
											children: o.label
										}, o.key))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-3.5 bg-background/30 border border-border/50 rounded-2xl sm:mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold",
										children: "First-Generation Learner"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground mt-0.5",
										children: "First in family to attend college"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: profFirstGen,
										onChange: (e) => setProfFirstGen(e.target.checked),
										className: "size-5 rounded border-border text-primary focus:ring-primary"
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "glass shadow-soft rounded-3xl p-5 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
								className: "mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: "3. Career Dreams & Skill Baseline"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4",
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
											placeholder: "Software Engineer, Civil Servant, Business Analyst, etc."
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
											placeholder: "React, Python, SQL, Excel, Communication"
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
											placeholder: "Coding, Writing, Sports, Design, Volunteering"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isSavingProfile,
								className: "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50",
								style: { background: "var(--gradient-primary)" },
								children: isSavingProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Saving..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Save & Complete Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })] })
							})
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { ProfilePage as component };
