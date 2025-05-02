import { HeavyBowgun } from "@/app/types/api/weapons/weaponTypes/Heavybowgun";
import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";
import AmmoTable from "../shared/AmmoTable";

interface HeavyBowgunDisplayProps {
    heavyBowgun: HeavyBowgun;
}


const HeavyBowgunDisplay = ({ heavyBowgun }: HeavyBowgunDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay header="Heavy Bowgun Ammo Table">
            <AmmoTable ammo={heavyBowgun.ammo} />
        </ExtraWeaponInfoDisplay>
    );
}

export default HeavyBowgunDisplay;