import {Rating} from "@mui/material";
import './ClassesCard.css'
import {NavLink} from "react-router-dom";


function ClassesCard(props) {
    return(
        <div className={'card'} >
            <img className={'card__img'} src={props.img} alt=""/>
            <div className="card__content">
                <div className="card__header">{props.header}</div>
                <div className="card__level">{props.level}</div>
                <Rating name="half-rating" defaultValue={props.rating} precision={1} />
                <div className="card__feesPrice">
                    <p className={'card__fees'}>Стоимость</p>
                    <p className={'card__price'}>{props.price}</p>
                </div>
                <NavLink to={'/contact'}>
                    <button className="card__button">Записаться сейчас</button>
                </NavLink>
            </div>
        </div>
    )
}
export default ClassesCard;
