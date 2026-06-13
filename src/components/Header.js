"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // 控制手機版「漢堡選單」的開關
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 控制手機版「子選單」哪個被展開 (紀錄 label 名稱)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

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
        { label: "永續財務資訊揭露智慧判讀系統", href: "/research_result/research_solutions" },
      ],
    },
    {
      label: "永續財務相關連結",
      href: "/related_links", // 注意這裡只有 href，沒有 items
    },
  ];

  // 處理手機版子選單的點擊切換
  const toggleMobileDropdown = (label) => {
    if (openMobileDropdown === label) {
      setOpenMobileDropdown(null); // 如果已經打開，就關閉
    } else {
      setOpenMobileDropdown(label); // 否則打開點擊的那個
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 relative">
      <div className="w-full px-4 lg:px-16 py-4 lg:py-6 flex justify-between items-center bg-white relative z-20">
        {/* 左側：Logo 和文字 */}
        <div className="flex items-center lg:gap-6">
          <div className="flex items-center justify-center shrink-0">
            <Image
              src="/sfc_logo.png"
              alt="SFC Logo"
              width={60}
              height={60}
              className="lg:w-[80px] lg:h-[80px]"
              priority
            />
          </div>
          <Link href="/" className="flex flex-col gap-1">
            <h1
              className="text-base lg:text-xl font-bold text-gray-800 leading-snug"
              style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            >
              國立政治大學商學院<br className="block lg:hidden" />永續財務決策研究中心
            </h1>
            <p
              className="text-xs lg:text-sm text-gray-600"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              NCCUC Sustainable Finance Center
            </p>
          </Link>
        </div>

        {/* 漢堡選單按鈕 (只在手機平板顯示) */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* 右側：電腦版導航菜單 */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            >
              {/* 判斷：如果有 href 代表是單一連結，如果有 items 才是下拉選單 */}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex text-base text-gray-700 no-underline transition-colors duration-300 hover:text-blue-800 hover:font-semibold whitespace-nowrap py-4 focus:outline-none"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className="text-base text-gray-700 no-underline transition-colors duration-300 hover:text-blue-800 hover:font-semibold whitespace-nowrap focus:outline-none py-4"
                >
                  {item.label}
                </button>
              )}

              {/* 下拉選單 (加入 && 判斷，確保 item.items 存在才渲染) */}
              {item.items && item.items.length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full min-w-max bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      target={subItem.target}
                      rel={subItem.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="block px-4 py-2 text-sm text-gray-700 whitespace-nowrap hover:bg-blue-50 hover:text-blue-800"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 手機版：點擊展開的垂直選單 */}
        {isMobileMenuOpen && (
          <nav className="w-full lg:hidden mt-4 pt-2 border-t border-gray-100 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>
                
                {/* 判斷：如果是單一連結，直接跳轉；如果有子選單，則展開 */}
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)} // 點擊後關閉選單
                    className="flex justify-between items-center w-full text-left text-base font-bold text-gray-800 px-2 py-3 hover:bg-gray-50 rounded-md"
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="flex justify-between items-center w-full text-left text-base font-bold text-gray-800 px-2 py-3 hover:bg-gray-50 rounded-md"
                  >
                    <span>{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === item.label ? "rotate-180" : ""}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* 手機版子選單 (確保 openMobileDropdown 吻合 且 item.items 存在才顯示) */}
                {openMobileDropdown === item.label && item.items && (
                  <div className="flex flex-col gap-1 pl-4 border-l-2 border-blue-200 ml-4 mb-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.target}
                        rel={subItem.target === "_blank" ? "noopener noreferrer" : undefined}
                        className="text-sm text-gray-600 py-2.5 px-2 hover:text-blue-600 hover:bg-blue-50 rounded-md block"
                        onClick={() => setIsMobileMenuOpen(false)} 
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}