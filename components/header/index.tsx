"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/icons/logo.svg";
import Link from "next/link";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const data = [
    { title: "Продукты", path: "/products" },
    { title: "Контакты", path: "/contacts" },
    { title: "Оплата и Доставка", path: "/payment" },
    { title: "Новости", path: "/news" },
    { title: "О нас", path: "/about" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav>
        <div className="w-full bg-[#1F1D14] text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2.5">
              <div className="flex items-center">
                <Link href={"/"}>
                  <Image src={logo} width={189} height={59} alt="logo" />
                </Link>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
                  {data.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                  <p className="text-white flex items-center gap-2">
                    <i className="bi bi-telephone"></i>+998 (90) 565-85-85
                  </p>
                  <p className="text-white flex items-center gap-2">
                    <i className="bi bi-envelope"></i>info@gmail.com
                  </p>
                </div>
              </div>
              <button onClick={toggleSidebar} className="md:hidden">
                <svg
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <button className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded bg-black text-white">
                <i className="bi bi-stack"></i>
                Каталог
              </button>
              <div className="w-full md:w-[502px] h-12 relative">
                <input
                  type="text"
                  className="w-full h-full py-2 px-4 rounded outline-none bg-[#F2F2F2] placeholder:text-black"
                  placeholder="Поиск"
                />
                <i className="bi bi-search absolute top-1/2 right-3 transform -translate-y-1/2"></i>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <button className="rounded bg-[#F2F2F2] text-black p-2 md:p-3">
                <i className="bi bi-person"></i>
              </button>
              <button className="rounded bg-[#F2F2F2] text-black p-2 md:p-3">
                <i className="bi bi-heart"></i>
              </button>
              <button className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded bg-[#F2F2F2] text-black">
                <i className="bi bi-cart3"></i>
                Корзина
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1F1D14] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 text-white text-[25px]"
        >
          &times;
        </button>
        <ul className="mt-20">
          {data.map((item, index) => (
            <li key={index} className="p-4 border-b border-gray-700">
              <Link href={item.path} className="block text-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Header;
