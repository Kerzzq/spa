import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context";

export default function Page2() {
  const { message } = useContext(AppContext);

  return (
    <>
      <h1>Page 2</h1>
      <p>Mensaje global: {message}</p>

      <Link to="/">Volver a Home</Link>
    </>
  );
}
