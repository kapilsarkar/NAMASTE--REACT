const Comment = ({ name, text }) => {
  return (
    <div className="p-2 my-2 border border-gray-300 rounded shadow-sm bg-white">
      <div className="p-2 my-2 border border-gray-300 rounded shadow-sm bg-white">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
