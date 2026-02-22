// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other" | "ai";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string;
}

export const projectsData: Project[] = [
	{
		id: "kirayu-blog",
		title: "Kirayu-Blog",
		description: "基于 Astro 与 Mizuki 构建的个人博客站点",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Svelte", "Twikoo"],
		status: "in-progress",
		startDate: "2025-01-01",
		sourceCode: "https://github.com/Kirayu173/Kirayu-Blog",
		visitUrl: "https://github.com/Kirayu173/Kirayu-Blog",
		tags: ["Blog", "Astro", "Mizuki"],
	},
	{
		id: "nano-agentx",
		title: "nano-agentx",
		description:
			"超轻量个人 AI 智能体（fork 自 HKUDS/nanobot）：在原本极简nanobot架构上增添了多项实用能力",
		image: "",
		category: "ai",
		techStack: ["Python", "Agent", "MCP"],
		status: "in-progress",
		startDate: "2026-02-08",
		sourceCode: "https://github.com/Kirayu173/nano-agentx",
		visitUrl: "https://github.com/Kirayu173/nano-agentx",
		featured: true,
		tags: ["AI Agent", "轻量框架", "个人助手"],
	},
	{
		id: "kernelmind",
		title: "KernelMind",
		description:
			"基于 CompArch RAG Agent 的优化版本，聚焦检索链路优化、首 token 延迟降低、检索质量提升，并构建完整且美观的可视化界面。",
		image: "",
		category: "ai",
		techStack: [
			"Python",
			"RAG",
			"Knowledge Graph",
			"Agent",
			"Visualization",
		],
		status: "in-progress",
		startDate: "2026-02-22",
		sourceCode: "https://github.com/Kirayu173/KernelMind",
		visitUrl: "https://github.com/Kirayu173/KernelMind",
		featured: true,
		tags: ["RAG", "检索优化", "低延迟", "可视化"],
	},
	{
		id: "comparch-rag-agent",
		title: "CompArch RAG Agent",
		description:
			"基于知识图谱的《计算机组成原理》领域智能体（KGQA/RAG方向）",
		image: "",
		category: "ai",
		techStack: ["Python", "RAG", "Knowledge Graph", "Agent"],
		status: "completed",
		startDate: "2024-06-15",
		sourceCode: "https://github.com/Kirayu173/comparch-rag-agent",
		visitUrl: "https://github.com/Kirayu173/comparch-rag-agent",
		tags: ["RAG", "知识图谱", "AI Agent"],
	},
	{
		id: "smarttrip",
		title: "SmartTrip",
		description:
			"面向自由行用户的智能旅游应用，覆盖“行前智能规划—行中发现—行程助手”三个核心环节：支持基于偏好与时间窗生成行程草案、POI 检索与加入行程，并通过对话式助手完成行程信息查询。",
		image: "",
		category: "mobile",
		techStack: [
			"Kotlin",
			"FastAPI",
			"SQLAlchemy",
			"PostgreSQL",
			"Redis",
			"Agent",
		],
		status: "in-progress",
		startDate: "2026-01-06",
		sourceCode: "https://github.com/Kirayu173/SmartTrip",
		visitUrl: "https://github.com/Kirayu173/SmartTrip",
		featured: true,
		tags: ["智能旅游", "行程规划", "Android", "AI Agent"],
	},
];

// 获取项目统计信息
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// 按分类获取项目
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// 获取精选项目
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
