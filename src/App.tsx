import { createBrowserRouter, RouterProvider } from "react-router";
import Website from "./views/Website";
import NotFound from "./views/NotFound";

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
        path: "*",
        element: <NotFound />,
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
