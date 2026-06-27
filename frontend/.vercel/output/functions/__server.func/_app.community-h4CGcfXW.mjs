import { o as __toESM } from "./_runtime.mjs";
import { p as require_react } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { o as CommunityAPI } from "./_ssr/api-Bqu7sup9.mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { n as useUser } from "./_ssr/useUser-DBvCy85c.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { A as Plus, J as Heart, R as MessageSquare, d as TrendingUp, o as Users, z as MessageCircle } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.community-h4CGcfXW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Community() {
	const { user } = useUser();
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [groups, setGroups] = (0, import_react.useState)([]);
	const [trending, setTrending] = (0, import_react.useState)([]);
	const [studentId, setStudentId] = (0, import_react.useState)("");
	const [newPostContent, setNewPostContent] = (0, import_react.useState)("");
	const [newPostTitle, setNewPostTitle] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (user?.id) setStudentId(user.id);
		else setStudentId("student_123");
	}, [user]);
	const loadCommunityData = async () => {
		if (!studentId) return;
		try {
			const postsRes = await CommunityAPI.getPosts(studentId);
			if (postsRes.success) setPosts(postsRes.data || []);
			const groupsRes = await CommunityAPI.getGroups(studentId);
			if (groupsRes.success) setGroups(groupsRes.data || []);
			const trendingRes = await CommunityAPI.getTrending();
			if (trendingRes.success) setTrending(trendingRes.data || []);
		} catch (err) {
			console.error("Failed to load community data", err);
		}
	};
	(0, import_react.useEffect)(() => {
		loadCommunityData();
	}, [studentId]);
	const handleCreatePost = async (e) => {
		e.preventDefault();
		if (!newPostContent.trim() || !newPostTitle.trim()) {
			toast.error("Please enter a title and content.");
			return;
		}
		try {
			if ((await CommunityAPI.createPost({
				author_id: studentId,
				title: newPostTitle,
				content: newPostContent,
				group: "General"
			})).success) {
				toast.success("Post created successfully!");
				setNewPostTitle("");
				setNewPostContent("");
				loadCommunityData();
			}
		} catch (err) {
			console.error(err);
			toast.error("Failed to create post.");
		}
	};
	const handleJoinGroup = async (groupId) => {
		try {
			if ((await CommunityAPI.joinGroup(groupId, studentId)).success) toast.success("Joined group successfully!");
		} catch (err) {
			console.error(err);
			toast.error("Failed to join group.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col lg:flex-row gap-6 h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-7" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight md:text-3xl",
							children: "Community Feed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Engage with peers, share stories, and ask questions."
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleCreatePost,
					className: "glass rounded-3xl p-4 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-10 rounded-full bg-muted shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: newPostTitle,
							onChange: (e) => setNewPostTitle(e.target.value),
							placeholder: "Post title...",
							className: "w-full bg-transparent border-none focus:ring-0 text-sm py-1 font-semibold",
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 items-start pl-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: newPostContent,
							onChange: (e) => setNewPostContent(e.target.value),
							placeholder: "Share a success story or ask a question...",
							className: "w-full bg-transparent border-none focus:ring-0 text-sm py-1 resize-none h-16",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "sm",
							className: "rounded-full px-4 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4 mr-1" }), " Post"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: posts.map((post, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post }, idx))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full lg:w-80 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-bold flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5 text-primary" }), " Trending Topics"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: trending.length > 0 ? trending.map((topic, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-sm font-medium",
						children: [
							"#",
							topic.tag || topic.name,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground block font-normal",
								children: [topic.count || topic.posts_count || 0, " posts"]
							})
						]
					}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted-foreground",
						children: "No trending topics."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-bold flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-primary" }), " Suggested Groups"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: groups.length > 0 ? groups.map((g, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-medium leading-tight",
							children: g.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [g.members || g.member_count || 0, " members"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => handleJoinGroup(g.id),
							variant: "outline",
							size: "sm",
							className: "rounded-full text-xs h-7",
							children: "Join"
						})]
					}, idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "No suggested groups."
					})
				})]
			})]
		})]
	});
}
function PostCard({ post }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass shadow-soft rounded-3xl p-5 border border-border/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-10 rounded-full bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold text-sm",
					children: post.author
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-primary/80",
							children: post.group
						}),
						" ",
						"• ",
						post.time
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold text-lg mb-2",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground/80 mb-4",
				children: post.content
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6 pt-4 border-t border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }),
						" ",
						post.likes
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }),
						" ",
						post.comments,
						" Comments"
					]
				})]
			})
		]
	});
}
//#endregion
export { Community as component };
