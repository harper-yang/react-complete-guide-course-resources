import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {Products} from "./pages/Products";
import {RootLayout} from "./pages/Root";
import {ErrorPage} from "./pages/Error";
import {ProductDetail} from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {element: <Home/>, index: true}, // index=true means default route.
      {path: "products", element: <Products/>},
      {path: "products/:productId", element: <ProductDetail/>}
    ],
    errorElement: <ErrorPage/>
  }

])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
