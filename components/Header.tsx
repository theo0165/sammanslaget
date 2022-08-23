import { NextPage } from "next";
import style from "../styles/Header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={style.container}>
      <div className={style.logo}></div>
      <nav></nav>
    </header>
  );
};

export default Header;
