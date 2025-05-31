import { useEffect, useState } from "react";
import { MENU_API_ONLINE } from "../utils/constant";
const useRestaurantMenuOnline = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API_ONLINE + resId);
            const json = await data.json();
            setResInfo(json.data)
            console.log(json.data)
        }
        catch (err) {
            console.error("Error While Fetching Data", err);
        }

    }
    return resInfo;
}

export default useRestaurantMenuOnline;