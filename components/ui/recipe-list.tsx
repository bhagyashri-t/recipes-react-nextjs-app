"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { RecipeContext } from "@/context/recipe-context";
import { useContext, useEffect, useState } from "react";
import { Recipe } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function RecipeList ({recipes} : {recipes :Array<Recipe>} ) {
    const [filterRecipes, setFilterRecipes] = useState<Array<Recipe>>([]);

    const  {state: selectedCuisine} = useContext(RecipeContext);
    useEffect( () => {
        const getFilteredRecipes = async () => {
            const filtredRecipes = recipes.filter((recipe: Recipe)=> recipe.cuisine === selectedCuisine.selectedCuisine);
            
            setFilterRecipes(filtredRecipes);
        }

        if(selectedCuisine) {
            getFilteredRecipes();
        }

    },[recipes, selectedCuisine]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 lg:gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40" >
        {(filterRecipes.length>0 ? filterRecipes : recipes).map((recipe: Recipe)=> (
            <Link href={`/recipes/${recipe.id}`} key={`${recipe.name}-${recipe.id}`} >
            <Card className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient">
                <CardHeader>
                    <Image src={recipe.image} alt={recipe.name} width="500" height="500" className="bg-cover rounded-md shadow-xl" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">{recipe.name}</CardTitle>
                </CardContent>
                <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                    <div className="flex flex-col">
                        <p className="text-lg"> Serves</p>
                        <p className="text-gray-800">{recipe.servings}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg"> Prep Time</p>
                        <p className="text-gray-800">{recipe.prepTimeMinutes} MIN</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg"> Cook Time</p>
                        <p className="text-gray-800">{recipe.cookTimeMinutes} MIN</p>
                    </div>
                </CardFooter>
                </Card>
                </Link>
        ))}
        
        </div>
    )
}