import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.MessagesPage;

    let dialogsElement = state.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElement = state.MessagesData.map(message => <Message message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;

    // [] - это массив данных, в котором отсчет начинается с 0. В массиве данных
    // обязатльны ID and NAME
    // [{}] - {} - объект

    let NewMessage = React.createRef()
    let addMessage = () => {
        let MessagesText = NewMessage.current.value;
        alert(MessagesText)
    }
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;