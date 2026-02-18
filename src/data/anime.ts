// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "莉可丽丝",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/lkls.webp",
		description: "少女特工与枪战日常。",
		episodes: "12 集",
		year: "2022",
		genre: ["动作", "日常"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "弱势角色友崎君",
		status: "watching",
		rating: 9.5,
		cover: "/assets/anime/rynh.webp",
		description: "校园成长与人际关系的治愈故事。",
		episodes: "12 集",
		year: "2015",
		genre: ["校园", "治愈"],
		studio: "Nexus",
		link: "https://www.bilibili.com/bangumi/media/md2590",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2015-07",
		endDate: "2015-09",
	},
	{
		title: "恋爱小行星",
		status: "watching",
		rating: 9.2,
		cover: "/assets/anime/laxxx.webp",
		description: "在星空下相遇的青春日常。",
		episodes: "12 集",
		year: "2020",
		genre: ["恋爱", "治愈"],
		studio: "动画工房",
		link: "https://www.bilibili.com/bangumi/media/md28224128",
		progress: 5,
		totalEpisodes: 12,
		startDate: "2020-01",
		endDate: "2020-03",
	},
	{
		title: "请问您今天要来点兔子吗？",
		status: "planned",
		rating: 9.0,
		cover: "/assets/anime/tz1.webp",
		description: "咖啡店里的温馨少女日常。",
		episodes: "12 集",
		year: "2014",
		genre: ["日常", "治愈"],
		studio: "White Fox",
		link: "https://www.bilibili.com/bangumi/media/md2762",
		progress: 0,
		totalEpisodes: 12,
		startDate: "2014-04",
		endDate: "2014-06",
	},
	{
		title: "魔法少女与邪恶曾是敌人",
		status: "watching",
		rating: 9.0,
		cover: "/assets/anime/cmmn.webp",
		description: "轻松有趣的魔法少女喜剧。",
		episodes: "12 集",
		year: "2024",
		genre: ["日常", "治愈", "魔法"],
		studio: "C2C",
		link: "https://www.bilibili.com/bangumi/media/md26625039",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2025-07",
		endDate: "2025-10",
	},
];

export default localAnimeList;
