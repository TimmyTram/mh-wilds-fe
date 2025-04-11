import { BaseCrafting } from "@/app/types/Crafting";
import { Material } from "@/app/types/MaterialData";

interface CraftingDisplayProps {
    itemName: string;
    crafting: BaseCrafting;
};

const CraftingDisplay = ({ itemName, crafting }: CraftingDisplayProps) => {
    return (
        <div className="p-4 bg-primary rounded-lg">
            <h2 className="text-xl font-bold mb-2">{itemName}</h2>
            <p className="mb-4">Crafting Cost: <span className="font-semibold">{crafting.zennyCost}</span></p>
            <p className="text-lg font-semibold mb-2">Materials Required</p>
            {crafting.materials && crafting.materials.length > 0 && (
                crafting.materials.map((material: Material, index: number) => (
                    <div key={index} className="flex flex-row gap-2 mb-2">
                        <p className="">{material.item.name}</p>
                        <p className="font-medium">x{material.quantity}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CraftingDisplay;