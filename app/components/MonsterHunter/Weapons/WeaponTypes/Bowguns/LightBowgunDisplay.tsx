import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";
import { LightBowgun, LightBowgunSpecialAmmo } from "@/app/types/api/weapons/weaponTypes/Lightbowgun";
import AmmoTable from "../shared/AmmoTable";

interface LightBowgunDisplayProps {
    lightBowgun: LightBowgun;
}

const LightBowgunDisplay = ({ lightBowgun }: LightBowgunDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay header="Light Bowgun Ammo Table">
            <AmmoTable ammo={lightBowgun.ammo} />
            <div className="mt-4 flex flex-row items-center justify-between w-full">
                <p>Special Ammo:</p>
                <p>{lightBowgun.specialAmmo}</p>
            </div>
        </ExtraWeaponInfoDisplay>
    );
}

export default LightBowgunDisplay;