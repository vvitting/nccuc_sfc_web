export default function AboutTeamPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 lg:mb-12 text-center"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          中心主管及顧問群
        </h1>

        {/* ================= 中心主管區塊 ================= */}
        <div className="mb-12">
          <h2 
            className="text-xl lg:text-2xl font-bold text-gray-700 mb-6 text-center"
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
          >
            中心主管
          </h2>
          {/* 在手機單欄，平板與電腦雙欄 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* 主任 */}
            <div className="flex flex-col items-center">
              <img
                src="/profiles/team_director.png"
                alt="主任 陳嬿如教授"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top shadow-md border border-gray-100 mb-4"
              />
              <p className="text-gray-600 text-sm md:text-base mb-1" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>主任</p>
              <p className="text-gray-900 font-bold text-lg" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>陳嬿如教授</p>
            </div>

            {/* 副主任 */}
            <div className="flex flex-col items-center">
              <img
                src="/profiles/team_deputy_director.jpeg"
                alt="副主任 翁嘉祥副教授"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top shadow-md border border-gray-100 mb-4"
              />
              <p className="text-gray-600 text-sm md:text-base mb-1" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>副主任</p>
              <p className="text-gray-900 font-bold text-lg" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>翁嘉祥副教授</p>
            </div>
          </div>
        </div>

        {/* ================= 中心顧問區塊 ================= */}
        <div className="mb-16">
          <h2 
            className="text-xl lg:text-2xl font-bold text-gray-700 mb-6 text-center"
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
          >
            中心顧問
          </h2>
          {/* 在手機單欄，平板與電腦雙欄 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* 顧問 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/profiles/team_consultant_one.jpg"
                alt="顧問 吳安妮講座教授"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top shadow-md border border-gray-100 mb-4"
              />
              <p className="text-gray-600 text-sm md:text-base mb-1" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>顧問</p>
              <p className="text-gray-900 font-bold text-lg" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>吳安妮講座教授</p>
            </div>

            {/* 顧問 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/profiles/team_consultant_two.jpg"
                alt="顧問 譚丹琪教授"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top shadow-md border border-gray-100 mb-4"
              />
              <p className="text-gray-600 text-sm md:text-base mb-1" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>顧問</p>
              <p className="text-gray-900 font-bold text-lg" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>譚丹琪教授</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* 2. 研究團隊及人員 */}
        <h2
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 text-center"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          研究團隊及人員
        </h2>

        <div className="w-full max-w-4xl mx-auto overflow-x-auto mb-16 shadow-sm rounded-lg border border-gray-200">
          <table className="min-w-full bg-white text-left text-base" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>
            <tbody>
              {/* 研究推動組 */}
              <tr className="bg-slate-100 border-b border-gray-200">
                <td colSpan={2} className="px-6 py-3 font-bold text-gray-800">研究推動組</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600 w-1/2">計畫經理</td>
                <td className="px-6 py-3 text-gray-900 w-1/2">彭青惠博士後研究員</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">專任行政人員</td>
                <td className="px-6 py-3 text-gray-900">盧媺璇小姐</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任行政人員</td>
                <td className="px-6 py-3 text-gray-900">張哲瑄小姐</td>
              </tr>

              {/* 綠色金融組 */}
              <tr className="bg-slate-100 border-b border-gray-200">
                <td colSpan={2} className="px-6 py-3 font-bold text-gray-800">綠色金融組</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">組指導教師</td>
                <td className="px-6 py-3 text-gray-900">
                  <a 
                    href="https://deptfin.ccu.edu.tw/p/404-1118-1068.php?Lang=zh-tw#start-C" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                  林佳賢助理教授
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">專任研究人員</td>
                <td className="px-6 py-3 text-gray-900">林志宇先生</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">呂昀潔小姐</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">張  崴小姐</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">謝佳辛小姐</td>
              </tr>

              {/* 永續財務資訊揭露組 */}
              <tr className="bg-slate-100 border-b border-gray-200">
                <td colSpan={2} className="px-6 py-3 font-bold text-gray-800">永續財務資訊揭露組</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">組指導教師</td>
                <td className="px-6 py-3 text-gray-900">
                  <a 
                    href="https://acct.nccu.edu.tw/zh_tw/Faculty/%E7%BF%81%E5%98%89%E7%A5%A5-30170712" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                  翁嘉祥副教授
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">朱珮毅先生</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">朱庭萱小姐</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">張品喬小姐</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">楊粟棣先生</td>
              </tr>

              {/* 供應鏈研究組 */}
              <tr className="bg-slate-100 border-b border-gray-200">
                <td colSpan={2} className="px-6 py-3 font-bold text-gray-800">供應鏈研究組</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">組指導教師</td>
                <td className="px-6 py-3 text-gray-900">
                  <a 
                    href="https://acct.nccu.edu.tw/zh_tw/Faculty/%E6%A2%81%E5%98%89%E7%B4%8B-97588226" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                  梁嘉紋教授
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">陸則王先生</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">何 欣小姐</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">王琪閔小姐</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">褚阮柏彥先生</td>
              </tr>

              {/* 機器學習組 */}
              <tr className="bg-slate-100 border-b border-gray-200">
                <td colSpan={2} className="px-6 py-3 font-bold text-gray-800">機器學習組</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">組指導教師</td>
                <td className="px-6 py-3 text-gray-900">
                  <a 
                    href="https://mis2.nccu.edu.tw/zh_tw/Faculty/Faculty_01/%E6%9E%97%E6%80%A1%E4%BC%B6-39408961" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                  林怡伶副教授
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">碩士班兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">紀亭榕小姐</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-600">碩士班兼任研究人員</td>
                <td className="px-6 py-3 text-gray-900">沈欣儀小姐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* 3. 成員結構樹狀圖 */}
        <h2
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 text-center"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          成員架構圖
        </h2>
        
        <div className="flex justify-center w-full">
          <img
            src="/profiles/team_tree_diagram.jpg" 
            alt="中心組織架構"
            className="w-full max-w-xl h-auto rounded-lg shadow-sm border border-gray-100 object-contain"
          />
        </div>

      </section>
    </main>
  );
}