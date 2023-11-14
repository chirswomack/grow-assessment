'use client'
import { useState } from 'react'

import { lora } from './fonts'
import { SearchPanel } from './components/search-panel/search-panel'
import { ArticleList } from './components/article-list'
import { Article } from './utils'

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <main className="min-h-screen w-screen bg-neutral-100 flex flex-col pb-10">
      <div className="z-50 h-[40px] md:h-[48px] bg-neutral-000 w-full block shadow-blunt2px box-content top-0 sticky" data-testid="sticky-header"></div>
      <p className={`${lora.className} text-neutral-900 text-3xl mt-8 mb-6 lg:text-4xl lg:mt-14 lg:mb-10 text-center`}>Top Wikipedia articles</p>
      <div className="self-center w-full md:w-auto">
          <SearchPanel setArticles={setArticles} />
          <ArticleList articles={articles} />
      </div>
    </main>
  )
}
