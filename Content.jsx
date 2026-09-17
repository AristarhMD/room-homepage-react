import Article from "./reusable/Article.jsx"
import data from "../data.js"

export default function Content(){
  return (
    <main>
      <Article {...data[0]}/>
    </main>
  )
}