import React, { useState } from "react";
import { Button } from "./components/ui/button";
import Header from "./components/header/header";
import { MdNavigateNext } from "react-icons/md";
import CompleteIcon from "./assets/icons/comlete";
import TimerIcon from "./assets/icons/timer";
import DiplomaICon from "./assets/icons/diploma";
import DangerIcon from "./assets/icons/danger";
import AdvertCard from "./components/advert-card/advert-card";
import GreyCar2 from "@/assets/images/gray-car-2.png";
import MiniAdvertCard from "./components/mini-adver-card/mini-advert-card";
import CompleteOrangeVariant from "./assets/icons/complete-orange";
import SecurityOrangeVariant from "./assets/icons/security-orange";
import ZametkaOrangeVariant from "./assets/icons/zametka-orange";
import PercentOrangeVariant from "./assets/icons/percent-orange";
import tank1 from "@/assets/images/tank1.png";
import tank2 from "@/assets/images/tank2.png";
import tank3 from "@/assets/images/tank3.png";
import tank4 from "@/assets/images/tank4.png";
import tank5 from "@/assets/images/tank5.png";
import FrontCar from "@/assets/images/front-car.png";
import tatyana from "@/assets/images/tatyana.png";
import location from "./assets/images/location.png";
import InfoCarCard from "./components/info-car-card/info-car-card";

import RedCar1 from "@/assets/images/red-car-1.png";
import GreyCar1 from "@/assets/images/gray-car-1.png";
import BlackCar1 from "@/assets/images/black-car-1.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "./components/footer/footer";

const App = () => {
  const [currentColor, setCurrentColor] = useState("red");

  const images = {
    red: "data:image/jpeg;base64,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",
    black:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPP0E1gp44AJmIlepOh04n1BBK-GrCVO3-HA&s",
    gray: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwbwKZ1AV0U3gDuqwWsXF02yp6JOrZaSJ8A&s",
    blue: "data:image/jpeg;base64,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",
  };

  function countdownTimer(days) {
    let totalSeconds = days * 24 * 60 * 60;
    const timerElement = document.getElementById("timer");
    const timerInterval = setInterval(() => {
      const daysRemaining = Math.floor(totalSeconds / (24 * 60 * 60));
      const hoursRemaining = Math.floor(
        (totalSeconds % (24 * 60 * 60)) / (60 * 60)
      );
      const minutesRemaining = Math.floor((totalSeconds % (60 * 60)) / 60);
      const secondsRemaining = totalSeconds % 60;

      timerElement.innerHTML = `
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column">
        <p style="font-family: 'Tank-bold'; font-size: 30px">${daysRemaining}</p> 
        <span>дня</span> 
      </div> 
      <span style="font-family: 'Tank-bold'; font-size: 30px">:</span>
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column">
        <p style="font-family: 'Tank-bold'; font-size: 30px">${hoursRemaining}</p> 
        <span>часов</span>  
      </div>  
      <span style="font-family: 'Tank-bold'; font-size: 30px">:</span>
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column">
        <p style="font-family: 'Tank-bold'; font-size: 30px">${minutesRemaining}</p>
        <span>минут</span>  
      </div>  
      <span style="font-family: 'Tank-bold'; font-size: 30px">:</span>
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column">
        <p style="font-family: 'Tank-bold'; font-size: 30px">${secondsRemaining}</p> 
        <span>секунд</span>  
      </div> `;

      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
      }

      totalSeconds--;
    }, 1000);
  }
  window.onload = function () {
    countdownTimer(3); // Countdown from 3 days
  };

  const [more, setMore] = useState(false);
  return (
    <>
      <Header />
      <main>
        <section
          id="hero"
          className="h-[700px] bg-[url('./assets/images/hero-bg.png')] object-cover object-center bg-no-repeat"
        >
          <div className="container">
            <div className="hero-content w-[450px] leading-[60px] pt-[180px]">
              <h2 className="text-[28px] font-tank-medium text-white">
                Улучшим любые условия
              </h2>
              <p className="text-[60px] font-tank-bold text-white">TANK 500</p>
              <p className="text-[28px] font-tank-medium text-white">
                Осталось всего 5 автомобилей!
              </p>
              <Button className="px-[30px] py-[26px] flex items-center gap-1 text-[16px] font-tank-medium">
                Получить предложение
                <MdNavigateNext className="text-2xl" />
              </Button>
            </div>
          </div>
        </section>
        <section className="pt-5">
          <div className="container">
            <div className="bg-[#252C2C] py-8 px-10 flex items-center justify-between rounded-[10px]">
              <h2 className="text-[30px] font-tank-bold text-white w-[330px] uppercase leading-[110%]">
                Срок действия спецпредложения:
              </h2>
              <p
                id="timer"
                className="text-white text-center text-[14px] flex items-center gap-5 font-tank-light"
              ></p>
              <Button className="py-6">
                Узнать цену с выгодами
                <MdNavigateNext className="text-2xl" />
              </Button>
            </div>
            <div className="mt-[60px] flex items-center justify-between">
              <AdvertCard
                icon={<DiplomaICon />}
                title="Официальный дилер"
                subtitle="Гарантируем высокое качество обслуживания."
              />
              <AdvertCard
                icon={<TimerIcon />}
                title="ПОКУПКА АВТО ЗА 1 ДЕНЬ"
                subtitle="Удобный процесс покупки, включая оформление всех документов."
              />
              <AdvertCard
                icon={<CompleteIcon />}
                title="ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ"
                subtitle="Широкий выбор комплектаций, с полным пакетом документов"
              />
            </div>
            <div className="mt-[122px] mb-[60px] flex items-center justify-between">
              <h3 className="text-[43px] font-tank-bold text-white w-[650px] text-center">
                ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ
                100 000 ₽
              </h3>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    className="w-[300px] h-[200px] object-contain object-center"
                    src={RedCar1}
                    alt="tank300"
                  />
                  <p className="text-xl font-tank-light uppercase">Tank 300</p>
                </div>
                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    className="w-[300px] h-[200px] object-contain object-center"
                    src={GreyCar2}
                    alt="tank500"
                  />
                  <p className="text-xl font-tank-light uppercase">Tank 500</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#1C2121] h-[878px] pt-[80px]">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="w-[420px] text-white flex items-start flex-col">
                <p className="text-[20px] font-tank-medium">
                  Только в АВТОРУСЬ!
                </p>
                <h2 className="text-[40px] font-tank-bold">TANK 300</h2>
                <p className="text-[30px] font-tank-medium uppercase">
                  Выгода по Trade-In до 450 000 ₽
                </p>
                <span className="flex items-center bg-[#FF2B00] rounded-[10px] mb-10 px-4 py-1 gap-2">
                  <DangerIcon /> Ограниченное предложение! <DangerIcon />
                </span>
                <Button variant="default" className="w-full py-6 mb-[10px]">
                  Узнать стоимость по акции <MdNavigateNext />
                </Button>
                <Button variant="outline" className="w-full py-6 mb-[10px]">
                  Тест-драйв <MdNavigateNext />
                </Button>
                <Button variant="outline" className="w-full py-6">
                  Рассчитать кредит <MdNavigateNext />
                </Button>
              </div>
              <div className="relative w-[800px]">
                <img
                  className="w-[800px] h-[300px] object-cover object-center"
                  src={images[currentColor]}
                  alt={`${currentColor} color`}
                />
                <p className="bg-[#FF9549] w-[140px] rounded-xl font-tank-medium px-2 rotate-[20deg] absolute  top-0 right-20">
                  Осталось 5 автомобилей по спец цене
                </p>
                <div className="colors flex items-center gap-2 justify-center">
                  <button
                    className="w-[30px] h-[30px] rounded-full bg-red-500 cursor-pointer"
                    onClick={() => setCurrentColor("red")}
                    style={{ backgroundColor: "red" }}
                  ></button>
                  <button
                    className="w-[30px] h-[30px] rounded-full bg-black cursor-pointer"
                    onClick={() => setCurrentColor("black")}
                    style={{ backgroundColor: "black" }}
                  ></button>
                  <button
                    className="w-[30px] h-[30px] rounded-full bg-gray-500 cursor-pointer"
                    onClick={() => setCurrentColor("gray")}
                    style={{ backgroundColor: "gray" }}
                  ></button>
                  <button
                    className="w-[30px] h-[30px] rounded-full bg-blue-500 cursor-pointer"
                    onClick={() => setCurrentColor("blue")}
                    style={{ backgroundColor: "blue" }}
                  ></button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[30px]">
              <MiniAdvertCard
                icons={<CompleteOrangeVariant />}
                title="Автомобили в наличии с ПТС"
              />
              <MiniAdvertCard
                icons={<SecurityOrangeVariant />}
                title="Сервисная поддержка до 5 лет / 150 000 км"
              />
              <MiniAdvertCard
                icons={<ZametkaOrangeVariant />}
                title="Улучшим любое предложение"
              />
              <MiniAdvertCard
                icons={<PercentOrangeVariant />}
                title="Кредит 0,01%"
              />
            </div>
            <div className="images flex items-center justify-between mt-[30px]">
              <img src={tank1} alt="tank1" />
              <img src={tank2} alt="tank2" />
              <img src={tank3} alt="tank3" />
              <img src={tank4} alt="tank4" />
              <img src={tank5} alt="tank5" />
            </div>
          </div>
        </section>
        <section className="bg-[#252C2C] h-[878px] pt-[80px]">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="relative">
                <img src={GreyCar2} alt="" />
                <p className="bg-[#FF9549] w-[140px] rounded-xl font-tank-medium px-2 rotate-[20deg] absolute  top-0 right-20">
                  Осталось 5 автомобилей по спец цене
                </p>
              </div>
              <div className="w-[420px] text-white flex items-start flex-col">
                <p className="text-[20px] font-tank-medium">
                  Только в АВТОРУСЬ!
                </p>
                <h2 className="text-[40px] font-tank-bold">TANK 300</h2>
                <p className="text-[30px] font-tank-medium uppercase">
                  Выгода по Trade-In до 450 000 ₽
                </p>
                <span className="flex items-center bg-[#FF2B00] rounded-[10px] mb-10 px-4 py-1 gap-2">
                  <DangerIcon /> Ограниченное предложение! <DangerIcon />
                </span>
                <Button variant="default" className="w-full py-6 mb-[10px]">
                  Узнать стоимость по акции <MdNavigateNext />
                </Button>
                <Button variant="outline" className="w-full py-6 mb-[10px]">
                  Тест-драйв <MdNavigateNext />
                </Button>
                <Button variant="outline" className="w-full py-6">
                  Рассчитать кредит <MdNavigateNext />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[30px]">
              <MiniAdvertCard
                icons={<CompleteOrangeVariant />}
                title="Автомобили в наличии с ПТС"
              />
              <MiniAdvertCard
                icons={<SecurityOrangeVariant />}
                title="Сервисная поддержка до 5 лет / 150 000 км"
              />
              <MiniAdvertCard
                icons={<ZametkaOrangeVariant />}
                title="Улучшим любое предложение"
              />
              <MiniAdvertCard
                icons={<PercentOrangeVariant />}
                title="Кредит 0,01%"
              />
            </div>
            <div className="images flex items-center justify-between mt-[30px]">
              <img src={tank1} alt="tank1" />
              <img src={tank2} alt="tank2" />
              <img src={tank3} alt="tank3" />
              <img src={tank4} alt="tank4" />
              <img src={tank5} alt="tank5" />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="text-[40px] font-tank-bold text-white mt-[100px] mb-[40px] text-center">
              ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
            </h1>
            <div className="flex items-center justify-between mb-10">
              <div>
                <Select>
                  <p className="text-[#939697] font-tank-light mb-1">Модель</p>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue defaultValue={"system"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <p className="text-[#939697] font-tank-light mb-1">
                    Двигатель
                  </p>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue defaultValue={"system"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <p className="text-[#939697] font-tank-light mb-1">
                    Комплектация
                  </p>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue defaultValue={"system"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
              <InfoCarCard img={GreyCar1} title="TANK 300" />
              <InfoCarCard img={GreyCar1} title="TANK 300" />
              <InfoCarCard img={GreyCar1} title="TANK 300" />
              {more && (
                <>
                  <InfoCarCard img={GreyCar1} title="TANK 300" />
                  <InfoCarCard img={GreyCar1} title="TANK 300" />
                </>
              )}
            </div>
            {!more && (
              <Button
                variant="outline"
                className="px-5 py-6 mt-[30px]  mx-auto flex "
                onClick={() => setMore(!more)}
              >
                Загрузить еще ..
              </Button>
            )}
          </div>
        </section>
        <section className="mt-[160px] mb-[80px]">
          <div className="container flex items-center justify-center">
            <div className="banner flex items-center gap-10 mx-auto w-[1150px]">
              <img src={FrontCar} alt="car" />
              <div>
                <h1 className="text-[40px] font-tank-bold text-white mb-2">
                  ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ
                </h1>
                <Button variant="default" className="px-10 py-6">
                  Отправить заявку <MdNavigateNext />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="form-section"
          className="h-[400px] bg-[url('./assets/images/application-bg.png')] object-cover object-center bg-no-repeat"
        >
          <div className="container pt-[80px]">
            <form className="content w-[571px] ">
              <h1 className="font-tank-medium text-[40px] text-white w-[371px] leading-10 uppercase">
                Оставьте заявку на кредит
              </h1>
              <p className="subtitle text-lg font-tank-light text-white mb-10">
                и получите одобрение за 1 день!
              </p>
              <label className="text-[14px] font-tank-light text-[#939697]">
                Телефон
              </label>
              <br />
              <input
                className="w-[300px] mt-1 px-3 py-1 h-[52px] bg-[#252C2C] rounded-[16px] border border-[#939697] outline-none text-white mr-5"
                type="text"
                placeholder="+7 (___) ___-__-__"
              />
              <Button type="submit" variant="default" className="px-10 py-6">
                Отправить заявку <MdNavigateNext />
              </Button>
              <div className="flex items-center gap-2 text-white mt-4">
                <input type="checkbox" />
                <label>Согласен на обработку персональных данных.</label>
              </div>
            </form>
          </div>
        </section>
        <section>
          <div className="container pt-[80px]">
            <div className="reciever-banner h-[240px] bg-[#1C2121] rounded-lg p-10 flex items-center justify-between">
              <div className="left w-[524px]">
                <h1 className="text-white text-[30px] font-tank-bold leading-[120%] uppercase pb-10">
                  Индивидуальное предложение для корпоративных клиентов
                </h1>
                <Button
                  variant="default"
                  className="flex items-center px-10 py-6"
                >
                  Отправить заявку
                  <MdNavigateNext />
                </Button>
              </div>
              <div className="right flex items-center gap-5">
                <img src={tatyana} alt="user" />
                <div>
                  <h3 className="text-[28px] font-tank-bold text-white">
                    Татьяна Санникова
                  </h3>
                  <p className="text-[#939697] w-[200px]">
                    Отдел корпоративных продаж АВТОРУСЬ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[80px]">
          <div className="container">
            <img src={location} alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
