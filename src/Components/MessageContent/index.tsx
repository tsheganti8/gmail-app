import axios from 'axios';
import React from 'react';
import './messagecontent.css'

export const MessageContent = (props: { messageID: string }) => {

    const [messageContent, setMessageContent] = React.useState<any>({});

    React.useEffect(() => {
        if (props.messageID) {
            axios.get(`http://localhost:3001/messages/${props.messageID}`)
                .then(function (response) {
                    // handle success
                    setMessageContent(response.data)
                })
                .catch(function (error) {
                    // handle error                    
                    setMessageContent({})
                });
        }
    }, [props.messageID])

    return (<div className='messageContentContainer'>
        <div className='header'>
            <div className='subjectContainer'>
                <p className='subject'>{messageContent.subject}</p>
                <p className='from'>{messageContent.from}</p>
            </div>
            <p className='date'>{messageContent.date}</p>
        </div>
        <div className='messageBody'>{messageContent.body}</div>
    </div>)
}