import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Cart Page</h2>
            <button className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-1 font-bold shadow-2xl mt-2" onClick={handleClearCart} >Clear Cart</button>
            {cartItems.length === 0 && (<div className="text-center text-2xl font-bold mt-3">
                Your cart is empty! Add items to your cart.
            </div>)}
            <div className=" w-6/12 mx-auto p-2 border-gray-500 font-bold text-xs text-left border-b-2 m-1">
                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;