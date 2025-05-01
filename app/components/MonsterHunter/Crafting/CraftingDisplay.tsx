import CraftingCard from "./CraftingCard";
import { CraftingCost } from "@/app/types/api/crafting/Crafting";

interface CraftingDisplayProps {
    itemName: string;
    zennyCost: number;
    crafting: CraftingCost[];
};

const CraftingDisplay = ({ itemName, zennyCost, crafting }: CraftingDisplayProps) => {
    return (
        <div className="p-2 sm:p-3 md:p-4 rounded-lg border border-material-border shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{itemName}</h2>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">
                Crafting Cost: <span className="font-semibold">{zennyCost}</span>
            </p>

            <p className="text-base sm:text-lg font-semibold mb-2">Materials Required</p>

            {crafting && crafting.length > 0 ? (
                <div className="space-y-1 sm:space-y-2">
                    {crafting.map((material: CraftingCost, index: number) => (
                        <CraftingCard key={index} craftingCost={material} className="w-full" />
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500">No materials required.</p>
            )}
        </div>
    );
};

export default CraftingDisplay;