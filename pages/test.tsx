import type { NextPage } from "next";
import { Unity, useUnityContext } from "react-unity-webgl";
import Person from "../components/Person";

const Test: NextPage = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "game/game.loader.js",
    dataUrl: "game/game.data",
    frameworkUrl: "game/game.framework.js",
    codeUrl: "game/game.wasm",
  });

  return (
    <>
      {/* <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      /> */}
      <Person
        name="Test"
        image="/profile.png"
        contact={{
          linkedin: "#",
          email: "test@example.com",
          github: "https://github.com/theo0165",
          website: "#",
        }}
      />
    </>
  );
};

export default Test;
