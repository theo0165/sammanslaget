import type { NextPage } from "next";
import Image from "next/image";
import { Unity, useUnityContext } from "react-unity-webgl";
import Header from "../components/Header";
import hero from "../public/hero.png";
import style from "../styles/Home.module.scss";
import { RiFullscreenLine } from "react-icons/ri";
import { MutableRefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BrowserView, MobileView } from "react-device-detect";
import { useRef } from "react";
import testMobile from "../helpers/testMobile";

const Home: NextPage = () => {
  const [doesFullscreenWork, setDoesFullscreenWork] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const {
    unityProvider,
    loadingProgression,
    isLoaded,
    requestFullscreen,
    unload,
  } = useUnityContext({
    loaderUrl: "game/game.loader.js",
    dataUrl: "game/game.data",
    frameworkUrl: "game/game.framework.js",
    codeUrl: "game/game.wasm",
  });

  const router = useRouter();

  const loadingPercentage = Math.round(loadingProgression * 100);

  const setFullscreen = () => requestFullscreen(true);

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else if (!testMobile()) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const handleRouteChange = async () => {
      await unload();
    };

    window.addEventListener("beforeunload", handleRouteChange);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (testMobile()) {
      setDoesFullscreenWork(false);
      setIsMobile(true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header noBg />
      {!isMobile ? (
        <div className={style.gameContainer}>
          <div className={style.game}>
            <div className={style.gameInnerContainer}>
              <>
                <Unity unityProvider={unityProvider} />
              </>
              {!isLoaded && (
                <div className={style.overlay}>
                  <div className={style.overlayInner}>
                    <p>
                      Laddar
                      <span className={style.dotOne}></span>
                      <span className={style.dotTwo}></span>
                      <span className={style.dotThree}></span>
                    </p>
                    <div className={style.loadingGlobe}>
                      <div
                        className={style.loadingOverlay}
                        style={{ height: `${100 - loadingPercentage}%` }}
                      ></div>
                      <div className={style.loadingImage}>
                        <img src="/earth.png" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {doesFullscreenWork && (
              <div className={style.fullscreen}>
                <RiFullscreenLine
                  size="36px"
                  color="white"
                  onClick={setFullscreen}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={style.mobile}>
          <div className={style.mobileInner}>
            <p>Använd en dator för en bättre spelupplevelse.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
