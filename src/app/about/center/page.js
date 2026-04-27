export default function AboutCenterPage() {
  return (
    <main className="flex flex-col items-center justify-start px-16 py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-3xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          中心介紹
        </h1>

        <p
          className="leading-8 text-gray-700 text-justify text-lg"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          本中心為學術研究型之跨系所研究中心，設立之宗旨及目的如下：提供政策建議：通過國際倡議等相關議題的研究、分析政府永續金融政策，向政府和監管機構提供政策建議，以促進金融體系支持永續發展。提供財務決策建議與政策參考：透過國際倡議及相關議題的研究，分析政府永續金融政策之設計與施行成效，作為提供企業財務決策建議之依據，並供政府部門與監管機構於後續政策研擬與調整時參考，以促進金融體系支持永續發展。
        </p>
        <p
          className="leading-8 text-gray-700 text-justify text-base mt-4"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          研究與教育：探索永續金融各面向研究，包括氣候風險評估、社會責任投資、環境、社會與治理（ESG）指標，以及可持續永續發展目標（SDGs）等，並同時培養學生相關知識、增進對永續金融議題的認識和實作能力。促進不同利益相關者間合作與對話、致力於提升金融領域永續發展，以及尋找並推動永續金融模式和實作，以支持經濟、社會和環境可持續性。
        </p>
      </section>
    </main>
  );
}

