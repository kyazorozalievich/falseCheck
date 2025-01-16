"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./BusMain.module.scss";
import { useBusPostMutation } from "@/redux/api/checkBus";
import { useRouter } from "next/navigation";

interface IQr {
  type: string;
  date: string;
  time: string;
  number: string;
}

const BusMain = () => {
  const [busCheckPost] = useBusPostMutation();
  const { register, handleSubmit, reset } = useForm<IQr>();
  const router = useRouter();

  const onCheck: SubmitHandler<IQr> = async (data) => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const newCheck = {
      type: "bus",
      date: date,
      time: `${hours}:${minutes}`,
      number: data.number,
    };
    await busCheckPost(newCheck);
    router.push("/main/bus/check");
    reset(); 
  };

  return (
    <section className={scss.BusMain}>
      <div className="container">
        <div className={scss.content}>
          <h3>Введите номер транспорта</h3>
          <form onSubmit={handleSubmit(onCheck)}>
            <input
              type="text"
              placeholder="Номер транспорта..."
              {...register("number", { required: true })}
            />
            <button type="submit">Создать чек</button>
          </form>
          <div
            className={scss.trash}
            onClick={() => router.push("/main/bus/delete")}
          >
            <h3>Раздел всех квитанции</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusMain;
