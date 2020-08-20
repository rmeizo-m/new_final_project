import React from 'react';
import Calendar from 'react-calendar';
import s from './Calendar.module.scss';
import 'react-calendar/dist/Calendar.css';
import './Calendar.scss';

export const CalendarHome = () => {
  return(
    <>
      <div className={s.row}>Friday</div>
      <div className={s.date}>
        <div className={s.monsd}>Aug</div>
        <div className={s.day}>20</div>
        <div className={s.yaer}>2020</div>
      </div>
      <Calendar 
         clasName={["react-calendar", "react-calendar__tile "]} 
      />
    </>
  );
}