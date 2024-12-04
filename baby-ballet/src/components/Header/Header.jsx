import "./Header.css";
import { NavLink } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Context/UserContextProvider";
import {useNavigate} from "react-router-dom";
export function Header() {
  let {user, setUser }  = useContext(UserContext);
  const navigate = useNavigate();
  const logOff = () => {
    setUser({
        firstName: '',
        lastName: '',
        phone: 0,
        email: "",
        password: '',
        isAuth: false,
    });
  };
  return (
    <header>
      <div className="header__logo">
        <NavLink className="header__logo" to={"/"}>
          Baby ballet
        </NavLink>
      </div>
      <div className="header__menu  ">
        <NavLink className="header__link" to={"/everything"}>
          О нас
        </NavLink>
        <NavLink className="header__link" to={"/classes"}>
          Занятия
        </NavLink>
          <NavLink className="header__link" to={"/testimonials"}>
              Отзывы
          </NavLink>
        <NavLink className="header__link" to={"/contact"}>
          Контакты
        </NavLink>
      </div>
        {!user.isAuth && (
            <div className="auth">
                <NavLink className="header__authLink" to={"/login"}>
                    Вход
                </NavLink>
                <NavLink className="header__authLink" to={"/register"}>
                    Регистрация
                </NavLink>
            </div>
        )}
        {user.isAuth && (
            <div className="auth">
                <NavLink className="header__authLink" to={"/user"}>
                    {user.firstName}
                </NavLink>
                <NavLink className="header__authLink" to={'/login'} onClick={logOff}>
                    Выход
                </NavLink>
            </div>
        )}
    </header>
  );
}
