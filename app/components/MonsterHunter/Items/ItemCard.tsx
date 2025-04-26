import { ItemIcon } from "@/app/types/ItemData";
import Link from "next/link";

interface ItemCardProps {
    id: number;
    name: string;
    icon: ItemIcon;
}


const ItemCard = ({ id, name, icon }: ItemCardProps) => {
    return (
        <Link href={`/items/${id}`} className="w-[200px]">
            <div className="bg-card hover:bg-cardHover flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <p className="text-center text-xl font-semibold">{name}</p>
                </div>
                <p className="text-center text-sm">{`ID: ${id}`}</p>
            </div>
        </Link>
    );
}

export default ItemCard;