import { o as __toESM } from "./_runtime.mjs";
import { n as DragDropContext, p as require_react, r as PublicDraggable, t as ConnectedDroppable } from "./_libs/@hello-pangea/dnd+[...].mjs";
import { r as require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { Rt as Ellipsis, tt as FolderKanban, xt as Building2 } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.applications-DIj2Hb1f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialData = {
	columns: {
		SAVED: {
			id: "SAVED",
			title: "Saved",
			applicationIds: ["app1"]
		},
		APPLIED: {
			id: "APPLIED",
			title: "Applied",
			applicationIds: ["app2"]
		},
		INTERVIEW: {
			id: "INTERVIEW",
			title: "Interview",
			applicationIds: ["app3"]
		},
		OFFERED: {
			id: "OFFERED",
			title: "Offer",
			applicationIds: []
		},
		REJECTED: {
			id: "REJECTED",
			title: "Rejected",
			applicationIds: []
		}
	},
	applications: {
		app1: {
			id: "app1",
			title: "Software Engineering Intern",
			company: "Google"
		},
		app2: {
			id: "app2",
			title: "Frontend Developer",
			company: "Atlassian"
		},
		app3: {
			id: "app3",
			title: "Product Manager",
			company: "Microsoft"
		}
	},
	columnOrder: [
		"SAVED",
		"APPLIED",
		"INTERVIEW",
		"OFFERED",
		"REJECTED"
	]
};
function ApplicationsKanban() {
	const [data, setData] = (0, import_react.useState)(initialData);
	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		if (!destination) return;
		if (destination.droppableId === source.droppableId && destination.index === source.index) return;
		const startColumn = data.columns[source.droppableId];
		const finishColumn = data.columns[destination.droppableId];
		if (startColumn === finishColumn) {
			const newAppIds = Array.from(startColumn.applicationIds);
			newAppIds.splice(source.index, 1);
			newAppIds.splice(destination.index, 0, draggableId);
			const newColumn = {
				...startColumn,
				applicationIds: newAppIds
			};
			setData({
				...data,
				columns: {
					...data.columns,
					[newColumn.id]: newColumn
				}
			});
			return;
		}
		const startAppIds = Array.from(startColumn.applicationIds);
		startAppIds.splice(source.index, 1);
		const newStartCol = {
			...startColumn,
			applicationIds: startAppIds
		};
		const finishAppIds = Array.from(finishColumn.applicationIds);
		finishAppIds.splice(destination.index, 0, draggableId);
		const newFinishCol = {
			...finishColumn,
			applicationIds: finishAppIds
		};
		setData({
			...data,
			columns: {
				...data.columns,
				[newStartCol.id]: newStartCol,
				[newFinishCol.id]: newFinishCol
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 h-full flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "glass-strong shadow-soft relative overflow-hidden rounded-3xl p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold tracking-tight md:text-2xl",
					children: "Application Tracker"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Manage your internship and scholarship applications."
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-x-auto pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragDropContext, {
				onDragEnd,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-4 min-w-max h-full",
					children: data.columnOrder.map((columnId) => {
						const column = data.columns[columnId];
						const apps = column.applicationIds.map((id) => data.applications[id]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-80 flex flex-col glass rounded-2xl p-4 border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center mb-4 px-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-semibold text-sm",
									children: [
										column.title,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full",
											children: apps.length
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4 text-muted-foreground" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectedDroppable, {
								droppableId: column.id,
								children: (provided) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: provided.innerRef,
									...provided.droppableProps,
									className: "flex-1 space-y-3 min-h-[150px]",
									children: [apps.map((app, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicDraggable, {
										draggableId: app.id,
										index,
										children: (provided) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											ref: provided.innerRef,
											...provided.draggableProps,
											...provided.dragHandleProps,
											style: provided.draggableProps.style,
											className: "bg-background rounded-xl p-4 shadow-sm border border-border/50 hover:border-primary/30 transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-8 rounded-lg bg-muted grid place-items-center shrink-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4 text-muted-foreground" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-sm leading-tight",
													children: app.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground mt-1",
													children: app.company
												})] })]
											})
										})
									}, app.id)), provided.placeholder]
								})
							})]
						}, column.id);
					})
				})
			})
		})]
	});
}
//#endregion
export { ApplicationsKanban as component };
