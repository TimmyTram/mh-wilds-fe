import { Gunlance } from "@/app/types/api/weapons/weaponTypes/Gunlance";
import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";

interface GunlanceDisplayProps {
    gunlance: Gunlance;
}

const GunlanceDisplay = ({ gunlance }: GunlanceDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay header="Gunlance Shell">
            <div className="w-full flex flex-row justify-between items-center">
                <p>Shell Type:</p>
                <p>{gunlance.shell}</p>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
                <p>Shell Level:</p>
                <p>{gunlance.shellLevel}</p>
            </div>
        </ExtraWeaponInfoDisplay>
    );
}

export default GunlanceDisplay;
