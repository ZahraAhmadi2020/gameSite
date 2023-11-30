import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
const CommentsForm = ({
  handleSubmit,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>

      <div  className='send-msg positopn-relative d-flex'>
        <input
        className="comment-form-textarea  text-light"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Write your comment'
      />


       <button className='send-icon '  disabled={isTextareaDisabled}>
        <MdSend />
      </button>
        </div>



      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  )
}

export default CommentsForm
