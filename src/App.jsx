import React, { useState } from "react";
import { itineraryData, themeColors } from "./data.js";
import TrainIcon from "@mui/icons-material/Train";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// 活動項目組件
const ActivityItem = ({ activity, theme }) => {
	const colors = themeColors[theme];

	return (
		<div
			className={`${colors.light} ${colors.border} border rounded-lg p-3 hover:shadow-md transition-shadow`}
		>
			<div className="flex items-start gap-3">
				<div
					className={`${colors.primary} text-white px-2 py-1 rounded-md text-sm font-medium min-w-fit`}
				>
					{activity.time}
				</div>
				<div className="flex-1">
					<div className="flex items-center gap-1 mb-1">
						<span className={`${colors.text}`}>
							{activity.type === "transport" && <TrainIcon fontSize="small" />}
							{activity.type === "dining" && (
								<RestaurantIcon fontSize="small" />
							)}
						</span>
						<h4 className={`font-medium ${colors.text}`}>{activity.title}</h4>
					</div>
					{activity.note && (
						<div
							className={`text-sm text-gray-600 ${colors.accent} p-2 rounded mt-2`}
						>
							{activity.note}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

// 日程卡片組件
const DayCard = ({ day }) => {
	const colors = themeColors[day.theme];

	return (
		<div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
			<div className={`${colors.primary} text-white p-4`}>
				<div className="flex items-center gap-3">
					<div className="flex gap-2 items-center">
						<CalendarTodayIcon />
						<h2 className="text-lg font-bold">
							Day {day.id} | {day.date}
							<span className="ml-2">{day.title}</span>
						</h2>
					</div>
				</div>
			</div>
			<div className="p-3">
				<div className="space-y-3">
					{day.activities.map((activity, index) => (
						<ActivityItem
							key={`${day.id}-${index}`}
							activity={activity}
							theme={day.theme}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

// 主要組件
const App = () => {
	const [activeTab, setActiveTab] = useState("schedule");

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			{/* 封面圖片 */}
			<div className="relative h-64 overflow-hidden">
				<img
					src={itineraryData.coverImage}
					alt={itineraryData.title}
					className="w-full h-full object-cover brightness-50"
				/>
				<div className="absolute inset-0 bg-opacity-40 flex items-center justify-center text-center text-white flex-col">
					<h1 className="text-3xl font-bold mb-2">{itineraryData.title}</h1>
					<p className="text-lg opacity-90">晴天之城岡山與瀨戶內海</p>
				</div>
			</div>

			{/* 導航標籤 */}
			<div className="bg-white shadow-md sticky top-0 z-10">
				<div className="flex">
					<button
						onClick={() => setActiveTab("schedule")}
						className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
							activeTab === "schedule"
								? "bg-blue-500 text-white border-b-2 border-blue-500"
								: "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
						}`}
					>
						行程表
					</button>
					<button
						onClick={() => setActiveTab("info")}
						className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
							activeTab === "info"
								? "bg-blue-500 text-white border-b-2 border-blue-500"
								: "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
						}`}
					>
						行程資訊
					</button>
				</div>
			</div>

			{/* 內容區域 */}
			<div className="container mx-auto px-4 py-6">
				{activeTab === "schedule" ? (
					<div className="max-w-4xl mx-auto">
						{itineraryData.days.map((day) => (
							<DayCard key={day.id} day={day} />
						))}
					</div>
				) : (
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-blue-50 p-4 rounded-lg">
							<h3 className="font-bold text-blue-700 mb-2">航班資訊</h3>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>
									• 虎航：6/8 IT241 11:30 - 15:05 → IT715 17:55 - 20:00抵達
									$7740/人
								</li>
								<li>• 訂位代號：Q5GPVS</li>
								<li>
									• 行李須知：一件手提行李(尺寸小於54cm x 38cm x 23cm) +
									一件個人隨身物品小於 10公斤、一件托運行李 20 公斤
								</li>
							</ul>
						</div>
						<div className="bg-green-50 p-4 rounded-lg">
							<h3 className="font-bold text-green-700 mb-2">預算估算</h3>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• 飯店：$5,761/人</li>
								<li>• 機票：$7,740/人</li>
								<li>• 小豆島一日遊：約 ¥9,800/人</li>
								<li>• 交通：約 ¥9,180 /人</li>
								<li>• 景點：約 ¥1,340/人</li>
								<li>• 餐飲：每日 ¥4,500/人</li>
							</ul>
						</div>
						<div className="bg-amber-50 p-4 rounded-lg">
							<h3 className="font-bold text-amber-700 mb-2">天氣概況</h3>
							<ul className="text-sm text-gray-600">
								<li className="border-b border-dashed py-2">
									6/8(日)岡山 / 氣溫18°C-27°C <br />
									多雲時晴 降雨24%
								</li>
								<li className="border-b border-dashed py-2">
									6/9(一)小豆島 / 氣溫19°C-23°C <br />雨 降雨66%
								</li>
								<li className="border-b border-dashed py-2">
									6/10(二)倉敷 / 氣溫20°C-25°C <br /> 雨 降雨60%
								</li>
								<li className="border-b border-dashed py-2">
									6/11(三)高松 / 氣溫22°C-26°C <br /> 多雲偶陣雨 降雨60%
								</li>
								<li className="py-2">
									6/12(四)岡山 / 氣溫20°C-26°C <br /> 雨 降雨60%
								</li>
							</ul>
						</div>
						<div className="bg-cyan-50 p-4 rounded-lg">
							<h3 className="font-bold text-cyan-700 mb-2">入住飯店</h3>
							<div className="text-sm text-gray-600 space-y-1">
								<p>6/8~6/11 岡山三井花園飯店</p>
								<img
									src="https://images.trvl-media.com/lodging/12000000/11900000/11899800/11899755/a8ce24ba.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
									alt="三井花園飯店"
									className="w-full object-cover rounded-md"
								/>
								<p>
									岡山三井花園飯店行走到地鐵只要五分鐘，這一站因為是起點，電車發車數量蠻密集的，要去岡山市區的景點都相當很方便。飯店旁邊就是Aeon
									Mall商場、不遠還有唐吉軻德、Bic
									camera等等，車站內也有美食街、超市、藥妝店等等，是岡山自由行時，生活機能最方便的住宿選擇之一！
								</p>
							</div>
						</div>
						<div className="bg-purple-50 p-4 rounded-lg">
							<h3 className="font-bold text-purple-700 mb-2">行前準備</h3>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>• Visit Japan Web 入境登記</li>
								<li>• 護照、緊急藥品</li>
								<li>• 雨傘</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
