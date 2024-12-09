import "./Classes.css";
import ClassesCard from "../ClassesCard/ClassesCard";
import { Grid } from "@mui/material";
import { useGetClassesALLQuery } from "../../store/services/classesApi";
function Classes() {
  const { data: classes } = useGetClassesALLQuery();
  return (
    <div className={"classes"}>
      <div className="classes__header">НАШИ ЗАНЯТИЯ</div>
      <Grid align={"center"} justify={"center"} container spacing={3}>
        {classes?.map((itemClass) => (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ClassesCard
              header={itemClass.header}
              img={itemClass.image}
              level={itemClass.level}
              price={itemClass.price}
              rating={itemClass.rating}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Classes;
