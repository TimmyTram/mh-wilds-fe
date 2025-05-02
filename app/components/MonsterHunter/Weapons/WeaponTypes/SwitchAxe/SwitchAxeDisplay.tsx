import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";
import { SwitchAxe } from "@/app/types/api/weapons/weaponTypes/SwitchAxe";


interface SwitchAxeDisplayProps {
    switchaxe: SwitchAxe;
}

const SwitchAxeDisplay = ({ switchaxe }: SwitchAxeDisplayProps) => {
    // The damage dealt by the phial; not present for power and element types
    // https://docs.wilds.mhdb.io/#switch-axe
    return (
        <ExtraWeaponInfoDisplay>
            <div className="flex flex-row justify-between items-center w-full">
                <p>Phial Type:</p>
                <p>{switchaxe.phial.kind}</p>
            </div>
            {switchaxe.phial.damage?.raw && (
                <div className="flex flex-row justify-between items-center w-full">
                    <p>Phial Damage:</p>
                    <p>{switchaxe.phial.damage.raw}</p>
                </div>
            )}
        </ExtraWeaponInfoDisplay>
    );
}

export default SwitchAxeDisplay;