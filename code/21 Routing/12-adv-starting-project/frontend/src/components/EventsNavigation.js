import classes from './EventsNavigation.module.css';
import {NavLink} from "react-router-dom";

function EventsNavigation() {
  return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to="" className={({isActive}) => {
                return isActive ? classes.active : undefined
              }} end>All Events</NavLink>
            </li>
            <li>
              <NavLink to="new" className={({isActive}) => {
                return isActive ? classes.active : undefined
              }} end>New Event</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default EventsNavigation;
