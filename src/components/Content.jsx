import {useState} from "react"

import Article from "./reusable/Article.jsx"
import data from "../data.js"

export default function Content(){
  const [currentSlider,setCurrentSlider] = useState(0)

const clickedRightSlide = ()=>{
  if(currentSlider === data.length - 1){
    setCurrentSlider(0)
  } else {
    setCurrentSlider(slide => slide + 1)
  }
}

const clickedLeftSlide = ()=>{
  if(currentSlider === 0){
    setCurrentSlider(data.length - 1)
  } else {
    setCurrentSlider(slide => slide - 1)
  }
}

  return (
    <main>
      <section className="relative mb-16 xl:mb-0">
      <div className="overflow-hidden">
        <div className={`flex -translate-x-[${currentSlider*100}%]`}>
          {data.map((item, idx) => <Article key={idx} {...item}/>)}
        </div>
        </div>
        <div className="absolute flex right-0 xl:right-1/2 top-[360px] md:top-[400px] xl:top-[534px] -translate-y-full xl:translate-x-full">
          <button onClick={clickedLeftSlide} className="flex justify-center items-center cursor-pointer size-14 md:size-20 bg-black hover:bg-grey-800">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
          </button>

          <button onClick={clickedRightSlide} className="flex justify-center items-center cursor-pointer size-14 md:size-20 bg-black hover:bg-grey-800">
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg>
          </button>
        </div>
      </section>

      <section className="w-full h-full xl:h-70 flex flex-col xl:flex-row gap-12 md:gap-16 xl:gap-0 justify-center items-center">
        <div className="w-full h-59.5 md:h-75 xl:h-full overflow-hidden">
         <picture className="block w-full h-full">
            <source media="(min-width:1280px )" srcSet="./images/image-about-dark.jpg" />
            <source media="(min-width:768px )" srcSet="./images/image-about-dark-desk.jpg" />
            <img className="w-full h-full" src="./images/image-about-dark.jpg" alt="Image of two chairs and a table in the dark" />
            </picture>
        </div>

        <div className="mx-8 md:mx-16 xl:mx-12 text-left">
        <p className="font-bold text-sm leading-[22px] tracking-[5.83px] text-black md:preset-3-b mb-4">ABOUT OUR FURNITURE</p>
        <p className="preset-3-m text-grey-500">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <div className="w-full h-57 md:h-61 xl:h-full overflow-hidden">
           <picture className="block w-full h-full">
            <source media="(min-width:1280px )" srcSet="./images/image-about-light.jpg" />
            <source media="(min-width:768px )" srcSet="./images/image-about-light-desk.jpg" />
            <img className="w-full h-full object-center object-cover" src="./images/image-about-light.jpg" alt="Image of white chair chair" />
          </picture>
        </div>
      </section>
    </main>
  )
}