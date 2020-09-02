import React from 'react';
import {LessonCard} from './components/LessonCard';
import {Loading} from '../../../../components/Loading/Loading'

import s from './lesson.module.scss';




export const Lesson = ({info}) => {

  console.log("tt", info);

  if(!info){
    return (
      <div className={s.lesson}>
        <div className={s.selectGroup}>
        <Loading />
        </div>
      </div>
      ) 
    }

  return (
  <div className={s.lesson}>
    <div className={s.selectGroup}>
      <select>
        <option >Все</option> 
        <option >Не сданы</option>
        <option >Сданы</option>
      </select>
      <select>
        <option >Месяц</option> 
        <option >Январь</option>
        <option >Февраль</option>
        <option >Март</option>
        <option >Апрель</option>
        <option >Май</option>
        <option >Июнь</option>
      </select>
    </div>
    <div className={s.lessonGroup}>
     { info.map( (i, index) => {
       return(
          <LessonCard 
            key={index}  
            mentor={i.mentor} 
            title={i.section} 
            description={i.description} 
            url={i.url}
          /> 
       )
     })}
    </div>
  </div>
  );
}