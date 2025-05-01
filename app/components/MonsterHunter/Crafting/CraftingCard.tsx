import { CraftingCost } from "@/app/types/api/crafting/Crafting";
import Link from "next/link";
import ItemImage from "../Items/ItemImage";

interface CraftingCardProps {
    craftingCost: CraftingCost;
    className?: string;
}

const CraftingCard = ({ craftingCost, className = "w-1/2" }: CraftingCardProps) => {
    return (
        <Link href={`/items/${craftingCost.item.id}`} className={`flex flex-col items-center p-4 rounded-lg border-4 hover:text-amber-500 hover:border-amber-500 transition duration-300 ease-in-out ${className}`}>
            <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between w-full">
                <div className="flex justify-center items-center flex-col md:flex-row gap-4">
                    <ItemImage itemIcon={craftingCost.item.icon} name={craftingCost.item.name} className="w-8 h-8"/>
                    <p className="font-semibold italic">{craftingCost.item.name}</p>
                </div>
                <p className="font-semibold italic">x{craftingCost.quantity}</p>
            </div>
        </Link>
    );
}

export default CraftingCard;
