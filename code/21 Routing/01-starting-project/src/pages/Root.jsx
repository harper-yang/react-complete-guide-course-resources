import {MainNavigator} from "../components/MainNavigator";
import {Outlet} from "react-router-dom";

export const RootLayout = () => {
  return (
      <>
        <MainNavigator/>
        <Outlet/>
      </>
  )
}
