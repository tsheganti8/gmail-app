import axios from 'axios';
import React from 'react';
import { MessageContent } from '../MessageContent';
import { MessageListHeader } from '../MessageListHeader';
import './messagelist.css'

export const MessageList = (props: { currentFolder: string }) => {
    const [messageList, setMessageList] = React.useState<any[]>([]);
    const [messageID, setMessageID] = React.useState<string>('');

    const getMessagesList = () => {
        if (props.currentFolder) {
            axios.get(`http://localhost:3001/folderData/${props.currentFolder}`)
                .then(function (response) {
                    // handle success
                    setMessageList(response.data.messages)
                })
                .catch(function (error) {
                    // handle error                    
                    setMessageList([])
                });
        }
    }

    React.useEffect(() => {
        getMessagesList();
    }, [props.currentFolder]);


    const handleMessageClick = (item: any) => {
        setMessageID(item["message-id"]);
    }

    const getMessageListcontent = () => {
        if (messageID) {
            return <MessageContent messageID={messageID} />
        } else {
            return <div>
                {messageList.map(item => {
                    return <div key={item["message-id"]} onClick={handleMessageClick.bind(null, item)} className='messageItem'>{item.subject}</div>
                })}
            </div>
        }
    }

    const handleOnBackClick = () => {
        setMessageID("")
    };

    const handleMessageDelete = () => {

        if (props.currentFolder !== "Trash") {
            axios.get(`http://localhost:3001/folderData/Trash`)
                .then(function (response) {
                    // handle success                
                    axios.put(`http://localhost:3001/folderData/Trash`, { messages: [...response.data.messages, messageList.find(i => i["message-id"] === messageID)] })
                        .then(function (response) {
                            // handle success
                            setMessageList([...messageList].filter(i => i["message-id"] !== messageID));
                        })
                        .catch(function (error) {
                            // handle error                    
                            setMessageList([]);
                        });
                })
                .catch(function (error) {
                    // handle error                    
                    setMessageList([]);
                });
        }

        // delete from current folder
        axios.get(`http://localhost:3001/folderData/${props.currentFolder}`)
            .then(function (response) {
                // handle success                
                axios.put(`http://localhost:3001/folderData/${props.currentFolder}`, { messages: [...response.data.messages].filter(i => i["message-id"] !== messageID) })
                    .then(function (response) {
                        // handle success
                        console.log("success");
                        getMessagesList();
                    })
                    .catch(function (error) {
                        // handle error
                        console.log("Fail");
                    });
            })
            .catch(function (error) {
                // handle error                    
                setMessageList([]);
            });
        setMessageID("");
    };

    return (<div className='messageContainer'>
        {messageID && <MessageListHeader onBackClick={handleOnBackClick} onDelete={handleMessageDelete} />}
        {getMessageListcontent()}
    </div>)
}