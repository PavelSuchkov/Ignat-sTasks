import React from 'react';
import classes from "./Message.module.css";


type propsMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: propsMessageType) {
    return (
        <div className={classes.messageWrapper}>
            <div className={classes.avatarWrapper}>
                <img className={classes.avatar} src={props.avatar} alt=""/>
            </div>
            <div className={classes.triangle}/>
            <div className={classes.messageContent}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.innerMessage}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
