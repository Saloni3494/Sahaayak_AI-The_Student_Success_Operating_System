import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-Bqu7sup9.js
var API_BASE_URL = "http://localhost:8000/api/v1";
var getWebSocketUrl = (path) => {
	if ("http://localhost:8000/api/v1".startsWith("http")) return API_BASE_URL.replace(/^http/, "ws") + path;
	return `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}${API_BASE_URL}${path}`;
};
var safeLocalStorage = {
	getItem: (key) => {
		if (typeof window === "undefined") return null;
		try {
			return localStorage.getItem(key);
		} catch {
			return null;
		}
	},
	setItem: (key, value) => {
		if (typeof window === "undefined") return;
		try {
			localStorage.setItem(key, value);
		} catch (e) {
			console.error(e);
		}
	},
	removeItem: (key) => {
		if (typeof window === "undefined") return;
		try {
			localStorage.removeItem(key);
		} catch (e) {
			console.error(e);
		}
	}
};
var isRefreshing = false;
var refreshQueue = [];
var processQueue = (error, token = null) => {
	refreshQueue.forEach((cb) => {
		if (token) cb(token);
	});
	refreshQueue = [];
};
async function fetchAPI(endpoint, options = {}) {
	const { timeout = 1e4, ...fetchOptions } = options;
	const token = safeLocalStorage.getItem("access_token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4MTM4NTc5MDgsInN1YiI6IjRhZjA1MjRkLTI2NGMtNDkyNy05YTYyLWFmMmI2YzcxMjEwNSJ9.2EkOtwtPzI5U6Y7sC7BgFyZy3jqykBL32EglBa5aPVE";
	const headers = new Headers({
		"Content-Type": "application/json",
		...fetchOptions.headers
	});
	if (token) headers.set("Authorization", `Bearer ${token}`);
	const controller = new AbortController();
	const signal = fetchOptions.signal || controller.signal;
	const timeoutId = setTimeout(() => controller.abort(), timeout);
	`${options.method || "GET"}${endpoint}`;
	try {
		const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;
		const response = await fetch(url, {
			...fetchOptions,
			headers,
			signal
		});
		clearTimeout(timeoutId);
		const json = await response.json().catch(() => ({}));
		const isAuthRoute = endpoint.includes("/auth/login") || endpoint.includes("/auth/signup") || endpoint.includes("/auth/refresh");
		if (response.status === 401 && !options._retry && !isAuthRoute) {
			const refreshToken = safeLocalStorage.getItem("refresh_token");
			if (!refreshToken) {
				safeLocalStorage.removeItem("access_token");
				toast.error("Session expired. Please sign in again.");
				return Promise.reject(/* @__PURE__ */ new Error("Unauthorized"));
			}
			if (isRefreshing) return new Promise((resolve) => {
				refreshQueue.push((newToken) => {
					options._retry = true;
					if (options.headers) options.headers["Authorization"] = `Bearer ${newToken}`;
					resolve(fetchAPI(endpoint, options));
				});
			});
			isRefreshing = true;
			options._retry = true;
			try {
				const refreshResponse = await fetch(`${API_BASE_URL}/auth/refresh`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ refresh_token: refreshToken })
				});
				if (!refreshResponse.ok) throw new Error("Refresh failed");
				const refreshData = await refreshResponse.json();
				const newAccessToken = refreshData.data.access_token;
				const newRefreshToken = refreshData.data.refresh_token;
				safeLocalStorage.setItem("access_token", newAccessToken);
				if (newRefreshToken) safeLocalStorage.setItem("refresh_token", newRefreshToken);
				processQueue(null, newAccessToken);
				isRefreshing = false;
				if (options.headers) options.headers["Authorization"] = `Bearer ${newAccessToken}`;
				return await fetchAPI(endpoint, options);
			} catch (refreshErr) {
				processQueue(refreshErr, null);
				isRefreshing = false;
				safeLocalStorage.removeItem("access_token");
				safeLocalStorage.removeItem("refresh_token");
				toast.error("Session expired. Please sign in again.");
				return Promise.reject(/* @__PURE__ */ new Error("Session expired"));
			}
		}
		if (!response.ok) {
			const errMsg = json.message || json.detail || `Request failed with status ${response.status}`;
			`${errMsg}`;
			if (options.showToast !== false) toast.error(errMsg);
			throw new Error(errMsg);
		}
		`${endpoint}`;
		return json;
	} catch (error) {
		clearTimeout(timeoutId);
		if (error.name === "AbortError") {
			`${endpoint}`;
			toast.error("Request timed out. Please try again.");
		} else `${error.message}`;
		throw error;
	}
}
var API = {
	get: (endpoint, options) => fetchAPI(endpoint, {
		method: "GET",
		...options
	}),
	post: (endpoint, body, options) => fetchAPI(endpoint, {
		method: "POST",
		body: body ? JSON.stringify(body) : void 0,
		...options
	}),
	put: (endpoint, body, options) => fetchAPI(endpoint, {
		method: "PUT",
		body: body ? JSON.stringify(body) : void 0,
		...options
	}),
	patch: (endpoint, body, options) => fetchAPI(endpoint, {
		method: "PATCH",
		body: body ? JSON.stringify(body) : void 0,
		...options
	}),
	delete: (endpoint, options) => fetchAPI(endpoint, {
		method: "DELETE",
		...options
	})
};
var AuthAPI = {
	login: (data) => API.post("/auth/login", data),
	signup: (data) => API.post("/auth/signup", data),
	getMe: () => API.get("/auth/me")
};
var OnboardingAPI = {
	getStatus: () => API.get("/onboarding/status"),
	saveAcademic: (data) => API.post("/onboarding/academic", data),
	saveFamily: (data) => API.post("/onboarding/family", data),
	saveCareer: (data) => API.post("/onboarding/career", data),
	saveGoals: (data) => API.post("/onboarding/goals", data),
	saveAssessment: (data) => API.post("/onboarding/assessment", data),
	complete: () => API.post("/onboarding/complete"),
	getMe: () => API.get("/onboarding/me")
};
var TwinAPI = {
	getMe: () => API.get("/digital-twin/me"),
	recalculate: () => API.put("/digital-twin/recalculate"),
	getHistory: () => API.get("/digital-twin/history")
};
var DashboardAPI = { getOverview: () => API.get("/dashboard/overview", { showToast: false }) };
var ChatAPI = {
	getConversations: (studentId) => API.get(`/chat/conversations?student_id=${studentId}`),
	getHistory: (conversationId) => API.get(`/chat/conversations/${conversationId}`),
	deleteConversation: (conversationId) => API.delete(`/chat/conversations/${conversationId}`),
	sendFeedback: (messageId, score, comment) => API.post(`/chat/messages/${messageId}/feedback`, {
		score,
		comment
	})
};
var CareerAPI = {
	getSummary: (studentId) => API.get(`/career-gps/career-summary?student_id=${studentId}`),
	getSkillGap: (studentId, careerId) => API.get(`/career-gps/skill-gaps?student_id=${studentId}${careerId ? `&career_id=${careerId}` : ""}`),
	getRoadmap: (studentId) => API.get(`/career-gps/roadmap?student_id=${studentId}`),
	getMilestones: (studentId) => API.get(`/career-gps/milestones?student_id=${studentId}`),
	getProgress: (studentId) => API.get(`/career-gps/progress?student_id=${studentId}`),
	getRecommendations: (studentId) => API.get(`/career-gps/recommendations?student_id=${studentId}`),
	getGraph: (studentId) => API.get(`/career-gps/graph?student_id=${studentId}`),
	generateRoadmap: (data) => API.post("/career-gps/generate", data),
	updateStep: (stepId, studentId) => API.put(`/career-gps/roadmap/step/${stepId}?student_id=${studentId}`)
};
var OpportunitiesAPI = {
	getRecommended: (studentId) => API.get(`/opportunities/recommended?student_id=${studentId}`),
	apply: (opportunityId, studentId) => API.post(`/opportunities/${opportunityId}/apply?student_id=${studentId}`)
};
var ScholarshipAPI = {
	getRecommended: (studentId) => API.get(`/scholarships/recommended?student_id=${studentId}`),
	getDetails: (scholarshipId) => API.get(`/scholarships/${scholarshipId}`)
};
var ResumeAPI = { analyze: async (file) => {
	const formData = new FormData();
	formData.append("file", file);
	return (await fetch(`${API_BASE_URL}/resume/analyze`, {
		method: "POST",
		body: formData
	})).json();
} };
var MentorAPI = {
	getRecommended: (studentId) => API.get(`/mentors/recommended?student_id=${studentId}`),
	getDetails: (mentorId) => API.get(`/mentors/${mentorId}`),
	bookSession: (mentorId, studentId) => API.post(`/mentors/request-session?student_id=${studentId}&mentor_id=${mentorId}`)
};
var CommunityAPI = {
	getGroups: (studentId) => API.get(`/community/groups?student_id=${studentId}`),
	joinGroup: (groupId, studentId) => API.post(`/community/groups/${groupId}/join?student_id=${studentId}`),
	getPosts: (studentId) => API.get(`/community/posts?student_id=${studentId}`),
	createPost: (data) => API.post("/community/posts", data),
	createComment: (data) => API.post("/community/comments", data),
	getTrending: () => API.get("/community/trending")
};
var SuccessAPI = {
	getMe: (studentId) => API.get(`/success/me?student_id=${studentId}`),
	getHistory: (studentId) => API.get(`/success/history?student_id=${studentId}`),
	getTrends: (studentId) => API.get(`/success/trends?student_id=${studentId}`),
	getRecommendations: (studentId) => API.get(`/success/recommendations?student_id=${studentId}`),
	getPredictions: (studentId) => API.get(`/predictions/me?student_id=${studentId}`),
	getForecast: (studentId) => API.get(`/predictions/forecast?student_id=${studentId}`),
	getExplanations: (studentId) => API.get(`/predictions/explanations?student_id=${studentId}`),
	getAnalyticsOverview: (studentId) => API.get(`/analytics/overview?student_id=${studentId}`),
	getAnalyticsEngagement: (studentId) => API.get(`/analytics/engagement?student_id=${studentId}`),
	getAnalyticsProgress: (studentId) => API.get(`/analytics/progress?student_id=${studentId}`),
	getInterventions: (studentId) => API.get(`/interventions/me?student_id=${studentId}`)
};
var ParentAPI = {
	query: (data) => API.post("/parent/query", data),
	getProfile: (studentId) => API.get(`/parent/profile?student_id=${studentId}`),
	updateProfile: (studentId, data) => API.put(`/parent/profile?student_id=${studentId}`, data)
};
var AccessibilityAPI = {
	getPreferences: (studentId) => API.get(`/accessibility/preferences?student_id=${studentId}`),
	updatePreferences: (studentId, prefs) => API.put(`/accessibility/preferences?student_id=${studentId}`, prefs)
};
var KnowledgeGraphAPI = {
	getGraph: (studentId) => API.get(`/knowledge-graph/me?student_id=${studentId}`),
	generateGraph: (studentId) => API.post(`/knowledge-graph/generate`, { student_id: studentId })
};
//#endregion
export { getWebSocketUrl as _, ChatAPI as a, KnowledgeGraphAPI as c, OpportunitiesAPI as d, ParentAPI as f, TwinAPI as g, SuccessAPI as h, CareerAPI as i, MentorAPI as l, ScholarshipAPI as m, AccessibilityAPI as n, CommunityAPI as o, ResumeAPI as p, AuthAPI as r, DashboardAPI as s, API_BASE_URL as t, OnboardingAPI as u };
