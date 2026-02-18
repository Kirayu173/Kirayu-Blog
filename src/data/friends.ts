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
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "面向内容驱动网站的现代 Web 框架。",
		siteurl: "https://github.com/withastro/astro",
		tags: ["框架"],
	},
	{
		id: 2,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "全球开发者协作与托管代码的平台。",
		siteurl: "https://github.com",
		tags: ["开发", "平台"],
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
