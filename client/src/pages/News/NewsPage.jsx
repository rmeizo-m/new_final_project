import React from 'react';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import './news.scss';
import enot from '../../assets/enot/enot7.png';

export const NewsPage = () => {
  return(
    <section className="news-content-wrapper">
        <div className="news-area">
          <NewsForm />
          <NewsList />
        </div>
        <div className="enot-wrapper">
          <img className="enot" id="enot" src={enot} alt="" />
        </div>
      </section>

  );
}