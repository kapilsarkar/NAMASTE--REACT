const VideoCards = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 media338:m-2  h-96 media338:w-72 shadow-lg">
      <img
        alt="thumbnail"
        className="w-72 rounded-lg shadow-md  hover:cursor-pointer hover:scale-95"
        src={thumbnails?.medium?.url}
      />
      <ul className="flex flex-col w-auto gap-1 mt-2">
        <li className="hover:cursor-pointer hover:scale-105 font-bold  py-2 media338:w-72 block">
          {title}
        </li>
        <li className="hover:cursor-pointer inline-flex  w-fit">
          {channelTitle}
        </li>
        <li className=" font-bold hover:cursor-pointer inline-flex  w-fit">
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
};



export default VideoCards;
