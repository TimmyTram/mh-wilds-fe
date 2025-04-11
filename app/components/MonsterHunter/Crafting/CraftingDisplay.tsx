import { BaseCrafting } from "@/app/types/Crafting";
import { Material } from "@/app/types/MaterialData";

interface CraftingDisplayProps {
    itemName: string;
    crafting: BaseCrafting;
};

const CraftingDisplay = ({ itemName, crafting }: CraftingDisplayProps) => {
    return (
        <div className="p-2 sm:p-3 md:p-4 rounded-lg border border-material-border shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{itemName}</h2>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">
                Crafting Cost: <span className="font-semibold">{crafting.zennyCost}</span>
            </p>

            <p className="text-base sm:text-lg font-semibold mb-2">Materials Required</p>

            {crafting.materials && crafting.materials.length > 0 ? (
                <div className="space-y-1 sm:space-y-2">
                    {crafting.materials.map((material: Material, index: number) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-between sm:justify-start rounded p-2"
                        >
                            <p className="text-sm sm:text-base truncate">{material.item.name}</p>
                            <p className="text-sm sm:text-base font-medium ml-2 sm:ml-4 md:ml-2 whitespace-nowrap">x{material.quantity}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500">No materials required.</p>
            )}
        </div>
    );
};

export default CraftingDisplay;