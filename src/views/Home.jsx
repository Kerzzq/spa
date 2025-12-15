import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context";

export default function Home() {
  const { message } = useContext(AppContext);

  return (
    <>
      <h1>Home (SPA)</h1>
      <p>Mensaje global actual: {message}</p>

      <Link to="/page1">Ir a Page 1</Link><br/>
      <Link to="/page2">Ir a Page 2</Link>
    </>
  );
}
