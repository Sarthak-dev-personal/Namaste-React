import ReactDom from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer';

import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';

const AppLayout = () => {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>;
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
        ],
    }
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes}></RouterProvider>);