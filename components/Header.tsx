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
            <img src={logo.src} width={logo.width * 0.4} />
          </a>
        </Link>
      </div>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link href="/">Spelet</Link>
          </li>
          <li>
            <Link href="/">Om oss</Link>
          </li>
          <li>
            <Link href="/">Björkåfirhet</Link>
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
