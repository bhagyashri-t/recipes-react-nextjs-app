import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRecipes = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  console.log(data.recipes);
  return data.recipes;
}