import { Grid } from "@mui/material";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";
import { useGetCommentALLQuery } from "../../store/services/commentApi";
function Testimonials() {
  const { data: comments } = useGetCommentALLQuery();
  return (
    <div className={"testimonials"}>
      <div className="testimonials__header">
        Отзывы
        <p className={"whatClientsSay"}>Что наши клиенты говорят о нас</p>
      </div>
      <Grid align={"center"} container>
        {comments?.map((comment) => (
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <TestimonialsCard
              image={comment.image}
              name={comment.name}
              profession={comment.profession}
              content={comment.content}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Testimonials;
