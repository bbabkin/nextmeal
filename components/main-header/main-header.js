import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>

            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
              {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
            </li>

            <li>
              <NavLink href="/community">Community</NavLink>
              {/* <Link href="/community" className={path === '/community' ? classes.active : undefined}>Community</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}