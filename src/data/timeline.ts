// 时间线数据配置文件
// 用于管理时间线页面

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify 图标名
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "edu-college-202209",
		title: "Get into the College",
		description: "",
		type: "education",
		startDate: "2022-09-01",
		organization: "SCAU",
		location: "GuangZhou",
		skills: ["Python", "Java", "MySQL"],
		icon: "material-symbols:school",
		color: "#3B82F6",
	},
	{
		id: "proj-coa-qa-202406",
		title: "KG-COA 综合问答系统",
		description: "",
		type: "project",
		startDate: "2024-06-01",
		endDate: "2025-12-31",
		organization: "大创项目",
		skills: ["Knowledge Graph", "RAG"],
		icon: "material-symbols:account-tree",
		color: "#8B5CF6",
	},
	{
		id: "proj-smarttrip-202511",
		title: "SmartTrip",
		description: "",
		type: "project",
		startDate: "2025-11-01",
		organization: "毕业设计",
		skills: ["Agent", "Android", "Python"],
		icon: "material-symbols:travel-explore",
		color: "#F59E0B",
	},
	{
		id: "work-ai-intern-202601",
		title: "AI 应用开发",
		description: "",
		type: "work",
		startDate: "2026-01-01",
		organization: "实习",
		position: "AI 应用开发",
		skills: ["跨境电商", "workflow", "LLM"],
		icon: "material-symbols:work",
		color: "#10B981",
	},
	{
		id: "proj-nano-agentx-20260118",
		title: "nano-agentx",
		description: "",
		type: "project",
		startDate: "2026-01-18",
		organization: "个人项目",
		skills: ["Agent", "Nanobot"],
		icon: "material-symbols:smart-toy",
		color: "#06B6D4",
	},
	{
		id: "proj-coa-agent-opt-202602",
		title: "KG-COA 问答系统智能体化优化",
		description: "",
		type: "project",
		startDate: "2026-02-01",
		organization: "项目优化",
		skills: ["Knowledge Graph", "RAG", "Agent"],
		icon: "material-symbols:auto-awesome",
		color: "#6366F1",
	},
];

// 获取时间线统计
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// 获取精选时间线
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

