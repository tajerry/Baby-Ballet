import React, { Component }  from 'react';
import { Grid } from "@mui/material";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";
import { useGetCommentAllQuery } from "../../store/services/commentApi";
function Testimonials() {
  const { data: comments } = useGetCommentAllQuery();
  console.log(comments)
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
              img={comment.img}
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
