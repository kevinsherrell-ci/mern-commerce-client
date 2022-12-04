import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import GlobalLayout from "./Layouts/GlobalLayout";
import GlobalStyle from "./GlobalStyle";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/Product/ProductDetail";

function App() {
    const router = createBrowserRouter([{
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
    }])
    return (
        <div className="App">
            <GlobalStyle/>
            <RouterProvider router={router}/>

        </div>
    );
}

export default App;
