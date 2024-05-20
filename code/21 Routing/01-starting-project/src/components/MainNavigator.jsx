import {NavLink} from "react-router-dom";

import classes from "./MainNavigation.module.css"

export const MainNavigator = () => {
  return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to="" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
              <NavLink to="products"
                       className={({isActive}) => isActive ? classes.active : undefined} end> Products </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  )
}
