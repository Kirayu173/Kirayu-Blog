import type {
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 缁夊娅巌18n鐎电厧鍙嗘禒銉╀缉閸忓秴鎯婇悳顖欑贩鐠?

// 鐎规矮绠熺粩娆戝仯鐠囶叀鈻?
const SITE_LANG = "zh_CN"; // 鐠囶叀鈻堟禒锝囩垳閿涘奔绶ユ俊鍌︾窗'en', 'zh_CN', 'ja' 缁涘鈧?
const SITE_TIMEZONE = 8; //鐠佸墽鐤嗘担鐘垫畱缂冩垹鐝弮璺哄隘 from -12 to 12 default in UTC+8
export const siteConfig: SiteConfig = {
	title: "Kirayu-Blog",
	subtitle: "Maintained by Axis",
	siteURL: "https://mizuki.mysqil.com/", // 鐠囬攱娴涢幑顫礋娴ｇ姷娈戠粩娆戝仯URL閿涘奔浜掗弬婊勬浆缂佹挸鐔?
	siteStartDate: "2025-01-01", // 缁旀瑧鍋ｅ鈧慨瀣箥鐞涘本妫╅張鐕傜礉閻劋绨粩娆戝仯缂佺喕顓哥紒鍕鐠侊紕鐣绘潻鎰攽婢垛晜鏆?

	timeZone: SITE_TIMEZONE,

	lang: SITE_LANG,

	themeColor: {
		hue: 60, // 娑撳顣介懝鑼畱姒涙顓婚懝鑼祲閿涘矁瀵栭崶缈犵矤 0 閸?360閵嗗倷绶ユ俊鍌︾窗缁俱垼澹婇敍?閿涘矂娼氶懝璇х窗200閿涘矁鎽戠紒鑳閿?50閿涘瞼鐭囬懝璇х窗345
		fixed: false, // 鐎电顔栭梻顔库偓鍛存閽樺繋瀵屾０妯垮闁瀚ㄩ崳?
	},

	// 閻楃澹婃い鐢告桨瀵偓閸忔娊鍘ょ純顕嗙礄閸忔娊妫撮張顏冨▏閻劎娈戞い鐢告桨閺堝濮禍搴㈠絹閸?SEO閿涘苯鍙ч梻顓炴倵鐠囩柉顔囧妤€婀?navbarConfig 娑擃厾些闂勩倕顕惔鏃堟懠閹恒儻绱?
	featurePages: {
		anime: true, // 閻ｎ亜澧芥い鐢告桨瀵偓閸?
		friends: true, // 閸欏鎽兼い鐢告桨瀵偓閸?
		projects: true, // 妞ゅ湱娲版い鐢告桨瀵偓閸?
		skills: true, // 閹垛偓閼充粙銆夐棃銏犵磻閸?
		timeline: true, // 閺冨爼妫跨痪鍧椼€夐棃銏犵磻閸?
		albums: true, // 閻╃鍞芥い鐢告桨瀵偓閸?
		devices: true, // 鐠佹儳顦い鐢告桨瀵偓閸?
	},

	// 妞よ埖鐖弽鍥暯闁板秶鐤?
	navbarTitle: {
		// 閺勫墽銇氬Ο鈥崇础閿?text-icon" 閺勫墽銇氶崶鐐垼+閺傚洦婀伴敍?logo" 娴犲懏妯夌粈绡杘go
		mode: "text-icon",
		// 妞よ埖鐖弽鍥暯閺傚洦婀?
		text: "Kirayu",
		// 鐠佸彞璐熺粚鍝勭摟缁楋缚瑕嗛崣顖欑矌閺勫墽銇氶弬鍥х摟閿涘奔绗夐弰鍓с仛閸ョ偓鐖?
		icon: "",
		// 缂冩垹鐝疞ogo閸ュ墽澧栫捄顖氱窞
		logo: "assets/home/default-logo.png",
	},

	// 妞ょ敻娼伴懛顏勫З缂傗晜鏂侀柊宥囩枂
	pageScaling: {
		enable: true, // 閺勵垰鎯佸鈧崥顖濆殰閸斻劎缂夐弨?
		targetWidth: 2000, // 閻╊喗鐖ｇ€硅棄瀹抽敍灞肩秵娴滃孩顒濈€硅棄瀹抽弮璺虹磻婵缂夐弨?
	},

	bangumi: {
		userId: "your-bangumi-id", // 閸︺劍顒濇径鍕啎缂冾喕缍橀惃鍑歛ngumi閻劍鍩汭D閿涘苯褰叉禒銉啎缂冾喕璐?"sai" 濞村鐦?
		fetchOnDev: false, // 閺勵垰鎯侀崷銊ョ磻閸欐垹骞嗘晶鍐х瑓閼惧嘲褰?Bangumi 閺佺増宓侀敍鍫ョ帛鐠?false閿涘绱濋懢宄板絿閸撳秴鍘涢幍褑顢?pnpm build 閺嬪嫬缂?json 閺傚洣娆?
	},

	bilibili: {
		vmid: "your-bilibili-vmid", // 閸︺劍顒濇径鍕啎缂冾喕缍橀惃鍑歩libili閻劍鍩汭D (uid)閿涘奔绶ユ俊?"1129280784"
		fetchOnDev: false, // 閺勵垰鎯侀崷銊ョ磻閸欐垹骞嗘晶鍐х瑓閼惧嘲褰?Bilibili 閺佺増宓侀敍鍫ョ帛鐠?false閿?
		coverMirror: "", // 鐏忎線娼伴崶鍓у闂€婊冨剼濠ф劧绱欓崣顖炩偓澶涚礉婵″倹鐏夐棁鈧憰浣峰▏閻劑鏆呴崓蹇旂爱閿涘奔绶ユ俊?"https://images.weserv.nl/?url="閿?
		useWebp: true, // 閺勵垰鎯佹担璺ㄦ暏WebP閺嶇厧绱￠敍鍫ョ帛鐠?true閿?

		// bilibili 鐟欏倻婀呮潻娑樺闁板秶鐤嗙拠瀛樻(閸欘垶鈧绱濇俊鍌炴付闁板秶鐤嗘禒鏃傜矎闂冨懓顕?:
		// 1. 閺堫剙婀村鈧崣鎴窗鐠囧嘲婀?.env 閺傚洣娆㈡稉顓烇綖閸?BILI_SESSDATA=your_SESSDATA
		// 2. 鏉╂粎鈻奸弸鍕紦閿涙俺顕崷?GitHub 娴犳挸绨?Settings -> Secrets 娑擃厽鍧婇崝?BILI_SESSDATA
		// 濞夈劍鍓伴敍姝婨SSDATA 娑撻缚澶勯崣宄板殶鐠囦緤绱濇稉娲Щ濮濄垺纭犻棁璇х礉閸掑洩顔囨稉宥呭讲娴ｈ法鏁ょ涵顒傜椽閻降鈧?
		// 鐎瑰鍙忛幓鎰仛閿涙艾顩?SESSDATA 瀹稿弶纭犻棁璇х礉鐠囬攱澧﹀鈧?B缁旀瑦澧滈張铏诡伂 閳ユ柡鈧?閹存垹娈?閳ユ柡鈧?鐠佸墽鐤?閳ユ柡鈧?鐎瑰鍙忛梾鎰潌 閳ユ柡鈧?閻у妾扮拋鎯ь槵缁狅紕鎮?閳ユ柡鈧?娑撯偓闁款噣鈧偓閻т紮绱濋柨鈧В浣稿嚒濞夊嫰婀堕惃鍕閸欏嘲鍤熺拠?
	},

	anime: {
		mode: "local", // 閻ｎ亜澧芥い鐢告桨濡€崇础閿?bangumi" 娴ｈ法鏁angumi API閿?local" 娴ｈ法鏁ら張顒€婀撮柊宥囩枂閿?bilibili" 娴ｈ法鏁ilibili API
	},

	// 閺傚洨鐝烽崚妤勩€冪敮鍐ㄧ湰闁板秶鐤?
	postListLayout: {
		// 姒涙顓荤敮鍐ㄧ湰濡€崇础閿?list" 閸掓銆冨Ο鈥崇础閿涘牆宕熼崚妤€绔风仦鈧敍澶涚礉"grid" 缂冩垶鐗稿Ο鈥崇础閿涘牆寮婚崚妤€绔风仦鈧敍?
		// 濞夈劍鍓伴敍姘洤閺嬫粈鏅舵潏瑙勭埉闁板秶鐤嗛崥顖滄暏娴?both"閸欏奔鏅舵潏瑙勭埉閿涘苯鍨弮鐘崇《娴ｈ法鏁ら弬鍥╃彿閸掓銆?grid"缂冩垶鐗搁敍鍫濆蓟閸掓绱氱敮鍐ㄧ湰
		defaultMode: "list",
		// 閺勵垰鎯侀崗浣筋啅閻劍鍩涢崚鍥ㄥ床鐢啫鐪?
		allowSwitch: false,
	},

	// 閺嶅洨顒烽弽宄扮础闁板秶鐤?
	tagStyle: {
		// 閺勵垰鎯佹担璺ㄦ暏閺傜増鐗卞蹇ョ礄閹剙浠犳妯瑰瘨閺嶅嘲绱￠敍澶庣箷閺勵垱妫弽宄扮础閿涘牆顦诲鍡楃埗娴滎喗鐗卞蹇ョ礆
		useNewStyle: false,
	},

	// 婢逛胶鐒婂Ο鈥崇础闁板秶鐤?
	wallpaperMode: {
		// 姒涙顓绘竟浣虹剨濡€崇础閿涙瓬anner=妞ゅ爼鍎村Ο顏勭畽閿涘畺ullscreen=閸忋劌鐫嗘竟浣虹剨閿涘one=閺冪姴顥嗙痪?
		defaultMode: "banner",
		// 閺佺繝缍嬬敮鍐ㄧ湰閺傝顢嶉崚鍥ㄥ床閹稿鎸抽弰鍓с仛鐠佸墽鐤嗛敍鍫ョ帛鐠併倧绱?desktop"閿?
		// "off" = 娑撳秵妯夌粈?
		// "mobile" = 娴犲懎婀粔璇插З缁旑垱妯夌粈?
		// "desktop" = 娴犲懎婀宀勬桨缁旑垱妯夌粈?
		// "both" = 閸︺劍澧嶉張澶庮啎婢跺洣绗傞弰鍓с仛
		showModeSwitchOnMobile: "desktop",
	},

	banner: {
		// 閺€顖涘瘮閸楁洖绱堕崶鍓у閹存牕娴橀悧鍥ㄦ殶缂佸嫸绱濊ぐ鎾存殶缂佸嫰鏆辨惔?> 1 閺冩儼鍤滈崝銊ユ儙閻劏鐤嗛幘?
		src: {
			desktop: ["/assets/desktop-banner/kirayu-home-banner.jpg"], // 濡楀矂娼板Ο顏勭畽閸ュ墽澧?
			mobile: ["/assets/desktop-banner/kirayu-home-banner.jpg"], // 缁夎濮╁Ο顏勭畽閸ュ墽澧?
		}, // 娴ｈ法鏁ら張顒€婀村Ο顏勭畽閸ュ墽澧?

		position: "center", // 缁涘鎮撴禍?object-position閿涘奔绮庨弨顖涘瘮 'top', 'center', 'bottom'閵嗗倿绮拋銈勮礋 'center'

		carousel: {
			enable: true, // 娑?true 閺冭绱版稉鍝勵樋瀵姴娴橀悧鍥ф儙閻劏鐤嗛幘顓溾偓鍌欒礋 false 閺冭绱版禒搴㈡殶缂佸嫪鑵戦梾蹇旀簚閺勫墽銇氭稉鈧鐘叉禈閻?
			interval: 1.5, // 鏉烆喗鎸遍梻鎾閺冨爼妫块敍鍫㈩潡閿?
		},

		waves: {
			enable: true, // 閺勵垰鎯侀崥顖滄暏濮樺瓨灏濈痪瑙勬櫏閺嬫粣绱欏▔銊﹀壈閿涙碍顒濋崝鐔诲厴閹嗗厴瀵偓闁库偓鏉堝啫銇囬敍?
			performanceMode: false, // 閹嗗厴濡€崇础閿涙艾鍣虹亸鎴濆З閻㈣顦查弶鍌氬(閹嗗厴閹绘劕宕?0%)
			mobileDisable: false, // 缁夎濮╃粩顖滎洣閻?
		},

		// PicFlow API閺€顖涘瘮(閺呴缚鍏橀崶鍓уAPI)
		imageApi: {
			enable: false, // 閸氼垳鏁ら崶鍓уAPI
			url: "http://domain.com/api_v2.php?format=text&count=4", // API閸︽澘娼冮敍宀冪箲閸ョ偞鐦＄悰灞肩娑擃亜娴橀悧鍥懠閹恒儳娈戦弬鍥ㄦ拱
		},
		// 鏉╂瑩鍣烽棁鈧憰浣峰▏閻⑩墥icFlow API閻ㄥ嚲ext鏉╂柨娲栫猾璇茬€?閹碘偓娴犮儲鍨滄禒顒勬付鐟曚公ormat=text閸欏倹鏆?
		// 妞ゅ湱娲伴崷鏉挎絻:https://github.com/matsuzaka-yuki/PicFlow-API
		// 鐠囩柉鍤滅悰灞炬儗瀵ょ瘓PI

		homeText: {
			enable: true, // 閸︺劋瀵屾い鍨▔缁€楦垮殰鐎规矮绠熼弬鍥ㄦ拱
			title: "Kirayu's Lab", // 主页横幅主标题
			subtitle: [
				"Some things endure beyond time.",
				"Time passes. Meaning remains.",
				"What is built with purpose does not fade.",
				"Memory outlives the moment.",
				"We persist.",
				"Ever ready.",
			],
			typewriter: {
				enable: true, // 閸氼垳鏁ら崜顖涚垼妫版ɑ澧︾€涙婧€閺佸牊鐏?
				speed: 100, // 閹垫挸鐡ч柅鐔峰閿涘牊顕犵粔鎺炵礆
				deleteSpeed: 50, // 閸掔娀娅庨柅鐔峰閿涘牊顕犵粔鎺炵礆
				pauseTime: 2000, // 鐎瑰苯鍙忛弰鍓с仛閸氬海娈戦弳鍌氫粻閺冨爼妫块敍鍫燁嚑缁夋帪绱?
			},
		},

		credit: {
			enable: false, // 閺勫墽銇氬Ο顏勭畽閸ュ墽澧栭弶銉︾爱閺傚洦婀?

			text: "閸ュ墽澧栭弶銉︾爱", // 鐟曚焦妯夌粈铏规畱閺夈儲绨弬鍥ㄦ拱
			url: "", // 閿涘牆褰查柅澶涚礆閸樼喎顫愰懝鐑樻钩閸濅焦鍨ㄩ懝鐑樻钩鐎瑰爼銆夐棃銏㈡畱 URL 闁剧偓甯?
		},

		navbar: {
			transparentMode: "semifull", // 鐎佃壈鍩呴弽蹇涒偓蹇旀濡€崇础閿?semi" 閸楀﹪鈧繑妲戦崝鐘叉妇鐟欐帪绱?full" 鐎瑰苯鍙忛柅蹇旀閿?semifull" 閸斻劍鈧線鈧繑妲?
		},
	},
	toc: {
		enable: true, // 閸氼垳鏁ら惄顔肩秿閸旂喕鍏?
		mode: "sidebar", // 閻╊喖缍嶉弰鍓с仛濡€崇础閿?float" 閹剚璇為幐澶愭尦濡€崇础閿?sidebar" 娓氀嗙珶閺嶅繑膩瀵?
		depth: 2, // 閻╊喖缍嶅ǎ鍗炲閿?-6閿? 鐞涖劎銇氶崣顏呮▔缁€?h1 閺嶅洭顣介敍? 鐞涖劎銇氶弰鍓с仛 h1 閸?h2 閺嶅洭顣介敍灞肩贩濮濄倗琚幒?
		useJapaneseBadge: true, // 娴ｈ法鏁ら弮銉嚔閸嬪洤鎮曢弽鍥唶閿涘牄浜楅妵鍕╀簽閵囧牄浜?..閿涘鍞弴鎸庢殶鐎涙绱濆鈧崥顖氭倵娴兼艾鐨?1閵?閵?... 閺€閫涜礋 閵囧倶鈧降浜滈妴浣典簽...
	},
	showCoverInContent: true, // 閸︺劍鏋冪粩鐘插敶鐎瑰綊銆夐弰鍓с仛閺傚洨鐝风亸渚€娼?
	generateOgImages: false, // 閸氼垳鏁ら悽鐔稿灇OpenGraph閸ュ墽澧栭崝鐔诲厴,濞夈劍鍓板鈧崥顖氭倵鐟曚焦瑕嗛弻鎾崇发闂€鎸庢闂傝揪绱濇稉宥呯紦鐠侇喗婀伴崷鎷岀殶鐠囨洜娈戦弮璺衡偓娆忕磻閸?
	favicon: [
		{
			src: "/favicon/kirayu-tab-icon.png",
			sizes: "32x32",
		},
	],

	// 鐎涙ぞ缍嬮柊宥囩枂
	font: {
		// 濞夈劍鍓伴敍姘冲殰鐎规矮绠熺€涙ぞ缍嬮棁鈧憰浣告躬 src/styles/main.css 娑擃厼绱╅崗銉ョ摟娴ｆ挻鏋冩禒?
		// 濞夈劍鍓伴敍姘摟娴ｆ挸鐡欓梿鍡曠喘閸栨牕濮涢懗鐣屾窗閸撳秳绮庨弨顖涘瘮 TTF 閺嶇厧绱＄€涙ぞ缍?瀵偓閸氼垰鎮楅棁鈧憰浣告躬閻㈢喍楠囬悳顖氼暔閹靛秷鍏橀惇瀣煂閺佸牊鐏?閸︹€昬v閻滎垰顣ㄦ稉瀣▔缁€铏规畱閺勵垱绁荤憴鍫濇珤姒涙顓荤€涙ぞ缍?
		asciiFont: {
			// 閼昏鲸鏋冪€涙ぞ缍?- 娴兼ê鍘涚痪褎娓舵?
			// 閹稿洤鐣炬稉楦垮閺傚洤鐡ф担鎾冲灟閺冪姾顔戠€涙ぞ缍嬮崠鍛儓婢舵艾銇囬懠鍐ㄦ纯閿涘矂鍏橀崣顏冪窗娣囨繄鏆€ ASCII 鐎涙顑佺€涙劙娉?
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true, // 閸氼垳鏁ょ€涙ぞ缍嬬€涙劙娉︽导妯哄閿涘苯鍣虹亸鎴濈摟娴ｆ挻鏋冩禒璺恒亣鐏?
		},
		cjkFont: {
			// 娑擃厽妫╅棅鈺佺摟娴?- 娴ｆ粈璐熼崶鐐衡偓鈧€涙ぞ缍?
			fontFamily: "萝莉体 第二版",
			fontWeight: "500",
			localFonts: ["萝莉体 第二版.ttf"],
			enableCompress: true, // 閸氼垳鏁ょ€涙ぞ缍嬬€涙劙娉︽导妯哄閿涘苯鍣虹亸鎴濈摟娴ｆ挻鏋冩禒璺恒亣鐏?
		},
	},
	showLastModified: true, // 閹貉冨煑閳ユ粈绗傚▎锛勭椽鏉堟垟鈧繂宕遍悧鍥ㄦ▔缁€铏规畱瀵偓閸?
};
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: ["/assets/desktop-banner/kirayu-home-banner.jpg"], // 濡楀矂娼板Ο顏勭畽閸ュ墽澧?
		mobile: ["/assets/desktop-banner/kirayu-home-banner.jpg"], // 缁夎濮╁Ο顏勭畽閸ュ墽澧?
	}, // 娴ｈ法鏁ら張顒€婀村Ο顏勭畽閸ュ墽澧?
	position: "center", // 婢逛胶鐒婃担宥囩枂閿涘瞼鐡戦崥灞肩艾 object-position
	carousel: {
		enable: true, // 閸氼垳鏁ゆ潪顔芥尡
		interval: 5, // 鏉烆喗鎸遍梻鎾閺冨爼妫块敍鍫㈩潡閿?
	},
	zIndex: -1, // 鐏炲倻楠囬敍宀€鈥樻穱婵嗩梿缁剧婀懗灞炬珯鐏?
	opacity: 0.8, // 婢逛胶鐒婇柅蹇旀鎼?
	blur: 1, // 閼冲本娅欏Ο锛勭ˇ缁嬪瀹?
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		// 閺€顖涘瘮閼奉亜鐣炬稊澶婎嚤閼割亝鐖柧鐐复閿涘本鏁幐浣割樋缁狙嗗綅閸?
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/Kirayu173",
					external: true,
					icon: "fa7-brands:github",
				},
			],
		},
		{
			name: "My",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "Anime",
					url: "/anime/",
					icon: "material-symbols:movie",
				},
				{
					name: "Gallery",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
				{
					name: "设备",
					url: "devices/",
					icon: "material-symbols:devices",
					external: false,
				},
			],
		},
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "About",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "Friends",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/kirayu-avatar.jpg", // 閻╃顕禍?/src 閻╊喖缍嶉妴鍌氼洤閺嬫粈浜?'/' 瀵偓婢惰揪绱濋崚娆戞祲鐎甸€涚艾 /public 閻╊喖缍?
	name: "Kirayu",
	bio: "with his agent , Axis",
	typewriter: {
		enable: true, // 閸氼垳鏁ゆ稉顏冩眽缁犫偓娴犲澧︾€涙婧€閺佸牊鐏?
		speed: 80, // 閹垫挸鐡ч柅鐔峰閿涘牊顕犵粔鎺炵礆
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Kirayu173",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// Permalink 閸ュ搫鐣鹃柧鐐复闁板秶鐤?
export const permalinkConfig: PermalinkConfig = {
	enable: false, // 閺勵垰鎯侀崥顖滄暏閸忋劌鐪?permalink 閸旂喕鍏橀敍灞藉彠闂傤厽妞傛担璺ㄦ暏姒涙顓婚惃鍕瀮娴犺泛鎮曟担婊€璐熼柧鐐复
	/**
	 * permalink 閺嶇厧绱″Ο鈩冩緲
	 * 閺€顖涘瘮閻ㄥ嫬宕版担宥囶儊閿?
	 * - %year% : 4娴ｅ秴鍕炬禒?(2024)
	 * - %monthnum% : 2娴ｅ秵婀€娴?(01-12)
	 * - %day% : 2娴ｅ秵妫╅張?(01-31)
	 * - %hour% : 2娴ｅ秴鐨弮?(00-23)
	 * - %minute% : 2娴ｅ秴鍨庨柦?(00-59)
	 * - %second% : 2娴ｅ秶顫楅弫?(00-59)
	 * - %post_id% : 閺傚洨鐝锋惔蹇撳娇閿涘牊瀵滈崣鎴濈閺冨爼妫块崡鍥х碍閹烘帒鍨敍灞炬付閺冣晝娈戦弬鍥╃彿娑?閿?
	 * - %postname% : 閺傚洨鐝烽弬鍥︽閸氬稄绱檚lug閿?
	 * - %category% : 閸掑棛琚崥宥忕礄閺冪姴鍨庣猾缁樻娑?"uncategorized"閿?
	 *
	 * 缁€杞扮伐閿?
	 * - "%year%-%monthnum%-%postname%" => "/2024-12-my-post/"
	 * - "%post_id%-%postname%" => "/42-my-post/"
	 * - "%category%-%postname%" => "/tech-my-post/"
	 *
	 * 濞夈劍鍓伴敍姘瑝閺€顖涘瘮閺傛粍娼?"/"閿涘本澧嶉張澶屾晸閹存劗娈戦柧鐐复闁棄婀弽鍦窗瑜版洑绗?
	 */
	format: "%postname%", // 姒涙顓绘担璺ㄦ暏閺傚洣娆㈤崥?
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 濞夈劍鍓伴敍姘厙娴滄稒鐗卞蹇ョ礄婵″倽鍎楅弲顖烆杹閼硅绱氬鑼额潶鐟曞棛娲婇敍宀冾嚞閸欏倿妲?astro.config.mjs 閺傚洣娆㈤妴?
	// 鐠囩兘鈧瀚ㄥǎ杈娑撳顣介敍灞芥礈娑撶儤顒濋崡姘吂娑撳顣介惄顔煎娴犲懏鏁幐浣圭箒閼硅尪鍎楅弲?
	theme: "github-dark",
	// 閺勵垰鎯侀崷銊ゅ瘜妫版ê鍨忛幑銏℃闂呮劘妫屾禒锝囩垳閸фぞ浜掗柆鍨帳閸楋繝銆戦梻顕€顣?
	hideDuringThemeTransition: true,
};

export const commentConfig: CommentConfig = {
	enable: false, // 閸氼垳鏁ょ拠鍕啈閸旂喕鍏橀妴鍌氱秼鐠佸墽鐤嗘稉?false 閺冭绱濈拠鍕啈缂佸嫪娆㈢亸鍡曠瑝娴兼碍妯夌粈鍝勬躬閺傚洨鐝烽崠鍝勭厵閵?
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: SITE_LANG,
	},
};

export const shareConfig: ShareConfig = {
	enable: true, // 閸氼垳鏁ら崚鍡曢煩閸旂喕鍏?
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true, // 閸氼垳鏁ら棅鍏呯閹绢厽鏂侀崳銊ュ閼?
	mode: "meting", // 闂婂厖绠伴幘顓熸杹閸ｃ劍膩瀵骏绱濋崣顖炩偓?"local" 閹?"meting"
	meting_api:
		"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r", // Meting API 閸︽澘娼?
	id: "14164869977", // 濮濆苯宕烮D
	server: "netease", // 闂婂厖绠板┃鎰箛閸斺€虫珤閵嗗倹婀侀惃鍒磂ting閻ㄥ垷pi濠ф劖鏁幐浣规纯婢舵艾閽╅崣?娑撯偓閼割剚娼电拠?netease=缂冩垶妲楁禍鎴︾叾娑? tencent=QQ闂婂厖绠? kugou=闁伴瀚嶉棅鍏呯, xiami=閾忓墽鑳岄棅鍏呯, baidu=閻ф儳瀹抽棅鍏呯
	type: "playlist", // 閹绢厼宕熺猾璇茬€?
};

export const footerConfig: FooterConfig = {
	enable: false, // 閺勵垰鎯侀崥顖滄暏Footer HTML濞夈劌鍙嗛崝鐔诲厴
	customHtml: "", // HTML閺嶇厧绱￠惃鍕殰鐎规矮绠熸い浣冨壖娣団剝浼呴敍灞肩伐婵″倸顦鍫濆娇缁涘绱濇妯款吇閻ｆ瑧鈹?
	// 娑旂喎褰叉禒銉ф纯閹恒儳绱潏?FooterConfig.html 閺傚洣娆㈤弶銉﹀潑閸旂姴顦鍫濆娇缁涘鍤滅€规矮绠熼崘鍛啇
	// 濞夈劍鍓伴敍姘冲 customHtml 娑撳秳璐熺粚鐚寸礉閸掓瑤濞囬悽?customHtml 娑擃厾娈戦崘鍛啇閿涙稖瀚?customHtml 閻ｆ瑧鈹栭敍灞藉灟娴ｈ法鏁?FooterConfig.html 閺傚洣娆㈡稉顓犳畱閸愬懎顔?
	// FooterConfig.html 閸欘垵鍏樻导姘躬閺堫亝娼甸惃鍕厙娑擃亞澧楅張顒€绱旈悽?
};

/**
 * 娓氀嗙珶閺嶅繐绔风仦鈧柊宥囩枂
 * 閻劋绨幒褍鍩楁笟褑绔熼弽蹇曠矋娴犲墎娈戦弰鍓с仛閵嗕焦甯撴惔蹇嬧偓浣稿З閻㈣鎷伴崫宥呯安瀵繗顢戞稉?
 * sidebar: 閹貉冨煑缂佸嫪娆㈤幍鈧崷銊ф畱娓氀嗙珶閺嶅骏绱檒eft 閹?right閿涘鈧倹鏁為幇蹇ョ窗缁夎濮╃粩顖炩偓姘埗娑撳秵妯夌粈鍝勫礁娓氀勭埉閸愬懎顔愰妴鍌濆缂佸嫪娆㈢拋鍓х枂閸?right閿涘矁顕涵顔荤箽 layout.position 娑?"both"閵?
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 娓氀嗙珶閺嶅繒绮嶆禒璺虹潣閹囧帳缂冾喖鍨悰?
	properties: [
		{
			type: "profile",
			// 缂佸嫪娆㈡担宥囩枂閿?top" 鐞涖劎銇氶崶鍝勭暰閸︺劑銆婇柈?
			position: "top",
			// CSS 缁鎮曢敍宀€鏁ゆ禍搴＄安閻劍鐗卞蹇撴嫲閸斻劎鏁?
			class: "onload-animation",
			// 閸斻劎鏁惧鎯扮箿閺冨爼妫块敍鍫燁嚑缁夋帪绱氶敍宀€鏁ゆ禍搴ㄦ晩瀵偓閸斻劎鏁鹃弫鍫熺亯
			animationDelay: 0,
		},
		{
			// 缂佸嫪娆㈢猾璇茬€烽敍姘瀻缁崵绮嶆禒?
			type: "categories",
			// 缂佸嫪娆㈡担宥囩枂閿?sticky" 鐞涖劎銇氱划妯烩偓褍鐣炬担宥忕礉閸欘垱绮撮崝?
			position: "sticky",
			// CSS 缁鎮?
			class: "onload-animation",
			// 閸斻劎鏁惧鎯扮箿閺冨爼妫?
			animationDelay: 150,
			// 閸濆秴绨插蹇涘帳缂?
			responsive: {
				// 閹舵ê褰旈梼鍫濃偓纭风窗瑜版挸鍨庣猾缁樻殶闁插繗绉存潻?娑擃亝妞傞懛顏勫З閹舵ê褰?
				collapseThreshold: 5,
			},
		},
		{
			// 缂佸嫪娆㈢猾璇茬€烽敍姘垼缁涘墽绮嶆禒?
			type: "tags",
			// 缂佸嫪娆㈡担宥囩枂閿?sticky" 鐞涖劎銇氱划妯烩偓褍鐣炬担?
			position: "top",
			// CSS 缁鎮?
			class: "onload-animation",
			// 閸斻劎鏁惧鎯扮箿閺冨爼妫?
			animationDelay: 250,
			// 閸濆秴绨插蹇涘帳缂?
			responsive: {
				// 閹舵ê褰旈梼鍫濃偓纭风窗瑜版挻鐖ｇ粵鐐殶闁插繗绉存潻?0娑擃亝妞傞懛顏勫З閹舵ê褰?
				collapseThreshold: 20,
			},
		},
		{
			// 缂佸嫪娆㈢猾璇茬€烽敍姘辩彲閻愬湱绮虹拋锛勭矋娴?
			type: "site-stats",
			// 缂佸嫪娆㈡担宥囩枂
			position: "top",
			// CSS 缁鎮?
			class: "onload-animation",
			// 閸斻劎鏁惧鎯扮箿閺冨爼妫?
			animationDelay: 200,
		},
		{
			// 缂佸嫪娆㈢猾璇茬€烽敍姘）閸樺棛绮嶆禒?缁夎濮╃粩顖欑瑝閺勫墽銇?
			type: "calendar",
			// 缂佸嫪娆㈡担宥囩枂
			position: "top",
			// CSS 缁鎮?
			class: "onload-animation",
			// 閸斻劎鏁惧鎯扮箿閺冨爼妫?
			animationDelay: 250,
		},
	],

	// 娓氀勭埉缂佸嫪娆㈢敮鍐ㄧ湰闁板秶鐤?
	components: {
		left: ["calendar", "categories", "tags"],
		right: ["profile"],
		drawer: ["profile", "categories", "tags"],
	},

	// 姒涙顓婚崝銊ф暰闁板秶鐤?
	defaultAnimation: {
		// 閺勵垰鎯侀崥顖滄暏姒涙顓婚崝銊ф暰
		enable: true,
		// 閸╄櫣顢呭鎯扮箿閺冨爼妫块敍鍫燁嚑缁夋帪绱?
		baseDelay: 0,
		// 闁帒顤冨鎯扮箿閺冨爼妫块敍鍫燁嚑缁夋帪绱氶敍灞剧槨娑擃亞绮嶆禒鏈电贩濞嗏€愁杻閸旂姷娈戝鎯扮箿
		increment: 50,
	},

	// 閸濆秴绨插蹇撶鐏炩偓闁板秶鐤?
	responsive: {
		// 閺傤厾鍋ｉ柊宥囩枂閿涘牆鍎氱槐鐘测偓纭风礆
		breakpoints: {
			// 缁夎濮╃粩顖涙焽閻愮櫢绱扮仦蹇撶鐎硅棄瀹崇亸蹇庣艾768px
			mobile: 768,
			// 楠炶櫕婢樼粩顖涙焽閻愮櫢绱扮仦蹇撶鐎硅棄瀹崇亸蹇庣艾1280px
			tablet: 1280,
			// 濡楀矂娼扮粩顖涙焽閻愮櫢绱扮仦蹇撶鐎硅棄瀹虫径褌绨粵澶夌艾1280px
			desktop: 1280,
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false, // 姒涙顓婚崗鎶芥４濡精濮抽悧瑙勬櫏
	sakuraNum: 21, // 濡精濮抽弫浼村櫤
	limitTimes: -1, // 濡精濮崇搾濠勬櫕闂勬劕鍩楀▎鈩冩殶閿?1娑撶儤妫ら梽鎰儕閻?
	size: {
		min: 0.5, // 濡精濮抽張鈧亸蹇撴槀鐎电鈧秵鏆?
		max: 1.1, // 濡精濮抽張鈧径褍鏄傜€电鈧秵鏆?
	},
	opacity: {
		min: 0.3, // 濡精濮抽張鈧亸蹇庣瑝闁繑妲戞惔?
		max: 0.9, // 濡精濮抽張鈧径褌绗夐柅蹇旀鎼?
	},
	speed: {
		horizontal: {
			min: -1.7, // 濮樻潙閽╃粔璇插З闁喎瀹抽張鈧亸蹇撯偓?
			max: -1.2, // 濮樻潙閽╃粔璇插З闁喎瀹抽張鈧径褍鈧?
		},
		vertical: {
			min: 1.5, // 閸ㄥ倻娲跨粔璇插З闁喎瀹抽張鈧亸蹇撯偓?
			max: 2.2, // 閸ㄥ倻娲跨粔璇插З闁喎瀹抽張鈧径褍鈧?
		},
		rotation: 0.03, // 閺冨娴嗛柅鐔峰
		fadeSpeed: 0.03, // 濞戝牆銇戦柅鐔峰閿涘奔绗夋惔鏂裤亣娴滃孩娓剁亸蹇庣瑝闁繑妲戞惔?
	},
	zIndex: 100, // 鐏炲倻楠囬敍宀€鈥樻穱婵嚺懞鍗炴躬閸氬牓鈧倻娈戠仦鍌滈獓閺勫墽銇?
};

// Pio 閻婢樻繛姗€鍘ょ純?
export const pioConfig: import("./types/config").PioConfig = {
	enable: true, // 閸氼垳鏁ら惇瀣緲婵?
	models: ["/pio/models/pio/model.json"], // 姒涙顓诲Ο鈥崇€风捄顖氱窞
	position: "left", // 濡€崇€锋担宥囩枂
	width: 280, // 姒涙顓荤€硅棄瀹?
	height: 250, // 姒涙顓绘妯哄
	mode: "draggable", // 姒涙顓绘稉鍝勫讲閹锋牗瀚垮Ο鈥崇础
	hiddenOnMobile: true, // 姒涙顓婚崷銊╅崝銊啎婢跺洣绗傞梾鎰
	dialog: {
		welcome: "Welcome to Mizuki Website!", // 濞嗐垼绻嬬拠?
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!",
		], // 鐟欙附鎳滈幓鎰仛
		home: "Click here to go back to homepage!", // 妫ｆ牠銆夐幓鎰仛
		skin: ["Want to see my new outfit?", "The new outfit looks great~"], // 閹广垼顥婇幓鎰仛
		close: "QWQ See you next time~", // 閸忔娊妫撮幓鎰仛
		link: "https://github.com/matsuzaka-yuki/Mizuki", // 閸忓厖绨柧鐐复
	},
};

// 鐎电厧鍤幍鈧張澶愬帳缂冾喚娈戠紒鐔剁閹恒儱褰?
export const widgetConfigs = {
	profile: profileConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
} as const;
