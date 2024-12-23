import "./User.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import {Grid} from "@mui/material";
function User() {
  let { contextUser, setUser } = useContext(UserContext);
  console.log(contextUser);
  return (
      <Grid  container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
                  <div className="user">
                      <h2>Hello, {contextUser.firstName}</h2>
                  </div>
          </Grid>
      </Grid>
  );
}
export default User;
