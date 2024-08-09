export type Recipe = {
    id: number;
    name: string;
    servings: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    image: string;
    caloriesPerServing: number;
    cuisine: string;
    difficulty: string;
    ingredients: Array<string>;
    instructions: Array<string>;
    mealType: Array<string>;
    rating: number;
    reviewCount: number;
    tags: Array<string>;
    userId: number;
  };
  