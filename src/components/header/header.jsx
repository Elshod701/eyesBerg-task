import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { SlCallIn } from "react-icons/sl";
import logo from "@/assets/images/logo.png";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between py-1">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-[90%] flex flex-col items-start">
            <div className="nav-up py-2 flex items-center justify-between border-b border-b-gray-500 w-[100%]">
              <div className="flex items-center">
                <span className="text-[#939697] text-2xl">
                  <CiLocationOn />
                </span>
                <p className="text-[#939697] font-tank-medium">
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-[#FF9549]">
                    <IoSettingsOutline />
                  </span>
                  <p className="font-tank-medium text-[#fff]">
                    Записаться на сервис
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl text-[#FF9549]">
                    <MdOutlineSpeed />
                  </span>
                  <p className="font-tank-medium text-[#fff]">Тест-драйв</p>
                </div>
              </div>
            </div>

            <div className="nav-b py-2 flex items-center justify-between w-[100%]">
              <div className="flex items-center gap-3">
                <p className="text-[30px] font-tank-bold text-white">
                  АВТОРУСЬ TANK
                </p>
                <p className="text-[18px] font-light text-white border-l pl-2 border-l-gray-500">
                  Официальный дилер
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-end">
                  <a
                    href="tel:+7 (999) 999-99-99"
                    className="text-[20px] font-tank-medium text-white"
                  >
                    +7 (999) 999-99-99
                  </a>
                  <p id="online" className="text-[#939697] text-[14px]">
                    Мы на связи
                  </p>
                </div>
                <Button className="px-[30px] flex gap-3">
                  <span>
                    <SlCallIn />
                  </span>
                  <p className="text-[14px] font-tank-medium">
                    Заказать звонок
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
