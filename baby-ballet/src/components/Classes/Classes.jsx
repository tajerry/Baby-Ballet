import "./Classes.css";
import ClassesCard from "../ClassesCard/ClassesCard";
import { Grid } from "@mui/material";
function Classes() {
  return (
    <div className={"classes"}>
      <div className="classes__header">НАШИ ЗАНЯТИЯ</div>
      <Grid align={'center'}  justify={"center"} container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClassesCard
            header={"Классический балет"}
            img={"/white.png"}
            level={"Beginner"}
            price={"$54/hr"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClassesCard
            header={"Уличные танцы"}
            img={"/street.png"}
            level={"Intermediate"}
            price={"$44/hr"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClassesCard
            header={"Народные танцы"}
            img={"/contemporary.png"}
            level={"Beginner"}
            price={"$59/hr"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClassesCard
            header={"Бальные танцы"}
            img={"/balroom.png"}
            level={"Beginner"}
            price={"$78/hr"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Classes;
