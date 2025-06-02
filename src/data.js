export const itineraryData = {
	title: "岡山五日遊",
	coverImage:
		"https://hk.wamazing.com/media/wp-content/uploads/sites/5/2024/05/kurashiki_pixta_78481820_M-853x569.jpg.webp",
	days: [
		{
			id: 1,
			date: "6/8(日)",
			title: "抵達岡山",
			theme: "arrival",
			activities: [
				{
					time: "15:05",
					title: "入境＋領行李",
					type: "transport",
					note: "",
				},
				{
					time: "16:00",
					title: "機場巴士 → 岡山站",
					type: "transport",
					note: "約 30 分, ¥780 班次 16:05",
					link: "https://www.okayama-airport.org/tw/timetable/taipei",
				},
				{
					time: "16:45",
					title: "抵達岡山站 → 飯店 check-in",
					type: "accommodation",
					note: "",
				},
				{
					time: "18:00",
					title: "用餐",
					type: "dining",
					note: "吾妻壽司、味司野村",
				},
				{
					time: "19:30",
					title: "岡山車站周邊",
					type: "shopping",
					note: "Aeon Mall 、地下街、唐吉軻德",
					hasModal: true,
				},
			],
		},
		{
			id: 2,
			date: "6/9(一)",
			title: "小豆島一日遊",
			theme: "island",
			activities: [
				{
					time: "07:33",
					title: "岡山車站 → 新岡山港",
					type: "transport",
					note: "搭乘新岡山港線約37分鐘 ¥500/人",
				},
				{
					time: "08:40",
					title: "新岡山港 → 土庄港",
					type: "transport",
					note: "航程約 70 分 ¥1,200/人",
				},
				{
					time: "09:50",
					title: "抵達土庄港 → 土莊港觀光中心登記",
					type: "sightseeing",
					note: "搭乘「海島遊觀光巴士」開始行程 ¥9,800/人 (已預定)",
				},
				{
					time: "10:10",
					title: "小豆島觀光巴士",
					type: "sightseeing",
					note: "銚子溪猴子之國、寒霞溪、24隻眼睛電影村、橄欖公園等",
					link: "http://shodoshima-kotu.com/tw/service/entry-313.html",
					hasModal: true,
				},
				{
					time: "16:30",
					title: "返回土庄港",
					type: "transport",
					note: "搭 17:00 或 18:30 船班返程",
				},
				{
					time: "17:00",
					title: "土庄港 → 新岡山港 → 岡山",
					type: "transport",
					note: "同去程",
				},
			],
		},
		{
			id: 3,
			date: "6/10（二）",
			title: "倉敷美觀一日遊",
			theme: "historic",
			activities: [
				{
					time: "08:40",
					title: "JR 岡山站 → 倉敷站",
					type: "transport",
					note: "JR 山陽本線，約 17 分 ¥330 8:41, 9:03, 9:16",
				},
				{
					time: "09:00",
					title: "倉敷站 → 倉敷館觀光導覽所購票",
					type: "sightseeing",
					note: "12分鐘",
				},
				{
					time: "09:30",
					title: "倉敷川游船",
					type: "activity",
					note: "半小時一班 ¥500/人",
				},
				{
					time: "10:00",
					title: "阿智神社遠眺倉敷",
					type: "sightseeing",
					note: "",
				},
				{
					time: "11:30",
					title: "午餐",
					type: "dining",
					note: "",
				},
				{
					time: "12:00",
					title: "美觀地區散策",
					type: "sightseeing",
					note: "店家營業 10:00~17:30 倉敷川老街、星巴克古民家、倉敷咖啡館琥珀女王",
					hasModal: true,
				},
				{
					time: "15:30",
					title: "倉敷站 → 岡山站",
					type: "transport",
					note: "回程列車同上",
				},
			],
		},
		{
			id: 4,
			date: "6/11(三)",
			title: "香川高松一日遊",
			theme: "cultural",
			activities: [
				{
					time: "08:00",
					title: "飯店早餐（岡山）",
					type: "dining",
					note: "06:30~10:00",
				},
				{
					time: "09:05",
					title: "岡山站 → 高松站",
					type: "transport",
					note: "約1小時 Marine Liner 普通座，¥1660/人 08:40, 09:05",
				},
				{
					time: "10:05",
					title: "玉藻公園（高松城跡）",
					type: "sightseeing",
					note: "約4分鐘 ¥200/人",
				},
				{
					time: "10:40",
					title: "Symbol Tower 展望台 29F,30F",
					type: "sightseeing",
					note: "開放時間 10:00~11:00",
				},
				{
					time: "11:00",
					title: "栗林公園",
					type: "sightseeing",
					note: "",
				},
				{
					time: "11:30",
					title: "讚岐烏龍麵上原屋本店",
					type: "dining",
					note: "9:30~14:30 營業時間",
				},
				{
					time: "16:00",
					title: "高松站 → 岡山站",
					type: "transport",
					note: "同去程 16:10, 16:40, 17:10",
				},
			],
		},
		{
			id: 5,
			date: "6/12(四)",
			title: "岡山半日遊 + 回台灣",
			theme: "departure",
			activities: [
				{
					time: "09:00",
					title: "寄放行李",
					type: "accommodation",
					note: "",
				},
				{
					time: "09:10",
					title: "岡山站前 → 城下",
					type: "transport",
					note: "車程 4 分, 車資 ¥120/人",
				},
				{
					time: "09:30",
					title: "岡山城 + 後樂園 散策",
					type: "sightseeing",
					note: "約 1.5～2 小時",
					hasModal: true,
				},
				{
					time: "11:00",
					title: "城下 → 岡山站前",
					type: "transport",
					note: "同去程",
				},
				{
					time: "11:30",
					title: "午餐",
					type: "dining",
					note: "",
				},
				{
					time: "14:00",
					title: "取行李 & 前往機場巴士乘車點",
					type: "transport",
					note: "排巴士",
				},
				{
					time: "15:00",
					title: "岡山站西口21號乘車處 - 岡山機場",
					type: "transport",
					note: "15:30 30分鐘直達",
				},
				{
					time: "15:40",
					title: "機場報到、安檢",
					type: "transport",
					note: "購物",
				},
				{
					time: "17:55",
					title: "✈️ 岡山機場起飛",
					type: "transport",
					note: "桃園時間 20:00 抵達",
				},
			],
		},
	],
};

// 主題顏色配置
export const themeColors = {
	arrival: {
		primary: "bg-gradient-to-r from-sky-500 to-sky-600",
		light: "bg-sky-50",
		border: "border-sky-200",
		text: "text-sky-700",
		icon: "text-sky-500",
		accent: "bg-sky-100",
	},
	island: {
		primary: "bg-gradient-to-r from-teal-500 to-cyan-600",
		light: "bg-teal-50",
		border: "border-teal-200",
		text: "text-teal-700",
		icon: "text-teal-500",
		accent: "bg-teal-100",
	},
	historic: {
		primary: "bg-gradient-to-r from-orange-400 to-orange-600",
		light: "bg-amber-50",
		border: "border-amber-200",
		text: "text-amber-700",
		icon: "text-amber-500",
		accent: "bg-amber-100",
	},
	cultural: {
		primary: "bg-gradient-to-r from-purple-500 to-purple-600",
		light: "bg-purple-50",
		border: "border-purple-200",
		text: "text-purple-700",
		icon: "text-purple-500",
		accent: "bg-purple-100",
	},
	departure: {
		primary: "bg-gradient-to-r from-rose-500 to-pink-600",
		light: "bg-rose-50",
		border: "border-rose-200",
		text: "text-rose-700",
		icon: "text-rose-500",
		accent: "bg-rose-100",
	},
};

// 景點詳細資料
export const attractionDetails = {
	岡山車站周邊: {
		title: "岡山車站周邊",
		subtitle: "城景、美園、美食、購物一次滿足！",
		image: "https://d1stecqjat1lh7.cloudfront.net/2018/03/momotarotop1.jpg",
		description:
			"車站周邊不僅交通便利，還匯聚了歷史名城、絕美日式庭園與琳瑯滿目的購物美食，無論是拍照、散步、吃喝血拼都能一站搞定！",
		highlights: [
			{
				name: "岡山車站內",
				description: "YOURS 岡山站店",
				image: "",
			},
			{
				name: "AEON MALL 岡山",
				description:
					"👕 衣物配件：URBAN RESEARCH、UNIQLO、靴下屋、無印良品、ABC-MART 🎁 雜貨伴手禮：HAREMACHI、HANDS、3COINS 🛒 大型超市：AEON STYLE，食品、飲料、零食超齊全！",
				image:
					"https://d1grca2t3zpuug.cloudfront.net/2024/11/6736d6a2357ac-870x500.webp",
			},
			{
				name: " 唐吉訶德",
				description: "24小時開放藥妝店",
				image: "https://mimihan.tw/wp-content/uploads/20190809120027_34.jpg",
			},
			{
				name: " Big CAMERA",
				description: "電器家電大賣場",
				image: "",
			},
		],
		tips: ["可以買伴手禮、紀念品"],
	},
	小豆島觀光巴士: {
		title: "小豆島一日遊",
		subtitle: "瀨戶內海上的橄欖之島",
		image:
			"https://shikoku-tourism.com/image/rendering/attraction_image/58526/trim.900/3/2?v=ce7e5b196717b6f776a22cce56e8c10038d55720",
		description:
			"小豆島是瀨戶內海第二大島，以橄欖種植聞名，擁有美麗的自然景觀和豐富的文化遺產。",
		highlights: [
			{
				name: "寒霞溪",
				description: "日本三大美麗溪谷之一，搭乘纜車欣賞壯麗的峽谷風光",
				image:
					"http://shodoshima-kotu.com/media/005/202202/mode3_w400-c499af7d198077b5f13d089009317e23b2dd18c675c28380c2554705188a074d.jpg",
			},
			{
				name: "橄欖公園",
				description: "地中海風情的公園，可體驗橄欖採摘和品嚐橄欖霜淇淋",
				image:
					"http://shodoshima-kotu.com/media/005/202202/mode3_w820-6a708de76e6c4fee1bb72af325c8fc0f19c583637dd4b0abaf2e8882f8187873.jpg",
			},
			{
				name: "24隻眼睛電影村",
				description: "重現昭和時代的懷舊場景，感受日本電影的魅力",
				image:
					"http://shodoshima-kotu.com/media/005/202202/mode3_w400-d17c633d418e542d6353b3c4c22e95389cc4db41d2f3a74801b4bbd660855804.jpg",
			},
			{
				name: "銚子溪猴子之國",
				description: "觀賞野生猴群的自然棲息地，體驗與動物的親密接觸",
				image:
					"http://shodoshima-kotu.com/media/005/202307/mode3_w400-90895abf3bde7a78f8f6dc18f0aea5c6807b7eb141182518fa64772c4d1fa7e0.jpg",
			},
		],
		tips: [],
	},
	美觀地區散策: {
		title: "倉敷美觀地區",
		subtitle: "江戶時代的歷史風情",
		image:
			"https://tw.wamazing.com/media/wp-content/uploads/sites/4/2024/05/kurashiki_pixta_78481820_M-853x569.jpg.webp",
		description:
			"倉敷美觀地區保存了江戶時代的傳統建築，白壁土藏群與柳樹垂蔭的倉敷川形成如詩如畫的景色。",
		highlights: [
			{
				name: "倉敷川遊船",
				description: "搭乘小舟緩緩遊覽歷史悠久的運河，從水上欣賞兩岸美景",
				image:
					"https://joshuaworldtravel.com/wp-content/uploads/2023/12/4-Copy.jpg",
			},
			{
				name: "星巴克古民家店",
				description: "全球獨一無二的町家建築星巴克，傳統與現代的完美融合",
				image:
					"https://wow-japan.com/wp-content/uploads/2023/03/PXL_20220926_092032731-Copy.jpg",
			},
			{
				name: "倉敷民藝館",
				description: "展示當地傳統工藝品，了解倉敷的手工藝文化",
				image:
					"https://storage.googleapis.com/ikidane/upload/spot_gallery_547_1_8a4c64109d/spot_gallery_547_1_8a4c64109d.jpg",
			},
		],
		tips: [],
	},
	"岡山城 + 後樂園 散策": {
		title: "岡山城與後樂園",
		subtitle: "日本三大名園與漆黑名城",
		image: "https://www.into-you.jp/wp-content/uploads/2019/12/okayama.jpg",
		description:
			"後樂園為日本三大名園之一，與漆黑的岡山城相映成趣，展現了江戶時代大名庭園的精緻美學。",
		highlights: [
			{
				name: "後樂園",
				description: "池泉回遊式庭園，四季景色各異，春櫻秋楓格外迷人",
				image:
					"https://place.matcha-jp.com/resize/1280x2000/2022/11/24-14-49-20-f7b0b009d4a81f8d17ec44bb65321a9d.webp?w=656",
			},
			{
				name: "岡山城（烏城）",
				description: "因外觀漆黑而得名烏城，登上天守閣可俯瞰市區全景",
				image:
					"https://www.okayama-kanko.jp/image/rendering/attraction_image/2343/keep/1200?v=2c19de40411b36fb7ff6a0c313ad1c0e180a915c",
			},
		],
		tips: [],
	},
};
