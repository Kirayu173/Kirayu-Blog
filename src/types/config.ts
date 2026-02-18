import type {
	DARK_MODE,
	LIGHT_MODE,
	WALLPAPER_BANNER,
	WALLPAPER_FULLSCREEN,
	WALLPAPER_NONE,
} from "../constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;
	siteURL: string; // 绔欑偣URL锛屼互鏂滄潬缁撳熬锛屼緥濡傦細https://mizuki.mysqil.com/
	keywords?: string[]; // 绔欑偣鍏抽敭璇嶏紝鐢ㄤ簬鐢熸垚 <meta name="keywords">
	siteStartDate?: string; // 绔欑偣寮€濮嬫棩鏈燂紝鏍煎紡锛歒YYY-MM-DD锛岀敤浜庤绠楄繍琛屽ぉ鏁?

	timeZone:
		| -12
		| -11
		| -10
		| -9
		| -8
		| -7
		| -6
		| -5
		| -4
		| -3
		| -2
		| -1
		| 0
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};

	// 鐗硅壊椤甸潰寮€鍏抽厤缃?
	featurePages: {
		anime: boolean; // 鐣墽椤甸潰寮€鍏?
		diary: boolean; // 鏃ヨ椤甸潰寮€鍏?
		friends: boolean; // 鍙嬮摼椤甸潰寮€鍏?
		projects: boolean; // 椤圭洰椤甸潰寮€鍏?
		skills: boolean; // 鎶€鑳介〉闈㈠紑鍏?
		timeline: boolean; // 鏃堕棿绾块〉闈㈠紑鍏?
		albums: boolean; // 鐩稿唽椤甸潰寮€鍏?
		devices: boolean; // 璁惧椤甸潰寮€鍏?
	};

	// 鏂囩珷鍒楄〃甯冨眬閰嶇疆
	postListLayout: {
		defaultMode: "list" | "grid"; // 榛樿甯冨眬妯″紡锛歭ist=鍒楄〃妯″紡锛実rid=缃戞牸妯″紡
		allowSwitch: boolean; // 鏄惁鍏佽鐢ㄦ埛鍒囨崲甯冨眬
	};

	// 椤舵爮鏍囬閰嶇疆
	navbarTitle?: {
		mode?: "text-icon" | "logo"; // 鏄剧ず妯″紡锛?text-icon" 鏄剧ず鍥炬爣+鏂囨湰锛?logo" 浠呮樉绀篖ogo
		text: string; // 椤舵爮鏍囬鏂囨湰
		icon?: string; // 椤舵爮鏍囬鍥炬爣璺緞
		logo?: string; // 缃戠珯Logo鍥剧墖璺緞
	};

	// 椤甸潰鑷姩缂╂斁閰嶇疆
	pageScaling?: {
		enable: boolean; // 鏄惁寮€鍚嚜鍔ㄧ缉鏀?
		targetWidth?: number; // 鐩爣瀹藉害锛屼綆浜庢瀹藉害鏃跺紑濮嬬缉鏀?
	};

	// 娣诲姞瀛椾綋閰嶇疆
	font: {
		asciiFont: {
			fontFamily: string;
			fontWeight: string | number;
			localFonts: string[];
			enableCompress: boolean;
		};
		cjkFont: {
			fontFamily: string;
			fontWeight: string | number;
			localFonts: string[];
			enableCompress: boolean;
		};
	};

	// 娣诲姞bangumi閰嶇疆
	bangumi?: {
		userId?: string; // Bangumi鐢ㄦ埛ID
		fetchOnDev?: boolean;
	};

	// 娣诲姞bilibili閰嶇疆
	bilibili?: {
		vmid?: string; // Bilibili鐢ㄦ埛ID (vmid)
		fetchOnDev?: boolean; // 鏄惁鍦ㄥ紑鍙戠幆澧冧笅鑾峰彇 Bilibili 鏁版嵁
		coverMirror?: string; // 灏侀潰鍥剧墖闀滃儚婧愶紙鍙€夛紝榛樿涓虹┖瀛楃涓诧級
		useWebp?: boolean; // 鏄惁浣跨敤WebP鏍煎紡锛堥粯璁?true锛?
	};

	// 娣诲姞鐣墽椤甸潰閰嶇疆
	anime?: {
		mode?: "bangumi" | "local" | "bilibili"; // 鐣墽椤甸潰妯″紡
	};

	// 鏍囩鏍峰紡閰嶇疆
	tagStyle?: {
		useNewStyle?: boolean; // 鏄惁浣跨敤鏂版牱寮忥紙鎮仠楂樹寒鏍峰紡锛夎繕鏄棫鏍峰紡锛堝妗嗗父浜牱寮忥級
	};

	// 澹佺焊妯″紡閰嶇疆
	wallpaperMode: {
		defaultMode: "banner" | "fullscreen" | "none"; // 榛樿澹佺焊妯″紡锛歜anner=椤堕儴妯箙锛宖ullscreen=鍏ㄥ睆澹佺焊锛宯one=鏃犲绾?
		showModeSwitchOnMobile?: "off" | "mobile" | "desktop" | "both"; // 鏁翠綋甯冨眬鏂规鍒囨崲鎸夐挳鏄剧ず璁剧疆锛歰ff=闅愯棌锛宮obile=浠呯Щ鍔ㄧ锛宒esktop=浠呮闈㈢锛宐oth=鍏ㄩ儴鏄剧ず
	};

	banner: {
		src:
			| string
			| string[]
			| {
					desktop?: string | string[];
					mobile?: string | string[];
			  }; // 鏀寔鍗曚釜鍥剧墖銆佸浘鐗囨暟缁勬垨鍒嗗埆璁剧疆妗岄潰绔拰绉诲姩绔浘鐗?
		position?: "top" | "center" | "bottom";
		carousel?: {
			enable: boolean; // 鏄惁鍚敤杞挱
			interval: number; // 杞挱闂撮殧鏃堕棿锛堢锛?
		};
		waves?: {
			enable: boolean; // 鏄惁鍚敤姘存尝绾规晥鏋?
			performanceMode?: boolean; // 鎬ц兘妯″紡锛氬噺灏戝姩鐢诲鏉傚害
			mobileDisable?: boolean; // 绉诲姩绔鐢?
		};
		imageApi?: {
			enable: boolean; // 鏄惁鍚敤鍥剧墖API
			url: string; // API鍦板潃锛岃繑鍥炴瘡琛屼竴涓浘鐗囬摼鎺ョ殑鏂囨湰
		};
		homeText?: {
			enable: boolean; // 鏄惁鍦ㄩ椤垫樉绀鸿嚜瀹氫箟鏂囧瓧
			title?: string; // 涓绘爣棰?
			subtitle?: string | string[]; // 鍓爣棰橈紝鏀寔鍗曚釜瀛楃涓叉垨瀛楃涓叉暟缁?
			typewriter?: {
				enable: boolean; // 鏄惁鍚敤鎵撳瓧鏈烘晥鏋?
				speed: number; // 鎵撳瓧閫熷害锛堟绉掞級
				deleteSpeed: number; // 鍒犻櫎閫熷害锛堟绉掞級
				pauseTime: number; // 瀹屾暣鏄剧ず鍚庣殑鏆傚仠鏃堕棿锛堟绉掞級
			};
		};
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
		navbar?: {
			transparentMode?: "semi" | "full" | "semifull"; // 瀵艰埅鏍忛€忔槑妯″紡
		};
	};
	toc: {
		enable: boolean;
		mode: "float" | "sidebar"; // 鐩綍鏄剧ず妯″紡锛?float" 鎮诞鎸夐挳妯″紡锛?sidebar" 渚ц竟鏍忔ā寮?
		depth: 1 | 2 | 3;
		useJapaneseBadge?: boolean; // 浣跨敤鏃ヨ鍋囧悕鏍囪锛堛亗銇勩亞銇堛亰...锛変唬鏇挎暟瀛?
	};
	showCoverInContent: boolean; // 鎺у埗鏂囩珷灏侀潰鍦ㄦ枃绔犲唴瀹归〉鏄剧ず鐨勫紑鍏?
	generateOgImages: boolean;
	favicon: Favicon[];
	showLastModified: boolean; // 鎺у埗鈥滀笂娆＄紪杈戔€濆崱鐗囨樉绀虹殑寮€鍏?
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
	Friends = 3,
	Anime = 4,
	Diary = 5,
	Albums = 6,
	Projects = 7,
	Skills = 8,
	Timeline = 9,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
	icon?: string; // 鑿滃崟椤瑰浘鏍?
	children?: (NavBarLink | LinkPreset)[]; // 鏀寔瀛愯彍鍗曪紝鍙互鏄疦avBarLink鎴朙inkPreset
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
	typewriter?: {
		enable: boolean; // 鏄惁鍚敤鎵撳瓧鏈烘晥鏋?
		speed?: number; // 鎵撳瓧閫熷害锛堟绉掞級
	};
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

// Permalink 閰嶇疆
export type PermalinkConfig = {
	enable: boolean; // 鏄惁鍚敤鍏ㄥ眬 permalink 鍔熻兘
	/**
	 * permalink 鏍煎紡妯℃澘
	 * 鏀寔鐨勫崰浣嶇锛?
	 * - %year% : 4浣嶅勾浠?(2024)
	 * - %monthnum% : 2浣嶆湀浠?(01-12)
	 * - %day% : 2浣嶆棩鏈?(01-31)
	 * - %hour% : 2浣嶅皬鏃?(00-23)
	 * - %minute% : 2浣嶅垎閽?(00-59)
	 * - %second% : 2浣嶇鏁?(00-59)
	 * - %post_id% : 鏂囩珷搴忓彿锛堟寜鍙戝竷鏃堕棿鍗囧簭鎺掑垪锛?
	 * - %postname% : 鏂囩珷鏂囦欢鍚嶏紙slug锛?
	 * - %category% : 鍒嗙被鍚嶏紙鏃犲垎绫绘椂涓?"uncategorized"锛?
	 *
	 * 绀轰緥锛?
	 * - "%year%-%monthnum%-%postname%" => "2024-12-my-post"
	 * - "%post_id%-%postname%" => "42-my-post"
	 * - "%category%-%postname%" => "tech-my-post"
	 *
	 * 娉ㄦ剰锛氫笉鏀寔鏂滄潬 "/"锛屾墍鏈夌敓鎴愮殑閾炬帴閮藉湪鏍圭洰褰曚笅
	 */
	format: string;
};

// 璇勮閰嶇疆

export type CommentConfig = {
	enable: boolean; // 鏄惁鍚敤璇勮鍔熻兘
	twikoo?: TwikooConfig;
};

type TwikooConfig = {
	envId: string;
	region?: string;
	lang?: string;
};

export type LIGHT_DARK_MODE = typeof LIGHT_MODE | typeof DARK_MODE;

export type WALLPAPER_MODE =
	| typeof WALLPAPER_BANNER
	| typeof WALLPAPER_FULLSCREEN
	| typeof WALLPAPER_NONE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	pinned?: boolean;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
	hideDuringThemeTransition?: boolean; // 鏄惁鍦ㄤ富棰樺垏鎹㈡椂闅愯棌浠ｇ爜鍧?
};

export type MusicPlayerConfig = {
	enable: boolean; // 鏄惁鍚敤闊充箰鎾斁鍣ㄥ姛鑳?
	mode: "meting" | "local"; // 闊充箰鎾斁鍣ㄦā寮?
	meting_api: string; // Meting API 鍦板潃
	id: string; // 姝屽崟ID
	server: string; // 闊充箰婧愭湇鍔″櫒
	type: string; // 闊充箰绫诲瀷
};

export type FooterConfig = {
	enable: boolean; // 鏄惁鍚敤Footer HTML娉ㄥ叆鍔熻兘
	customHtml?: string; // 鑷畾涔塇TML鍐呭锛岀敤浜庢坊鍔犲妗堝彿绛変俊鎭?
};

// 缁勪欢閰嶇疆绫诲瀷瀹氫箟
export type WidgetComponentType =
	| "profile"
	| "categories"
	| "tags"
	| "toc"
	| "music-player"
	| "pio" // 娣诲姞 pio 缁勪欢绫诲瀷
	| "site-stats" // 绔欑偣缁熻缁勪欢
	| "calendar" // 鏃ュ巻缁勪欢
	| "custom";

export type WidgetComponentConfig = {
	type: WidgetComponentType; // 缁勪欢绫诲瀷
	position: "top" | "sticky"; // 缁勪欢浣嶇疆锛氶《閮ㄥ浐瀹氬尯鍩熸垨绮樻€у尯鍩?
	class?: string; // 鑷畾涔塁SS绫诲悕
	style?: string; // 鑷畾涔夊唴鑱旀牱寮?
	animationDelay?: number; // 鍔ㄧ敾寤惰繜鏃堕棿锛堟绉掞級
	responsive?: {
		hidden?: ("mobile" | "tablet" | "desktop")[]; // 鍦ㄦ寚瀹氳澶囦笂闅愯棌
		collapseThreshold?: number; // 鎶樺彔闃堝€?
	};
	customProps?: Record<string, any>; // 鑷畾涔夊睘鎬э紝鐢ㄤ簬鎵╁睍缁勪欢鍔熻兘
};

export type SidebarLayoutConfig = {
	properties: WidgetComponentConfig[]; // 缁勪欢閰嶇疆鍒楄〃
	components: {
		left: WidgetComponentType[];
		right: WidgetComponentType[];
		drawer: WidgetComponentType[];
	};
	defaultAnimation: {
		enable: boolean; // 鏄惁鍚敤榛樿鍔ㄧ敾
		baseDelay: number; // 鍩虹寤惰繜鏃堕棿锛堟绉掞級
		increment: number; // 姣忎釜缁勪欢閫掑鐨勫欢杩熸椂闂达紙姣锛?
	};
	responsive: {
		breakpoints: {
			mobile: number; // 绉诲姩绔柇鐐癸紙px锛?
			tablet: number; // 骞虫澘绔柇鐐癸紙px锛?
			desktop: number; // 妗岄潰绔柇鐐癸紙px锛?
		};
	};
};

export type SakuraConfig = {
	enable: boolean; // 鏄惁鍚敤妯辫姳鐗规晥
	sakuraNum: number; // 妯辫姳鏁伴噺锛岄粯璁?1
	limitTimes: number; // 妯辫姳瓒婄晫闄愬埗娆℃暟锛?1涓烘棤闄愬惊鐜?
	size: {
		min: number; // 妯辫姳鏈€灏忓昂瀵稿€嶆暟
		max: number; // 妯辫姳鏈€澶у昂瀵稿€嶆暟
	};
	opacity: {
		min: number; // 妯辫姳鏈€灏忎笉閫忔槑搴?
		max: number; // 妯辫姳鏈€澶т笉閫忔槑搴?
	};
	speed: {
		horizontal: {
			min: number; // 姘村钩绉诲姩閫熷害鏈€灏忓€?
			max: number; // 姘村钩绉诲姩閫熷害鏈€澶у€?
		};
		vertical: {
			min: number; // 鍨傜洿绉诲姩閫熷害鏈€灏忓€?
			max: number; // 鍨傜洿绉诲姩閫熷害鏈€澶у€?
		};
		rotation: number; // 鏃嬭浆閫熷害
		fadeSpeed: number; // 娑堝け閫熷害
	};
	zIndex: number; // 灞傜骇锛岀‘淇濇ū鑺卞湪鍚堥€傜殑灞傜骇鏄剧ず
};

export type FullscreenWallpaperConfig = {
	src:
		| string
		| string[]
		| {
				desktop?: string | string[];
				mobile?: string | string[];
		  }; // 鏀寔鍗曚釜鍥剧墖銆佸浘鐗囨暟缁勬垨鍒嗗埆璁剧疆妗岄潰绔拰绉诲姩绔浘鐗?
	position?: "top" | "center" | "bottom"; // 澹佺焊浣嶇疆锛岀瓑鍚屼簬 object-position
	carousel?: {
		enable: boolean; // 鏄惁鍚敤杞挱
		interval: number; // 杞挱闂撮殧鏃堕棿锛堢锛?
	};
	zIndex?: number; // 灞傜骇锛岀‘淇濆绾稿湪鍚堥€傜殑灞傜骇鏄剧ず
	opacity?: number; // 澹佺焊閫忔槑搴︼紝0-1涔嬮棿
	blur?: number; // 鑳屾櫙妯＄硦绋嬪害锛屽崟浣峱x
};

/**
 * Pio 鐪嬫澘濞橀厤缃?
 */
export type PioConfig = {
	enable: boolean; // 鏄惁鍚敤鐪嬫澘濞?
	models?: string[]; // 妯″瀷鏂囦欢璺緞鏁扮粍
	position?: "left" | "right"; // 鐪嬫澘濞樹綅缃?
	width?: number; // 鐪嬫澘濞樺搴?
	height?: number; // 鐪嬫澘濞橀珮搴?
	mode?: "static" | "fixed" | "draggable"; // 灞曠幇妯″紡
	hiddenOnMobile?: boolean; // 鏄惁鍦ㄧЩ鍔ㄨ澶囦笂闅愯棌
	dialog?: {
		welcome?: string | string[]; // 娆㈣繋璇?
		touch?: string | string[]; // 瑙︽懜鎻愮ず
		home?: string; // 棣栭〉鎻愮ず
		skin?: [string, string]; // 鎹㈣鎻愮ず [鍒囨崲鍓? 鍒囨崲鍚嶿
		close?: string; // 鍏抽棴鎻愮ず
		link?: string; // 鍏充簬閾炬帴
		custom?: Array<{
			selector: string; // CSS閫夋嫨鍣?
			type: "read" | "link"; // 绫诲瀷
			text?: string; // 鑷畾涔夋枃鏈?
		}>;
	};
};

/**
 * 鍒嗕韩缁勪欢閰嶇疆
 */
export type ShareConfig = {
	enable: boolean; // 鏄惁鍚敤鍒嗕韩鍔熻兘
};

