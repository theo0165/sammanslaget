import Image from "next/image";
import { FC, MouseEvent, useEffect, useState } from "react";
import style from "../styles/Person.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

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
}

const Person: FC<Props> = ({
  name,
  image,
  education,
  contact,
  description,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (
      /IEMobile|Windows Phone|Lumia/i.test(ua)
        ? true
        : /iPhone|iP[oa]d/.test(ua)
        ? true
        : /Android/.test(ua)
        ? true
        : /BlackBerry|PlayBook|BB10/.test(ua)
        ? true
        : /Mobile Safari/.test(ua)
        ? true
        : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua)
        ? true
        : false || window.matchMedia("(hover: none)").matches
    ) {
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
            <Image src={image} layout="fill" objectFit="cover" priority />
          </div>
          <div className={style.frontInfo}>
            <h3>{name}</h3>
            <p>{education}</p>
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
