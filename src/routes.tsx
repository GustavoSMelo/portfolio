import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './views';
import Terminal from './views/terminal';
import Website from './views/website';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/terminal',
        element: <Terminal />,
    },
    {
        path: '/website',
        element: <Website />,
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
