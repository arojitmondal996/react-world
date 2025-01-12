import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
    },
]);

export default router;