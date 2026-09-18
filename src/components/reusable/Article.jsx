import ShopBtn from "./ShopBtn.jsx";

export default function Article({imageDesktop,imageSmall,alt,header,text}) {
  return (
    <article className="shrink-0 w-full flex items-center flex-col xl:flex-row gap-16 xl:gap-0 ">
      <div className="relative w-full h-90 md:h-100 xl:h-133.5 xl:basis-1/2 overflow-hidden">
        <picture className="block w-full h-full">
          <source media="(min-width:768px )" srcSet={imageDesktop} />
          <img src={imageSmall} alt={alt} className="w-full h-full object-center object-cover" />
        </picture>
      </div>

      <div className="px-8 md:px-16 xl:px-25 text-left xl:basis-1/2 flex justify-center">
        <div className="w-full xl:w-[78%]">
          <p className="mb-4 preset-2 md:preset-1 text-black">{header}</p>
          <p className="mb-8 preset-3-m text-grey-500">{text}</p>
          <ShopBtn />
        </div>
      </div>
    </article>
  );
}
