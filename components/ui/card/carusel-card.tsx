"use client";
import Image from "next/image";
import { useState } from "react";
interface Props {
  text?: string;
  bg?: string;
  img: any;
}

function Index({ text, bg, img }: Props) {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <div className="group w-[292px] h-[416px] rounded-md relative overflow-hidden">
        {bg && (
          <div
            style={{ background: bg }}
            className="absolute top-3 left-[-50px]  py-2.5 divide-fuchsia-50 items-center justify-center w-[200px] z-20 r] rotate-[-41deg] "
          >
            <p className="text-[20px] font-bold text-white">{text}</p>
          </div>
        )}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 cursor-pointer z-40"
        >
          {isLike ? (
            <svg
              className="w-6 h-6 text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          )}
        </button>
        <div className="mx-auto flex items-center justify-center overflow-hidden ">
          <Image
            src={img}
            width={202}
            height={174}
            alt="Odejdi"
            className="group-hover:scale-95 duration-300"
          />
        </div>
        <div className="flex flex-col items-start px-5 ">
          <h2 className="text-[20px] text-start mt-5">
            Бутса Nike Mercurial Superfly 8 FG
          </h2>
          <p className="text-[20px] font-bold text-[#FF1313] text-start ">
            500 000 uzs
          </p>
          <del className="text-[16px] text-start text-[#1F1D14] opacity-[0.4]">
            750 000
          </del>
        </div>
        <button className="flex w-full items-center justify-center gap-3 py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md absolute bottom-0 ">
          <i className="bi bi-cart3"></i>
          Корзина
        </button>
      </div>
    </>
  );
}

export default Index;
