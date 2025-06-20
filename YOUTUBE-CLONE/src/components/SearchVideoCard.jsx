const SearchVideoCard = ({ video }) => {
  const { snippet } = video;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  return (
    <div className=" py-3 flex flex-wrap dark:bg-gray-900 text-black dark:text-white">
      <div className="  bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-3 dark:bg-gray-900 text-black dark:text-white">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-72 rounded-lg shadow-md  hover:cursor-pointer hover:scale-95"
        />
        <ul className="flex flex-col w-auto gap-1 mt-2">
          <li className="hover:cursor-pointer hover:scale-105 font-bold  py-2 media338:w-72 block">
            {title}
          </li>
          <li className="hover:cursor-pointer inline-flex  w-fit">
            {channelTitle}
          </li>

          <li className="text-xs text-gray-400">
            {new Date(publishedAt).toLocaleDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchVideoCard;
