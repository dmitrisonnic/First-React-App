import React from 'react';

import dialog from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = props => {
  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogItems}>
        <div className={dialog.dialog + ' ' + dialog.active}>
          <NavLink to="/dialogs/1">Dima</NavLink>{' '}
        </div>
        <div className={dialog.dialog}>
          <NavLink to="/dialogs/2">Adrew</NavLink>
        </div>
        <div className={dialog.dialog}>
          <NavLink to="/dialogs/3">Dina</NavLink>
        </div>
        <div className={dialog.dialog}>
          <NavLink to="/dialogs/4">Sveta</NavLink>
        </div>
        <div className={dialog.dialog}>
          <NavLink to="/dialogs/5">Anton</NavLink>
        </div>
      </div>
      <div className={dialog.messages}>
        <div className={dialog.message}>hi</div>
        <div className={dialog.message}>haw are you</div>
        <div className={dialog.message}>ok</div>
      </div>
    </div>
  );
};
export default Dialogs;
