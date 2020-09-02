import React from 'react';
import s from './loading.module.scss';

export const Loading = () => {
  return (
    <div className={s.inner}>
      <div className={s.title}>Загрузка</div>
    </div>
  )
}