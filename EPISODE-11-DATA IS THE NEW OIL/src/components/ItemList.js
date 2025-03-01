import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 border-gray-500 font-bold text-xs text-left border-b-2 m-1"
        >
          <div className=" flex flex-wrap justify-between gap-1 ">
            <div className="py-2 w-9/12">
              <span className="font-bold text-xl">
                {item?.card?.info?.name}
              </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 flex flex-col items-center justify-center">
              <img
                className=" w-full p-2 shadow-2xl rounded-xl"
                src={CDN_URL + item?.card?.info?.imageId}
              />
              <button className="px-5 py-2 text-xs font-bold text-center bg-white mx-5 rounded-xl text-green-500 shadow-2xl">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
