import React, { useState } from "react";
import { itineraryData, themeColors, attractionDetails } from "./data.js";
import TrainIcon from "@mui/icons-material/Train";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import locationImg from "./images/location.png";

// 景點詳情 Modal 組件
const AttractionModal = ({ open, onClose, attraction }) => {
	if (!attraction) return null;

	return (
		<Modal open={open} onClose={onClose}>
			<div className="flex flex-col h-full bg-white">
				{/* Header */}
				<div className="relative  gradient-mask">
					<img
						src={attraction.image}
						alt={attraction.title}
						className="w-full h-64 object-cover"
					/>
					<div className="absolute inset-0 bg-opacity-40 flex items-end z-10">
						<div className="p-6 text-white">
							<h2 className="text-3xl font-bold mb-2">{attraction.title}</h2>
							<p className="text-lg opacity-90">{attraction.subtitle}</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all z-10"
					>
						<CloseIcon />
					</button>
				</div>

				{/* Content */}
				<div className="flex-1 overflow-y-auto p-6">
					<p className="text-gray-700 text-lg mb-6 leading-relaxed">
						{attraction.description}
					</p>

					{/* Highlights */}
					<div className="grid md:grid-cols-2 gap-4 mb-6">
						{attraction.highlights.map((highlight, index) => (
							<div
								key={index}
								className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
							>
								{highlight.image && (
									<img
										src={highlight.image}
										alt={highlight.name}
										className="w-full h-40 object-cover"
									/>
								)}
								<div className="p-4">
									<h4 className="font-bold text-lg mb-2 text-gray-800">
										{highlight.name}
									</h4>
									<p className="text-gray-600">{highlight.description}</p>
								</div>
							</div>
						))}
					</div>
					{attraction.tips.length > 0 && (
						<>
							<h3 className="text-2xl font-bold mb-4 text-gray-800">備註</h3>
							<div className="bg-yellow-50 rounded-lg p-4">
								<ul className="space-y-2">
									{attraction.tips.map((tip, index) => (
										<li key={index} className="flex items-start gap-2">
											<span className="text-yellow-500 mt-1">💡</span>
											<span className="text-gray-700">{tip}</span>
										</li>
									))}
								</ul>
							</div>
						</>
					)}
				</div>
			</div>
		</Modal>
	);
};

// 活動項目組件
const ActivityItem = ({ activity, theme }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const colors = themeColors[theme];
	const attractionData = attractionDetails[activity.title];

	return (
		<>
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
								{activity.type === "transport" && (
									<TrainIcon fontSize="small" />
								)}
								{activity.type === "dining" && (
									<RestaurantIcon fontSize="small" />
								)}
							</span>
							<h4 className={`font-medium ${colors.text}`}>{activity.title}</h4>
							<div className="ml-auto gap-1 flex whitespace-nowrap">
								{activity.hasModal && attractionData && (
									<button
										onClick={() => setModalOpen(true)}
										className={`${colors.primary} text-white px-2 py-1 rounded-full text-xs flex items-center gap-1`}
									>
										<CameraAltIcon fontSize="small" />
										介紹
									</button>
								)}
								{activity.link && (
									<a
										target="_blank"
										href={activity.link}
										className={`${colors.primary} text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 ml-auto whitespace-nowrap`}
									>
										<InsertLinkIcon fontSize="small" /> 連結
									</a>
								)}
							</div>
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
			{activity.hasModal && attractionData && (
				<AttractionModal
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					attraction={attractionData}
				/>
			)}
		</>
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
								: "text-gray-600"
						}`}
					>
						行程表
					</button>
					<button
						onClick={() => setActiveTab("location")}
						className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
							activeTab === "location"
								? "bg-blue-500 text-white border-b-2 border-blue-500"
								: "text-gray-600"
						}`}
					>
						地理位置
					</button>
					<button
						onClick={() => setActiveTab("info")}
						className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
							activeTab === "info"
								? "bg-blue-500 text-white border-b-2 border-blue-500"
								: "text-gray-600"
						}`}
					>
						行程資訊
					</button>
				</div>
			</div>

			{/* 內容區域 */}
			<div className="container mx-auto px-4 py-6">
				{activeTab === "schedule" && (
					<div className="max-w-4xl mx-auto">
						{itineraryData.days.map((day) => (
							<DayCard key={day.id} day={day} />
						))}
					</div>
				)}
				{activeTab === "info" && (
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
								<li className="border-b border-dashed py-2 border-gray-300">
									6/8(日)岡山 / 氣溫18°C-27°C <br />
									多雲時晴 降雨24%
								</li>
								<li className="border-b border-dashed py-2 border-gray-300">
									6/9(一)小豆島 / 氣溫19°C-23°C <br />雨 降雨66%
								</li>
								<li className="border-b border-dashed py-2 border-gray-300">
									6/10(二)倉敷 / 氣溫20°C-25°C <br /> 雨 降雨60%
								</li>
								<li className="border-b border-dashed py-2 border-gray-300">
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
									className="w-full object-cover rounded-md max-h-64"
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
				{activeTab === "location" && (
					<div>
						<h1 className="text-xl font-bold mb-4">景點地圖</h1>
						<img src={locationImg} alt="地理位置" className="rounded-3xl" />
						<div className="mt-4 text-gray-700 flex flex-col gap-3">
							<div className="bg-white p-2 rounded-md">
								<p className="text-lg mb-2 font-bold">✨岡山</p>
								<p>
									岡山市是位於日本岡山縣南部的城市,是日本著名的桃太郎傳說的故事舞台,亦是眾多高級水果的產地。岡山自江戶時代是岡山藩池田氏的城下町,市中心有日本三名園之一的後樂園以及岡山城等景點。
								</p>
							</div>
							<div className="bg-white p-2 rounded-md">
								<p className="text-lg mb-2 font-bold">✨倉敷</p>
								<p>
									倉敷是位於日本岡山縣的一座具有豐富織布業歷史的小城,以其美觀地區的江戶時代街區保存完好而聞名。這個城市擁有古老的倉庫和風景如畫的運河線,運河旁布滿了柳樹,並且由美麗的黑瓦白牆建築環繞。
								</p>
							</div>
							<div className="bg-white p-2 rounded-md">
								<p className="text-lg mb-2 font-bold">✨小豆島</p>
								<p>
									小豆島是位於日本內海的一座風景優美的島嶼。以豐富的橄欖樹和地中海風格的建築聞名,並被稱為日本的橄欖島。此外,島上還有多個風景區和溫泉,是度假勝地。
								</p>
							</div>
							<div className="bg-white p-2 rounded-md">
								<p className="text-lg mb-2 font-bold">✨高松</p>
								<p>
									高松市是前往四國的玄關之一。這裡擁有：美麗的港灣景色、世界級藝術島「直島」的門戶、超人氣的讚岐烏龍麵發源地！
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
