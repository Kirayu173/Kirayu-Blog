// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
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
		id: "mizuki-blog",
		title: "Mizuki 博客主题",
		description:
			"基于 Astro 开发的现代博客主题，支持多语言、暗色模式与响应式布局。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/example/mizuki",
		visitUrl: "https://blog.example.com",
		startDate: "2024-01-01",
		endDate: "2024-06-01",
		featured: true,
		tags: ["博客", "主题", "开源"],
	},
	{
		id: "portfolio-website",
		title: "个人作品集网站",
		description: "用于展示项目经验与技术能力的个人站点。",
		image: "",
		category: "web",
		techStack: ["React", "Next.js", "TypeScript", "Framer Motion"],
		status: "completed",
		liveDemo: "https://portfolio.example.com",
		sourceCode: "https://github.com/example/portfolio",
		visitUrl: "https://portfolio.example.com",
		startDate: "2023-09-01",
		endDate: "2023-12-01",
		featured: true,
		tags: ["作品集", "React", "动画"],
	},
	{
		id: "task-manager-app",
		title: "任务管理应用",
		description: "支持团队协作与项目追踪的跨平台任务管理应用。",
		image: "",
		category: "mobile",
		techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
		status: "in-progress",
		startDate: "2024-03-01",
		tags: ["移动端", "效率工具", "协作"],
	},
	{
		id: "data-visualization-tool",
		title: "数据可视化工具",
		description: "支持多种图表类型与交互分析的数据可视化平台。",
		image: "",
		category: "web",
		techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
		status: "completed",
		liveDemo: "https://dataviz.example.com",
		visitUrl: "https://dataviz.example.com",
		startDate: "2023-06-01",
		endDate: "2023-11-01",
		tags: ["可视化", "分析", "图表"],
	},
	{
		id: "e-commerce-platform",
		title: "电商平台",
		description: "包含用户、商品与订单流程的全栈电商系统。",
		image: "",
		category: "web",
		techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
		status: "planned",
		startDate: "2024-07-01",
		tags: ["电商", "全栈", "支付"],
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
