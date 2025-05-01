'use client';

import { useState } from "react";
import { WeaponKindSubtype } from "@/app/types/api/weapons/WeaponKind";
import WeaponImage from "./WeaponImage";

interface WeaponRarityProps {
    kind: WeaponKindSubtype;
    rarity: number;
}

const WeaponRarity = ({ kind, rarity }: WeaponRarityProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center gap-2 border-2 rounded-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <WeaponImage kind={kind} rarity={rarity} width={32} height={32} />

            {hovered && (
                <div className="absolute top-full mt-2 text-sm bg-black text-white px-2 py-1 rounded shadow-lg z-10">
                    Rarity: {rarity}
                </div>
            )}
        </div>
    );
};

export default WeaponRarity;