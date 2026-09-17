export default function ShopBtn() {
  const arrowIcon = (
    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
      className="fill-black group-hover:fill-grey-500"
        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
        fillRule="nonzero"
      />
    </svg>
  );
  return (
    <button className="group w-full flex items-center justify-between md:justify-start md:gap-6 xl:gap-8 hover:text-grey-500 preset-4 cursor-pointer">
      SHOP NOW {arrowIcon}
    </button>
  );
}
