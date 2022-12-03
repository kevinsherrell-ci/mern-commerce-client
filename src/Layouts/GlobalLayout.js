import Sidebar  from '../Components/Sidebar/Sidebar';
import NavBar from "../Components/NavBar/NavBar";
import {Outlet} from "react-router-dom";
const GlobalLayout = ()=>{
    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <NavBar/>
            <div className="content-container" style={{display: 'flex'}}>
                <Sidebar/>
                <div>
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}
export default GlobalLayout;