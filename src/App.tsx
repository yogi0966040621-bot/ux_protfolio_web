import React, { useState } from "react";
import {
  Search,
  FileText,
  Map,
  Users,
  Frown,
  Smile,
  ArrowRight,
  Target,
  AlertCircle,
  Lightbulb,
  MessageCircle,
  Brain,
  Activity,
  Heart,
  ChevronRight,
  Monitor,
  LayoutTemplate,
  Palette,
  Camera,
  BookOpen,
  MapPin,
  Sparkles,
  Key,
  PieChart,
} from "lucide-react";

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState("lifeport");
  const [lifeportPersona, setLifeportPersona] = useState("ethan"); // 'ethan' or 'zhiwen'

  return (
    // 點狀網格背景
    <div
      className="min-h-screen font-sans text-slate-700 pb-24 transition-colors duration-500"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* 頂部導覽列 / 專案切換 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-slate-900">
            <span className="text-slate-400 font-medium mr-2">曾羽薇</span>
            UX.PORTFOLIO
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveProject("lifeport")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeProject === "lifeport"
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              LIFEPORT 職涯擺渡人
            </button>
            <button
              onClick={() => setActiveProject("planz")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeProject === "planz"
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              PlanZ Go! 普嵐茲計畫
            </button>
          </div>
        </div>
      </nav>

      {/* 主要內容區塊 */}
      <main className="max-w-6xl mx-auto px-6 mt-16 space-y-32">
        {/* Hero 封面區塊 */}
        <section className="pt-12 animate-in fade-in duration-500">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-800 mb-6">
            {activeProject === "lifeport"
              ? "lifeport 職涯擺渡人"
              : "planz go! 普嵐茲計畫"}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            {activeProject === "lifeport"
              ? "一個結合 AI 助理與經驗交流的職涯探索平台，專為對未來迷茫的大學生與轉職者設計，透過有引導的深度對話連接業界前輩。"
              : "一款結合 AI 植物辨識與 2D 精靈收集的 App。針對「好奇但懶惰」的通勤族，透過「拍下即送精靈」的極簡機制，將單調的日常散步轉化為充滿驚喜的圖鑑收集之旅。"}
          </p>
        </section>

        {/* 1. 研究方法 (The journey begins with research) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                發揮影響力
                <br />
                <span className="text-slate-700">的旅程，</span>
                <br />
                始於扎實的
                <br />
                <span className="text-slate-400">研究</span>
              </h2>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeProject === "lifeport" ? (
                <>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <Search className="w-5 h-5" />
                      <h3 className="font-bold text-lg">競品分析</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      分析了 104
                      前輩諮詢與清大明燈計畫，找出市場在「客製化溫度」與「大眾市場」間的痛點與切入機會。
                    </p>
                  </div>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <FileText className="w-5 h-5" />
                      <h3 className="font-bold text-lg">使用者訪談</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      針對學生與跨領域轉職者進行深訪，挖掘雙方在「求助」與「隱私」時的真實焦慮與內在驅動力。
                    </p>
                  </div>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <Map className="w-5 h-5" />
                      <h3 className="font-bold text-lg">使用者流程對應</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      為「諮詢者 (學生/轉職)」與「分享者
                      (社會人士)」雙端用戶繪製核心任務流程與接觸點，確保生態系平衡。
                    </p>
                  </div>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <Users className="w-5 h-5" />
                      <h3 className="font-bold text-lg">人物誌建立</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      根據收集到的訪談行為、動機與痛點，定義出具備同理心地圖的核心使用者輪廓原型。
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <Search className="w-5 h-5" />
                      <h3 className="font-bold text-lg">雙維度競品分析</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      交叉分析「植物辨識」與「皮克敏等收集養成」競品，找出「工具太枯燥」與「遊戲太競爭」間的市場斷層。
                    </p>
                  </div>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <FileText className="w-5 h-5" />
                      <h3 className="font-bold text-lg">量化問卷調查</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      回收 40 份有效樣本（主要為 15-22
                      歲），證實多數人對植物「好奇但懶得查」，且極度接受「拍下送精靈」的誘因。
                    </p>
                  </div>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <Map className="w-5 h-5" />
                      <h3 className="font-bold text-lg">核心行為迴圈</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      梳理從「探索地圖(創造動機)」，到「觀測相機(實地行動)」，再到「普嵐茲圖鑑(留存動力)」的完整使用者旅程。
                    </p>
                  </div>
                  <div className="bg-[#f0f6fc] p-6 rounded-2xl border border-[#dbeafe] shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-[#0369a1]">
                      <Users className="w-5 h-5" />
                      <h3 className="font-bold text-lg">人物誌建立</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      基於問卷數據，收斂出「好奇但懶惰的通勤族」與「熱愛收集的社交探索者」兩大核心使用輪廓。
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* 2. 洞察與解決方案 (Insights that guide the next step) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                指引下一步
                <br />
                <span className="text-slate-700">的關鍵</span>
                <br />
                洞察
              </h2>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center mb-8">
                <h3 className="text-2xl font-bold text-rose-500 flex items-center gap-2">
                  痛點 <Frown className="w-6 h-6" />
                </h3>
                <div className="w-8"></div>
                <h3 className="text-2xl font-bold text-emerald-500 flex items-center gap-2">
                  解決方案 <Smile className="w-6 h-6" />
                </h3>
              </div>

              <div className="space-y-6">
                {activeProject === "lifeport" ? (
                  <>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start relative group">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-semibold text-rose-700 mb-2">
                          資訊焦慮與提問障礙
                        </h4>
                        <p className="text-sm text-slate-600">
                          諮詢者不知道怎麼發問，難以具體描述自己的狀態，且害怕被覺得無知。
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-8 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">
                          AI 提問與分析助理
                        </h4>
                        <p className="text-sm text-slate-600">
                          由 AI
                          量化分析能力並代擬提問清單草稿，大幅降低開口門檻與心理壓力。
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start relative group">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-semibold text-rose-700 mb-2">
                          轉職隱私與社交包袱
                        </h4>
                        <p className="text-sm text-slate-600">
                          跨領域轉職者不敢在 LinkedIn
                          發問，深怕被現任主管或同事發現騎驢找馬。
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-8 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">
                          雙向雙盲的保護機制
                        </h4>
                        <p className="text-sm text-slate-600">
                          建立完善的匿名機制，並可控管履歷的曝光程度，建立有安全感的交流環境。
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start relative group">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-semibold text-rose-700 mb-2">
                          缺乏長期分享誘因
                        </h4>
                        <p className="text-sm text-slate-600">
                          傳統的集點或物質兌換對有經驗的社會人士毫無吸引力，難以維持平台留存率。
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-8 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">
                          互惠的人脈生態圈
                        </h4>
                        <p className="text-sm text-slate-600">
                          建立導師專區與評價系統，提供「傳承成就感」與實質的「潛力新星招募
                          / 同業交流」價值。
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start relative group">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-semibold text-rose-700 mb-2">
                          植物辨識軟體過於無趣
                        </h4>
                        <p className="text-sm text-slate-600">
                          問卷顯示，多數人覺得現有 App
                          查完就沒事了，缺乏互動回饋，導致留存率極低。
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-8 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">
                          賦予情感的遊戲化回饋
                        </h4>
                        <p className="text-sm text-slate-600">
                          只要拍下植物就能瞬間解鎖「可愛的 2D
                          花語精靈」，用視覺收集樂趣取代生硬科普。
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start relative group">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-semibold text-rose-700 mb-2">
                          好奇但懶惰的心理
                        </h4>
                        <p className="text-sm text-slate-600">
                          路上看到奇怪植物「想知道名字但懶得查」，如果操作步驟太多就會直接放棄。
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-8 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">
                          極簡的「拍完即走」流
                        </h4>
                        <p className="text-sm text-slate-600">
                          移除繁瑣的相簿上傳，打開相機一鍵掃描即可獲得精靈，完美契合短暫的注意力。
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start relative group">
                      <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-semibold text-rose-700 mb-2">
                          純虛擬收集感到疲勞
                        </h4>
                        <p className="text-sm text-slate-600">
                          過度依賴走路步數的遊戲容易有作業感，且無法與現實環境產生「我真的來過」的連結。
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-8 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">
                          地點限定與實境 AR 結合
                        </h4>
                        <p className="text-sm text-slate-600">
                          藉由「區域限定飾品」概念，並強制現場拍攝，讓收集品成為真實踏足大自然的足跡。
                        </p>
                      </div>
                    </div>

                    {/* 普嵐茲計畫專屬：問卷數據圖表 Highlight */}
                    <div className="mt-12 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md animate-in fade-in duration-500">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center">
                          <PieChart className="w-5 h-5 text-sky-600" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-800">
                          關鍵問卷洞察：高意願的遊戲化驅動力
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500 mb-8 font-medium border-l-2 border-sky-200 pl-4 py-1">
                        「如果有一款 App
                        只要『拍下它』就能瞬間告訴你名字，並送你一隻對應的植物精靈，你願意停下腳步操作嗎？」
                      </p>

                      {/* Stacked Bar Chart */}
                      <div className="w-full h-4 flex rounded-full overflow-hidden mb-8 bg-slate-100 shadow-inner">
                        <div
                          style={{ width: "45.2%" }}
                          className="bg-rose-500 hover:bg-rose-600 transition-colors"
                        ></div>
                        <div
                          style={{ width: "52.4%" }}
                          className="bg-sky-500 hover:bg-sky-600 transition-colors"
                        ></div>
                        <div
                          style={{ width: "2.4%" }}
                          className="bg-amber-400 hover:bg-amber-500 transition-colors"
                        ></div>
                      </div>

                      {/* Chart Legend & Breakdown */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-4xl font-bold text-rose-500">
                              45.2
                            </span>
                            <span className="text-sm font-bold text-rose-500">
                              %
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-xs font-bold text-slate-500 mt-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500 shrink-0 mt-0.5 shadow-sm"></div>
                            願意，這聽起來很有趣
                          </div>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-4xl font-bold text-sky-500">
                              52.4
                            </span>
                            <span className="text-sm font-bold text-sky-500">
                              %
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-xs font-bold text-slate-500 mt-2">
                            <div className="w-3 h-3 rounded-full bg-sky-500 shrink-0 mt-0.5 shadow-sm"></div>
                            看心情，如果不趕時間的話願意
                          </div>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-4xl font-bold text-amber-400">
                              2.4
                            </span>
                            <span className="text-sm font-bold text-amber-400">
                              %
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-xs font-bold text-slate-400 mt-2">
                            <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0 mt-0.5 shadow-sm"></div>
                            不願意，太麻煩了
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-5 border-t border-slate-100">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong className="text-slate-800">結論：</strong>{" "}
                          總計高達{" "}
                          <strong className="text-sky-600 text-base">
                            97.6%
                          </strong>{" "}
                          的受訪者對「拍照送精靈」的機制抱持正面意願。這份數據強力支持了我們將「植物百科」結合「輕度收集養成」的設計決策，能有效克服工具型
                          App 留存率低的問題。
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. 人物誌 (Persona Section) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                深入了解
                <br />
                <span className="text-slate-700">使用者的</span>
                <br />
                輪廓
              </h2>
            </div>

            <div className="md:w-2/3">
              {/* Persona Switcher for LIFEPORT */}
              {activeProject === "lifeport" && (
                <div className="flex gap-2 mb-6 bg-slate-200/50 p-1 rounded-full w-fit">
                  <button
                    onClick={() => setLifeportPersona("ethan")}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      lifeportPersona === "ethan"
                        ? "bg-white text-[#0369a1] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    學生代表：林宥辰
                  </button>
                  <button
                    onClick={() => setLifeportPersona("zhiwen")}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      lifeportPersona === "zhiwen"
                        ? "bg-white text-[#0369a1] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    分享者代表：林志雯
                  </button>
                </div>
              )}

              <div
                className="backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm border border-white/60"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.34)" }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10 pb-10 border-b border-slate-200/70">
                  <div className="w-32 h-32 rounded-3xl bg-slate-200 overflow-hidden flex-shrink-0 grayscale">
                    {/* Persona 圖片維持使用 Unsplash 示意圖 */}
                    <img
                      src={
                        activeProject === "lifeport"
                          ? lifeportPersona === "ethan"
                            ? "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=400"
                            : "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
                          : "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400"
                      }
                      alt="Persona"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {activeProject === "lifeport"
                        ? lifeportPersona === "ethan"
                          ? "林宥辰 (Ethan Lin)"
                          : "林志雯 (Zhi-Wen Lin)"
                        : "小雨 (Xiaoyu)"}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 mb-4">
                      {activeProject === "lifeport"
                        ? lifeportPersona === "ethan"
                          ? "21 歲 • 大學三年級學生 • 台灣"
                          : "45 歲 • 保險業資深處經理 (Giver) • 台灣"
                        : "19 歲 • 大學生 (通勤族) • 台灣"}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {activeProject === "lifeport"
                        ? lifeportPersona === "ethan"
                          ? "宥辰是一位正在探索未來方向的大學生。他渴望學習，但常覺得網路上資訊太分散零碎。他重視客觀的能力分析，並希望能有一個安全的環境，在不被批評「問題太笨」的情況下，向業界前輩請教真實的職場經驗。"
                          : "志雯姐在保險業工作超過 20 年。看到許多年輕人對未來茫然。她樂於傾聽、分享經驗，認為傳承是一種社會責任。但現實上，她常覺得沒有管道能與諮詢者直接互動；即使在學校演講，也很難持續連結。她願意花時間交流，但希望諮詢者有基本準備、尊重她的時間與經驗。"
                        : "小雨每天花很多時間通勤上下學。在路上看到漂亮或奇怪的花草，她會有短暫的好奇心（大約10秒），但覺得特別打開 Google 查資料太麻煩。她曾經下載過植物辨識軟體，但用幾次就沒再開過了。她希望在單調的通勤路上，能有一些不花腦力、卻能獲得微小成就感的樂趣。"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* 目標 */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-3 text-lg">
                      <Target className="w-5 h-5" /> 目標 (Goals)
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              在選課、考研或找實習前獲得明確的職涯方向。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              了解產業最真實、未經包裝的運作面貌。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              安全且無壓力地與業界前輩進行一對一交流。
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              發揮社會影響力，將 20 年的職場經驗傳承給下一代。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              突破單次演講的限制，建立長期、有意義的跨世代連結。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              將寶貴的時間有效運用在「真正有心學習」的年輕人身上。
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            在枯燥的通勤路上獲得微小的驚喜與樂趣。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            不用花大腦閱讀，就能知道路邊植物的名字。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            收集各種可愛的虛擬角色，滿足輕度收集癖。
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* 痛點 */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-3 text-lg">
                      <AlertCircle className="w-5 h-5" /> 痛點 (Pain Points)
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              網路上資訊零碎主觀，難以分辨相似職業的差異。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              不知道如何組織問題，且缺乏業界人脈資源。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              面對資深的陌生社會人士時有高度的社交焦慮。
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              缺乏一個能直接與年輕諮詢者穩定互動的專屬管道。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              去學校演講結束後，學生就散了，很難保持持續性的互動。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              最怕遇到毫無準備、只會問「伸手牌」問題的人，覺得浪費時間。
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            專業植物辨識軟體像字典一樣冰冷，且常有廣告干擾。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            好奇心非常短暫，如果操作步驟太多就會直接放棄。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            玩一般走路遊戲，常覺得一直被高等玩家搶資源很有壓力。
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* 需求與動機 */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-3 text-lg">
                      <Lightbulb className="w-5 h-5" /> 需求與動機 (Needs)
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              需要具備量化分數的 AI 職涯能力評估。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              需要協助草擬與潤飾面談提問清單的輔助工具。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              在建立信任前，能保護隱私的雙重匿名機制。
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              一個能過濾諮詢者素質、確保對方「有備而來」的預約機制。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              讓雙方的時間與經驗都能獲得尊重的專業交流環境。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              能看見自己幫助他人後產生的實質影響力與正向回饋。
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            只要「拍一下」就能立刻拿到獎勵的極簡操作。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            討喜的角色設計與具有區域限定感的圖鑑機制。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            可以和朋友分享「我收集到這隻精靈」的社交話題。
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* 真實引言 */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-3 text-lg">
                      <MessageCircle className="w-5 h-5" /> 真實引言 (Quotes)
                    </h4>
                    <div className="space-y-3">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <p className="text-sm text-slate-600 italic border-l-2 border-[#0369a1] pl-3 py-1">
                              「我想找人聊聊，但又怕自己問題太初階或太無知，會浪費對方的時間。」
                            </p>
                            <p className="text-sm text-slate-600 italic border-l-2 border-[#0369a1] pl-3 py-1">
                              「如果 AI
                              能先客觀量化地分析我擅長什麼，我會比較有自信去面對前輩。」
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-slate-600 italic border-l-2 border-[#0369a1] pl-3 py-1">
                              「傳承是一種社會責任，但我希望來找我的人，至少要先做點功課。」
                            </p>
                            <p className="text-sm text-slate-600 italic border-l-2 border-[#0369a1] pl-3 py-1">
                              「去學校演講完學生就散了，其實我很希望能有個地方讓我們繼續交流。」
                            </p>
                          </>
                        )
                      ) : (
                        <>
                          <p className="text-sm text-slate-600 italic border-l-2 border-[#0369a1] pl-3 py-1">
                            「我常會想知道它的名字，但通常懶得去 Google 查。」
                          </p>
                          <p className="text-sm text-slate-600 italic border-l-2 border-[#0369a1] pl-3 py-1">
                            「使用植物軟體查完，滿足了當下的好奇心，就沒有再打開的理由。」
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 同理心地圖 (Empathy Map) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                走進使用者的
                <br />
                <span className="text-slate-700">內心世界</span>
              </h2>
            </div>

            <div className="md:w-2/3">
              {/* Empathy Map Switcher for LIFEPORT */}
              {activeProject === "lifeport" && (
                <div className="flex gap-2 mb-6 bg-slate-200/50 p-1 rounded-full w-fit">
                  <button
                    onClick={() => setLifeportPersona("ethan")}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      lifeportPersona === "ethan"
                        ? "bg-white text-[#0369a1] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    學生代表：林宥辰
                  </button>
                  <button
                    onClick={() => setLifeportPersona("zhiwen")}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                      lifeportPersona === "zhiwen"
                        ? "bg-white text-[#0369a1] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    分享者代表：林志雯
                  </button>
                </div>
              )}

              {/* 確保頭像與方塊獨立且相對定位的容器 */}
              <div className="relative w-full">
                {/* 中央頭像 */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl p-1 shadow-lg z-10">
                  <img
                    src={
                      activeProject === "lifeport"
                        ? lifeportPersona === "ethan"
                          ? "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200&h=200"
                          : "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
                        : "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200"
                    }
                    alt="Persona"
                    className="w-full h-full object-cover rounded-xl grayscale transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Says */}
                  <div className="bg-[#f0f6fc] p-8 rounded-2xl rounded-tr-[3rem] border border-[#dbeafe]">
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-4 text-lg">
                      <MessageCircle className="w-5 h-5" /> says
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「我想知道這個職業真實的薪水和優缺點。」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「不知道要聊什麼，怕問出很笨的問題被覺得煩。」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「高薪工作跟自己的興趣到底要怎麼選？」
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「我願意傾聽，也樂於分享我這 20 年來走過的彎路。」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「現在的年輕人很聰明，但有時候就是少了一個可以指引方向的人。」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「有準備的問題，才能有品質的對話。」
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            「那些植物百科 App 過於無趣。」
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            「我只是好奇一下，不想看一堆長篇大論。」
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            「如果收集東西太麻煩，我很快就會放棄。」
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Thinks */}
                  <div className="bg-[#f0f6fc] p-8 rounded-2xl rounded-tl-[3rem] border border-[#dbeafe]">
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-4 text-lg">
                      <Brain className="w-5 h-5" /> thinks
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「現在學的科系技術，未來會不會被 AI 淘汰？」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「如果有個客觀標準，量化告訴我適合什麼就好了。」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「希望系統能保護隱私，聊天時對方只知道我的暱稱。」
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「我的經驗真的能切中現在年輕人的痛點嗎？」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「希望這個平台能幫我篩選掉那些只是來『問問看』、沒誠意的人。」
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              「傳承經驗其實也是一種自我價值的實現與延續。」
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            「如果通勤散步能順便收集可愛的東西就好了。」
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            「玩皮克敏找飾品很有趣，但我不想一直盯著手機看。」
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            「這株植物長得好奇怪，它變成精靈會長什麼樣子？」
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Does */}
                  <div className="bg-[#f0f6fc] p-8 rounded-2xl rounded-br-[3rem] border border-[#dbeafe]">
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-4 text-lg">
                      <Activity className="w-5 h-5" /> does
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span> 透過
                              Dcard、PTT 爬文或看 YouTube 了解職業。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              只能選擇性地向身邊學長姐或家人詢問經驗。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              每學期盲目去修外系的課來尋找可能的方向。
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              偶爾接受大學或社團的邀請，回去擔任職涯講座的講者。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              在工作上會特別關照，並花時間一對一培訓部門內的新人。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              會婉拒那些看起來連基本資料都沒查，就跑來私訊發問的陌生訊息。
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            每天循著固定的路線通勤上下學。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            看到特別的花草會稍微看一眼，但通常不會深究。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            手機裡裝了休閒收集遊戲，但熱度通常只能維持一個月。
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Feels */}
                  <div className="bg-[#f0f6fc] p-8 rounded-2xl rounded-bl-[3rem] border border-[#dbeafe]">
                    <h4 className="flex items-center gap-2 font-bold text-[#0369a1] mb-4 text-lg">
                      <Heart className="w-5 h-5" /> feels
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {activeProject === "lifeport" ? (
                        lifeportPersona === "ethan" ? (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              對於未來的趨勢與不確定性感到極度焦慮。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              面對已有成就的社會人士時，感到缺乏自信、怕尷尬。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              內心渴望被指引方向，但又害怕踏出交流的第一步。
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              對願意虛心求教、努力上進的晚輩感到十分欣慰與充滿熱忱。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              當遇到把前輩當作「免費字典」的伸手牌時，會覺得不被尊重而感到無奈。
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#0369a1]">•</span>{" "}
                              渴望能在幫助別人的過程中，獲得傳承的成就感與情感上的歸屬感。
                            </li>
                          </>
                        )
                      ) : (
                        <>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            對一成不變的通勤路線感到些許無聊。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            對繁瑣的軟體操作與廣告干擾感到沒耐心。
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#0369a1]">•</span>{" "}
                            收集到「地區限定」物品時，會有強烈的炫耀感與成就感。
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 使用者流程 (User Journey Flow) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                繪製<span className="text-slate-700">使用者</span>
                <br />
                旅程
              </h2>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                {/* 極簡流程圖 (Minimal UI Flow Diagram) */}
                <div className="flex flex-col items-center">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center group">
                    {activeProject === "lifeport" ? (
                      <>
                        <div className="w-48 h-28 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                          <div className="h-6 bg-[#f0f6fc] border-b border-[#e0f2fe] flex items-center px-2 gap-1">
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                          </div>
                          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">
                            <div className="w-24 h-2 bg-slate-100 rounded-full"></div>
                            <div className="w-20 h-6 bg-[#0ea5e9] rounded text-[10px] text-white flex items-center justify-center font-bold tracking-wider">
                              註冊帳號
                            </div>
                          </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-3">
                          1. 建立身分與雙重認證
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-48 h-32 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                          <div className="h-6 bg-[#f0f6fc] border-b border-[#e0f2fe] flex items-center px-2 justify-between">
                            <Map className="w-3 h-3 text-[#0ea5e9]" />
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            </div>
                          </div>
                          <div className="flex-1 p-3 flex flex-col gap-2 relative">
                            <div className="w-full h-full bg-slate-50 rounded-lg overflow-hidden relative">
                              <div className="absolute top-2 left-2 w-12 h-4 bg-white/80 rounded backdrop-blur-sm border border-slate-200"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-rose-400 rounded-full border-2 border-white shadow-md"></div>
                              <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <MapPin className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-3">
                          1. 探索地圖與公佈欄
                        </p>
                      </>
                    )}
                  </div>

                  <div className="h-10 w-px bg-slate-300 relative my-2">
                    <ChevronRight className="absolute -bottom-2 -left-[11px] w-6 h-6 text-slate-300 rotate-90" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center group">
                    {activeProject === "lifeport" ? (
                      <>
                        <div className="w-48 h-32 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                          <div className="h-6 bg-[#f0f6fc] border-b border-[#e0f2fe] flex items-center px-2">
                            <div className="w-12 h-2 bg-slate-200 rounded-full"></div>
                          </div>
                          <div className="flex-1 p-3 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                                <Brain className="w-3 h-3 text-indigo-500" />
                              </div>
                              <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                            </div>
                            <div className="w-full h-12 bg-slate-50 border border-dashed border-slate-200 rounded flex flex-col justify-center items-center gap-1">
                              <div className="w-20 h-1.5 bg-slate-200 rounded-full"></div>
                              <div className="w-16 h-1.5 bg-slate-200 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-3">
                          2. AI 履歷與能力分析
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-48 h-24 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">
                            <MapPin className="w-6 h-6 text-[#0ea5e9] mb-1" />
                            <div className="w-24 h-2 bg-slate-100 rounded-full"></div>
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full"></div>
                          </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-3">
                          2. 觸發 GPS 觀測熱點
                        </p>
                      </>
                    )}
                  </div>

                  <div className="h-10 w-px bg-slate-300 relative my-2">
                    <ChevronRight className="absolute -bottom-2 -left-[11px] w-6 h-6 text-slate-300 rotate-90" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center group">
                    {activeProject === "lifeport" ? (
                      <>
                        <div className="w-56 h-36 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                          <div className="h-8 border-b border-slate-100 flex items-center px-3 justify-between">
                            <div className="w-24 h-4 bg-slate-100 rounded flex items-center px-2">
                              <Search className="w-2 h-2 text-slate-400" />
                            </div>
                            <div className="flex gap-1">
                              <div className="w-6 h-3 bg-[#e0f2fe] rounded-full"></div>
                              <div className="w-6 h-3 bg-[#e0f2fe] rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex-1 p-3 grid grid-cols-2 gap-2">
                            <div className="bg-slate-50 rounded p-2 flex flex-col gap-1">
                              <div className="w-6 h-6 rounded-full bg-slate-200 mb-1"></div>
                              <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
                            </div>
                            <div className="bg-slate-50 rounded p-2 flex flex-col gap-1">
                              <div className="w-6 h-6 rounded-full bg-slate-200 mb-1"></div>
                              <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-3">
                          3. Hashtag 標籤搜尋與媒合
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-56 h-40 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors relative">
                          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                            <div className="w-32 h-32 border-2 border-[#0ea5e9]/50 border-dashed rounded-lg relative">
                              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0ea5e9]"></div>
                              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0ea5e9]"></div>
                              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0ea5e9]"></div>
                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0ea5e9]"></div>
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-slate-300 flex items-center justify-center">
                              <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>
                            <Camera className="absolute top-4 right-4 w-4 h-4 text-white/70" />
                          </div>
                        </div>
                        <p className="text-xs font-bold text-slate-500 mt-3">
                          3. 現場掃描 (無上傳功能)
                        </p>
                      </>
                    )}
                  </div>

                  <div className="h-10 w-px bg-slate-300 relative my-2">
                    <ChevronRight className="absolute -bottom-2 -left-[11px] w-6 h-6 text-slate-300 rotate-90" />
                  </div>

                  {/* Step 4 & 5 Row */}
                  <div className="flex gap-8 w-full justify-center">
                    {activeProject === "lifeport" ? (
                      <>
                        <div className="flex flex-col items-center group">
                          <div className="w-40 h-28 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                            <div className="h-16 bg-slate-50 flex items-center justify-center">
                              <div className="w-12 h-12 rounded bg-white border border-slate-200 flex flex-col justify-center items-center gap-1">
                                <div className="w-6 h-1 bg-rose-200 rounded-full"></div>
                                <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center p-2">
                              <div className="w-full h-full bg-[#0ea5e9] rounded text-[10px] text-white flex items-center justify-center font-bold tracking-wider">
                                發送預約邀請
                              </div>
                            </div>
                          </div>
                          <p className="text-xs font-bold text-slate-500 mt-3 text-center">
                            4. 預約一對一對談
                          </p>
                        </div>

                        <div className="flex items-center text-slate-300 pb-6">
                          <ArrowRight className="w-6 h-6" />
                        </div>

                        <div className="flex flex-col items-center group">
                          <div className="w-40 h-28 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                            <div className="h-6 bg-[#f0f6fc] border-b border-[#e0f2fe] flex items-center justify-center">
                              <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
                            </div>
                            <div className="flex-1 p-3 flex flex-col justify-center items-center gap-2">
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={i}
                                    className="w-3 h-3 bg-amber-300 rounded-sm rotate-45"
                                  ></div>
                                ))}
                              </div>
                              <div className="w-20 h-1.5 bg-slate-100 rounded-full"></div>
                              <div className="w-16 h-1.5 bg-slate-100 rounded-full"></div>
                            </div>
                          </div>
                          <p className="text-xs font-bold text-slate-500 mt-3 text-center">
                            5. 結束後雙向評價
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-center group">
                          <div className="w-40 h-36 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors relative">
                            <div className="h-20 bg-indigo-50 flex items-center justify-center relative overflow-hidden">
                              <Sparkles className="w-12 h-12 text-indigo-300 absolute" />
                              <div className="w-10 h-10 bg-indigo-200 rounded-full z-10 shadow-sm border-2 border-white"></div>
                            </div>
                            <div className="flex-1 flex flex-col items-center p-2 gap-1.5 bg-white">
                              <div className="flex gap-0.5">
                                {[1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className="w-2 h-2 bg-amber-300 rounded-full"
                                  ></div>
                                ))}
                              </div>
                              <div className="w-16 h-2 bg-slate-200 rounded-full mt-1"></div>
                              <div className="w-24 h-1.5 bg-slate-100 rounded-full"></div>
                            </div>
                          </div>
                          <p className="text-xs font-bold text-slate-500 mt-3 text-center">
                            4. 解鎖對應植物精靈
                          </p>
                        </div>

                        <div className="flex items-center text-slate-300 pb-6">
                          <ArrowRight className="w-6 h-6" />
                        </div>

                        <div className="flex flex-col items-center group">
                          <div className="w-48 h-36 bg-white border-2 border-[#bae6fd] rounded-xl flex flex-col overflow-hidden shadow-sm group-hover:border-[#0284c7] transition-colors">
                            <div className="h-8 bg-[#f0f6fc] border-b border-[#e0f2fe] flex items-center px-3 justify-between">
                              <BookOpen className="w-3 h-3 text-[#0369a1]" />
                              <div className="w-12 h-2 bg-[#bae6fd] rounded-full"></div>
                            </div>
                            <div className="flex-1 p-3 grid grid-cols-3 gap-2">
                              <div className="bg-slate-100 rounded flex items-center justify-center">
                                <div className="w-4 h-4 bg-slate-300 rounded-full"></div>
                              </div>
                              <div className="bg-slate-100 rounded flex items-center justify-center">
                                <div className="w-4 h-4 bg-slate-300 rounded-full"></div>
                              </div>
                              <div className="bg-slate-50 rounded flex items-center justify-center opacity-50">
                                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                              </div>
                              <div className="bg-slate-50 rounded flex items-center justify-center opacity-50">
                                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                              </div>
                              <div className="bg-slate-50 rounded flex items-center justify-center opacity-50">
                                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                              </div>
                              <div className="bg-slate-50 rounded flex items-center justify-center opacity-50">
                                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs font-bold text-slate-500 mt-3 text-center">
                            5. 收入圖鑑與照護養成
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 流程圖製作 (Flowchart Section) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                <span className="text-slate-700">流程圖</span>
                <br />
                製作
              </h2>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="w-full flex flex-col gap-4">
                {activeProject === "lifeport" ? (
                  /* 對應 CodeSandbox 的 public 資料夾圖片：請將圖片命名為 lifeport-flow.png */
                  <img
                    src="/lifeport-flow.png"
                    alt="登入與忘記密碼流程圖"
                    className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md block"
                  />
                ) : (
                  /* 對應 CodeSandbox 的 public 資料夾圖片：請將圖片命名為 planz-flow.png */
                  <img
                    src="/planz-flow.png"
                    alt="普嵐茲計畫流程圖"
                    className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md block"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 視覺系統 (Design System) */}
        <section>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-slate-400 leading-tight">
                建立穩固的
                <br />
                <span className="text-slate-700">視覺系統</span>
              </h2>
            </div>

            <div className="md:w-2/3 w-full">
              {activeProject === "lifeport" ? (
                <div className="w-full flex flex-col gap-4">
                  {/* 對應 CodeSandbox 的 public 資料夾圖片：請將圖片命名為 lifeport-design-system.png */}
                  <img
                    src="/lifeport-design-system.png"
                    alt="LIFEPORT 設計系統與元件庫"
                    className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md block"
                  />
                  <p className="text-xs font-bold text-slate-400 text-center flex items-center justify-center gap-1 mt-2">
                    <Palette className="w-3 h-3" /> LIFEPORT Design System &
                    Components
                  </p>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-6">
                  {/* 對應 CodeSandbox 的 public 資料夾圖片：請將圖片命名為 planz-design-system-1.png */}
                  <img
                    src="/planz-design-system-1.png"
                    alt="PlanZ Go! 色彩與文字規範"
                    className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md block"
                  />

                  {/* 對應 CodeSandbox 的 public 資料夾圖片：請將圖片命名為 planz-design-system-2.png */}
                  <img
                    src="/planz-design-system-2.png"
                    alt="PlanZ Go! 介面元件庫"
                    className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md block"
                  />

                  <p className="text-xs font-bold text-slate-400 text-center flex items-center justify-center gap-1 mt-2">
                    <Palette className="w-3 h-3" /> PlanZ Go! Design System &
                    Components
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 最終成品展示 (Final UI - LIFEPORT Only) */}
        {activeProject === "lifeport" && (
          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h2 className="text-4xl font-bold tracking-tight leading-tight">
                  <span className="text-slate-400">介面</span>
                  <br />
                  <span className="text-slate-700">設計</span>
                </h2>
              </div>

              <div className="md:w-2/3 w-full">
                <div className="w-full flex flex-col gap-4">
                  {/* 對應 CodeSandbox 的 public 資料夾圖片：請將圖片命名為 lifeport-final-ui.jpg */}
                  <img
                    src="/lifeport-final-ui.png"
                    alt="職涯擺渡人 最終成品展示"
                    className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md block"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 頁尾 (Footer) */}
      <footer className="max-w-6xl mx-auto px-6 mt-32 pt-8 border-t border-slate-200 flex justify-between items-center text-slate-400 text-sm">
        <p className="font-medium">使用者體驗作品集 曾羽薇</p>
        <p className="font-bold tracking-tighter">Soyi's UX.PORTFOLIO</p>
      </footer>
    </div>
  );
}
