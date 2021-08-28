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
  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Andrew" id="2" />
        <DialogItem name="Alex" id="3" />
        <DialogItem name="Diana" id="4" />
        <DialogItem name="Ana" id="5" />
      </div>
      <div className={dialog.messages}>
        <Message message="hi" />
        <Message message="haw are you" />
        <Message message="ok" />
        <Message message="hello" />
        <Message message="bonjour" />
      </div>
    </div>
  );
};
export default Dialogs;
