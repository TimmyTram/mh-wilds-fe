'use client';

import { useState } from "react";
import { WeaponKindSubtype } from "@/app/types/api/weapons/WeaponKind";
import { rarityColorMap } from "@/app/constants/rarityColorMap";
import Image from "next/image";

interface WeaponRarityProps {
    kind: WeaponKindSubtype;
    rarity: number;
}

const WeaponRarity = ({ kind, rarity }: WeaponRarityProps) => {
    const [hovered, setHovered] = useState(false);
    const tintColor = rarityColorMap[rarity] || "#a7a6a1";

    return (
        <div
            className="relative flex items-center justify-center gap-2 border-2 rounded-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative items-center justify-center flex p-2">
                <Image
                    src={`/assets/Weapons/${kind}.png`}
                    alt={kind.toString()}
                    width={32}
                    height={32}
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

            {hovered && (
                <div className="absolute top-full mt-2 text-sm bg-black text-white px-2 py-1 rounded shadow-lg z-10">
                    Rarity: {rarity}
                </div>
            )}
        </div>
    );
};

export default WeaponRarity;