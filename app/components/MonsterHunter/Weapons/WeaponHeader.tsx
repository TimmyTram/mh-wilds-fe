import { WeaponSeries } from "@/app/types/api/weapons/Weapon";
import { WeaponKindSubtype } from "@/app/types/api/weapons/WeaponKind";
import WeaponImage from "./WeaponImage";

interface WeaponHeaderProps {
    name: string;
    kind: WeaponKindSubtype;
    series: WeaponSeries;
    rarity: number;
}

const WeaponHeader = ({ name, kind, series, rarity }: WeaponHeaderProps) => {

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <WeaponImage kind={kind} rarity={rarity} className="border-4 rounded-lg" width={64} height={64} />
            <div className="flex flex-col items-center justify-center gap-1">
                <h2>{name}</h2>
                <p className="text-sm italic">{series.name}</p>
            </div>
        </div>
    );
}

export default WeaponHeader;