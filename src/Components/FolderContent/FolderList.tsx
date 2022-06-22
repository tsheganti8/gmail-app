import axios from 'axios';
import React from 'react';
import './folderlist.css'

export const FolderList = (props: { onFolderClick: (data: any) => void }) => {
    const [folderList, setFolderList] = React.useState<string[]>([]);

    const handleFolderClick = (item: string) => {
        props.onFolderClick(item);
    };

    React.useEffect(() => {
        axios.get('http://localhost:3001/folders')
            .then(function (response) {
                // handle success                
                setFolderList(response.data);
                handleFolderClick(response.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    return (<div className='folderContainer'>
        {folderList.map(item => {
            return <div className='folderItem' key={item} onClick={handleFolderClick.bind(null, item)}>{item}</div>
        })}
    </div>)
}