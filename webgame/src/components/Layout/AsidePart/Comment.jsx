import { Col, Row } from "react-bootstrap";
import CommentsForm from "./CommentsForm";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  // const createdAt =  new Date(comment.createdAt).toLocaleString();
  return (
    <div key={comment.id} className="comment">
      {/* <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div> */}
      <div >
        <Row className="comments-chat pb-1">
          <Col lg={4}>
            <img className="comment-img" src={comment.url} />
          </Col>
          <Col className=" " lg={8}>
            <div className="comment-author">{comment.username}</div>
          {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentsForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
          )}
          <Row className="comment-actions mt-2">
          {canReply && (
            <Col
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </Col>
          )}
          {canEdit && (
            <Col
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </Col>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </Row>
          </Col>
          {/* <div>{createdAt}</div> */}
        </Row>


        {isReplying && (
          <CommentsForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies && replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
