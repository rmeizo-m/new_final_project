import React, {useState, useEffect, useCallback} from 'react';
import {LessonCard} from './components/LessonCard';
import {useHttp} from '../../../../hooks/http.hook';

import s from './lesson.module.scss';


export const Lesson = () => {

  const [lesson, setLesson] = useState([]);
  const {request} = useHttp();

  const getLesson= useCallback( async () => {
    try {
      const data = await request('/api/user/lessons', 'GET');
      setLesson(data);
      console.log("test", data);
    } catch(e) {}
  });

  useEffect(() => {
    getLesson()
  }, []);

  // Не забыть вернуть запрос и распарсить
  // const les = lessons.map((lesson, index) => {
  //   <LessonCard key={index} />
  // });


  return (
  <div className={s.lesson}>
    <div className={s.selectGroup}>
      <select>
        <option value="value1">Все</option> 
        <option value="value2" selected>Не сданы</option>
        <option value="value3">Сданы</option>
      </select>
      <select>
        <option value="value1">Месяц</option> 
        <option value="value2" selected>Январь</option>
        <option value="value3">Февраль</option>
        <option value="value3">Март</option>
        <option value="value3">Апрель</option>
        <option value="value3">Май</option>
        <option value="value3">Июнь</option>
      </select>
    </div>
    <div className={s.lessonGroup}>
      {/* {les} */}
     <LessonCard />
     <LessonCard />
     <LessonCard />
     <LessonCard />
     <LessonCard />
     <LessonCard />
     <LessonCard />
     <LessonCard />
     <LessonCard />
    </div>
  </div>
  );
}