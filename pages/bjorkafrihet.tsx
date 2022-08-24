import { NextPage } from "next";
import Header from "../components/Header";
import style from "../styles/Bjorkafrihet.module.scss";
import { MdArrowForwardIos } from "react-icons/md";

const Bjorkafrihet: NextPage = () => {
  return (
    <>
      <Header noBg />
      <div className={style.container}>
        <div>
          <div className={style.topContent}>
            <h1>Björk & Frihet</h1>
            <p>
              Björk & Frihet är en secondhandkedja som jobbar för ett hållbart
              samhälle.
              <br />
              <br />
              När du lämnar in en gåva på en av Björk&frihets insamlingsplatser
              körs den till en av deras sorteringsanläggningar i Göteborg eller
              Malmö. Där sorteras varje dag 4500 kg textilier och 5000 kg prylar
              som säljs i någon av deras butiker. Pengarna som samlas in och
              blir till överskott skänks till någon av deras
              solidaritetsprojekt. I vårt spel sorterar du prylar och textilier
              för att göra världen till en mer hållbar plats.
            </p>
            <div className={style.linkContainer}>
              <a href="https://bjorkafrihet.se">
                Läs mer på Björk&frihets hemsida
              </a>
              <MdArrowForwardIos />
            </div>
          </div>
          <div className={style.bottomContent}>
            <h2>Insamlingsplatser</h2>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=13CKvW2JMO5WopARUYVF9TmZcxss&ehbc=2E312F&z=5"
              className={style.map}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bjorkafrihet;
