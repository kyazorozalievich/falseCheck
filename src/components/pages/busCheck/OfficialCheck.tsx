"use client";
import { RxShare2 } from "react-icons/rx";
import scss from "./OfficialCheck.module.scss";
import mbankIcon from "../assets/img/mbankIcon.png";
import mText from "../assets/img/textM.png";
import pechat from "../assets/img/pechat.png";
import Image from "next/image";
import { useBusGetQuery } from "@/redux/api/checkBus";
import { useRouter } from "next/navigation";

const OfficialCheck = () => {
  const { data } = useBusGetQuery();
  const router = useRouter();
  return (
    <section className={scss.OfficialCheck}>
      <div className="container">
        <div className={scss.topContent}>
          <h4 onClick={() => router.push("/main/bus/check")}>Отмена</h4>

          <a>
            <RxShare2 />
          </a>
        </div>
      </div>
      <div className={scss.bg}>
        <div className="container">
          <div className={scss.content}>
            {data?.slice(-1).map((el) => (
              <div className={scss.offCheck} key={el._id}>
                <Image src={mbankIcon} alt="mbank" className={scss.mbank} />
                <Image src={mText} alt="all" className={scss.textM} />
                <hr />
                <div className={scss.textBlock}>
                  <div className={scss.text}>
                    <h5>Услуга</h5>
                    <h5>Тулпар - оплата за проезд</h5>
                  </div>
                  <div className={scss.text}>
                    <h5>Реквизит</h5>
                    <h5>{el.number}</h5>
                  </div>
                  <div className={scss.text}>
                    <h5>Код транспорта</h5>
                    <h5>{el.number}</h5>
                  </div>
                  <div className={scss.text}>
                    <h5>Дата и время</h5>
                    <h5>
                      {el.date} {el.time}
                    </h5>
                  </div>
                </div>
                <hr />
                <div className={scss.itogo}>
                  <h2>Итого</h2>
                  <h2>
                    17,00 <span>c</span>
                  </h2>
                </div>
                <div className={scss.pechatContent}>
                  <Image src={pechat} alt="" />
                </div>
                <div className={scss.bottomText}>
                  <h6>Квитанция NPO0113152047113</h6>
                  <h6>По вопросам зачисления обратитесь к отправителю</h6>
                  <h6>
                    Телефон службы поддержки <span>3333</span>
                  </h6>
                  <h6></h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialCheck;
