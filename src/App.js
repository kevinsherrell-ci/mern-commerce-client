import logo from './logo.svg';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import GlobalLayout from "./Layouts/GlobalLayout";
import Product from "./Pages/Product";
import ContentLayout from "./Layouts/ContentLayout";

function App() {
    const router = createBrowserRouter([{
        path: '/',
        element: <GlobalLayout/>,
        children: [{
            path: '/',
            element: <Home/>
        },{
            path:'product',
            element: <Product/>,
            children: [{
                path: "/product/:product_type",
                element: <Product/>
            }]
        }
        ]
    }])
    return (
        <div className="App">

            <RouterProvider router={router}/>

        </div>
    );
}

export default App;
