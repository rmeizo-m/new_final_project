import React, { useEffect, useState, useCallback } from 'react';
import {Avatar} from './components/Avatar/Avatar';
import {UserInfo} from './components/UserInfo/UserInfo';
import {WorckCount} from './components/WorckCount/WorckCount';
import {Lesson} from './components/Lesson/Lesson';
import {CalendarHome} from './components/Calendar/Calendar';
import {useHttp} from '../../hooks/http.hook'

import s from './home.module.scss';

export const HomePage = () => {

  const [info, setInfo] = useState([]);
  const {request} = useHttp();

const getHome = useCallback( async () => {
  try {
    const data = await request('/api/user/name', 'POST', {email: 'test@mail.ru'});
    setInfo(data);
    console.log(data);
  } catch(e) {}
});

useEffect(() => {
  getHome()
}, []);

  return(
    <div className={s.inner}>
      <div className={s.row}>
        <div className={s.userBlock}>
          <Avatar />
          <UserInfo
            info={info}
          />
        </div>
        <div className={s.worckGroup}>
          <WorckCount title={'Тест'} one={'1'} twoe={'2'}/>
          <WorckCount title={'Домашние задания'} one={'30'} twoe={'32'}/>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.calendar}>
          <CalendarHome />
        </div>
        <Lesson />
      </div>
    </div>
  );
}