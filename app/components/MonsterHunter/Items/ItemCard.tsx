import { ItemIcon } from "@/app/types/api/items/ItemData";
import Link from "next/link";
import Image from "next/image";
import { colorMap } from "@/app/constants/colorMap";

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
                    <div className="relative w-16 h-16">
                        <Image
                            src={`/assets/ItemIcons/${icon.kind}.png`}
                            alt={name}
                            fill
                            className="object-contain"
                        />
                        {/* Color overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundColor: tintColor,
                                mixBlendMode: "multiply",
                                opacity: 0.5,
                                borderRadius: "8px",
                            }}
                        />
                    </div>
                    <p className="text-center text-xl font-semibold">{name}</p>
                </div>
            </div>
        </Link>
    );
}

export default ItemCard;