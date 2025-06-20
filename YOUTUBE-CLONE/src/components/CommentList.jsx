import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className=" w-full dark:bg-gray-900 text-black dark:text-white">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment name={comment.name} text={comment.text} />
          {comment.replies?.length > 0 && (
            <div className="pl-6 border-l border-gray-300 ml-3">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
