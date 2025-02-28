import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    return (
        <div className="">
           {/* Header  */}
          <div className="w-9/12 text-center mx-auto my-3 text-black font-bold bg-gray-200 shadow-lg p-3 ">
          <div className="flex justify-between">
          <span>{data?.title} ({data.itemCards.length})</span>
          <span>⬇️</span>
          </div>
          
            <ItemList items={data?.itemCards}/>
          </div>
           {/* Accordion Body */}
         
        </div>
    )
}

export default RestaurantCategory;