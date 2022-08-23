import { NextPage } from "next";
import Header from "../components/Header";
import style from "../styles/Bjorkafrihet.module.scss";
import { MdArrowForwardIos } from "react-icons/md";

const Bjorkafrihet: NextPage = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Björk & Frihet</h1>
        <p>
          Mi tortor consequat ligula etiam senectus porttitor sollicitudin eget
          habitant arcu cursus pretium hendrerit, laoreet turpis augue vulputate
          parturient commodo fusce id montes mauris gravida. Senectus morbi
          viverra sem ullamcorper duis, aenean porta pulvinar sit mattis
          commodo, lacinia habitasse et felis. Est adipiscing suscipit efficitur
          aliquet ipsum mi euismod elit urna class quam eleifend, praesent.
        </p>
        <div className={style.linkContainer}>
          <a href="https://bjorkafrihet.se">Läs mer på Björk&frihets hemsida</a>
          <MdArrowForwardIos />
        </div>
      </div>
    </>
  );
};

export default Bjorkafrihet;
