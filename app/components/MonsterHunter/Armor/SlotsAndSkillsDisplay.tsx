import { ArmorPiece } from "@/app/types/api/armor/ArmorData";
import Divider from "../../UI/Divider/Divider";
import Image from "next/image";
import { SkillRank } from "@/app/types/api/skills/SkillData";

interface SlotsAndSkillsDisplayProps {
    pieces: ArmorPiece[];
}

function getArmorKindImage(kind: string) {
    return `/assets/ArmorIcons/${kind}_piece.png`;
}

function getSlotImage(level: number) {
    return `/assets/JewelSlots/jewel_level_${level}.webp`;
}

const KindDisplay = ({ kind }: { kind: string }) => (
    <div className="flex items-center gap-1 sm:gap-2">
        <Image
            src={getArmorKindImage(kind)}
            width={24}
            height={24}
            alt={`${kind} icon`}
            className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        />
        <p className="text-xs sm:text-sm md:text-base truncate">{kind}</p>
    </div>
);

const SlotIcons = ({ slots, size = 24 }: { slots: number[]; size?: number }) => (
    <div className="flex items-center gap-1">
        {slots.length > 0 ? (
            slots.map((level, index) => (
                <Image
                    key={`slot-${index}`}
                    src={getSlotImage(level)}
                    width={size}
                    height={size}
                    alt={`Jewel Slot Level ${level}`}
                    className={`object-contain`}
                />
            ))
        ) : (
            <span className="text-gray-500 text-xs sm:text-sm">None</span>
        )}
    </div>
);

const SkillsList = ({ skills }: { skills: SkillRank[] }) => {
    return skills.length > 0 ? (
        <ul className="list-disc list-inside text-xs sm:text-sm">
            {skills.map((skillRank: SkillRank) => (
                <li key={skillRank.id} className="truncate">
                    {skillRank.skill.name} (Level: {skillRank.level})
                </li>
            ))}
        </ul>
    ) : (
        <span className="text-gray-500 text-xs sm:text-sm">None</span>
    );
};

const ArmorHeader = () => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-2 font-semibold text-sm sm:text-base">
        <p>Kind</p>
        <p>Name</p>
        <p className="hidden sm:block">Slots</p>
        <p className="hidden sm:block">Skills</p>
    </div>
);

const ArmorRow = ({ piece }: { piece: ArmorPiece }) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        <KindDisplay kind={piece.kind} />
        <p className="text-xs sm:text-sm md:text-base truncate self-center">{piece.name}</p>
        <div className="hidden sm:flex items-center gap-1">
            <SlotIcons slots={piece.slots} />
        </div>
        <div className="hidden sm:block">
            <SkillsList skills={piece.skills} />
        </div>
    </div>
);

const ArmorMobileDetails = ({ piece }: { piece: ArmorPiece }) => (
    <div className="sm:hidden mt-2 pl-2 mb-2">
        <div className="mb-2">
            <p className="font-medium text-xs mb-1">Slots:</p>
            <div className="pl-2">
                <SlotIcons slots={piece.slots} size={20} />
            </div>
        </div>
        <div>
            <p className="font-medium text-xs mb-1">Skills:</p>
            <div className="pl-2">
                <SkillsList skills={piece.skills} />
            </div>
        </div>
    </div>
);

const SlotsAndSkillsDisplay = ({ pieces }: SlotsAndSkillsDisplayProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-full">
                <ArmorHeader />
                <Divider />

                {pieces.map((piece) => (
                    <div key={piece.id} className="mb-6 sm:mb-4">
                        <ArmorRow piece={piece} />
                        <ArmorMobileDetails piece={piece} />
                        <Divider />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlotsAndSkillsDisplay;
