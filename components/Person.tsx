import Image from "next/image";
import { FC } from "react";
import style from "../styles/Person.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  education: string;
  contact: {
    linkedin?: string;
    email?: string;
    github?: string;
    website?: string;
  };
}

const Person: FC<Props> = ({ name, image, education, contact }) => {
  return (
    <div className={style.card}>
      <div className={style.inner}>
        <div className={style.front}>
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className={style.back}>
          <div>
            <h1>{name}</h1>
            <h3>{education}</h3>
          </div>
          <div>
            {contact.email && (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            )}
            <div className={style.links}>
              {contact.linkedin && (
                <Link href={contact.linkedin}>
                  <a target="_blank">
                    <AiFillLinkedin size="24px" />
                  </a>
                </Link>
              )}

              {contact.github && (
                <Link href={contact.github}>
                  <a target="_blank">
                    <AiFillGithub size="24px" />
                  </a>
                </Link>
              )}

              {contact.website && (
                <Link href={contact.website}>
                  <a target="_blank">
                    <MdOpenInNew size="24px" />
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
