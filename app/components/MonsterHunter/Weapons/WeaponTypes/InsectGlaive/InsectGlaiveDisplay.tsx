import { InsectGlaive } from "@/app/types/api/weapons/weaponTypes/InsectGlaive";
import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";

interface InsectGlaiveDisplayProps {
    insectGlaive: InsectGlaive;
}

const InsectGlaiveDisplay = ({ insectGlaive }: InsectGlaiveDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay header="Kinsect Information">
            <div className="flex flex-row justify-between items-center w-full">
                <p>Kinsect Level: </p>
                <p>{insectGlaive.kinsectLevel}</p>
            </div>
        </ExtraWeaponInfoDisplay>
    );
}

export default InsectGlaiveDisplay;