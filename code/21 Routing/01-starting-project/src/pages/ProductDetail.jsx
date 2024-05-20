import {NavLink, useParams} from "react-router-dom";

export const ProductDetail = () => {
  const param = useParams();

  return <main>
    <h1>Product detail</h1>
    <p>{param.productId}</p>
    <p><NavLink to=".." relative="path">Go to back</NavLink></p>
  </main>
}
