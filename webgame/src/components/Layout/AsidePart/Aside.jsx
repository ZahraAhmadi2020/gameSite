
import React from 'react';
import '../AsidePart/Aside.css';
import CommentChat from './CommentChat';

const Aside = () => {

  return (
    <div className='p-0 m-0'>
      <p className='localchat'>Local chat</p>
       <CommentChat
        currentUserId="1"
      />
    </div>
  )
}

export default Aside
