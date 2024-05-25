import {Outlet, useLoaderData, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";
import {getTokenDuration} from "../utils/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === 'EXPIRED') {
      submit(null, {
        method: 'POST',
        action: '/logout',
      })
    }

    const duration = getTokenDuration();

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'POST'});
    }, duration)

  }, [token, submit]);

  return (
      <>
        <MainNavigation/>
        <main>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet/>
        </main>
      </>
  );
}

export default RootLayout;
