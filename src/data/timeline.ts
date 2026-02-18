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
		id: "current-study",
		title: "计算机科学与技术在读",
		description:
			"目前主修计算机科学与技术，重点学习 Web 开发与软件工程实践。",
		type: "education",
		startDate: "2022-09-01",
		location: "北京",
		organization: "北京理工大学",
		skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"],
		achievements: [
			"当前绩点：3.6/4.0",
			"完成数据结构与算法课程项目",
			"参与多门课程的团队开发实践",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "mizuki-blog-project",
		title: "Mizuki 个人博客项目",
		description:
			"基于 Astro 框架开发个人博客站点，作为前端技术学习与实践项目。",
		type: "project",
		startDate: "2024-06-01",
		endDate: "2024-08-01",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
		achievements: [
			"掌握现代前端开发流程与工程化实践",
			"系统学习响应式设计与用户体验优化",
			"完整走通从设计到上线的交付流程",
		],
		links: [
			{
				name: "GitHub 仓库",
				url: "https://github.com/example/mizuki-blog",
				type: "project",
			},
			{
				name: "在线演示",
				url: "https://mizuki-demo.example.com",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "summer-internship-2024",
		title: "前端开发实习生",
		description:
			"在互联网公司进行暑期实习，参与 Web 应用的前端开发与联调。",
		type: "work",
		startDate: "2024-07-01",
		endDate: "2024-08-31",
		location: "北京",
		organization: "TechStart 互联网公司",
		position: "前端开发实习生",
		skills: ["React", "JavaScript", "CSS3", "Git", "Figma"],
		achievements: [
			"独立完成多个界面组件开发与优化",
			"熟悉团队协作流程与代码规范",
			"获得优秀实习表现证明",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "web-development-course",
		title: "完成 Web 全栈课程",
		description:
			"系统学习前后端开发技术并完成课程训练，建立完整技术认知。",
		type: "achievement",
		startDate: "2024-01-15",
		endDate: "2024-05-30",
		organization: "在线学习平台",
		skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
		achievements: ["获得结课证书", "完成 5 个实战项目", "夯实全栈开发基础"],
		links: [
			{
				name: "课程证书",
				url: "https://certificates.example.com/web-dev",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
	{
		id: "student-management-system",
		title: "学生管理系统课程设计",
		description:
			"数据库课程期末项目，完成学生信息管理系统的设计与开发。",
		type: "project",
		startDate: "2023-11-01",
		endDate: "2023-12-15",
		skills: ["Java", "MySQL", "Swing", "JDBC"],
		achievements: ["课程设计获优", "实现完整 CRUD 流程", "掌握数据库建模与优化"],
		icon: "material-symbols:database",
		color: "#EA580C",
	},
	{
		id: "programming-contest",
		title: "校内程序设计竞赛",
		description: "参加学校程序设计竞赛，持续提升算法思维与编码能力。",
		type: "achievement",
		startDate: "2023-10-20",
		location: "北京理工大学",
		organization: "计算机学院",
		skills: ["C++", "算法", "数据结构"],
		achievements: ["获得校赛三等奖", "提升算法分析能力", "巩固程序设计基础"],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
	},
	{
		id: "part-time-tutor",
		title: "兼职编程辅导",
		description: "为高中生提供 Python 入门辅导，帮助建立编程基础。",
		type: "work",
		startDate: "2023-09-01",
		endDate: "2024-01-31",
		position: "编程辅导老师",
		skills: ["Python", "教学", "沟通"],
		achievements: ["帮助 3 位同学掌握 Python 基础", "提升表达与沟通能力", "积累教学实践经验"],
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "high-school-graduation",
		title: "高中毕业并升学",
		description: "以优异成绩完成高中学业，并被北京理工大学计算机专业录取。",
		type: "education",
		startDate: "2019-09-01",
		endDate: "2022-06-30",
		location: "山东济南",
		organization: "济南市第一中学",
		achievements: ["高考成绩：620 分", "获市级三好学生", "数学竞赛获省级二等奖"],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "first-programming-experience",
		title: "第一次接触编程",
		description: "在高中信息技术课首次接触编程，开始学习 Python 基础语法。",
		type: "education",
		startDate: "2021-03-01",
		skills: ["Python", "编程基础"],
		achievements: [
			"完成第一个 Hello World 程序",
			"掌握循环与条件判断基础",
			"正式建立对编程的兴趣",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
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
