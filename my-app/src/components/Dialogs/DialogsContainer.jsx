import Dialogs from "./Dialogs";

import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer"

const DialogsContainer= (props) => {

    let state = props.store.getState().MessagesPage;

    // [] - это массив данных, в котором отсчет начинается с 0. В массиве данных
    // обязатльны ID and NAME
    // [{}] - {} - объект

    let NewMessage = React.createRef()
    let addMessage = () => {
        let MessagesText = NewMessage.current.value;
        alert(MessagesText)
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} MessagesPage={state} />
    )
}

export default DialogsContainer;