"use client";
import { useBusGetQuery } from "@/redux/api/checkBus";
import scss from "./BusCheck.module.scss";
import { MdOutlineAccessTimeFilled, MdOutlineClear } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { HiMiniBookmark } from "react-icons/hi2";
import som from "../assets/img/com.png";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import mbankIcon from "../assets/img/mbankIcon.png";
import { IoIosListBox } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

const BusCheck = () => {
  const { data } = useBusGetQuery();
  const dataCheck = data?.data;
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);

  function onLoader() {
    setModal(true);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }

  return (
    <section className={scss.BusCheck}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.pedding}>
            <a>
              <MdOutlineAccessTimeFilled />
            </a>
            <h3>Платеж в обработке</h3>
            <h1>
              17,00 <Image src={som} alt="som" />
            </h1>
            <button onClick={() => onLoader()}>Детали транзакции</button>
          </div>

          <div className={scss.checkButton}>
            <div className={scss.buttons}>
              <div className={scss.iconButton}>
                <button className={scss.reset}>
                  <a>
                    <GrPowerReset />
                  </a>
                </button>
                <h5>
                  Повторить <br /> платеж
                </h5>
              </div>
              <div className={scss.iconButton}>
                <a>
                  <MdOutlineAccessTimeFilled />
                </a>
                <h5>
                  Создать <br /> автооплату
                </h5>
              </div>
              <div className={scss.iconButton}>
                <a>
                  <HiMiniBookmark />
                </a>
                <h5>
                  Создать <br /> шаблон
                </h5>
              </div>
            </div>
            <button onClick={() => router.push("/main/bus")}>Закрыть</button>
          </div>
          {modal
            ? dataCheck?.slice(-1).map(
                (el) =>
                  el.type === "bus" && (
                    <div className={scss.checkModal} key={el._id}>
                      <div className="container">
                        {loader ? (
                          <div className={scss.loadBlock}>
                            <span className={scss.loader}></span>
                          </div>
                        ) : (
                          <div className={scss.modalContent}>
                            <div className={scss.card}>
                              <div className={scss.top}>
                                <Image src={mbankIcon} alt="" />
                                <a onClick={() => setModal(false)}>
                                  <MdOutlineClear />
                                </a>
                              </div>
                              <div className={scss.main}>
                                <a className={scss.check}>
                                  <FaCircleCheck />
                                </a>
                                <h4>Платеж успешно проведен</h4>
                                <h3>
                                  - 17,00 <Image src={som} alt="" />
                                </h3>
                                <h5>Тулпар - оплата за проезд</h5>
                              </div>
                              <div className={scss.line}>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                              </div>
                              <div className={scss.checkData}>
                                <div className={scss.text}>
                                  <h6>Имя получателя</h6>
                                  <h5>
                                    CASH OUT ТУЛПАР <br /> ОПЛАТА ЗА ПРОЕЗД
                                  </h5>
                                </div>
                                <div className={scss.text}>
                                  <h6>Оплачено со счета</h6>
                                  <h5>1030120619124861</h5>
                                </div>
                                <div className={scss.text}>
                                  <h6>Дата операции</h6>
                                  <h5>
                                    {el.date}, {el.time}
                                  </h5>
                                </div>
                                <div className={scss.text}>
                                  <h6>Номер квитанции</h6>
                                  <h5>PO113152047113</h5>
                                </div>
                                <div className={scss.text}>
                                  <h6>Код транспорта</h6>
                                  <h5>{el.number}</h5>
                                </div>
                              </div>
                              <div className={scss.line}>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                                <a>
                                  <FiMinus />
                                </a>
                              </div>
                              <div className={scss.checkTexts}>
                                <h6>
                                  Оплата услуг.Получатель: Тулпар-оплата за{" "}
                                  <br /> проезд. {el.number}/17.00 01946040-{" "}
                                  <br />
                                  cd09-7f8d-97d9-98b894d5f9ba Сумма 17.00 <br />{" "}
                                  KGS
                                </h6>
                              </div>
                            </div>
                            <div className={scss.checkButton}>
                              <div className={scss.buttons}>
                                <div
                                  className={scss.iconButton}
                                  onClick={() =>
                                    router.push("/main/bus/offcheck")
                                  }
                                >
                                  <a>
                                    <IoIosListBox />
                                  </a>
                                  <h5>Отправить</h5>
                                </div>
                                <div className={scss.iconButton}>
                                  <button className={scss.reset}>
                                    <a>
                                      <GrPowerReset />
                                    </a>
                                  </button>
                                  <h5>
                                    Повторить <br /> платеж
                                  </h5>
                                </div>
                                <div className={scss.iconButton}>
                                  <a>
                                    <HiMiniBookmark />
                                  </a>
                                  <h5>
                                    Создать <br /> шаблон
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
              )
            : null}
        </div>
      </div>
    </section>
  );
};

export default BusCheck;