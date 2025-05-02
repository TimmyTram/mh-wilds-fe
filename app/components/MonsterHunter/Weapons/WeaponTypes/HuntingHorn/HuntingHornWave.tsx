import { HuntingHornWave } from "@/app/types/api/weapons/weaponTypes/Huntinghorn";

interface HuntingHornWaveProps {
    wave: HuntingHornWave;
}

const HuntingHornWaveDisplay = ({ wave }: HuntingHornWaveProps) => {
    return (
        <>
            <h2 className="text-xl font-bold italic underline-offset-4 underline">Echo Wave Type:</h2>
            <p>{wave.name}</p>
        </>
    );
}

export default HuntingHornWaveDisplay;
