/* eslint-disable @next/next/no-img-element */
import React from "react";

const linksData = [
  { label: "ESG接軌IFRS永續揭露準則", href: "https://isds.tpex.org.tw/IFRS/front/#/main/home", logo: "/logos/esg.jpg" },
  { label: "金融監督管理委員會", href: "https://www.fsc.gov.tw/ch/index.jsp", logo: "/logos/fsc.png" },
  { label: "證券櫃檯買賣中心", href: "https://www.tpex.org.tw/zh-tw/index.html", logo: "/logos/tpex.png" },
  { label: "台灣證券交易所", href: "https://www.twse.com.tw/zh/index.html", logo: "/logos/twse.jpg" },
  { label: "台灣期貨交易所", href: "https://www.taifex.com.tw/cht/index", logo: "/logos/taifex.png" },
  { label: "台灣集中保管結算所", href: "https://www.tdcc.com.tw/portal/zh/", logo: "/logos/tdcc.png" },
  { label: "財團法人會計研究發展基金會", href: "https://www.ardf.org.tw/", logo: "/logos/ardf.jpg" },
  { label: "環境部", href: "https://www.moenv.gov.tw/", logo: "/logos/moenv.png" },
];

export default function RelatedLinksPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-6xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 lg:mb-12 text-center"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務相關連結
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {linksData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              // 加入了 h-full 和 justify-between，確保每個卡片高度一致，文字會對齊在最底下
              className="group flex flex-col items-center justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* 【修改重點】移除了 rounded-full 與 bg-gray-50，將寬度改為 w-full，高度設為 h-28 */}
              <div className="w-full h-28 mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.logo} 
                  alt={`${item.label} Logo`} 
                  // 移除了 p-2，保留 object-contain 讓圖片自動縮放且不變形
                  className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              
              <h2
                className="text-center text-lg font-bold text-gray-700 group-hover:text-blue-700 transition-colors duration-300 mt-auto"
                style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
              >
                {item.label}
              </h2>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}