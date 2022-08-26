import { NextPage } from "next";
import Header from "../components/Header";
import Person from "../components/Person";
import style from "../styles/Om.module.scss";

const Om: NextPage = () => {
  return (
    <div>
      <Header noBg />
      <div className={style.container}>
        <h1>
          Skapare från{" "}
          <a href="https://yrgo.se">
            <svg
              className="h-full"
              focusable="false"
              viewBox="0 0 695 171"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Yrgo"
            >
              <g fill="#e51336" fillRule="nonzero">
                <path d="M611.2 170.1c-46.2 0-83.8-38-83.8-84.7 0-15.7 4.3-31 12.4-44.3 2.9-4.8 9.1-6.3 13.9-3.4 4.7 2.9 6.3 9.1 3.4 13.8-6.2 10.2-9.4 21.9-9.4 33.9 0 35.6 28.5 64.6 63.6 64.6s63.6-29 63.6-64.6c0-35.6-28.6-64.6-63.6-64.6-10.3 0-20 2.4-29.1 7.1-4.9 2.6-11 .7-13.6-4.3-2.6-4.9-.7-11 4.3-13.6 11.8-6.1 25-9.4 38.4-9.4 46.2 0 83.8 38 83.8 84.7-.1 46.8-37.7 84.8-83.9 84.8M274.5 5.5h-71.8c-4.2 0-7.8 2.5-9.3 6.2-.5 1.2-.9 2.6-.9 4.1v139.4c0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1V25.7h61.8c16.9 0 30.6 13.7 30.6 30.6 0 16.9-13.7 30.6-30.6 30.6h-35.3c-5.6 0-10.1 4.5-10.1 10.1s4.5 10.1 10.1 10.1h35.3c28 0 50.8-22.8 50.8-50.8 0-28-22.8-50.8-50.8-50.8"></path>
                <path d="M315.3 165.5c-2.6 0-5.2-1-7.1-3l-30.4-30.4c-3.9-3.9-3.9-10.3 0-14.2 3.9-3.9 10.3-3.9 14.2 0l30.4 30.4c3.9 3.9 3.9 10.3 0 14.2-1.9 2-4.5 3-7.1 3m171.1-81h-40.8c-5.6 0-10.1 4.5-10.1 10.1s4.5 10.1 10.1 10.1h30.7v50.9c0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1v-61c0-5.6-4.6-10.1-10.1-10.1"></path>
                <path d="M436.5 170.6c-46.2 0-83.8-38-83.8-84.7s37.6-84.7 83.8-84.7C454.7 1.2 472 7 486.6 18c4.4 3.3 5.3 9.7 2 14.1s-9.7 5.3-14.1 2c-11-8.3-24.1-12.7-37.9-12.7-35.1 0-63.6 29-63.6 64.6 0 35.6 28.6 64.6 63.6 64.6 4.4 0 8.9-.5 13.3-1.4 5.5-1.2 10.8 2.3 12 7.7 1.2 5.4-2.3 10.8-7.8 12-5.8 1-11.7 1.7-17.6 1.7m-353.9-5.4c-5.6 0-10.1-4.5-10.1-10.1V94.9c0-5.6 4.5-10.1 10.1-10.1s10.1 4.5 10.1 10.1v60.2c0 5.6-4.5 10.1-10.1 10.1m21.1-96.4c-2.9 0-5.8-1.2-7.7-3.6-3.6-4.3-3-10.6 1.3-14.2l51.6-43c4.3-3.6 10.6-3 14.2 1.3 3.6 4.3 3 10.6-1.3 14.2l-51.6 43c-2 1.5-4.3 2.3-6.5 2.3m-41.1 0c-2.3 0-4.6-.8-6.4-2.3l-51.7-43C.2 20-.4 13.6 3.2 9.3 6.8 5 13.1 4.4 17.4 8l51.7 43c4.3 3.6 4.9 9.9 1.3 14.2-2 2.4-4.9 3.6-7.8 3.6"></path>
              </g>
            </svg>
          </a>
        </h1>

        <div className={style.people}>
          <div className={style.three}>
            <Person
              name="Isabelle Zachén"
              image="/people/isabelle.png"
              education="UX-Designer"
              description="Jag och Ida har ansvarat för projektledning, idégenerering, och prototyper i projektet. Även användartester för att säkertställa en bra användbarhet och upplevelse."
              contact={{
                email: "isabelle_zachen@hotmail.com",
                linkedin:
                  "https://www.linkedin.com/in/isabelle-zach%C3%A9n-70b916243/",
              }}
              imgPosition="top"
            />

            <Person
              name="Ida Lundqvist"
              image="/people/ida.jpg"
              education="UX-Designer"
              description="Jag och Isabelle har ansvarat för projektledning, idégenerering, och prototyper i projektet. Även användartester för att säkertställa en bra användbarhet och upplevelse."
              contact={{
                email: "idaa5@hotmail.com",
                linkedin: "http://linkedin.com/in/ida-lundqvist-1b17b6203",
              }}
            />

            <Person
              name="Theo Sandell"
              image="/people/theo.jpeg"
              education="Webbutvecklare"
              description="Jag har ansvarat för att skapa hemsidan samt att få spelet att fungera på alla plattformar och enheter."
              contact={{
                email: "theo01sandell@gmail.com",
                github: "https://github.com/theo0165",
                linkedin: "https://www.linkedin.com/in/theosandell/",
              }}
              imgPosition="top"
            />
          </div>

          <div className={style.two}>
            <Person
              name="William Ullholm"
              image="/people/william.png"
              education="Game Creator Programmer"
              description="Jag har ansvarat för programmering och ljuddesign för spelet."
              contact={{
                email: "williamullholm@gmail.com",
                github: "https://github.com/WilUll",
                linkedin:
                  "https://www.linkedin.com/in/william-ullholm-7a60901b6/",
              }}
              imgPosition="top"
            />

            <Person
              name="Medina Ljufi"
              image="/profile.png"
              education="Game Creator Artist"
              description="Jag har ansvarat för idégenerering, användartester av spelet samt gjort prototyper av hemsidan."
              contact={{
                email: "test@example.com",
                github: "https://github.com",
                website: "https://example.com",
                linkedin: "https://linkedin.com",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Om;
