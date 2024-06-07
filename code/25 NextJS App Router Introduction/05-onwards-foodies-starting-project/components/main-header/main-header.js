import classes from './main-header.module.css';

import Link from "next/link";
import logoImg from "@/assets/logo.png"
import Image from "next/image";
import NavLink from "@/components/nav-link/nav-link";

export default function MainHeader() {
  return <header className={classes.header}>
    <Link href="/code/25%20NextJS%20App%20Router%20Introduction/05-onwards-foodies-starting-project/public"
          className={classes.logo}>
      <Image src={logoImg} alt="log img" priority/>
      NextLevel food
    </Link>
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Meals community</NavLink>
        </li>
      </ul>
    </nav>
  </header>
}
