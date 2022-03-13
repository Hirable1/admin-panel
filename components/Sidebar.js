import SidebarOption from "./SidebarOption"
import {AiOutlineHome} from "react-icons/ai"
function Sidebar() {
  return (
    <div className="h-full w-1/5 border-r-2 bg-white">
        <p className="h-16 flex items-center px-5 text-gray-500 font-light">Menu</p>
        {/* options */}
        <div>
            <SidebarOption title={"Dashboard"} Icon={AiOutlineHome} link="/dashboard" />
            <SidebarOption title={"Companies"} Icon={AiOutlineHome} link="/dashboard/companies" />
        </div>
    </div>
  )
}

export default Sidebar