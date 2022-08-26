import style from "../styles/Header.module.scss";
import { MdMenu, MdOutlineGroups } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import bofIcon from "../public/bof_icon.png";
import { useRouter } from "next/router";

interface Props {
  noBg?: boolean;
  absolute?: boolean;
}

const Header: FC<Props> = ({ noBg, absolute }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const mobileMenuOuter = useRef<HTMLDivElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target === mobileMenuOuter.current) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

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
          <li className={router.asPath === "/" ? style.active : ""}>
            <Link href="/" title="Spelet">
              Spelet
            </Link>
          </li>
          <li className={router.asPath === "/om" ? style.active : ""}>
            <Link href="/om" title="Om Oss">
              Om oss
            </Link>
          </li>
          <li className={router.asPath === "/bjorkafrihet" ? style.active : ""}>
            <Link href="/bjorkafrihet" title="björk&frihet">
              björk&frihet
            </Link>
          </li>
        </ul>
        <div className={style.hamburger} ref={hamburger}>
          <MdMenu size={"32px"} onClick={toggleMobileMenu} />
        </div>
      </nav>
      <div
        className={`${style.mobileMenu} ${mobileOpen && style.open}`}
        ref={mobileMenuOuter}
      >
        <div className={style.mobileMenuInner} ref={mobileMenu}>
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
      </div>
    </header>
  );
};

export default Header;
