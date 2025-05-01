import { ItemIcon } from "@/app/types/api/items/ItemData";
import Link from "next/link";
import { colorMap } from "@/app/constants/colorMap";
import ItemImage from "./ItemImage";

interface ItemCardProps {
    id: number;
    name: string;
    icon: ItemIcon;
}


const ItemCard = ({ id, name, icon }: ItemCardProps) => {
    const tintColor = colorMap[icon.colorId];

    return (
        <Link href={`/items/${id}`} className="w-[200px]">
            <div className="bg-card hover:bg-cardHover flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <ItemImage itemIcon={icon} name={name} className="w-16 h-16" /> 
                    <p className="text-center text-xl font-semibold">{name}</p>
                </div>
            </div>
        </Link>
    );
}

export default ItemCard;