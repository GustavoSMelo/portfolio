import { createBrowserRouter, RouterProvider } from "react-router";
import Website from "./views/Website";
import NotFound from "./views/NotFound";
import Terminal from "./views/Terminal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Website />,
    },
    {
        path: "/website",
        element: <Website />,
    },
    {
        path: "/terminal",
        element: <Terminal />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
