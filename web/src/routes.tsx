import { createBrowserRouter } from "react-router-dom";
import TodoContainer from "./todo/container";
import App from "./App";
import HomePage from "./home/home";

export const AppRoutes = createBrowserRouter([
    { 
      Component: App,
      children: [
        {
          path: "/",
          Component: HomePage,
        },
        {
          path: "/todo",
          Component: TodoContainer
        }
      ]
    },
  ]);
  