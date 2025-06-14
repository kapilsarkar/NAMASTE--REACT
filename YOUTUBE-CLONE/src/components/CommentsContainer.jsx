import commentList from "../utils/commentList";
import CommentList from "./CommentList";
const CommentsContainer = () => {
  return (
    <div className=" w-full px-3 mt-5">
      <h2 className=" text-2xl font-bold">Comments : </h2>
      <div className="flex flex-col mt-3">
        <CommentList comments={commentList} />
      </div>
    </div>
  );
};

export default CommentsContainer;
