import * as React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

const MemberTable = () => {
  return (
    <table className="members-table">
      <thead>
        <tr>
      <th className="empty-th" />
      <th>ФИО</th>
      <th className="second-th"><p>Git</p></th>
      <th className="second-th"><p>Mail</p></th>
      <th className="second-th"><p>Telegram</p></th>
      </tr>
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      </thead>
    </table>
  );
}

function MembersTableRow(props) {
  return (
    <tr className="member-row">
      <td className="avatar-td">
        <div className="member-avatar-wrapper">
          <img className="member-avatar-image" src={props.photoUrl} alt="" />
        </div>
      </td>
      <td>{props.username}</td>
      <td>
        <Link to="/">
          <FontAwesomeIcon className="contacts-img" id="git" icon={faGithub} />
          <p className="member-link">{props.gitlink}</p>
        </Link>
      </td>
      <td>
        <Link to="/">
          <FontAwesomeIcon className="contacts-img" id="mail" icon={faEnvelope} />
          <p className="member-link">{props.maillink}</p>
        </Link>
      </td>
      <td>
        <Link to="/">
          <FontAwesomeIcon className="contacts-img" id="telegram" icon={faTelegram} />
          <p className="member-link">{props.telink}</p>
        </Link>
      </td>
    </tr>
  );
}

export default MemberTable