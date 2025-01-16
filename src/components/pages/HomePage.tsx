"use client";
import Welcome from "./home/Welcome";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <Welcome />
    </div>
  );
};

export default HomePage;
