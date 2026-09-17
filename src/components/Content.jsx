import Article from "./reusable/Article.jsx"
import data from "../data.js"

export default function Content(){
  return (
    <main>
      <section className=" relative flex overflow-hidden">
        {data.map((item, idx) => <Article key={idx} {...item}/>)}
      </section>
    </main>
  )
}