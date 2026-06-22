import Image from "next/image";

export default function ResearchSolutionsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">

        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務資訊揭露智慧判讀系統 
        </h1>

        {/* 第一張圖 */}
        <div className="w-full mb-8 flex justify-center">
          <Image
            src="/research_solutions/banner.png"
            alt="永續財務資訊揭露智慧判讀系統"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "380px" }}
          />
        </div>

        {/* Introduction */}
        <h2
          className="text-xl lg:text-xl font-bold text-gray-800 mb-3"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          Introduction
        </h2>

        <p
          className="leading-relaxed lg:leading-8 text-gray-700 text-justify text-base lg:text-lg mb-3"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          中心依據近年研究經驗，使用AI開發-永續財務資訊揭露智慧判讀系統(Sustainability-related Financial Disclosure – Smart Evaluation System)。此系統彌補現有工具在永續資訊判讀上的缺口、解決現行技術於中文永續資訊判讀上之語意落差與文化適配不足問題。本系統可協助及應用在：
        </p>

        <ol
          className="list-decimal list-outside pl-10 space-y-2 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-lg mb-8"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          <li>上市櫃公司對其永續財務資訊揭露的自我評量。</li>
          <li>永續顧問服務業對企業揭露資訊進行第三方確信。</li>
          <li>金融機構及資本市場投資人對上市櫃公司的永續評價與授信、投資決定。</li>
          <li>作為資料庫或永續評比(公司)判讀使用。</li>
        </ol>

        {/* 第二張圖 
        <div className="w-full mb-0 flex justify-center">
          <Image
            src="/research_solutions/flow.jpg"
            alt="實施應用流程圖"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <p
          className="text-center text-gray-500 text-sm lg:text-base"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          Sustainability-related Financial Disclosure – Smart Evaluation System 實施應用流程圖
        </p> */}

      </section>
    </main>
  );
}