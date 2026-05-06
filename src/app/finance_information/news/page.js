export default function AboutContactPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續新知
        </h1>

        <p
            className="leading-relaxed lg:leading-8 text-gray-700 text-justify text-base lg:text-lg"
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
            金管會提醒上市上櫃公司注意適用IFRS永續揭露準則之時程，及早因應準備以順利接軌(2026020) <br />
            <a 
            href="https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202601200001&dtable=News" 
            className="text-blue-600 hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
            >
             https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202601200001&dtable=News
            </a>
        </p>
      </section>
    </main>
  );
}
