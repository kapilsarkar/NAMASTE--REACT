const VideoCards = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-52 media338:w-72 shadow-lg">
      <img
        alt="thumbnail"
        className="w-72 rounded-lg shadow-md  hover:cursor-pointer hover:scale-95"
        src={thumbnails?.medium?.url}
      />
      <ul className="flex flex-col w-auto gap-1 mt-2">
        <li className="hover:cursor-pointer hover:scale-105 font-bold ml-2 py-2 media338:w-72 block">
          {title}
        </li>
        <li className="hover:cursor-pointer inline-flex ml-2 w-fit">
          {channelTitle}
        </li>
        <li className=" font-bold hover:cursor-pointer inline-flex ml-2 w-fit">
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
};

// const fn = (VideoCards) => {
//   return <VideoCards />;
// };

export default VideoCards;
