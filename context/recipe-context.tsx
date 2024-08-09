"use client";
import { init } from "next/dist/compiled/webpack/webpack";
// import { StringToBoolean } from "class-variance-authority/types";

import React, { useReducer, createContext} from "react";
// import {  } from "vm";

export type State = {
        selectedCuisine : string;
}

type ActionType = {
    type: string;
    payload: State;
}

const initialState: State = {
        selectedCuisine: "",
}


const recipeReducer = (state = initialState, {type, payload}: ActionType) => {
    switch (type) {
        case "SELECTED_CUISINE":
            return {...state, selectedCuisine: payload.selectedCuisine};

        default:
            return state;
    }
}

export const RecipeContext = createContext<{
    state: State;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });

export default function RecipeProvider({ children,}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    return (
    <RecipeContext.Provider value={{state,dispatch}}>
            {children} 
    </RecipeContext.Provider>);
    
}