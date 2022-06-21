import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './messagelistheader.css'

export const MessageListHeader = (props: { onBackClick: () => void }) => {
    return <div className='iconHeader'>
        <span className='icon'> <ArrowBack onClick={props.onBackClick} /></span>
        <span className='icon'> <DeleteIcon /></span>
    </div>
}