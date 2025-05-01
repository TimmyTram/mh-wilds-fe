import { WeaponKindSubtype } from "@/app/types/api/weapons/WeaponKind";
import { rarityColorMap } from "@/app/constants/rarityColorMap";
import Image from "next/image";

interface WeaponImageProps {
    kind: WeaponKindSubtype
    rarity: number;
    className?: string;
    width?: number;
    height?: number;
}

const WeaponImage = ({ kind, rarity, className, width, height }: WeaponImageProps) => {
    const tintColor = rarityColorMap[rarity] || "#a7a6a1";
    
    return (
        <div className={`relative items-center justify-center flex p-2 ${className}`}>
            <Image
                src={`/assets/Weapons/${kind}.png`}
                alt={kind.toString()}
                width={width || 32}
                height={height || 32}
                className="object-contain"
            />
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: tintColor,
                    mixBlendMode: "multiply",
                    opacity: 1,
                    borderRadius: "8px",
                }}
            />
        </div>
    );
}

export default WeaponImage;