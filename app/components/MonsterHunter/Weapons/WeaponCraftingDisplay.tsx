import { WeaponCrafting } from "@/app/types/api/weapons/Weapon";
import { CraftingCost } from "@/app/types/api/crafting/Crafting";
import CraftingCard from "../Crafting/CraftingCard";

interface WeaponCraftingProps {
    crafting: WeaponCrafting;
}


const WeaponCraftingDisplay = ({ crafting }: WeaponCraftingProps) => {
    if (!crafting.craftable) return null; // If the weapon is not craftable, return null
    if(crafting.craftingMaterials.length == 0) return null; // If there are no crafting materials, return null

    return (
        <div className="flex flex-col bg-card justify-center items-center rounded-lg gap-4 shadow-lg p-6 mt-6">
            <h2 className="text-2xl text-center font-bold underline underline-offset-8 italic">Crafting Materials Required:</h2>
            <p className="text-xl text-center font-semibold">Crafting Cost: {crafting.craftingZennyCost} Zenny</p>
            {crafting.craftingMaterials.map((material: CraftingCost, index: number) => (
                <CraftingCard key={index} craftingCost={material} />
            ))}
        </div>
    );
}

export default WeaponCraftingDisplay;