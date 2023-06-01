import { useContext } from "react";
import { context } from "./../reduces/provider";

const HomePage = () => {
  const [state, dispatch] = useContext(context);
  return (
    <>
      <br />
      {state.livres.map((livre) => (
        <article>
            <h2 style={{ margin: "10px", color: "red" }}>{livre.titre}</h2>
            <p style={{ margin: "10px", color: "red" }}>Stock {livre.stock>0?"":"in"}disponible </p>
        </article>
      ))}
    </>
  );
};
export default HomePage;
