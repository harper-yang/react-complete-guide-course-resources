import {MainNavigator} from "../components/MainNavigator";

export const ErrorPage = () => {
  return (
      <>
        <MainNavigator/>
        <main>
          <h1>An unexpected error occurred.</h1>
          <p>This page is 404</p>
        </main>
      </>
  )
}
