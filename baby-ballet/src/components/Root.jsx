import Everything from "./Everything/Everything";
import Classes from "./Classes/Classes";
import Testimonials from "./Testimonials/Testimonials";
import ContactUs from "./ContactUs/ContactUs";
import { Route, Routes } from "react-router";
import Register from "./Auth/Register/Register";
import Login from "./Auth/Login/Login";
import User from "./User/User";
import { Header } from "./Header/Header";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
function Root() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="classes" element={<Classes />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="everything" element={<Everything />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="user" element={<User />} />
        </Routes>
    </>
  );
}
export default Root;
