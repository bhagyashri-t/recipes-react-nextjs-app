  import BadgeFilter from "@/components/ui/badge-filter";
  import RecipeList from "@/components/ui/recipe-list";
import { getRecipes } from "@/lib/utils";
  
export default async function HomePage() {

    const recipes = await getRecipes();

    return (
        <div className="xl:px-24 px-10">

        <BadgeFilter />
        <RecipeList recipes={recipes}></RecipeList>
        
        </div>
    )
} 