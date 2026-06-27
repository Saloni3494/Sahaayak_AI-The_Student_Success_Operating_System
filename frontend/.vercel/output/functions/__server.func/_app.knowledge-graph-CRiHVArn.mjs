import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { _ as getWebSocketUrl, c as KnowledgeGraphAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { r as useQueryClient, t as useQuery } from "./_libs/tanstack__react-query.mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { $ as Gift, Ct as Brain, Dt as Award, N as Network, O as RefreshCw, Pt as Sparkles, Q as Globe, T as Search, Tt as BookOpen, _ as Target, dt as Coins, jt as Activity, kt as ArrowRight, o as Users, s as User, t as Zap, u as Trophy } from "./_libs/lucide-react.mjs";
import { N as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Position, d as useNodesState, n as Handle$1, o as ReactFlow, r as MarkerType, t as Background$1, u as useEdgesState } from "./_libs/@reactflow/background+[...].mjs";
import "./_ssr/router-B3e8z2q8.mjs";
import { t as MiniMap$1 } from "./_libs/reactflow__minimap.mjs";
import { t as Controls$1 } from "./_libs/reactflow__controls.mjs";
import { t as Input } from "./_ssr/input-DicJzR9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.knowledge-graph-CRiHVArn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StudentNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-4 rounded-2xl border border-indigo-500/40 bg-background/70 backdrop-blur-md shadow-[0_0_25px_rgba(99,102,241,0.25)] text-center w-[190px]",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto size-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 mb-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-6 animate-pulse" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-bold text-sm truncate text-foreground",
			children: data.name || "Student"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] text-muted-foreground mb-2",
			children: "Student Center"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-1 text-[9px] border-t border-border/50 pt-2 mt-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground block",
				children: "Success Index"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-bold text-indigo-400",
				children: [data.success_score ? Math.round(data.success_score) : 75, "%"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground block",
				children: "Completeness"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-bold text-emerald-400",
				children: [data.profile_completeness ? Math.round(data.profile_completeness) : 80, "%"]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "source",
			position: Position.Top,
			id: "s-top",
			className: "!bg-indigo-500"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "source",
			position: Position.Bottom,
			id: "s-bottom",
			className: "!bg-indigo-500"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "source",
			position: Position.Left,
			id: "s-left",
			className: "!bg-indigo-500"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "source",
			position: Position.Right,
			id: "s-right",
			className: "!bg-indigo-500"
		})
	]
});
var CareerNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-blue-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[160px] hover:border-blue-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					children: data.name || "Dream Career"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground",
					children: "Career Goal"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[10px] bg-blue-500/5 text-blue-400 font-medium px-2 py-0.5 rounded border border-blue-500/10 inline-block mt-1",
			children: [
				"Match: ",
				data.match_score ? Math.round(data.match_score) : 75,
				"%"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-blue-500"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "source",
			position: Position.Bottom,
			className: "!bg-blue-500"
		})
	]
});
var SkillNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-emerald-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[150px] hover:border-emerald-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					children: data.name || "Skill"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground",
					children: "Target Skill"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[9px] text-emerald-400 mt-1 flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Proficiency:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold",
				children: data.proficiency || "Intermediate"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-emerald-500"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "source",
			position: Position.Bottom,
			className: "!bg-emerald-500"
		})
	]
});
var CourseNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-amber-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[170px] hover:border-amber-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					title: data.title,
					children: data.title || "Course"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground truncate",
					children: data.provider || "Provider"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-[9px] text-amber-400 mt-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data.duration || "Self-paced" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-1.5 py-0.2 bg-amber-500/10 rounded",
				children: data.difficulty || "Medium"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-amber-500"
		})
	]
});
var ScholarshipNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-rose-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[165px] hover:border-rose-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					title: data.title,
					children: data.title || "Scholarship"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground",
					children: "Financial Aid"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-[9px] text-rose-400 mt-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold",
				children: data.amount || "Variable"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Due: ", data.deadline || "TBA"] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-rose-500"
		})
	]
});
var OpportunityNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-purple-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[160px] hover:border-purple-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					title: data.title,
					children: data.title || "Opportunity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground truncate",
					children: data.company || "Company"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[9px] text-purple-400 mt-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-1.5 py-0.5 bg-purple-500/10 rounded",
				children: data.type || "Internship"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-purple-500"
		})
	]
});
var MentorNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-teal-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[150px] hover:border-teal-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					children: data.name || "Mentor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground truncate",
					children: data.company || "Company"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[9px] text-teal-400 mt-1 flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Match:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-bold",
				children: [data.match_score ? Math.round(data.match_score) : 85, "%"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-teal-500"
		})
	]
});
var CommunityNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-cyan-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[150px] hover:border-cyan-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					children: data.name || "Community"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground",
					children: "Student Hub"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[9px] text-cyan-400 mt-1 flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Members:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-bold",
				children: data.members || 0
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-cyan-500"
		})
	]
});
var SuccessstoryNode = ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "relative p-3 rounded-xl border border-yellow-500/30 bg-background/70 backdrop-blur-md shadow-lg w-[160px] hover:border-yellow-500 transition-all duration-300",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-xs truncate text-foreground",
					title: data.title,
					children: data.title || "Success Story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] text-muted-foreground",
					children: "Alumni Path"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[9px] text-yellow-400 mt-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-semibold",
				children: ["Company: ", data.company || "Alumni"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
			type: "target",
			position: Position.Top,
			className: "!bg-yellow-500"
		})
	]
});
var nodeTypes = {
	student: StudentNode,
	career: CareerNode,
	skill: SkillNode,
	course: CourseNode,
	scholarship: ScholarshipNode,
	opportunity: OpportunityNode,
	mentor: MentorNode,
	community: CommunityNode,
	successstory: SuccessstoryNode
};
function layoutGraph(rawNodes, rawEdges) {
	if (!rawNodes || rawNodes.length === 0) return {
		nodes: [],
		edges: []
	};
	const nodes = rawNodes.map((n) => ({ ...n }));
	const edges = rawEdges.map((e) => ({ ...e }));
	const studentNode = nodes.find((n) => n.type === "student");
	if (!studentNode) return {
		nodes,
		edges
	};
	const centerX = 500;
	const centerY = 400;
	studentNode.position = {
		x: centerX - 95,
		y: centerY - 65
	};
	const innerNodeIds = /* @__PURE__ */ new Set();
	edges.forEach((edge) => {
		if (edge.source === studentNode.id) innerNodeIds.add(edge.target);
		else if (edge.target === studentNode.id) innerNodeIds.add(edge.source);
	});
	const innerNodes = nodes.filter((n) => n.id !== studentNode.id && innerNodeIds.has(n.id));
	const outerNodes = nodes.filter((n) => n.id !== studentNode.id && !innerNodeIds.has(n.id));
	const R1 = 230;
	const numInner = innerNodes.length;
	const innerAngles = {};
	innerNodes.forEach((node, idx) => {
		const angle = idx * 2 * Math.PI / (numInner || 1);
		innerAngles[node.id] = angle;
		node.position = {
			x: centerX + R1 * Math.cos(angle) - 80,
			y: centerY + R1 * Math.sin(angle) - 40
		};
	});
	const parentToChildren = {};
	outerNodes.forEach((node) => {
		const edge = edges.find((e) => e.source === node.id && innerNodeIds.has(e.target) || e.target === node.id && innerNodeIds.has(e.source));
		const parentId = edge ? innerNodeIds.has(edge.source) ? edge.source : edge.target : null;
		if (parentId) {
			if (!parentToChildren[parentId]) parentToChildren[parentId] = [];
			parentToChildren[parentId].push(node);
		} else {
			if (!parentToChildren["default"]) parentToChildren["default"] = [];
			parentToChildren["default"].push(node);
		}
	});
	const R2 = 390;
	Object.entries(parentToChildren).forEach(([parentId, children]) => {
		if (parentId === "default") children.forEach((node, idx) => {
			const angle = idx * 2 * Math.PI / (children.length || 1);
			node.position = {
				x: centerX + R2 * Math.cos(angle) - 85,
				y: centerY + R2 * Math.sin(angle) - 40
			};
		});
		else {
			const parentAngle = innerAngles[parentId] || 0;
			const numChildren = children.length;
			children.forEach((node, idx) => {
				const angle = parentAngle + (numChildren > 1 ? (idx - (numChildren - 1) / 2) * .35 : 0);
				node.position = {
					x: centerX + R2 * Math.cos(angle) - 85,
					y: centerY + R2 * Math.sin(angle) - 40
				};
			});
		}
	});
	edges.forEach((edge) => {
		edge.animated = edge.label === "REQUIRES" || edge.label === "TARGETS";
		edge.style = {
			stroke: edge.animated ? "rgba(99, 102, 241, 0.6)" : "rgba(148, 163, 184, 0.3)",
			strokeWidth: edge.animated ? 2.5 : 1.5
		};
		edge.markerEnd = {
			type: MarkerType.ArrowClosed,
			width: 12,
			height: 12,
			color: edge.animated ? "#6366f1" : "#94a3b8"
		};
	});
	return {
		nodes,
		edges
	};
}
var FILTER_OPTIONS = [
	{
		type: "career",
		label: "Careers",
		icon: Target,
		color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
	},
	{
		type: "skill",
		label: "Skills",
		icon: Award,
		color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
	},
	{
		type: "course",
		label: "Courses",
		icon: BookOpen,
		color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
	},
	{
		type: "scholarship",
		label: "Scholarships",
		icon: Gift,
		color: "text-rose-500 bg-rose-500/10 border-rose-500/20"
	},
	{
		type: "opportunity",
		label: "Opportunities",
		icon: Zap,
		color: "text-purple-500 bg-purple-500/10 border-purple-500/20"
	},
	{
		type: "mentor",
		label: "Mentors",
		icon: Users,
		color: "text-teal-500 bg-teal-500/10 border-teal-500/20"
	},
	{
		type: "community",
		label: "Communities",
		icon: Globe,
		color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
	},
	{
		type: "successstory",
		label: "Success Stories",
		icon: Trophy,
		color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
	}
];
var LOADING_STEPS = [
	"Reading student profile and career aspirations...",
	"Constructing core skill nodes and curriculum connections...",
	"Mapping mentor relationships and community hubs...",
	"Synthesizing scholarship eligibility and opportunity match...",
	"Rendering interactive success universe graph..."
];
function KnowledgeGraph() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { user, student, isLoading: userLoading } = useUser();
	const studentId = student?.id || user?.id || "";
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedFilters, setSelectedFilters] = (0, import_react.useState)([]);
	const [generating, setGenerating] = (0, import_react.useState)(false);
	const [loadingStep, setLoadingStep] = (0, import_react.useState)(0);
	const { data: graphRes, isLoading: graphLoading, isRefetching } = useQuery({
		queryKey: ["knowledge-graph", studentId],
		queryFn: () => KnowledgeGraphAPI.getGraph(studentId),
		enabled: !!studentId
	});
	const rawNodes = graphRes?.data?.nodes || [];
	const rawEdges = graphRes?.data?.edges || [];
	const insights = graphRes?.data?.insights || [];
	const recommendations = graphRes?.data?.recommendations || [];
	(0, import_react.useEffect)(() => {
		if (!studentId) return;
		const wsUrl = getWebSocketUrl(`/knowledge-graph/ws/knowledge-graph/${studentId}`);
		console.log("Connecting to Knowledge Graph WebSocket...", wsUrl);
		const ws = new WebSocket(wsUrl);
		ws.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);
				console.log("WebSocket event received:", data);
				if (data.event === "knowledge_graph.updated") {
					toast.info("Knowledge Graph updated in real-time.", { icon: "🔮" });
					queryClient.invalidateQueries({ queryKey: ["knowledge-graph", studentId] });
				}
			} catch (err) {
				console.error("Error parsing WebSocket message:", err);
			}
		};
		ws.onclose = () => {
			console.log("Knowledge Graph WebSocket connection closed.");
		};
		return () => {
			ws.close();
		};
	}, [studentId, queryClient]);
	(0, import_react.useEffect)(() => {
		let interval;
		if (generating) interval = setInterval(() => {
			setLoadingStep((prev) => prev < LOADING_STEPS.length - 1 ? prev + 1 : prev);
		}, 1800);
		else setLoadingStep(0);
		return () => clearInterval(interval);
	}, [generating]);
	const laidOutGraph = (0, import_react.useMemo)(() => {
		return layoutGraph(rawNodes, rawEdges);
	}, [rawNodes, rawEdges]);
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	(0, import_react.useEffect)(() => {
		if (laidOutGraph.nodes.length > 0) {
			setNodes(laidOutGraph.nodes);
			setEdges(laidOutGraph.edges);
		} else {
			setNodes([]);
			setEdges([]);
		}
	}, [
		laidOutGraph,
		setNodes,
		setEdges
	]);
	const handleGenerateGraph = async () => {
		if (!studentId) return;
		setGenerating(true);
		try {
			if ((await KnowledgeGraphAPI.generateGraph(studentId)).success) {
				toast.success("Success Universe Synthesized!");
				queryClient.invalidateQueries({ queryKey: ["knowledge-graph", studentId] });
			}
		} catch (err) {
			console.error("Failed to generate graph:", err);
			toast.error(err.message || "Could not synthesize Success Universe");
		} finally {
			setGenerating(false);
		}
	};
	const handleToggleFilter = (type) => {
		setSelectedFilters((prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]);
	};
	const filteredNodes = (0, import_react.useMemo)(() => {
		return nodes.filter((node) => {
			if (node.type === "student") return true;
			const matchesSearch = searchQuery === "" || node.data.name?.toLowerCase().includes(searchQuery.toLowerCase()) || node.data.title?.toLowerCase().includes(searchQuery.toLowerCase()) || node.type?.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(node.type);
			return matchesSearch && matchesFilter;
		});
	}, [
		nodes,
		searchQuery,
		selectedFilters
	]);
	const filteredNodeIds = (0, import_react.useMemo)(() => new Set(filteredNodes.map((n) => n.id)), [filteredNodes]);
	const filteredEdges = (0, import_react.useMemo)(() => {
		return edges.filter((edge) => filteredNodeIds.has(edge.source) && filteredNodeIds.has(edge.target));
	}, [edges, filteredNodeIds]);
	const typeCounts = (0, import_react.useMemo)(() => {
		const counts = {};
		rawNodes.forEach((n) => {
			if (n.type) counts[n.type] = (counts[n.type] || 0) + 1;
		});
		return counts;
	}, [rawNodes]);
	const kpis = (0, import_react.useMemo)(() => {
		return {
			successScore: rawNodes.find((n) => n.type === "student")?.data?.success_score || 75,
			careerMatch: rawNodes.find((n) => n.type === "career")?.data?.match_score || 78,
			totalSkills: rawNodes.filter((n) => n.type === "skill").length,
			acquiredSkills: rawEdges.filter((e) => e.label === "HAS_SKILL").length,
			growthNodes: rawNodes.filter((n) => [
				"course",
				"scholarship",
				"opportunity",
				"mentor"
			].includes(n.type)).length
		};
	}, [rawNodes, rawEdges]);
	const isGraphEmpty = rawNodes.length <= 1;
	if (userLoading || graphLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[80vh] flex-col items-center justify-center space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-14 text-primary animate-bounce relative z-10" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm font-medium animate-pulse",
			children: "Loading Success Universe..."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 h-[calc(100vh-6rem)] flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-5 md:p-6 shrink-0 border border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 size-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-12 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-inner",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "size-6 text-primary animate-pulse" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-xl font-bold tracking-tight md:text-2xl flex items-center gap-2 text-foreground",
						children: ["Success Universe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] bg-primary/20 text-primary-foreground px-2 py-0.5 rounded-full border border-primary/30 font-semibold tracking-wide uppercase",
							children: "Neo4j Active"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Explore your personalized education, skills, and opportunity orbital ecosystem."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "pl-9 rounded-xl h-10 bg-background/50 border-border/50 w-full sm:w-[220px] focus:ring-primary focus:border-primary text-xs",
							placeholder: "Search entities...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleGenerateGraph,
						disabled: generating || isRefetching,
						variant: "outline",
						size: "sm",
						className: "rounded-xl h-10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 gap-2 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-4 ${generating || isRefetching ? "animate-spin" : ""}` }), "Sync Graph"]
					})]
				})]
			})]
		}), generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 glass shadow-soft rounded-3xl relative overflow-hidden flex flex-col items-center justify-center bg-background/50 border border-white/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md w-full text-center space-y-6 px-6 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative size-24 mx-auto flex items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2 rounded-full border-4 border-emerald-500/10 border-b-emerald-500 animate-spin [animation-duration:3s]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-8 text-indigo-400" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-foreground",
							children: "Synthesizing Success Universe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground max-w-xs mx-auto",
							children: "Please wait while Sahaayak AI aligns your credentials, career aspirations, and milestones."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 text-left bg-muted/30 p-4 rounded-2xl border border-border/40",
						children: LOADING_STEPS.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `size-4 rounded-full flex items-center justify-center text-[8px] font-bold border ${loadingStep > idx ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : loadingStep === idx ? "bg-indigo-500/20 border-indigo-500 text-indigo-400 animate-pulse" : "bg-muted border-border/50 text-muted-foreground"}`,
								children: loadingStep > idx ? "✓" : idx + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `${loadingStep === idx ? "text-indigo-400 font-semibold" : loadingStep > idx ? "text-foreground/80" : "text-muted-foreground"}`,
								children: step
							})]
						}, idx))
					})
				]
			})]
		}) : isGraphEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 glass shadow-soft rounded-3xl relative overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-background to-background border border-white/5 p-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md space-y-6 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto size-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.15)] animate-pulse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "size-10 text-indigo-400" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight text-foreground",
							children: "Your Success Universe is still forming"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto",
							children: "Your educational ecosystem connects your profile with career roadmaps, skill milestones, scholarships, and expert mentors. Run the synthesizer to chart your personalized universe."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleGenerateGraph,
						className: "rounded-xl h-11 px-8 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 animate-spin [animation-duration:6s]" }), "Synthesize Success Universe"]
					})
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex gap-4 min-h-0 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col gap-4 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-3 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass shadow-soft p-3 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/15 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground block truncate",
										children: "Success Index"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-base font-bold text-foreground leading-tight",
										children: [Math.round(kpis.successScore), "%"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass shadow-soft p-3 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/15 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground block truncate",
										children: "Career Fit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-base font-bold text-foreground leading-tight",
										children: [Math.round(kpis.careerMatch), "%"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass shadow-soft p-3 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/15 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground block truncate",
										children: "Skills Canopy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-base font-bold text-foreground leading-tight",
										children: [
											kpis.acquiredSkills,
											"/",
											kpis.totalSkills
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass shadow-soft p-3 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/15 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground block truncate",
										children: "Growth Nodes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-base font-bold text-foreground leading-tight",
										children: [kpis.growthNodes, " Active"]
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: selectedFilters.length === 0 ? "default" : "outline",
								size: "sm",
								onClick: () => setSelectedFilters([]),
								className: "rounded-full text-[10px] h-8 font-semibold px-4",
								children: "All Entities"
							}), FILTER_OPTIONS.map((opt) => {
								const Icon = opt.icon;
								const isSelected = selectedFilters.includes(opt.type);
								const count = typeCounts[opt.type] || 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: isSelected ? "default" : "outline",
									size: "sm",
									onClick: () => handleToggleFilter(opt.type),
									className: `rounded-full text-[10px] h-8 gap-1.5 font-semibold px-4 ${!isSelected ? "hover:bg-background/80 border-border/40 bg-background/40" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }),
										opt.label,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `ml-1 px-1.5 py-0.2 rounded-full text-[8px] font-bold ${isSelected ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"}`,
											children: count
										})
									]
								}, opt.type);
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 glass shadow-soft rounded-3xl relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/90 via-background to-muted/25 border border-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReactFlow, {
							nodes: filteredNodes,
							edges: filteredEdges,
							onNodesChange,
							onEdgesChange,
							nodeTypes,
							fitView: true,
							fitViewOptions: { padding: .15 },
							minZoom: .2,
							maxZoom: 1.5,
							className: "w-full h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background$1, {
									gap: 24,
									size: 1.2,
									color: "rgba(148, 163, 184, 0.15)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls$1, { className: "!bg-background/80 !border-border/50 !rounded-2xl !p-1 backdrop-blur-md shadow-lg" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMap$1, {
									nodeStrokeColor: () => "#6366f1",
									nodeColor: (node) => {
										if (node.type === "student") return "#6366f1";
										if (node.type === "career") return "#3b82f6";
										if (node.type === "skill") return "#10b981";
										if (node.type === "course") return "#f59e0b";
										if (node.type === "scholarship") return "#f43f5e";
										if (node.type === "opportunity") return "#a855f7";
										if (node.type === "mentor") return "#14b8a6";
										if (node.type === "community") return "#06b6d4";
										return "#e2e8f0";
									},
									maskColor: "rgba(0, 0, 0, 0.4)",
									className: "!bg-background/80 !border-border/50 !rounded-2xl !overflow-hidden backdrop-blur-md shadow-lg"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-4 right-4 z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-strong p-3 rounded-2xl text-[9px] space-y-1.5 border border-white/10 shadow-xl max-w-[120px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-muted-foreground uppercase tracking-wider mb-1",
										children: "Ecosystem"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-indigo-500" }),
											" ",
											"Student"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-blue-500" }), " Career Goal"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-emerald-500" }),
											" ",
											"Target Skills"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-amber-500" }), " Courses"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-rose-500" }),
											" ",
											"Scholarships"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-purple-500" }),
											" ",
											"Opportunities"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-teal-500" }), " Mentors"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-cyan-500" }),
											" ",
											"Community"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 rounded-full bg-yellow-500" }), " Alumni Stories"]
									})
								]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "w-[340px] shrink-0 glass shadow-soft rounded-3xl flex flex-col border border-white/5 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 border-b border-border/40 bg-primary/5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400 border border-indigo-500/25",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-foreground",
						children: "Sahaayak AI Insights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: "Ecosystem synthesis & paths"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3 text-indigo-400" }), "Key Insights"]
						}), insights.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground italic bg-muted/20 p-3 rounded-xl border border-border/30",
							children: "No insights generated yet. Sync your graph to run analysis."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: insights.map((insight) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-xl bg-background/50 border border-border/40 text-xs text-foreground leading-relaxed flex gap-2.5 hover:bg-background/80 transition-all duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-0.5 shrink-0",
									children: [
										insight.type === "academic" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-3.5 text-emerald-400" }),
										insight.type === "career" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-3.5 text-blue-400" }),
										insight.type === "scholarship" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-3.5 text-rose-400" }),
										insight.type === "mentor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5 text-teal-400" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: insight.text })]
							}, insight.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-amber-400" }), "Actionable Paths"]
						}), recommendations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground italic bg-muted/20 p-3 rounded-xl border border-border/30",
							children: "No action cards found."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: recommendations.map((rec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-2xl bg-gradient-to-br from-background/90 to-background/40 border border-border/40 hover:border-indigo-500/20 hover:shadow-md transition-all duration-300 space-y-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-start justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] font-bold uppercase text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded",
												children: rec.action
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "text-xs font-bold text-foreground mt-1 leading-tight",
												children: rec.title
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground leading-normal",
										children: rec.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => navigate({ to: rec.route || "/opportunities" }),
										size: "sm",
										className: "w-full rounded-xl h-8 text-[10px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1",
										children: ["Unlock Path", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
									})
								]
							}, rec.id))
						})]
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { KnowledgeGraph as component };
