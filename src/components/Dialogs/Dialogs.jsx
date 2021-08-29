import React from 'react';

import dialog from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={dialog.dialog + ' ' + dialog.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={dialog.message}>{props.message}</div>;
};
const Dialogs = props => {
  let DialogsData = [
    { id: 1, name: 'Dima' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Dima' },
    { id: 5, name: 'Ana' },
  ];
  let messagesData = [
    { id: 1, message: 'hi' },
    { id: 3, message: 'haw are you' },
    { id: 4, message: 'ok' },
    { id: 5, message: 'hello' },
  ];

  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogItems}>
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
      </div>
      <div className={dialog.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};
export default Dialogs;
