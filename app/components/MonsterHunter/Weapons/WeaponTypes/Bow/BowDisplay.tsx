import { Bow, BowCoating } from "@/app/types/api/weapons/weaponTypes/Bow";
import ExtraWeaponInfoDisplay from "@/app/components/MonsterHunter/Weapons/WeaponTypes/shared/ExtraWeaponInfoDisplay";

interface BowDisplayProps {
    bow: Bow;
}

const BowDisplay = ({ bow }: BowDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay header={"Bow Coatings"}>
            {bow.coatings.map((coating: BowCoating, index: number) => (
                <div key={index} className="w-full flex flex-row justify-between items-center">
                    <p>Coating:</p>
                    <p>{coating}</p>
                </div>
            ))}
        </ExtraWeaponInfoDisplay>
    );
};

export default BowDisplay;