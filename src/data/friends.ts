// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "ChatGPT",
		imgurl: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128",
		desc: "OpenAI 的对话式 AI 助手（写作、编程、学习、头脑风暴）",
		siteurl: "https://chatgpt.com/",
		tags: ["AI", "LLM", "OpenAI"],
	},
	{
		id: 2,
		title: "Gemini",
		imgurl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
		desc: "Google 的 AI 助手（多模态、搜索与工作流整合）",
		siteurl: "https://gemini.google.com/",
		tags: ["AI", "Google", "多模态"],
	},
	{
		id: 3,
		title: "FastAPI",
		imgurl: "https://www.google.com/s2/favicons?domain=fastapi.tiangolo.com&sz=128",
		desc: "高性能 Python Web 框架（类型提示 + 自动文档）",
		siteurl: "https://fastapi.tiangolo.com/",
		tags: ["Python", "Web", "API"],
	},
	{
		id: 4,
		title: "montbell",
		imgurl: "https://www.google.com/s2/favicons?domain=montbell.jp&sz=128",
		desc: "户外装备品牌（轻量化登山、露营、徒步）",
		siteurl: "https://www.montbell.jp/",
		tags: ["户外", "装备", "登山"],
	},
	{
		id: 5,
		title: "稀土掘金",
		imgurl: "https://www.google.com/s2/favicons?domain=juejin.cn&sz=128",
		desc: "开发者社区（技术文章、资讯、分享与成长）",
		siteurl: "https://juejin.cn/",
		tags: ["开发者", "社区", "技术"],
	},
	{
		id: 6,
		title: "Python",
		imgurl: "https://www.google.com/s2/favicons?domain=python.org&sz=128",
		desc: "Python 官方网站（文档、下载、生态与社区）",
		siteurl: "https://www.python.org/",
		tags: ["编程语言", "Python", "官方"],
	},
	{
		id: 7,
		title: "Notion",
		imgurl: "https://www.google.com/s2/favicons?domain=notion.so&sz=128",
		desc: "一体化笔记与协作工具（文档、知识库、项目管理）",
		siteurl: "https://www.notion.so/",
		tags: ["效率", "笔记", "协作"],
	},
	{
		id: 8,
		title: "Claude",
		imgurl: "https://www.google.com/s2/favicons?domain=claude.com&sz=128",
		desc: "Anthropic 的 AI 助手",
		siteurl: "https://claude.com/",
		tags: ["AI", "写作", "编程"],
	},
	{
		id: 9,
		title: "Perplexity",
		imgurl: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
		desc: "AI 搜索与问答引擎",
		siteurl: "https://www.perplexity.ai/",
		tags: ["AI", "搜索", "效率"],
	},
	{
		id: 12,
		title: "Hugging Face",
		imgurl: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
		desc: "AI 模型与数据集社区",
		siteurl: "https://huggingface.co/",
		tags: ["AI", "模型", "社区"],
	},
	{
		id: 14,
		title: "Ollama",
		imgurl: "https://www.google.com/s2/favicons?domain=ollama.com&sz=128",
		desc: "本地运行开源大模型",
		siteurl: "https://ollama.com/",
		tags: ["模型", "工具"],
	},
	{
		id: 17,
		title: "Stack Overflow",
		imgurl: "https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=128",
		desc: "全球程序员问答社区",
		siteurl: "https://stackoverflow.com/",
		tags: ["开发", "社区"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
