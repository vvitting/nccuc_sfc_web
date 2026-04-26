import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      label: "關於我們",
      items: [
        { label: "中心介紹", href: "/about/center" },
        { label: "主任介紹", href: "/about/director" },
        { label: "團隊介紹", href: "/about/team" },
        { label: "聯絡我們", href: "/about/contact" },
      ],
    },
    {
      label: "最新消息",
      items: [
        { label: "相關活動", href: "/latest_news" },
      ],
    },
    {
      label: "永續財務資訊",
      items: [
        { label: "永續新知", href: "/finance_information/news" },
        { label: "永續財務相關法規", href: "/finance_information/relevant_regulations" },
      ],
    },
    {
      label: "中心研究成果",
      items: [
        { label: "永續財務研究", href: "/research_result/research_studies" },
        { label: "永續財務決策方案", href: "/research_result/research_solutions" },
      ],
    },
    {
      label: "永續財務相關連結",
      items: [
        { label: "ESG接軌IFRS永續揭露準則", href: "#links-esg-ifrs" },
        { label: "金融監督管理委員會", href: "https://www.fsc.gov.tw/ch/index.jsp" },
        { label: "證券櫃檯買賣中心", href: "https://www.tpex.org.tw/zh-tw/index.html" },
        { label: "台灣證券交易所", href: "https://www.twse.com.tw/zh/index.html" },
        { label: "台灣期貨交易所", href: "https://www.taifex.com.tw/cht/index" },
        { label: "台灣期中保管結算所", href: "#links-tdcc" },
        { label: "財團法人會計研究發展基金會環境部", href: "https://www.ardf.org.tw/" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-100 bg-white border-b-2 border-gray-200 py-6">
      <div className="w-full px-16 flex justify-between items-center">
        {/* 左側：Logo 和文字 */}
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/sfc_logo.png"
              alt="SFC Logo"
              width={80}
              height={80}
              priority
            />
          </div>
          <Link href="/" className="flex flex-col gap-1">
            <h1
              className="text-xl font-bold text-gray-800"
              style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            >
              國立政治大學商學院永續財務決策研究中心
            </h1>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              NCCUC Sustainable Finance Center
            </p>
          </Link>
        </div>

        {/* 右側：導航菜單（含下拉） */}
        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            >
              {/* 主選單文字 */}
              <button
                type="button"
                className="text-base text-gray-700 no-underline transition-colors duration-300 hover:text-blue-800 hover:font-semibold whitespace-nowrap focus:outline-none"
              >
                {item.label}
              </button>

              {/* 下拉選單 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full min-w-max bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 whitespace-nowrap hover:bg-blue-50 hover:text-blue-800"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
