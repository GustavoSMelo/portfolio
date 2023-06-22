import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Terminal from './views/terminal';
import Website from './views/website';

const router = createBrowserRouter([
    {
        path: '',
        element: <Terminal />
    },
    {
        path: '/website',
        element: <Website />,
    },
]);

const Routes = () => {
    return <RouterProvider router={router}  />;
};

export default Routes;
