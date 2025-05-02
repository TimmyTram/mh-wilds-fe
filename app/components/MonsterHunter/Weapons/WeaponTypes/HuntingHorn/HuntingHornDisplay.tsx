import { HuntingHorn } from "@/app/types/api/weapons/weaponTypes/Huntinghorn";
import ExtraWeaponInfoDisplay from "../shared/ExtraWeaponInfoDisplay";
import HuntingHornMelodyDisplay from "./HuntingHornMelody";
import HuntingHornBubbleDisplay from "./HuntingHornBubble";
import HuntingHornWaveDisplay from "./HuntingHornWave";
import Divider from "@/app/components/UI/Divider/Divider";

interface HuntingHornDisplayProps {
    huntingHorn: HuntingHorn;
}


const HuntingHornDisplay = ({ huntingHorn }: HuntingHornDisplayProps) => {
    return (
        <ExtraWeaponInfoDisplay header="Hunting Horn Information">
            <div className="flex flex-col gap-4 w-full">
                <HuntingHornMelodyDisplay melody={huntingHorn.melody} />
                <Divider />
                <HuntingHornBubbleDisplay bubble={huntingHorn.echoBubble} />
                <Divider />
                <HuntingHornWaveDisplay wave={huntingHorn.echoWave} />
            </div>
        </ExtraWeaponInfoDisplay>
    );
}

export default HuntingHornDisplay;