import Sidebar from "../Components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const ContentLayout = ()=>{
    return (
        <div>
            <Sidebar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default ContentLayout;