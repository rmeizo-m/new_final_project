import React from 'react';
import s from './WorckCount.module.scss';

export const WorckCount = () => {
  return(
    <div className={s.worck}>
      <div className={s.title}>Домашнии задания</div>
      <div className={s.count}> <span>12</span> / 42 </div>
    </div>
  );
}