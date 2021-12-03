import React, { useState } from "react";
import { Input } from "./Input";
import { CommonButton } from "./CommonButton";
import "./ModalForm.scss";

export function ModalForm() {
  const [isActiveLoginForm, setActiveLoginForm] = useState(true);
  const [loginForm, setLoginForm] = useState({ id: "", password: "" });
  const [signUpForm, setSignUpForm] = useState({ name: "", email: "", pw: "" });
  
  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  }

  const handleChangeSignUpForm = (e) => {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  }

  const handleClickLoginButton = () => {
    if(isActiveLoginForm) {
      console.log(loginForm);
    } else {
      setSignUpForm({ name: "", email: "", pw: "" });
      setActiveLoginForm(true);
    }
  }

  const handleClickSignUpButton = () => {
    if(isActiveLoginForm) {
      setLoginForm({ id: "", password: "" });
      setActiveLoginForm(false);
    } else {
      console.log(signUpForm);
    }
  }

  return(
    <form>
      <h1 className="form-title">{isActiveLoginForm ? "로그인" : "회원가입"}</h1>
      {isActiveLoginForm ?
        (<>
          <Input
            name="id"
            onChange={handleChangeLoginForm}
            value={loginForm.id}
            type="text"
            placeholder="아이디를 입력하세요."
          />
          <Input
            name="password"
            onChange={handleChangeLoginForm}
            value={loginForm.password}
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
        </>) :
        (<>
          <Input 
            name="name"
            onChange={handleChangeSignUpForm}
            value={signUpForm.name}
            type="text"
            placeholder="이름을 입력하세요."
          />
          <Input 
            name="email"
            onChange={handleChangeSignUpForm}
            value={signUpForm.email}
            type="text"
            placeholder="이메일 주소를 입력하세요."
          />
          <Input 
            name="pw"
            onChange={handleChangeSignUpForm}
            value={signUpForm.pw}
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
        </>)}
      <div className="button-box">
        <CommonButton 
          text="로그인"
          large
          handleClickButton={handleClickLoginButton}
        />
        <CommonButton 
          text="회원가입"
          isBlue
          large
          handleClickButton={handleClickSignUpButton}
        />
      </div>
    </form>
  )
}