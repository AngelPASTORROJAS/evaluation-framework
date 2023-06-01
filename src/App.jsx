import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage"
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },{
      path: "admin",
      element: (
        <MainLayout>
          <AdminPage />
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}
export default App;
