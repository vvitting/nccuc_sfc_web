export default function AboutContactPage() {
  return (
    <main className="flex flex-col items-center justify-start px-16 py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-3xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務相關法規
        </h1>

        <p
          className="leading-8 text-gray-700 text-justify"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          國際：內容請依2026法規與政策Excel檔內之國際法規-名稱(呈現)/生效時間點(呈現，如狀態為Inactive/Repealed，日期後-Inactive 或Repealed)/官方文件(超連結)，如：
        </p>
        <p
          className="leading-8 text-gray-700 text-justify mt-4"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          台灣：內容請依2026法規與政策Excel檔內之台灣法規-名稱(呈現)/生效時間點(呈現，如狀態為Inactive/Repealed，日期後-Inactive 或Repealed)/官方文件(超連結)，如：
        <a href="https://www.fsc.gov.tw/userfiles/file/1_%E6%B0%B8%E7%BA%8C%E7%B6%93%E6%BF%9F%E6%B4%BB%E5%8B%95%E8%AA%8D%E5%AE%9A%E5%8F%83%E8%80%83%E6%8C%87%E5%BC%95%E7%AC%AC%E4%BA%8C%E7%89%88.pdf">永續經濟活動認定參考指引第二版(20241231)</a>
        </p>
      </section>
    </main>
  );
}
