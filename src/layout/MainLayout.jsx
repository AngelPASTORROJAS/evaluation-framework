import MainNav from "../components/MainNav";

const MainLayout = ({ children }) => {
  const stylePages = {
    padding: "1em",
    backgroundColor: "#0d0c1c",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={stylePages}>
      <MainNav />
      {children}
    </div>
  );
};
export default MainLayout;
