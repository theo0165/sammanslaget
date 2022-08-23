import type { NextPage } from "next";
import Image from "next/image";
import { Unity, useUnityContext } from "react-unity-webgl";
import Header from "../components/Header";
import hero from "../public/hero.png";
import style from "../styles/Home.module.scss";
import { RiFullscreenLine } from "react-icons/ri";

const Home: NextPage = () => {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "game/game.loader.js",
    dataUrl: "game/game.data",
    frameworkUrl: "game/game.framework.js",
    codeUrl: "game/game.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

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
      <div className={style.gameContainer}>
        <div className={style.game}>
          <div className={style.gameInnerContainer}>
            <Unity unityProvider={unityProvider} />
            {!isLoaded && (
              <div className={style.overlay}>
                Loading... {loadingPercentage}%
              </div>
            )}
          </div>
          <div className={style.fullscreen}>
            <RiFullscreenLine size="36px" color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
