import { useContext } from "react";
import { context } from "./../reduces/provider";

const AdminPage = () => {
  const [state, dispatch] = useContext(context);

  return (
    <>
      {state.livres.map((livre, index) => (
        <article>
          <h2 style={{ margin: "2px 5px", color: "white" }}>{livre.titre}</h2>
          <p style={{ color: livre.stock > 0 ? "green" : "red" }}>
            Stock : {livre.stock}{" "}
          <button onClick={() => dispatch({type:"incr", index:index})}>+</button>
          <button onClick={() => dispatch({type:"decr", index:index})}>-</button>
          </p>
        </article>
      ))}
    </>
  );
};

export default AdminPage;
