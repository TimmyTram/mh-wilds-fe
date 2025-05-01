import { colorMap } from "@/app/constants/colorMap";
import {  ItemIcon } from "@/app/types/api/items/ItemData"
import Image from "next/image";

interface ItemImageProps {
    itemIcon: ItemIcon
    name: string;
    className?: string;
}

const ItemImage = ({ itemIcon, name, className }: ItemImageProps) => {
    const tintColor = colorMap[itemIcon.colorId];

    return (
        <div className={`relative ${className}`}>
            <Image
                src={`/assets/ItemIcons/${itemIcon.kind}.png`}
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
    );
}

export default ItemImage;