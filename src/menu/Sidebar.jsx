import { useState } from "react";
import { SidebarItem, SidebarParent } from "./SidebarElements";

const Sidebar = ({defaultActive}) => {

    const sidebarItems = [ { name: "Home" }, { name: "Student Form" }, { name: "Student List"} ]
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);

    return (
        <>
            <SidebarParent>
                {
                    sidebarItems.map((item, index) => (
                        <SidebarItem key={item.name} active= {index === activeIndex}>
                            <p>{item.name}</p>
                        </SidebarItem>
                    ))
                }
            </SidebarParent>
        </>
    )

}

export default Sidebar;