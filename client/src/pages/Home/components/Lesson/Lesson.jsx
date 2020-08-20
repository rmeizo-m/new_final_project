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
      <select></select>
      <select></select>
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