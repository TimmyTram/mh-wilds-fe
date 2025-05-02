import { ChargeBlade } from "@/app/types/api/weapons/weaponTypes/Chargeblade";
import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";

interface ChargeBladeDisplayProps {
    chargeBlade: ChargeBlade;
}

const ChargeBladeDisplay = ({ chargeBlade }: ChargeBladeDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay>
            <div className="w-full flex flex-row justify-between items-center">
                <p>Phial Type:</p>
                <p>{chargeBlade.phial}</p>
            </div>
        </ExtraWeaponInfoDisplay>
    );
}

export default ChargeBladeDisplay;