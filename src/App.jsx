import React, { useState } from "react";
import { Button } from "./components/ui/button";
import Header from "./components/header/header";
import { MdNavigateNext } from "react-icons/md";
import CompleteIcon from "./assets/icons/comlete";
import TimerIcon from "./assets/icons/timer";
import DiplomaICon from "./assets/icons/diploma";
import DangerIcon from "./assets/icons/danger";
import AdvertCard from "./components/advert-card/advert-card";
import RedCar1 from "@/assets/images/red-car-1.png";
import GreyCar1 from "@/assets/images/gray-car-1.png";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "./components/footer/footer";

const App = () => {
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
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column"><p style="font-family: 'Tank-bold'; font-size: 30px">${daysRemaining}<p/> <span>дня<span/>  </div> <span style="font-family: 'Tank-bold'; font-size: 30px">:</span>
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column"><p style="font-family: 'Tank-bold'; font-size: 30px">${hoursRemaining}<p/> <span>часов<span/>  </div>  <span style="font-family: 'Tank-bold'; font-size: 30px">:</span>
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column"><p style="font-family: 'Tank-bold'; font-size: 30px">${minutesRemaining}<p/> <span>минут<span/>  </div>  <span style="font-family: 'Tank-bold'; font-size: 30px">:</span>
      <div style="border: solid 3px #FE8630; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction:column"><p style="font-family: 'Tank-bold'; font-size: 30px">${secondsRemaining}<p/> <span>секунд<span/>  </div> `;

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
              >
             
              </p>
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
              <div className="relative">
                <img src={RedCar1} alt="" />
                <p className="bg-[#FF9549] w-[140px] rounded-xl font-tank-medium px-2 rotate-[20deg] absolute  top-0 right-20">
                  Осталось 5 автомобилей по спец цене
                </p>
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
