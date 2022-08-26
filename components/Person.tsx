import Image from "next/image";
import { FC, MouseEvent, useEffect, useState } from "react";
import style from "../styles/Person.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import testMobile from "../helpers/testMobile";

interface Props {
  name: string;
  image: string;
  education: string;
  description: string;
  contact: {
    linkedin?: string;
    email?: string;
    github?: string;
    website?: string;
  };
  imgPosition?: "top" | "center" | "bottom";
}

const Person: FC<Props> = ({
  name,
  image,
  education,
  contact,
  description,
  imgPosition,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (testMobile()) {
      setIsMobile(true);
    }
  }, []);

  const toggleCard = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`${style.card} ${!isMobile && style.hover} ${
        isOpen && style.open
      }`}
      onClick={toggleCard}
    >
      <div className={style.inner}>
        <div className={style.front}>
          <div className={style.imageContainer}>
            <Image
              alt={`Bild på ${name}`}
              src={image}
              layout="fill"
              objectFit="cover"
              priority
              objectPosition={imgPosition ?? "center"}
            />
          </div>
          <div className={style.frontInfo}>
            <h3>{name}</h3>
            <p className={style.edu}>{education}</p>
            <p className={style.email}>{contact.email}</p>
          </div>
        </div>
        <div className={style.back}>
          <div className={style.desc}>{description}</div>
          <div>
            {contact.email && (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            )}
            <div className={style.links}>
              {contact.linkedin && (
                <Link href={contact.linkedin}>
                  <a target="_blank">
                    <AiFillLinkedin size="24px" color="#0077b5" />
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
