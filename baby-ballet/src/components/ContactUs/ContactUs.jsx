import "./ContacUs.css";
import { Grid } from "@mui/material";
import Form from "../Form/Form";
function ContactUs() {
  return (
    <Grid className={"contactUs"} id={"contactUs"} align={"center"} container>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="contactUs__info">
          <h3 className={"contactUs__infoHeader"}>Contact Information</h3>
          <div className="contactUs__infoContent">
            <img className={"contactUs__img"} src="/tel.png" alt="" />
            <p className={"phoneNumber"}>+202 555 0789</p>
          </div>
          <div className="contactUs__infoContent">
            <img className={"contactUs__img"} src="/mail.png" alt="" />
            <p className={"email"}>dance@email.com</p>
          </div>
          <div className="contactUs__infoContent">
            <img className={"contactUs__img"} src="/adres.png" alt="" />
            <p className={"addres"}>
              218 Pegg Rd, Morris, New York(NY), 13808{" "}
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Form />
      </Grid>
    </Grid>
  );
}
export default ContactUs;
