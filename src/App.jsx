import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import HomeUser from "./pages/HomeUser";
import HomeAdmin from "./pages/HomeAdmin";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 🧙‍♂️</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "owner", element: <Owner /> },
      { path: "home-user", element: <HomeUser/>},
      { path: "home-admin", element: <HomeAdmin/>},
      // { path: "contact", element: <Contact /> },
      // {
      //   path: "products",
      //   element: <Products />,
      // },
      // {
      //   path: "products/:productId",
      //   element: <ProductDetail />,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
