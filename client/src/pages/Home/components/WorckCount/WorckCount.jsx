import React from 'react';
import s from './WorckCount.module.scss';

export const WorckCount = ({title, one, twoe}) => {
  return(
    <div className={s.worck}>
      <div className={s.title}>{title}</div>
      <div className={s.count}> <span>{one}</span> / {twoe} </div>
    </div>
  );
}