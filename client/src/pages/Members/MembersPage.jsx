import React from 'react';
import MemberTable from './components/MemberTable';
import './Members.scss';
import enot from '../../assets/enot/enot1.png';

export const MembersPage = () => {
  return(
    <>
    <div className="table-area">
      <MemberTable />
      <div className="member-enot-wrapper">
        <img className="member-enot" id="enot1" src={enot} alt="" />
      </div>
    </div>

    </>
  );
}
