import { ItemRecipe } from "@/app/types/api/items/ItemData";

interface ItemRecipeInfo {
    recipes: ItemRecipe[];
    className?: string;
}

const ItemRecipeInfo = ({ recipes, className }: ItemRecipeInfo) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-center justify-center bg-card shadow-md rounded-lg p-4 mb-4 w-full h-full">
                <h2 className="text-2xl italic font-bold underline underline-offset-4 mb-4">Crafting Recipes</h2>
                {recipes.length > 0 ? (
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-center justify-center w-full h-full">
                        {recipes.map((recipe) => (
                            <div key={recipe.id} className="p-4 border-4 flex flex-col items-start justify-start w-full md:h-[200px]">
                                <p>Amount: {recipe.amount}</p>
                                <p>Crafting Materials Needed to Craft:</p>
                                <ul className="list-disc pl-5">
                                    {recipe.inputs.map((input) => (
                                        <li key={input.id}>{input.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No crafting recipes available.</p>
                )}
            </div>
        </div>
    );
}

export default ItemRecipeInfo;
