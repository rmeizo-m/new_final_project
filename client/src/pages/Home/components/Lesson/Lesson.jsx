import React from 'react';
import {Link} from 'react-router-dom';
import s from './lesson.module.scss';

import person from './assets/persone.svg';
import location from './assets/location.svg';
import vector from './assets/vector.svg';

export const Lesson = () => {
  return (
  <div className={s.lesson}>
    <div className={s.selectGroup}>
      <select></select>
      <select></select>
    </div>
    <div className={s.lessonGroup}>
      <div className={s.lessonCard}>
        <div className={s.row}>
          <div className={s.title}><span>1</span>Введение в автотесты</div> 
          <div className={s.date}>20.08.2020</div>
        </div>

        <div className={s.item}>
          <div className={s.ticher}> 
            <div><img src={person} alt=""/> Павел Уколов</div>
            <Link to="/"><img src={location} alt=""/>Zoom</Link>
          </div>
          <div className={s.btnGroup}>
            <button className={s.btnP}>Проверка</button>
            <button className={s.btnVector}><img src={vector} alt=""/></button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  );
}