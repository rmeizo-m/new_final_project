import React from 'react';
import {ModalAvatar} from '../Modal/ModalAvatar';
import s from './avatar.module.scss';
// import noavata from './assets/noAvatar.svg';

export const Avatar = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const isOpenModalHeandler = () => {
    setModalVisible(!modalVisible);
  } 

      return (
        <>
          <div className={s.avatar} onClick={isOpenModalHeandler}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt=""/>
          </div>
          <ModalAvatar 
          open={isOpenModalHeandler} 
          modal={modalVisible}
          />
      </>
      );
}