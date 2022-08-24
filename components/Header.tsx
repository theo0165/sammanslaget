import style from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import { MdMenu, MdOutlineGroups } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import bofIcon from "../public/bof_icon.png";

interface Props {
  noBg?: boolean;
  absolute?: boolean;
}

const Header: FC<Props> = ({ noBg, absolute }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

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
            <h1>Sortera mera!</h1>
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
            <Link href="/bjorkafrihet">björk&frihet</Link>
          </li>
        </ul>
        <div className={style.hamburger}>
          <MdMenu size={"32px"} onClick={toggleMobileMenu} />
        </div>
      </nav>
      <nav className={`${style.mobileMenu} ${mobileOpen && style.open}`}>
        <div className={style.mobileMenuInner}>
          <ul>
            <li>
              <IoGameControllerOutline size={32} color="black" />
              <Link href="/">Spelet</Link>
            </li>
            <li>
              <MdOutlineGroups size={32} color="black" />
              <Link href="/om">Om oss</Link>
            </li>
            <li>
              <Image src={bofIcon} width="32px" height="32px" />
              <Link href="/bjorkafrihet">björk&frihet</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
