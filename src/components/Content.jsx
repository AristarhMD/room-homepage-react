import Article from "./reusable/Article.jsx"
import data from "../data.js"

export default function Content(){
  return (
    <main>
      <section className="relative">
        <div className="flex overflow-hidden">
          {data.map((item, idx) => <Article key={idx} {...item}/>)}
        </div>
        <div className="absolute flex right-0 xl:right-1/2 top-[360px] md:top-[400px] xl:top-[534px] -translate-y-full xl:translate-x-full">
          <button className="flex justify-center items-center cursor-pointer size-14 md:size-20 bg-black hover:bg-grey-800">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
          </button>

          <button className="flex justify-center items-center cursor-pointer size-14 md:size-20 bg-black hover:bg-grey-800">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
          </button>
        </div>
      </section>
    </main>
  )
}