import React from "react";
import s from './../Dialogs.module.css';
const Message = (props) => {

    let NewMessage = React.createRef()
    let addMessage = () => {
        let MessagesText = NewMessage.current.value;
        alert(MessagesText)
    }

    return (
        <div className={s.message}>
            {props.message}
            <textarea className={s.textarea} ref={NewMessage}></textarea>
          <div>
            <button className={s.button} onClick={addMessage}>Отправить</button>
          </div>
          </div>
    )
}
export default Message;