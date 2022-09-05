import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineGooglePlus, AiFillApple } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import Input from '../custom/Input';
import { Link } from 'react-router-dom';
import IconMochi from '../assets/image/Mochimeow 1.png';
import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  width: 561px;
  ${'' /* height: 566px; */}
  margin: 0px auto;
  background-color: #f8f8f8;
  position: relative;
  .login__title {
    background-color: #ffcb08;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    height: 60px;
    display: flex;
    align-items: center;

    .button__close {
      background-color: #ffffff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 26px;
      font-weight: bold;
      ${
        '' /* display: flex;
      align-items: center;
      justify-content: center; */
      }
      cursor: pointer;
      border: none;
      color: #ffcb08;
      margin-left: 10px;
    }
    h3 {
      ${'' /* font-size: 24px; */}
      margin-left: 180px;
    }
  }
  .login__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    row-gap: 10px;
    #google {
      width: 60%;
      background-color: #d21919;
      height: 40px;
      border: none;
      border-radius: 20px;
      color: white;

      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      font-size: 24px;
      margin: 0 5px;
    }
    #facebook {
      width: 60%;
      background-color: #007bfe;
      height: 40px;
      border: none;
      border-radius: 20px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #apple {
      width: 60%;
      background-color: #000000;
      height: 40px;
      border: none;
      border-radius: 20px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 15px;
      width: 80%;
      margin-bottom: 20px;
      .form__input {
        padding: 15px;
        width: 80%;
        border-radius: 5px;
        border: none;
        background-color: #ffffff;
      }
      .form__button {
        width: 60%;
        padding: 10px;
        color: white;
        background-color: #e0e0e0;
        border-radius: 20px;
        border: none;
        cursor: pointer;
      }
      .form__forget-password {
        font-size: 16px;
        color: #2f80ed;
      }
    }
  }
`;
function LoginPage({ googleAccount, login }) {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/');
  // }, [googleAccount, navigate]);
  // const accountGoogle = localStorage.getItem('accountGoogle');
  // if (accountGoogle) {
  //   login(accountGoogle);
  //   navigate('/');
  // }
  return (
    <Wrapper>
      <div className="login__title">
        {/* <div className="button__close"> */}
        <button className="button__close">X</button>
        {/* </div> */}
        <h3>Đăng nhập</h3>
      </div>
      <div className="login__content">
        <h3>Đăng nhập tài khoản học MochiMochi</h3>
        <button id="google" onClick={signInWithGoogle}>
          <AiOutlineGooglePlus className="icon" />
          Đăng nhập với Google
          <AiOutlineGooglePlus className="icon" />
        </button>
        <button id="facebook">
          <GrFacebookOption className="icon" />
          Đăng nhập với Facebook
        </button>
        <button id="apple">
          <AiFillApple className="icon" />
          Đăng nhập với Apple
        </button>
        <h5>HOẶC</h5>
        <form className="login__form">
          <Input
            name="email"
            type="email"
            classname="form__input"
            placeholder="Nhập email tài khoản học"
          />
          <Input
            name="password"
            type="password"
            classname="form__input"
            placeholder="Nhập chính xác mật khẩu của bạn"
          />
          <button type="submit" className="form__button">
            Đăng nhập
          </button>
          <Link to="/forget-password" className="form__forget-password">
            Quên mật khẩu?
          </Link>
        </form>
        <div>
          Chưa có tài khoản? <Link to="/sign-up">Tạo tài khoản học mới</Link>
        </div>
      </div>
      <img src={IconMochi} alt="icon-mochi" />
    </Wrapper>
  );
}

export default LoginPage;
