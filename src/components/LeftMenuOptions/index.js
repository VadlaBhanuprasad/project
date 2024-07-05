import {Component} from "react"
import {v4 as uuidv4} from "uuid"
import { MdHome,MdOutlineDashboard } from "react-icons/md";


import "./index.css"

class LeftMenuOptions extends Component{
    render(){
        return(
            <div className="left-menu-options">
                
                <div>
                    <div className="icon-container">
                    <MdHome className="icon"/>
                    <p className="icon-label">Home</p>
                    </div>
                    <div className="icon-container">
                        <MdOutlineDashboard className="icon"/>
                        <p className="icon-label">Dashboard</p>
                    </div>

                <div className="servies-div">
                    <h1 className="option-title ">Serices</h1>
                    <p className="option-name activate-button">Airpots</p>
                    <p className="option-name">Videos</p>
                   
                </div>

                <div className="other-list-div">
                    <h1 className="list-title">Others</h1>
                    <ul className="list-container">
                        <li className="list-name">List 1</li>
                        <li className="list-name">List 2</li>
                        <li className="list-name">List 3</li>
                    </ul>
                </div>
                
                </div>


            </div>

        )
    }
}
export default LeftMenuOptions