import { Recipe } from "@/lib/types";
import { getRecipes } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export async function generateStaticParams() {
    const recipes = await getRecipes();

    return recipes.map((recipe: Recipe)=> ({recipeId: recipe.id.toString()}));
}

export default async function Page({params}:{params: {recipeId:string}}) {
    const {recipeId} = params;

    const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const recipe = await response.json();

    if (!recipe) {
        return <h1>No Recipe found</h1>;
      }
    

    return (
        <div className="container p-10">
        <Link className="text-lg font-semibold text-gray-600" href="/"> 	&larr; Back to all Recipes</Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mt-10">

            <div>
                <div className="text-5xl">
                    {recipe.name}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-10 lg:mt-24">
                    <div className="flex flex-col">
                    <p className="text-2xl"> Cuisine</p>
                    <p className="text-gray-800">{recipe.cuisine}</p>
                    </div>
                    <div className="flex flex-col ">
                    <p className="text-2xl"> Serves</p>
                    <p className="text-gray-800">{recipe.servings}</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-2xl"> Prep Time</p>
                    <p className="text-gray-800">{recipe.prepTimeMinutes} MIN</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-2xl"> Cook Time</p>
                    <p className="text-gray-800">{recipe.cookTimeMinutes} MIN</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-2xl"> Difficulty</p>
                    <p className="text-gray-800">{recipe.difficulty}</p>
                    </div>
                </div>
            </div>


            <div>
                <Image src={recipe.image} alt={recipe.name} height="500" width="400" />
            </div>


            <div>
                <span className="text-3xl text-gray-800">Ingredients</span>
                <ol className="text-xl text-gray-700 list-decimal ml-10 mt-8">
                    {recipe.ingredients.map((ingredient: string, index:number)=>(
                        <li key={`${ingredient}-${index}`}>{ingredient}</li>
                    ))}
                </ol>
            </div>

            <div>
                <span className="text-3xl text-gray-800">Instructions</span>
                <ol className="text-xl text-gray-700 list-decimal ml-10 mt-8">
                    {recipe.instructions.map((instruction: string, index:number)=>(
                        <li key={`${instruction}-${index}`}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    </div>
    )
}