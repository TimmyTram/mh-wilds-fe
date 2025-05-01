import { CraftingCost } from "@/app/types/api/crafting/Crafting";
import CraftingCard from "../Crafting/CraftingCard";

interface MaterialsDisplayProps {
    title: string;
    materials: CraftingCost[];
    cost: number;
    costCurrency?: string;
    className?: string;
}

const MaterialsDisplay = ({
    title,
    materials,
    cost,
    costCurrency = "Zenny",
    className = ""
}: MaterialsDisplayProps) => {
    // If there are no materials, don't render anything
    if (materials.length === 0) return null;

    return (
        <div className={`flex flex-col bg-card justify-center items-center rounded-lg gap-4 shadow-lg p-6 mt-6 ${className}`}>
            <h2 className="text-2xl text-center font-bold underline underline-offset-8 italic">{title}</h2>
            <p className="text-xl text-center font-semibold">Cost: {cost} {costCurrency}</p>
            {materials.map((material: CraftingCost, index: number) => (
                <CraftingCard key={index} craftingCost={material} />
            ))}
        </div>
    );
};

export default MaterialsDisplay;