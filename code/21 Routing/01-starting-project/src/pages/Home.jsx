import {Link} from "react-router-dom";

export const Home = () => {
  return (
      <main>
        <h1>My home page</h1>
        <p> Go to the <Link to="products">list of products</Link></p>
      </main>
  )
}
