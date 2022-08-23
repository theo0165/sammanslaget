import type { NextPage } from "next";
import { Unity, useUnityContext } from "react-unity-webgl";

const Test: NextPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "game/game.loader.js",
    dataUrl: "game/game.data",
    frameworkUrl: "game/game.framework.js",
    codeUrl: "game/game.wasm",
  });

  return (
    <>
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default Test;
