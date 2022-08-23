import Image from "next/image";
import { FC } from "react";
import style from "../styles/Person.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  contact: {
    linkedin?: string;
    email?: string;
    github?: string;
  };
}

const Person: FC<Props> = ({ name, image, contact }) => {
  return (
    <div className={style.card}>
      <div className={style.inner}>
        <div className={style.front}>
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className={style.back}>
          <h1>{name}</h1>
          <div>
            {contact.email && (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            )}
            <div className={style.links}>
              {contact.linkedin && (
                <Link href={contact.linkedin} passHref>
                  <a>
                    <AiFillLinkedin size="32px" />
                  </a>
                </Link>
              )}

              {contact.github && (
                <Link href={contact.github}>
                  <a>
                    <AiFillGithub size="32px" />
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
