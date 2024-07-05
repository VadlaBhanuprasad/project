import {v4 as uuidv4} from "uuid"
import TableRow from "../TableRow"
import { MdArrowDownward } from "react-icons/md"

import "./index.css"

const data = [
    {id: uuidv4(),
    airport:"India Gandhi International Airport",
    country:"India",
    code:"DEL",
    terminals:3
    },
    {id: uuidv4(),
        airport:"Dubai International Airport",
        country:"UAE",
        code:"DXB",
        terminals:5
        },
        {id: uuidv4(),
            airport:"Healthrow Airport",
            country:"England",
            code:"LHR",
            terminals:6
            },
            {id: uuidv4(),
                airport:"Istanbul Airport",
                country:"Turkry",
                code:"IST",
                terminals:3
                },
                {id: uuidv4(),
                    airport:"Rajiv Gandhi International Airport",
                    country:"Texas",
                    code:"DFW",
                    terminals:14
                    },


]

const RightSideTable = () =>(
    <div className="table-container">
     <h1>Airports</h1>
    <ul className="table">
        <li className="column-airport">
            <div className="checkbox-div">
            <input className="check-box" id="airport" type="checkbox" />
            <label className="column-title" htmlFor="airport">All Airports</label>
            </div>
            <div className="country-div">
                <h1 className="column-title">Country</h1>
            </div>
            <div className="code-div">
                <h1 className="column-title">Code</h1>
            </div>
            <div className="terminals-div">
                <h1 className="column-title">Terminals</h1>
            </div>
        </li>
        {data.map(row =>(
            <TableRow rowDetails ={row} key={row.id}/>
        ))}
    </ul>
    </div>
   


)
export default RightSideTable