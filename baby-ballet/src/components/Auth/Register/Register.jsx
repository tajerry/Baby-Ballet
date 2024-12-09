import "./Register.css";
import { Button, Form, Input } from "antd";
import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../Context/UserContextProvider";
import {useCreateUserMutation} from "../../../store/services/usersApi";

function Register() {
  const navigate = useNavigate();
    let {user, setUser }  = useContext(UserContext);
    const [createUser] = useCreateUserMutation();
  const register = (data) => {
      createUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          phone: data.phone,
      });
    navigate('/login')
  };
  return (
    <div className={"register"}>
      <Form onFinish={(value) => register(value)} className="contactUs__form">
        <div className="contactUs__formHeader">
          <h2>Регистрация</h2>
        </div>
        <Form.Item name="lastName">
          <Input
            required={true}
            placeholder={"Фамилия"}
            name="lastname"
            className={"contactUs__formInput"}
          />
        </Form.Item>
        <Form.Item name="firstName">
          <Input
            required={true}
            placeholder={"Имя"}
            name="firstname"
            className={"contactUs__formInput"}
          />
        </Form.Item>
        <Form.Item name="phone">
          <Input
            required={true}
            placeholder={"Телефон"}
            type={"phone"}
            name="phone"
            className={"contactUs__formInput"}
          />
        </Form.Item>
        <Form.Item name="email">
          <Input
            required={true}
            placeholder={"Email"}
            type={"email"}
            name="email"
            className={"contactUs__formInput"}
          />
        </Form.Item>
        <Form.Item name="password">
          <Input
            required={true}
            placeholder={"Пароль"}
            type={"password"}
            name="password"
            className={"contactUs__formInput"}
          />
        </Form.Item>
        <Button className={"contactUs__formButton"} htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
export default Register;
