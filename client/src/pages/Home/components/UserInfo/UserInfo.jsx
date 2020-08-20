import React from 'react';
import s from './UserInfo.module.scss';

import mail from '../../assets/mail.png';
import gitIcon from '../../assets/github.png';
import telegramIcon from '../../assets/telegram.png';




export const UserInfo = ({info}) => {
  return (
    <div className={s.inner}>
      <div className={s.userName}>{info.name}</div>
      <div className={s.item}>
          <img src={gitIcon} alt=""/>
          <span>{info.git}</span>
        </div>
      <div className={s.item}>
          <img src={mail} alt=""/>
          <span>{info.email}</span>
        </div>
      <div className={s.item}>
        <img src={telegramIcon} alt=""/>
        <span>{info.tel}</span>
      </div>
    </div>
  );
}