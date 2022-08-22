//import useState hook to create menu collapse state
import React, { useState } from "react";
import Home from '../Home/Home'

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowLeft,
    FiArrowRight,
    FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import './Sidebar.css'

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    const navigate = useNavigate()


    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const token = localStorage.getItem('Admintoken')



    const handleLogin = () => {
        if (token) {
          localStorage.removeItem('Admintoken')
          navigate('/admin/login')
        } else {
          navigate('/admin/login')
        }
      }






    return (
        <>

            <div className="col-2 ">
                <div id="header" >
                    {/* collapsed props to change menu size using menucollapse state */}
                    <ProSidebar collapsed={menuCollapse} className="">
                        <SidebarHeader>
                            <div className=" ">
                                {/* small and big change using menucollapse state */}
                                {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
                                {menuCollapse ? <p className="ms-3 mt-3">Admin</p> : <h5 className="ms-5 mb-3 mt-3">Admin</h5>}
                            </div>
                            <div className="closemenu" onClick={menuIconClick}>
                                {/* changing menu collapse icon on click */}
                                {menuCollapse ? <FiArrowRight /> : <FiArrowLeft />}
                            </div>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <MenuItem onClick={()=>navigate('/admin')} icon={<FiHome />}>Applicant List</MenuItem>
                                <MenuItem onClick={()=>navigate('/admin/view/recordList')} icon={<FaList />}>Record Track</MenuItem>
                                <MenuItem onClick={()=>navigate('/admin/view/bookingSlots')} icon={<FaRegHeart />}>Booking Slots</MenuItem>
                                {/* <MenuItem icon={<RiPencilLine />}>Schedule Events</MenuItem> */}
                                {/* <MenuItem icon={<BiCog />}>Videos</MenuItem> */}
                                {/* <MenuItem icon={<BiCog />}>Payments</MenuItem> */}

                            </Menu>
                        </SidebarContent>
                        <SidebarFooter>
                            <Menu iconShape="square">
                                <MenuItem onClick={handleLogin} icon={<FiLogOut />}>{token ? 'LogOut' : 'Login'}</MenuItem>
                            </Menu>
                        </SidebarFooter>
                    </ProSidebar>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
