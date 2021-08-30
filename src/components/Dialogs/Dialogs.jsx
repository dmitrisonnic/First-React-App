import React from 'react';

import dialog from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = props => {
  let DialogElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messageElements = props.messagesData.map(message => <Message message={message.message} />);
  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogItems}>{DialogElements}</div>
      <div className={dialog.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
