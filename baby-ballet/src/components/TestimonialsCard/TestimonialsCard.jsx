import './TestimonialsCard.css';
import {Rating} from "@mui/material";
import './TestimonialsCard.css'
function TestimonialsCard(props){
    return(
        <div className={'testimonialsCard'}>
            <img className={'testimonialsCard__img'} src={props.image} alt=""/>
            <div className="testimonialsCard__name">{props.name}</div>
            <div className="testimonialsCard__profession">{props.profession}</div>
            <div className="testimonialsCard__content">{props.content}</div>
            <Rating  name="half-rating" defaultValue={props.rating} precision={1} />
        </div>
    )
}
export default TestimonialsCard;
