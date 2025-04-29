import { weapons } from "@/app/constants/constants";
import Image from "next/image";

interface WeaponToggleProps {
    currentWeapon: string; // this is the current weapon kind
    setWeaponKind: (kind: string) => void;
}

interface WeaponCardProps {
    weapon: string;
    setWeaponKind: (kind: string) => void;
    className?: string;
    disabled?: boolean;
}

const WeaponCard = ({ weapon, className, setWeaponKind, disabled }: WeaponCardProps) => {

    const handleToggle = (kind: string) => {
        if (!disabled) {
            console.log("Selected weapon kind:", kind);
            setWeaponKind(kind);
        }
    }

    return (
        <button className={className} onClick={() => handleToggle(weapon)} disabled={disabled}>
            <Image
                src={`/assets/Weapons/${weapon}.png`}
                alt={weapon}
                width={32}
                height={32}
            />
        </button>
    );
};


const WeaponToggle = ({ currentWeapon, setWeaponKind }: WeaponToggleProps) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center p-4 rounded-lg shadow-lg bg-card max-w-full">
                {/* Loop thru weapons and show a border for current weapon selected */}
                {weapons.map((weaponKind: string, index: number) => (
                    (currentWeapon === weaponKind ? (
                        <WeaponCard key={index} weapon={weaponKind} setWeaponKind={setWeaponKind} className="p-2 border-2 border-primary rounded-lg bg-cardHover cursor-not-allowed" disabled={true} />
                    ) : (
                        <WeaponCard key={index} weapon={weaponKind} setWeaponKind={setWeaponKind} />
                    ))
                ))}
            </div>
        </div>
    );
};


export default WeaponToggle;