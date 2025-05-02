import { HuntingHornMelody, HuntingHornSong } from "@/app/types/api/weapons/weaponTypes/Huntinghorn";

interface HuntingHornMelodyProps {
    melody: HuntingHornMelody;
}

const HuntingHornMelodyDisplay = ({ melody }: HuntingHornMelodyProps) => {
    return (
        <>
            <h2 className="text-xl font-bold italic underline-offset-4 underline">Melody Effects:</h2>
            {melody.songs.map((song: HuntingHornSong, index: number) => (
                <div key={index}>
                    <h3 className="font-bold">{song.name}</h3>
                    <p className="text-sm">Sequence: {song.sequence.map(note => note).join(", ")}</p>
                </div>
            ))}
        </>
    );
}

export default HuntingHornMelodyDisplay;