import { lora } from './layout'
import { SearchPanel } from './components/search-panel'
import { ArticleList } from './components/article-list'
import { Article } from './components/article'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-100 flex flex-col">
      <div className="z-10 h-[40px] md:h-[48px] bg-neutral-000 w-full block shadow-blunt2px box-content top-0 sticky"></div>
      <p className={`${lora.className} text-neutral-900 text-4.5 mt-14 mb-10 text-center`}>Top Wikipedia articles</p>
      <div className="self-center">
          <SearchPanel />
          <ArticleList>
            <Article rank={1} title={'The Last of Us (TV show)'} views={454545455} />
          </ArticleList>
      </div>
    </main>
  )
}
