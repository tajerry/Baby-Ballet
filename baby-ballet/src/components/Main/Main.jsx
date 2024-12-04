import "./Main.css";
import More from "../More/More";
import { Grid } from "@mui/material";
function Main() {
  return (
    <Grid className="dance"  align={"center"} container>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="dance__redDance">
          <img src="/Red%20Dancer.png" alt="" />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="dance__info">
          <p className="dance__enjoy">Enjoy each step along the way.</p>
          <h2 className="dance__header">Learn to dance with style</h2>
          <More text={"Learn more"} />
          <div className="dance__footer">
            <p className="dance__follow">FOLLOW US</p>
            <img src="/Line%203.png" alt="" />
            <img src="/Vectorsss.png" alt="" />
            <img src="/Vector3.png" alt="" />
            <img src="/Vector4.png" alt="" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
export default Main;
