const ChatMessage = ({name,message}) => {
  return (
    <div className="p-3 flex items-center">
      <img
        className="h-5 rounded-full"
        src="https://lh3.googleusercontent.com/a/ACg8ocIypZtj-81l1HB5urLJgkyNV9QyQuNTFA6V_UFxnE6_ijuyblg4=s360-c-no"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
