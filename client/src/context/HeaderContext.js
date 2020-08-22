import { createContext } from 'react';

export const menuItem = createContext([
    {link: "/", title: "Главная"},
    {link: "/news", title: "Новости"},
    {link: "/members", title: "Участники"},
    {link: "/teachers", title: "Менторы"}
]);