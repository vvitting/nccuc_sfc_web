'use client';
import { useState } from 'react';
import { International_regulations, Taiwan_regulations } from './regulations';

export default function AboutContactPage() {
  const [activeTab, setActiveTab] = useState('international');

  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 ml-2"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務相關法規
        </h1>

    <div className="flex justify-center gap-25 lg:gap-60 border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('international')} 
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            className={`text-2xl pb-2 -mb-[1px] transition-colors border-b-2 ${
              activeTab === 'international'
                ? 'text-emerald-700 border-emerald-700 font-bold' 
                : 'text-gray-500 border-transparent hover:text-emerald-600 hover:border-gray-300'
            }`}
          >
            國際法規
          </button>

          <button
            onClick={() => setActiveTab('taiwan')} 
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            className={`text-2xl pb-2 -mb-[1px] transition-colors border-b-2 ${
              activeTab === 'taiwan'
                ? 'text-emerald-700 border-emerald-700 font-bold'
                : 'text-gray-500 border-transparent hover:text-emerald-600 hover:border-gray-300'
            }`}
          >
            台灣法規
          </button>

      </div>

      <div className="min-h-[300px]">
        <div className="max-w-3xl mx-auto"></div>
        {activeTab === 'international' && (
            <ul 
              className="list-disc pl-30 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-xl space-y-3"
            >
            {International_regulations.map((item, index) => (
                <li key={index} className="pl-4">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-700 hover:underline transition-colors"
                    style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            )}

            {activeTab === 'taiwan' && (
            <ul 
              className="list-disc pl-30 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-xl space-y-3"
            >
            {Taiwan_regulations.map((item, index) => (
                <li key={index} className="pl-4">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-700 hover:underline transition-colors"
                    style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            )}
          </div>
        </section>
    </main>
  );
}
