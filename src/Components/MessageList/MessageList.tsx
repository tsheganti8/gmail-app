import React from 'react';
import { MessageContent } from '../MessageContent';
import { MessageListHeader } from '../MessageListHeader';
import './messagelist.css'

export const MessageList = () => {
    const [messageList, setMessageList] = React.useState<any[]>([]);
    const [messageID, setMessageID] = React.useState<string>('');

    React.useEffect(() => {
        setMessageList([
            {
                "message_id": "123abc",
                "from": "Jane Doe",
                "subject": "Re: Postgres Meetup Thursday"
            },
            {
                "message_id": "456def",
                "from": "Richard Roe",
                "subject": "Lunch Next Week"
            },
            {
                "message_id": "789aaa",
                "from": "Alan Turing",
                "subject": "Emacs Release Update"
            },
            {
                "message_id": "098ddd",
                "from": "Grace Hopper",
                "subject": "New Compiler Version Available"
            }
        ]);
    }, [])

    const handleMessageClick = (item: any) => {
        setMessageID(item.message_id)
    }

    const getMessageListcontent = () => {
        if (messageID) {
            return <MessageContent />
        } else {
            return <div>
                {messageList.map(item => {
                    return <div onClick={handleMessageClick.bind(null, item)} className='messageItem'>{item.subject}</div>
                })}
            </div>
        }
    }

    const handleOnBackClick = () => {
        setMessageID("")
    }

    return (<div className='messageContainer'>
        {messageID && <MessageListHeader onBackClick={handleOnBackClick} />}
        {getMessageListcontent()}
    </div>)
}