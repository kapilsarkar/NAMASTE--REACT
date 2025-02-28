const ItemList = ({items}) => {
    console.log(items)
  return <div>
    <ul>
        {items.map((item)=> <li key={item.card.info.id}></li>)}
    </ul>
  </div>;
};

export default ItemList;
