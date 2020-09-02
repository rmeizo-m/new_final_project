import React, { useContext } from 'react';
import {  useLocation, Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {menuItem} from '../../context/HeaderContext'

import s from './header.module.scss';
import logo from '../../assets/header/logo1.png';
import bar from '../../assets/header/hotdog.svg';
import cross from '../../assets/header/cross.svg';

export const Header = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const history = useHistory();
  const loc = useLocation();
  const menu = useContext(menuItem);
  const auth = useContext(AuthContext);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  function MenuItem(item, index) {
    const className = item.link === loc.pathname ? s.menuSelection : s.menuItem;
    return (
    <li className={s.menuLink} key={index}>
      <Link className={className} 
      active={item.link === loc.pat} 
      to={item.link}> {item.title}</Link> 
    </li>);
  }

  const logoutHeandler = e => {
    e.preventDefault();
    auth.logout();
    history.push('/');
  }



  return (
    <div className={s.header}>
      <div className={s.inner}>
        <div className={s.logoGroup}>
        <button className={s.barCross} onClick={toggleMenu}>
        {menuVisible?
          <img className={s.cross} src={cross} alt="cross" />:
          <img className={s.bar} src={bar} alt="bar" />
        }
        </button>
        <img className={s.logo} src={logo} alt="logo" />
        </div>
        <div className={s.title}>
          {(menu.find(t => t.link === loc.pathname) || {title: 'Unknown page'}).title}
        </div>
        <ul className={menuVisible? `${s.menu} ${s.menuOpen}`: s.menu}>
          {menu.map(MenuItem)}
         
          <button className={`btn ${s.btn}`}
          onClick={logoutHeandler}
          >Выход</button>
        </ul>
      </div>
    </div>
  );
}