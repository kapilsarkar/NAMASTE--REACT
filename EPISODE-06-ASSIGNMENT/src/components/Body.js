import { useState,useEffect } from "react"
import {RESTAURANT_TO_EXPLORE} from "../utils/constant"
const Body = ()=>{
  useEffect(()=>{
        FetchTopRestaurantToExplore()
  },[])

 const FetchTopRestaurantToExplore = async ()=>{
    const data  = await fetch(RESTAURANT_TO_EXPLORE)
    const json = await data.json()
    console.log(json)
 }

    return(
        <div className="Body">
           <h3>Restaurants To Explore</h3>
        </div>
    )
}

export default Body