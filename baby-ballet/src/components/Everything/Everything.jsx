import More from "../More/More";
import "./Everything.css";
import { Grid } from "@mui/material";
function Everything() {
  return (
      <Grid id="everything" className="everything" align={"center"} container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={"everything__card"}>
            <div className={"everything__header"}>Everything about us</div>
            <div className={"everything__paragraph"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <More text={"Read more"} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <img
            className={"everything__img"}
            src="/Yellow%20Dancer.png"
            alt=""
          />
        </Grid>
      </Grid>
  );
}
export default Everything;
