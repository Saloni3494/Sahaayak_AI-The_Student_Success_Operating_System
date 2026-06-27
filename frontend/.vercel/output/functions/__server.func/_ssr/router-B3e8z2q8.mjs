import { o as __toESM } from "../_runtime.mjs";
import { p as require_react } from "../_libs/@hello-pangea/dnd+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as J } from "../_libs/next-themes.mjs";
import { P as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as stringType, i as objectType, n as booleanType, r as coerce, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B3e8z2q8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DW9CGady.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function ThemeProvider$1({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(J, {
		attribute: "class",
		defaultTheme: "light",
		enableSystem: false,
		disableTransitionOnChange: true,
		themes: ["dark", "light"],
		children
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hero-bg flex min-h-dvh items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass shadow-soft max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "gradient-text text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page took a gap year. Let's get you back on track."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]",
						style: { background: "var(--gradient-primary)" },
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow",
						style: { background: "var(--gradient-primary)" },
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$28 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sahaayak AI — Your Companion for Academic & Career Success" },
			{
				name: "description",
				content: "AI-powered Student Success Ecosystem for first-generation college students. Mentorship, scholarships, careers and opportunities — personalized."
			},
			{
				name: "author",
				content: "Sahaayak AI"
			},
			{
				property: "og:title",
				content: "Sahaayak AI — Your Companion for Academic & Career Success"
			},
			{
				property: "og:description",
				content: "Personalized guidance, scholarships, mentorship, and opportunities for every first-generation learner."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$28.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$27 = () => import("./sign-up-rciSQyN2.mjs");
var Route$27 = createFileRoute("/sign-up")({
	head: () => ({ meta: [{ title: "Create your account · Sahaayak AI" }, {
		name: "description",
		content: "Join Sahaayak AI — free for every first-generation student."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./sign-in-KyAjpbRz.mjs");
var Route$26 = createFileRoute("/sign-in")({
	head: () => ({ meta: [{ title: "Sign in · Sahaayak AI" }, {
		name: "description",
		content: "Sign in to your Sahaayak AI student account."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./onboarding-uhUnW05A.mjs");
var Route$25 = createFileRoute("/onboarding")({
	head: () => ({ meta: [{ title: "Welcome · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
objectType({
	name: stringType().min(2, "Name must be at least 2 characters"),
	age: coerce.number().min(10).max(100),
	language: stringType().min(1),
	firstGen: booleanType(),
	income: stringType().min(1),
	college: stringType().min(1, "College name is required"),
	branch: stringType().min(1, "Branch is required"),
	year: stringType().min(1),
	cgpa: coerce.number().min(0).max(10).optional(),
	careers: arrayType(stringType()).min(0),
	interests: arrayType(stringType()).min(0)
});
var $$splitComponentImporter$24 = () => import("../_app-BS22b2Mh.mjs");
var Route$24 = createFileRoute("/_app")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./routes-CIN5QevG.mjs");
var Route$23 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sahaayak AI — Your AI Companion for Academic & Career Success" },
		{
			name: "description",
			content: "Ensuring no first-generation student is left behind. Personalized AI mentorship, scholarships, career roadmaps and opportunities — built for students from every background."
		},
		{
			property: "og:title",
			content: "Sahaayak AI — Student Success Ecosystem"
		},
		{
			property: "og:description",
			content: "AI mentorship, scholarships, careers and opportunities for first-generation learners."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("../_app.voice-Ce51TUjo.mjs");
var Route$22 = createFileRoute("/_app/voice")({
	head: () => ({ meta: [{ title: "Voice Assistant · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("../_app.success-stories-DSda_KC8.mjs");
var Route$21 = createFileRoute("/_app/success-stories")({
	head: () => ({ meta: [{ title: "Success Stories · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("../_app.success-navigator-DVnvpu0S.mjs");
var Route$20 = createFileRoute("/_app/success-navigator")({
	head: () => ({ meta: [{ title: "Success Navigator · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("../_app.settings-COAcfiSc.mjs");
var Route$19 = createFileRoute("/_app/settings")({
	head: () => ({ meta: [{ title: "Settings · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("../_app.scholarships-CagiFZO2.mjs");
var Route$18 = createFileRoute("/_app/scholarships")({
	head: () => ({ meta: [{ title: "Scholarships · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("../_app.schemes-LHz-dfYV.mjs");
var Route$17 = createFileRoute("/_app/schemes")({
	head: () => ({ meta: [{ title: "Govt. Schemes · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("../_app.resume-7xXFbgza.mjs");
var Route$16 = createFileRoute("/_app/resume")({
	head: () => ({ meta: [{ title: "Resume Analyzer · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("../_app.profile-C8TD8GRY.mjs");
var Route$15 = createFileRoute("/_app/profile")({
	head: () => ({ meta: [{ title: "My Profile · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("../_app.predictions-Boh8-40_.mjs");
var Route$14 = createFileRoute("/_app/predictions")({
	head: () => ({ meta: [{ title: "Predictive Insights · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("../_app.parent-BQFhAhj2.mjs");
var Route$13 = createFileRoute("/_app/parent")({
	head: () => ({ meta: [{ title: "Parent Mode · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("../_app.opportunities-BVmJsZuC.mjs");
var Route$12 = createFileRoute("/_app/opportunities")({
	head: () => ({ meta: [{ title: "Opportunity Copilot · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_app.notifications-BJQs_moC.mjs");
var Route$11 = createFileRoute("/_app/notifications")({
	head: () => ({ meta: [{ title: "Notifications · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("../_app.mentors-BJ3xjhSI.mjs");
var Route$10 = createFileRoute("/_app/mentors")({
	head: () => ({ meta: [{ title: "Mentor Network · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_app.knowledge-graph-CRiHVArn.mjs");
var Route$9 = createFileRoute("/_app/knowledge-graph")({
	head: () => ({ meta: [{ title: "Student Success Universe · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_app.interventions-D1ufw718.mjs");
var Route$8 = createFileRoute("/_app/interventions")({
	head: () => ({ meta: [{ title: "Risk Dashboard · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("../_app.digital-twin-BcSe4FH9.mjs");
var Route$7 = createFileRoute("/_app/digital-twin")({
	head: () => ({ meta: [{ title: "Digital Twin · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_app.dashboard-Oyxdv8Qr.mjs");
var Route$6 = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_app.community-h4CGcfXW.mjs");
var Route$5 = createFileRoute("/_app/community")({
	head: () => ({ meta: [{ title: "Community · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_app.career-gps-CWdv9-0K.mjs");
var Route$4 = createFileRoute("/_app/career-gps")({
	head: () => ({ meta: [{ title: "Career GPS · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_app.applications-DIj2Hb1f.mjs");
var Route$3 = createFileRoute("/_app/applications")({
	head: () => ({ meta: [{ title: "Application Tracker · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_app.analytics-B6THeGlb.mjs");
var Route$2 = createFileRoute("/_app/analytics")({
	head: () => ({ meta: [{ title: "Analytics · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_app.ai-mentor-CBJOYxY5.mjs");
var Route$1 = createFileRoute("/_app/ai-mentor")({
	head: () => ({ meta: [{ title: "AI Mentor · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_app.admin-DgU_IAlq.mjs");
var Route = createFileRoute("/_app/admin")({
	head: () => ({ meta: [{ title: "Admin Portal · Sahaayak AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SignUpRoute = Route$27.update({
	id: "/sign-up",
	path: "/sign-up",
	getParentRoute: () => Route$28
});
var SignInRoute = Route$26.update({
	id: "/sign-in",
	path: "/sign-in",
	getParentRoute: () => Route$28
});
var OnboardingRoute = Route$25.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => Route$28
});
var AppRoute = Route$24.update({
	id: "/_app",
	getParentRoute: () => Route$28
});
var IndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$28
});
var AppVoiceRoute = Route$22.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => AppRoute
});
var AppSuccessStoriesRoute = Route$21.update({
	id: "/success-stories",
	path: "/success-stories",
	getParentRoute: () => AppRoute
});
var AppSuccessNavigatorRoute = Route$20.update({
	id: "/success-navigator",
	path: "/success-navigator",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$19.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppScholarshipsRoute = Route$18.update({
	id: "/scholarships",
	path: "/scholarships",
	getParentRoute: () => AppRoute
});
var AppSchemesRoute = Route$17.update({
	id: "/schemes",
	path: "/schemes",
	getParentRoute: () => AppRoute
});
var AppResumeRoute = Route$16.update({
	id: "/resume",
	path: "/resume",
	getParentRoute: () => AppRoute
});
var AppProfileRoute = Route$15.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppPredictionsRoute = Route$14.update({
	id: "/predictions",
	path: "/predictions",
	getParentRoute: () => AppRoute
});
var AppParentRoute = Route$13.update({
	id: "/parent",
	path: "/parent",
	getParentRoute: () => AppRoute
});
var AppOpportunitiesRoute = Route$12.update({
	id: "/opportunities",
	path: "/opportunities",
	getParentRoute: () => AppRoute
});
var AppNotificationsRoute = Route$11.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AppRoute
});
var AppMentorsRoute = Route$10.update({
	id: "/mentors",
	path: "/mentors",
	getParentRoute: () => AppRoute
});
var AppKnowledgeGraphRoute = Route$9.update({
	id: "/knowledge-graph",
	path: "/knowledge-graph",
	getParentRoute: () => AppRoute
});
var AppInterventionsRoute = Route$8.update({
	id: "/interventions",
	path: "/interventions",
	getParentRoute: () => AppRoute
});
var AppDigitalTwinRoute = Route$7.update({
	id: "/digital-twin",
	path: "/digital-twin",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppCommunityRoute = Route$5.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => AppRoute
});
var AppCareerGpsRoute = Route$4.update({
	id: "/career-gps",
	path: "/career-gps",
	getParentRoute: () => AppRoute
});
var AppApplicationsRoute = Route$3.update({
	id: "/applications",
	path: "/applications",
	getParentRoute: () => AppRoute
});
var AppAnalyticsRoute = Route$2.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AppRoute
});
var AppAiMentorRoute = Route$1.update({
	id: "/ai-mentor",
	path: "/ai-mentor",
	getParentRoute: () => AppRoute
});
var AppRouteChildren = {
	AppAdminRoute: Route.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => AppRoute
	}),
	AppAiMentorRoute,
	AppAnalyticsRoute,
	AppApplicationsRoute,
	AppCareerGpsRoute,
	AppCommunityRoute,
	AppDashboardRoute,
	AppDigitalTwinRoute,
	AppInterventionsRoute,
	AppKnowledgeGraphRoute,
	AppMentorsRoute,
	AppNotificationsRoute,
	AppOpportunitiesRoute,
	AppParentRoute,
	AppPredictionsRoute,
	AppProfileRoute,
	AppResumeRoute,
	AppSchemesRoute,
	AppScholarshipsRoute,
	AppSettingsRoute,
	AppSuccessNavigatorRoute,
	AppSuccessStoriesRoute,
	AppVoiceRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	OnboardingRoute,
	SignInRoute,
	SignUpRoute
};
var routeTree = Route$28._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
