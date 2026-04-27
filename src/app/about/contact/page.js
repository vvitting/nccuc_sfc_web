export default function AboutContactPage() {
  return (
    <main className="flex flex-col items-center justify-start px-16 py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-3xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          聯絡我們
        </h1>

        <p
          className="leading-8 text-gray-700 text-justify text-lg"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          聯絡中心：彭青惠 經理 <br />
          電話：02-29393091*81108 <br />
          E-MAIL：135360@nccu.edu.tw <br />
          中心地址：11605 台北市文山區指南路二段64號(政大商學院8樓81108室) <br />

        </p>
      </section>
    </main>
  );
}

