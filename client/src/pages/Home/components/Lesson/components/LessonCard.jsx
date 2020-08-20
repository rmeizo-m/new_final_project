import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player'
import s from "./lessonCard.module.scss";

import person from '../assets/persone.svg';
import location from '../assets/location.svg';
import vector from '../assets/vector.svg';


export const LessonCard = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  let openHeandle = () => setVideoVisible(!videoVisible);

  return (
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
          <button className={s.btnVector} onClick={openHeandle}><img src={vector} alt=""/></button>
        </div>
      </div>
      <div className={videoVisible ? s.open : s.closed}>
        <ReactPlayer width={`100%`} height={`100%`}  playing={videoVisible} url="https://youtu.be/CueJDjYDmXk"></ReactPlayer>
      </div>
  </div>
  )
}