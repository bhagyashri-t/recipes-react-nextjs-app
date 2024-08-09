"use client";

import { Badge } from "@/components/ui/badge";
import  {RecipeContext, State}  from "@/context/recipe-context";
import {useContext, useState} from "react";

export default function BadgeFilter() {
    const [badge, setBadge] = useState('All');
    const {dispatch} = useContext(RecipeContext);
    const cuisines: Array<string>= ["All", "Italian", "Indian", "American", "Japanese", "Thai", "Mexican"];

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cuisine:string)=> {
        e.preventDefault();
        console.log("selected: ", cuisine);
       dispatch({
        type: "SELECTED_CUISINE",
        payload: {selectedCuisine: cuisine}
       })
    }

    return (
        <div className="my-10">
        {cuisines.map((cuisine, idx) => (<Badge aria-readonly key={`${cuisine}-${idx}`} 
            className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200" 
            variant={"outline"}
            onClick={(e : React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnClick(e, cuisine)}> {cuisine} </Badge>))}
        </div>
    )
}