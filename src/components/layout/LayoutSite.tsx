import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";

interface ILayoutSite {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSite> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutSite;
