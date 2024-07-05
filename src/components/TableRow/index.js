import { MdEdit ,MdDelete} from "react-icons/md";

import "./index.css"

const TableRow = (props)=>{
    const {rowDetails} = props
    const {id,airport, country, code, terminals } = rowDetails
    return(
        <li className="column-airport">
           
            <div className="checkbox-div">
            <input className="check-box" id={id} type="checkbox" />
            <label className="column-title" htmlFor={id}>{airport}</label>
            </div>
            <div className="country-div">
                <h1 className="column-title">{country}</h1>
            </div>
            <div className="code-div">
                <h1 className="column-title">{code}</h1>
            </div>
            <div className="terminals-div">
                <h1 className="column-title">{terminals}</h1>
            </div>
          

            <div className="delete-edit-div">
                <MdEdit/>
                <MdDelete/>
            </div>
            
        </li>
    )
    
}
export default TableRow