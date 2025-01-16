"use client";
import scss from "./Welcome.module.scss";
import busImg from "../assets/img/busCheck.jpg";
import shopImg from "../assets/img/shopCheck.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  return (
    <section className={scss.Welcome}> 
      <div className="container">
        <div className={scss.content}>
          <h2>
            Если ты прошел проверку то я рад встретить тебя тут , ведь сюда не
            все могут попасть
          </h2>
          <div className={scss.blocks}>
            <div
              className={scss.block}
              onClick={() => router.push("/main/bus")}
            >
              <Image src={busImg} alt="img" />
              <h4>Войти</h4>
            </div>
            <div
              className={scss.block}
              onClick={() => router.push("/main/shop")}
            >
              <Image src={shopImg} alt="img" />
              <h4>Войти</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
