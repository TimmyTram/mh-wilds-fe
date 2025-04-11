import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "../../UI/Divider/Divider";
import Image from "next/image";

interface SlotsAndSkillsDisplayProps {
    pieces: ArmorPiece[];
}

function getArmorKindImage(kind: string) {
    return `/assets/ArmorIcons/${kind}_piece.png`;
}

const SlotsAndSkillsDisplay = ({ pieces }: SlotsAndSkillsDisplayProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-full">
                {/* Header */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-2 font-semibold text-sm sm:text-base">
                    <p>Kind</p>
                    <p>Name</p>
                    <p className="hidden sm:block">Slots</p>
                    <p className="hidden sm:block">Skills</p>
                </div>
                
                <Divider />
                
                {/* Armor Pieces */}
                {pieces.map((piece: ArmorPiece) => (
                    <div key={piece.id} className="mb-6 sm:mb-4">
                        {/* Mobile Layout (2 columns) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                            {/* Kind with icon */}
                            <div className="flex items-center gap-1 sm:gap-2">
                                <Image
                                    src={getArmorKindImage(piece.kind)}
                                    width={24}
                                    height={24}
                                    alt={`${piece.kind} icon`}
                                    className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                                />
                                <p className="text-xs sm:text-sm md:text-base truncate">{piece.kind}</p>
                            </div>
                            
                            {/* Name */}
                            <p className="text-xs sm:text-sm md:text-base truncate self-center">{piece.name}</p>
                            
                            {/* Slots - Desktop */}
                            <div className="hidden sm:flex items-center gap-1">
                                {piece.slots.length > 0 ? (
                                    piece.slots.map((level, index) => (
                                        <Image
                                            key={`${piece.id}-slot-${index}`}
                                            src={`/assets/JewelSlots/jewel_level_${level}.webp`}
                                            width={24}
                                            height={24}
                                            alt={`Jewel Slot Level ${level}`}
                                            className="object-contain w-6 h-6 md:w-8 md:h-8"
                                        />
                                    ))
                                ) : (
                                    <span className="text-gray-500 text-xs sm:text-sm">None</span>
                                )}
                            </div>
                            
                            {/* Skills - Desktop */}
                            <div className="hidden sm:block">
                                {piece.skills.length > 0 ? (
                                    <ul className="list-disc list-inside text-xs sm:text-sm">
                                        {piece.skills.map((skill) => (
                                            <li key={skill.skill.id} className="truncate">
                                                {skill.skill.name} (Level: {skill.level})
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span className="text-gray-500 text-xs sm:text-sm">None</span>
                                )}
                            </div>
                        </div>
                        
                        {/* Mobile-only expanded view for Slots and Skills */}
                        <div className="sm:hidden mt-2 pl-2 mb-2">
                            {/* Slots Label and Content */}
                            <div className="mb-2">
                                <p className="font-medium text-xs mb-1">Slots:</p>
                                <div className="flex items-center gap-1 pl-2">
                                    {piece.slots.length > 0 ? (
                                        piece.slots.map((level, index) => (
                                            <Image
                                                key={`${piece.id}-slot-${index}`}
                                                src={`/assets/JewelSlots/jewel_level_${level}.webp`}
                                                width={20}
                                                height={20}
                                                alt={`Jewel Slot Level ${level}`}
                                                className="object-contain w-5 h-5"
                                            />
                                        ))
                                    ) : (
                                        <span className="text-gray-500 text-xs">None</span>
                                    )}
                                </div>
                            </div>
                            
                            {/* Skills Label and Content */}
                            <div>
                                <p className="font-medium text-xs mb-1">Skills:</p>
                                {piece.skills.length > 0 ? (
                                    <ul className="list-disc list-inside text-xs pl-2">
                                        {piece.skills.map((skill) => (
                                            <li key={skill.skill.id}>
                                                {skill.skill.name} (Level: {skill.level})
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span className="text-gray-500 text-xs pl-2">None</span>
                                )}
                            </div>
                        </div>
                        
                        <Divider />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlotsAndSkillsDisplay;