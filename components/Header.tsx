import style from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { FC } from "react";

interface Props {
  noBg?: boolean;
  absolute?: boolean;
}

const Header: FC<Props> = ({ noBg, absolute }) => {
  return (
    <header
      className={`
        ${style.container}
        ${noBg ? style.noBg : style.bg}
        ${absolute ? style.absolute : ""}
      `}
    >
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
            <Link href="/om">Om oss</Link>
          </li>
          <li>
            <Link href="/bjorkafrihet">Björk&frihet</Link>
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
