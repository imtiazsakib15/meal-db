import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Orders from "./components/Orders.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import MealsByCategory from "./components/mealsByCategory.jsx";
import Meal from "./components/Meal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Home />,
        children: [
          {
            path: "/:categoryId",
            loader: ({ params }) =>
              fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`
              ),
            element: <MealsByCategory />,
          },
          {
            path: "/:categoryId/:mealId",
            loader: ({ params }) => console.log(params),
            element: <Meal />,
          },
        ],
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
