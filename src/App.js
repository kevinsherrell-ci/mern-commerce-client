import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import GlobalLayout from "./Layouts/GlobalLayout";
import GlobalStyle from "./GlobalStyle";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/Product/ProductDetail";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {useAuthContext} from "./Hooks/Auth";
import ProfileSetupLayout from "./Layouts/ProfileSetupLayout";
import ProfileSetup from "./Pages/Profile/ProfileSetup";

function App() {
    const Auth = useAuthContext();
    const router = createBrowserRouter([
        {
            path: '/',
            element: <GlobalLayout/>,
            children: [{
                path: '/',
                element: <Home/>
            }, {
                path: '/product',
                element: <Product/>,
                children: [
                    {
                        path: "/product/:product_type",
                        element: <Product/>
                    },
                ]
            },
                {
                    path: '/product/detail/:id',
                    element: <ProductDetail/>
                }
            ]
        }, {
            path: '/auth',
            element: <AuthLayout/>,
            children: [{
                path: '/auth/login',
                element: <Login/>
            },
                {
                    path: '/auth/register',
                    element: <Register/>
                }]
        }, {
            path: '/profile',
            element: <ProfileSetupLayout/>,
            children: [{
                path: '/profile/setup',
                element: <ProfileSetup/>
            }]
        }
    ])
    return (
        <div className="App">
            <GlobalStyle/>
            <RouterProvider router={router}/>

        </div>
    );
}

export default App;
