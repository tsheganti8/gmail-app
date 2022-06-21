import React from 'react';
import './messagecontent.css'

export const MessageContent = () => {
    const [messageList, setMessageList] = React.useState<any[]>([]);
    const [messageID, setMessageID] = React.useState<boolean>(false);

    const [messageContent, setMessageContent] = React.useState<any>({})

    React.useEffect(() => {
        setMessageContent({
            "from": "Jane Doe <jane.doe@example.com>",
            "id": "123abc",
            "subject": "Re: Postgres Meetup Thursday",
            "to": "Coding Test User <foo.bar@example.com>",
            "date": "Mon, 21 Jun 2021 09:03:30 -0700",
            "reply-to": "Jane Doe <jane.doe@example.com>",
            "body": "Thursday's meetup will be held at 6 pm.\nPizza, beer, and soft drinks will be provided.\nI'll be giving a talk on the Postgres disk buffering system, and my colleague Alonzo Church will talk about a lambda calculus based extension language we're building."
        })
    }, [])

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