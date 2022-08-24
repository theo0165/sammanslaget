import style from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { FC, useState } from "react";

interface Props {
  noBg?: boolean;
  absolute?: boolean;
}

const Header: FC<Props> = ({ noBg, absolute }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobileMenu = () => setMobileOpen(true);
  const closeMobileMenu = () => setMobileOpen(false);

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
          <MdMenu size={"32px"} onClick={openMobileMenu} />
        </div>
      </nav>
      <nav className={`${style.mobileMenu} ${mobileOpen && style.open}`}>
        <div className={style.closeBtn}>
          <MdClose size="32px" onClick={closeMobileMenu} />
        </div>
        <ul>
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
      </nav>
    </header>
  );
};

export default Header;
