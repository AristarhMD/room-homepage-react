import ShopBtn from "./ShopBtn.jsx";

export default function Article({imageDesktop,imageSmall,alt,header,text}) {
  return (
    <article className="shrink-0 w-full flex items-center flex-col xl:flex-row gap-16 xl:gap-0">
      <div className="relative w-full h-auto xl:basis-full overflow-hidden">
        <picture className="flex items-center justify-center">
          <source media="(min-width:768px )" srcSet={imageDesktop} />
          <img src={imageSmall} alt={alt} className="w-full h-auto" />
        </picture>

      </div>
      <div className="px-8 md:px-16 xl:px-20 text-left xl:basis-200">
        <p className="mb-4 preset-2 md:preset-1 text-black">{header}</p>
        <p className="mb-8 preset-3-m text-grey-500">{text}</p>
        <ShopBtn />
      </div>
    </article>
  );
}
