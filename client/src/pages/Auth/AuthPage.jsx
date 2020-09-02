import React, { useState, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

import enot from '../../assets/enot/enot3.png'

import s from  './auth.module.scss';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [ form, setForm ] = useState({ email: '', password: '' });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  
  // const registerHandler = async () => {
  //   try{
  //     const data = await request('/api/auth/register', 'POST', { ...form });
  //     console.log('Data', data);
  //   } catch (e) {}
  // }


  const loginHandler = async () => {
    try{
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(
        data.token, 
        data.userId
        );
      console.log('date', data);
    } catch (e) {}
  }
  return(
  <div className="inner">
    <div className={s.content}>
      <div className={s.wrapper}>
        <img className={s.loginImg}src={enot} alt="Крутая картинка"/>
      </div>
      <form id="dataForm" className={s.formContent}>
            <h1 className={s.formName}>BeeInterns</h1>
            <input className={s.inputForm} 
              name="email" 
              id="email" 
              type="text" 
              onChange = {changeHandler}
              placeholder="email"/>
            <input className={s.inputForm}
              name="password" 
              id="password" 
              type="password" 
              onChange = {changeHandler}
              placeholder="Пароль"/>
            <button type="submit" className={s.inputButton}
            onClick={loginHandler}
            disabled={ loading }
            >
              Вход
              </button>
            
            {/* <button type="submit" className={s.inputButton} 
            onClick={registerHandler} 
            disabled={ loading }
            >
              Регистрация
            </button> */}
        </form>
    </div>
  </div>
  );
}
