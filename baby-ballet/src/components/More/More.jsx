import './More.css';
import {NavLink} from "react-router-dom";
function More(props){
    return(
        <div className="learn_more">
            <p>{props.text}</p>
            <NavLink to={'/classes'}>
                <div className="elipse">
                    <img className='vector' src="/Vector.png" alt=""/>
                </div>
            </NavLink>
        </div>
    )
}
export default More;
