import Image from "next/image";
import style from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              width={logo.width * 0.4}
              height={logo.height * 0.4}
              priority
              unoptimized
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/">Spela</Link>
          </li>
          <li>
            <Link href="/">Om oss</Link>
          </li>
        </ul>
        <div className={style.hamburger}>
          <MdMenu size={"32px"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
