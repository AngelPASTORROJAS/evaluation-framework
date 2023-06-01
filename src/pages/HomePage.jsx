import { useContext } from "react";
import { context } from "./../reduces/provider";

const HomePage = () => {
  const [state, dispatch] = useContext(context);
  return (
    <>
      <br />
      {state.livres.map((livre) => (
        <article style={{display:"flex", flexWrap:"wrap", alignItems:"center"}}>
            <h2 style={{ margin:"0 5px", color: "white" }}>{livre.titre}</h2>
            <p style={{ color: livre.stock>0?"green":"red"}}>Stock {livre.stock>0?"":"in"}disponible </p>
        </article>
      ))}
    </>
  );
};
export default HomePage;
