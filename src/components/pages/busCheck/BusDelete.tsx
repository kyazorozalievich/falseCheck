"use client";
import { useBusDeleteMutation, useBusGetQuery } from "@/redux/api/checkBus";
import scss from "./BusDelete.module.scss";
import { useRouter } from "next/navigation";

const BusDelete = () => {
  const { data } = useBusGetQuery();
  const [deleteBusCheck] = useBusDeleteMutation();
  const router = useRouter();

  return (
    <section className={scss.BusDelete}>
      <div className="container"> 
        <div className={scss.content}>
          {data?.length! <= 0 ? (
            <div className={scss.textError}>
              <h2>Карточки для удаления не существует!</h2>
              <button onClick={() => router.push("/main/bus")}>
                Вернутся назад
              </button>
            </div>
          ) : (
            data
              ?.slice()
              .reverse()
              .map(
                (el) =>
                  el.type === "bus" && (
                    <div className={scss.delBlock} key={el._id}>
                      <div className={scss.text}>
                        <h5>Транспорт:</h5>
                        <h5>{el.number}</h5>
                      </div>
                      <div className={scss.text}>
                        <h5>Дата:</h5>
                        <h5>{el.date}</h5>
                      </div>
                      <div className={scss.text}>
                        <h5>Время:</h5>
                        <h5>{el.time}</h5>
                      </div>
                      <button onClick={() => deleteBusCheck(el._id)}>
                        Удалить
                      </button>
                    </div>
                  )
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default BusDelete;
