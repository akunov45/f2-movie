import Layout from "../components/layout/Layout";
import HomePage from "../pages/home-page/HomePage";

export const menu = [
    {
        name: "Главная",
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                // path: "/",
                element: <HomePage />
            },
            {
                path: "/movie-detail/:movieId",
                element: null
            },
            {
                path: "/auth",
                element: null
            },
            {
                path: "/profile",
                element: null
            },
        ]
    },
]