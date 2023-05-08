import { Link } from "react-router-dom";
import '../../css/hyper-links.css'
const HyperLinks = (props) => {
  return ( 
      <div className="hyper-links">
        <h3>{props.title}</h3>
        <ul>
          {props.data.map((el =>{
            return <li>
              <Link to={el}>{el}</Link>
            </li>
          }))}
        </ul>
      </div>
   );
}
 
export default HyperLinks;