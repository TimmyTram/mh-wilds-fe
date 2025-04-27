import { ItemIcon } from "@/app/types/api/items/ItemData";
import Image from "next/image";
import { colorMap } from "@/app/utils/colorMap";

interface ItemHeaderProps {
    name: string;
    icon: ItemIcon;
    className?: string;
}


const ItemHeader = ({ name, icon, className }: ItemHeaderProps) => {
    const tintColor = colorMap[icon.colorId];

    return (
        <div className={className}>
            <div className="flex flex-col items-center justify-center rounded-lg p-4 bg-card shadow-md w-full h-full">
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
                <h1 className="text-2xl font-bold">{name}</h1>
            </div>
        </div>
    );
}

export default ItemHeader;