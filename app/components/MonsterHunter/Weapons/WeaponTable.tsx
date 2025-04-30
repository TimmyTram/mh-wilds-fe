import { Weapon } from "@/app/types/api/weapons/Weapon";
import WeaponCard from "./WeaponCard";

interface WeaponTableProps {
    weapons: Weapon[];
    className?: string;
}

const WeaponTable = ({ weapons, className }: WeaponTableProps) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-center justify-center rounded-lg shadow-lg bg-card max-w-full">
                {weapons.map((weapon: Weapon, index: number) => (
                    <WeaponCard key={index} weapon={weapon} />
                ))}
            </div>
        </div>
    );
};

export default WeaponTable;