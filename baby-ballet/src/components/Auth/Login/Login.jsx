import { Grid } from "@mui/material";
import {useContext, useEffect} from "react";
import { Button, Form, Input } from "antd";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../Context/UserContextProvider";
import {useGetAllUsersQuery} from "../../../store/services/usersApi";
function Login() {
    let {contextUser, setUser }  = useContext(UserContext);
    const{data:users} = useGetAllUsersQuery();
    const navigate = useNavigate();
    console.log(users);
  const login = (value) => {
      users.map((user) => {

          if(value.password === user.password && value.email === user.email){
              console.log(true)
              setUser({
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: value.email,
                  isAuth: true,
                  password: value.password,
                  phone: user.phone

              });
              console.log(contextUser)
              navigate('/user')
          }
      })

  };
  return (
    <Grid className={"register"} id={"register"} align={"center"} container>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Form onFinish={(value) => login(value)} className="contactUs__form">
          <div className="contactUs__formHeader">
            <h2>Авторизация</h2>
          </div>
          <Form.Item name={"email"}>
            <Input
              placeholder={"Email"}
              className={"contactUs__formInput"}
              type="text"
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input
              placeholder={"Пароль"}
              className={"contactUs__formInput"}
              type="password"
            />
          </Form.Item>
          />
          <Button className={"contactUs__formButton"} htmlType="submit">
            Войти
          </Button>
        </Form>
      </Grid>
    </Grid>
  );
}
export default Login;
