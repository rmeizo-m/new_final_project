import React from 'react';
import s from './modalAvatar.module.scss';


export const ModalAvatar = (props) => {
  const {open, modal} = props
  return(
    <div className={modal? s.modalOpen : s.modalClose}  >
      <div className={s.modalBlock}>
        <div className={s.modalRow}>
          <span>Загрузите фото</span>
          <button onClick={open}>X</button>
        </div>
        <div className={s.modalImg}>
          <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt=""/>
        </div>
        <form>
          <label htmlFor="inputFile">Загрузить файл</label>
          <input type="file" name="inputFile" id="inputFile" className={s.inputFile} />
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
}