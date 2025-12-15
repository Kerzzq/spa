import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context";

export default function Page1() {
  const { setMessage } = useContext(AppContext);

  return (
    <>
      <h1>Page 1</h1>

      <button onClick={() => setMessage("Mensaje cambiado desde Page 1")}>
        Cambiar estado global
      </button>

      <br/><br/>
      <Link to="/">Volver a Home</Link>
    </>
  );
}
