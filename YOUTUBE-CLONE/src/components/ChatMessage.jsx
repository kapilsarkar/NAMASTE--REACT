const ChatMessage = ({name,message}) => {
  return (
    <div className="p-3 flex items-center">
      <img
        className="h-5 rounded-full"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/user-chat-3d-icon-download-in-png-blend-fbx-gltf-file-formats--communication-message-social-media-pack-interface-icons-5656067.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
