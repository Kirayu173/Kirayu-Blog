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
		desc: "OpenAI 的对话式 AI 助手",
		siteurl: "https://chatgpt.com/",
		tags: ["AI", "工具", "开发"],
	},
	{
		id: 2,
		title: "Gemini",
		imgurl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
		desc: "Google 的 AI 助手",
		siteurl: "https://gemini.google.com/",
		tags: ["AI", "工具"],
	},
	{
		id: 3,
		title: "FastAPI",
		imgurl: "https://www.google.com/s2/favicons?domain=fastapi.tiangolo.com&sz=128",
		desc: "高性能 Python Web 框架",
		siteurl: "https://fastapi.tiangolo.com/",
		tags: ["开发", "工具"],
	},
	{
		id: 4,
		title: "montbell",
		imgurl: "https://www.google.com/s2/favicons?domain=montbell.jp&sz=128",
		desc: "户外装备品牌",
		siteurl: "https://www.montbell.jp/",
		tags: ["生活", "工具"],
	},
	{
		id: 5,
		title: "稀土掘金",
		imgurl: "https://www.google.com/s2/favicons?domain=juejin.cn&sz=128",
		desc: "开发者社区",
		siteurl: "https://juejin.cn/",
		tags: ["开发", "社区"],
	},
	{
		id: 6,
		title: "Python",
		imgurl: "https://www.google.com/s2/favicons?domain=python.org&sz=128",
		desc: "Python 官方网站",
		siteurl: "https://www.python.org/",
		tags: ["开发", "工具"],
	},
	{
		id: 7,
		title: "Notion",
		imgurl: "https://www.google.com/s2/favicons?domain=notion.so&sz=128",
		desc: "一体化笔记与协作工具",
		siteurl: "https://www.notion.so/",
		tags: ["工具", "生活"],
	},
	{
		id: 8,
		title: "Claude",
		imgurl: "https://www.google.com/s2/favicons?domain=claude.com&sz=128",
		desc: "Anthropic 的 AI 助手",
		siteurl: "https://claude.com/",
		tags: ["AI", "工具"],
	},
	{
		id: 9,
		title: "Perplexity",
		imgurl: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
		desc: "AI 搜索与问答引擎",
		siteurl: "https://www.perplexity.ai/",
		tags: ["AI", "工具"],
	},
	{
		id: 12,
		title: "Hugging Face",
		imgurl: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
		desc: "AI 模型与数据集社区",
		siteurl: "https://huggingface.co/",
		tags: ["AI", "开发", "社区"],
	},
	{
		id: 14,
		title: "Ollama",
		imgurl: "https://www.google.com/s2/favicons?domain=ollama.com&sz=128",
		desc: "本地运行开源大模型",
		siteurl: "https://ollama.com/",
		tags: ["AI", "工具", "开发"],
	},
	{
		id: 17,
		title: "Stack Overflow",
		imgurl: "https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=128",
		desc: "全球程序员问答社区",
		siteurl: "https://stackoverflow.com/",
		tags: ["开发", "社区"],
	},
	{
		id: 101,
		title: "Linux.do",
		imgurl: "https://www.google.com/s2/favicons?domain=linux.do&sz=128",
		desc: "新的理想型社区",
		siteurl: "https://linux.do",
		tags: ["社区", "开发"],
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
