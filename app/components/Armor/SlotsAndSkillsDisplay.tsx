import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "../UI/Divider/Divider";
import Image from "next/image";

interface SlotsAndSkillsDisplayProps {
    pieces: ArmorPiece[];
}

const SlotsAndSkillsDisplay = ({ pieces }: SlotsAndSkillsDisplayProps) => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mb-2 font-semibold">
                <p>Kind</p>
                <p>Name</p>
                <p>Slots</p>
                <p>Skills</p>
            </div>
            <Divider />
            {pieces.map((piece: ArmorPiece) => (
                <div key={piece.id}>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <p>{piece.kind}</p>
                        <p>{piece.name}</p>
                        <p>
                            {piece.slots.map((level, index) => (
                                <Image
                                    key={`${piece.id}-slot-${index}`}
                                    src={`/assets/JewelSlots/jewel_level_${level}.webp`}
                                    width={32}
                                    height={32}
                                    alt={`Jewel Slot Level ${level}`}
                                    className="object-contain"
                                />
                            ))}
                        </p>
                        <div>
                            <ul className="list-disc list-inside">
                                {piece.skills.map((skill) => (
                                    <li key={skill.skill.id}>
                                        {skill.skill.name} (Level: {skill.level})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Divider />
                </div>
            ))}
        </>
    );
};

export default SlotsAndSkillsDisplay;