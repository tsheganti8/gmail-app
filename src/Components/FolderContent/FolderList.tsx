import React from 'react';
import './folderlist.css'

export const FolderList = () => {
    const [folderList, setFolderList] = React.useState<string[]>([]);

    React.useEffect(() => {
        setFolderList([
            "Inbox",
            "Trash",
            "Work Emails",
            "Mailing Lists",
            "Sent",
            "Spam",
            "Drafts",
            "Personal"
        ]);
    }, [])

    return (<div className='folderContainer'>
        {folderList.map(item => {
            return <div className='folderItem'>{item}</div>
        })}
    </div>)
}