import Companies from "../../components/Companies"
import Sidebar from "../../components/Sidebar"

function companies() {
  return (
    <div className="main">
        <Sidebar/>
        <Companies/>
    </div>
  )
}

export default companies