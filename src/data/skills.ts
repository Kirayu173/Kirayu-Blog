// 技能数据配置文件
// 用于管理技能展示页面数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify 图标名
	category:
		| "frontend"
		| "backend"
		| "database"
		| "tools"
		| "ai"
		| "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 关联项目 ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	{
		id: "python",
		name: "Python",
		description: "一种让你工作更高效、集成系统更容易的编程语言。",
		icon: "logos:python",
		category: "backend",
		level: "advanced",
		experience: {
			years: 2,
			months: 0,
		},
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description: "一种用于构建应用的编程语言与计算平台。",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: {
			years: 3,
			months: 0,
		},
		color: "#ED8B00",
	},
	{
		id: "langchain-langgraph",
		name: "LangChain/LangGraph",
		description: "用于构建由 LLM 驱动、具备状态与持久性的智能体应用框架。",
		icon: "simple-icons:langgraph",
		category: "ai",
		level: "intermediate",
		experience: {
			years: 1,
			months: 0,
		},
		color: "#1C3C3C",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description: "基于 Chrome V8 JavaScript 引擎构建的 JavaScript 运行时。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "beginner",
		experience: {
			years: 0,
			months: 6,
		},
		color: "#339933",
	},
	{
		id: "postgresql",
		name: "PostgreSQL",
		description: "世界上最先进的开源关系型数据库。",
		icon: "logos:postgresql",
		category: "database",
		level: "intermediate",
		experience: {
			years: 2,
			months: 0,
		},
		color: "#336791",
	},
	{
		id: "llm",
		name: "LLM",
		description: "一种能够理解和生成人类语言的高级 AI 模型。",
		icon: "material-symbols:psychology",
		category: "ai",
		level: "advanced",
		experience: {
			years: 1,
			months: 0,
		},
		color: "#6366F1",
	},
	{
		id: "rag",
		name: "RAG",
		description: "将专有数据连接到大语言模型以获得更准确结果的方法。",
		icon: "mdi:database-search-outline",
		category: "ai",
		level: "advanced",
		experience: {
			years: 2,
			months: 0,
		},
		color: "#2563EB",
	},
	{
		id: "agent",
		name: "Agent",
		description: "使用语言模型决定应用控制流的系统。",
		icon: "mdi:robot-outline",
		category: "ai",
		level: "advanced",
		experience: {
			years: 1,
			months: 3,
		},
		color: "#0EA5E9",
	},
	{
		id: "trae",
		name: "Trae",
		description: "与智能协作的 AI 开发环境。",
		icon: "material-symbols:smart-toy-outline",
		category: "tools",
		level: "advanced",
		experience: {
			years: 2,
			months: 0,
		},
		color: "#14B8A6",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description: "JetBrains 出品的 Python 集成开发环境（IDE）。",
		icon: "logos:pycharm",
		category: "tools",
		level: "advanced",
		experience: {
			years: 2,
			months: 0,
		},
		color: "#21D789",
	},
	{
		id: "intellij-idea",
		name: "IntelliJ IDEA",
		description: "用于专业 Java 与 Kotlin 开发的领先 IDE。",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "advanced",
		experience: {
			years: 3,
			months: 0,
		},
		color: "#FE315D",
	},
	{
		id: "llamaindex",
		name: "LlamaIndex",
		description: "用于将私有数据连接到 LLM 的数据框架。",
		icon: "openmoji:llama",
		category: "ai",
		level: "beginner",
		experience: {
			years: 0,
			months: 4,
		},
		color: "#F59E0B",
	},
	{
		id: "mcp",
		name: "MCP",
		description: "用于标准化应用向 LLM 提供上下文方式的开放协议。",
		icon: "simple-icons:modelcontextprotocol",
		category: "ai",
		level: "intermediate",
		experience: {
			years: 0,
			months: 5,
		},
		color: "#10B981",
	},
	{
		id: "mysql",
		name: "MySQL",
		description: "开源关系型数据库管理系统（RDBMS）。",
		icon: "logos:mysql",
		category: "database",
		level: "intermediate",
		experience: {
			years: 2,
			months: 0,
		},
		color: "#4479A1",
	},
	{
		id: "docker",
		name: "Docker",
		description: "用于构建、运行和共享容器化应用的平台。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: {
			years: 1,
			months: 6,
		},
		color: "#2496ED",
	},
	{
		id: "redis",
		name: "Redis",
		description: "可用作数据库、缓存和消息代理的内存数据结构存储。",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: {
			years: 1,
			months: 0,
		},
		color: "#DC382D",
	},
];

// 获取技能统计
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		ai: skillsData.filter((s) => s.category === "ai").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按分类获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// 获取高阶技能
export const getAdvancedSkills = () => {
	const featuredSkillIds = ["python", "rag", "agent", "llm"];
	return featuredSkillIds
		.map((id) => skillsData.find((s) => s.id === id))
		.filter((skill): skill is Skill => Boolean(skill));
};

// 计算总经验年限
export const getTotalExperience = () => {
	return {
		years: 3,
		months: 9,
	};
};
