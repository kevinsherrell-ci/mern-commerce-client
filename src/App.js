import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import GlobalLayout from "./Layouts/GlobalLayout";
import GlobalStyle from "./GlobalStyle";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/Product/ProductDetail";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
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
