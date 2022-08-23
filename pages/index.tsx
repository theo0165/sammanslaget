import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";
import hero from "../public/hero.png";
import style from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Header noBg absolute />
      <div className={style.imageContainer}>
        <Image
          src={hero}
          layout="fill"
          objectFit="cover"
          priority
          className={style.hero}
        />
      </div>
    </>
  );
};

export default Home;
