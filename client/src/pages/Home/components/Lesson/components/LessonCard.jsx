import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player'
import s from "./lessonCard.module.scss";

import person from '../assets/persone.svg';
import location from '../assets/location.svg';
import vector from '../assets/vector.svg';


export const LessonCard = ({mentor, title, description, url}) => {


  const [videoVisible, setVideoVisible] = useState(false);
  let openHeandle = () => setVideoVisible(!videoVisible);

  return (
    <div className={s.lessonCard}>
      <div className={s.row}>
        <div className={s.title}><span>1</span>{title}</div> 
        <div className={s.date}>20.08.2020</div>
      </div>
      <div className={s.item}>
        <div className={s.ticher}> 
          <div><img src={person} alt=""/> {mentor}</div>
          <Link to="/"><img src={location} alt=""/>Zoom</Link>
        </div>
        <div className={s.btnGroup}>
          <button className={s.btnP}>Cдать</button>
          <button className={s.btnVector} onClick={openHeandle}><img src={vector} alt=""/></button>
        </div>
      </div>
      <div className={videoVisible ? s.open : s.closed}>
        <div>{description}</div>
        <ReactPlayer width={`100%`} height={`100%`}  url={url}></ReactPlayer>
      </div>
  </div>
  )
}