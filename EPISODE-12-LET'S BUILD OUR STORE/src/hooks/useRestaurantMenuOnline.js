import { useEffect, useState } from "react";
import { MENU_API_ONLINE } from "../utils/constant";


const useRestaurantMenuOnline = () => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API_ONLINE);
            const json = await data.json();
            console.log(json.data);
            setResInfo(json.data);
        }
        catch (err) {
            console.error("Error While Fetching Data", err);
        }

    }
    return resInfo;
}

export default useRestaurantMenuOnline;