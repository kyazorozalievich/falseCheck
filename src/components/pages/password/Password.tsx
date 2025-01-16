"use client";
import { useState } from "react";
import scss from "./Password.module.scss";
import { useRouter } from "next/navigation";

const Password = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  function onPassword() {
    if (password.trim() === "") {
      alert("Введите пароль");
    } else if (password === "хакер007") {
      router.push("/main");
      setPassword("");
    } else {
      alert("Введите правильный пароль");
    }
  }
  return (
    <section className={scss.Password}>
      <div className="container">
        <div className={scss.content}>
          <h2>
            Ввведите пароль чтобы <br /> продолжить дальше
          </h2>
          <div className={scss.block}>
            <input
              type="text"
              placeholder="Пароль..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button onClick={() => onPassword()}>Перейти</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
