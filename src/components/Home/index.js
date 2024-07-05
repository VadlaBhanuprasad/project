import Header from "../Header"
import LeftMenuOptions from "../LeftMenuOptions"
import RightSideTable from "../RightSideTable"
import "./index.css"
const Home = ()=>(
    <>
        <Header/>
        <div className="options-table-container">
            <LeftMenuOptions/>
            <RightSideTable/>
        </div>
    </>
)
export default Home