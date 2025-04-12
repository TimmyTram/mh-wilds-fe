import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "../../UI/Divider/Divider";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile";

interface ArmorResistancesDisplayProps {
    pieces: ArmorPiece[];
}

const ELEMENTS = ["fire", "water", "thunder", "ice", "dragon"];

const getArmorKindImage = (kind: string) => `/assets/ArmorIcons/${kind}_piece.png`;
const getElementImage = (element: string) => `/assets/ElementIcons/${element}.png`;

const ArmorResistanceTableHeader = ({ header, image }: { header: string; image: string }) => (
    <div className="flex flex-row items-center gap-1 sm:gap-2">
        <p className="text-xs sm:text-sm md:text-base">{header}</p>
        <Image
            src={getElementImage(image)}
            width={16}
            height={16}
            alt={`${header} icon`}
            className="object-contain w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
        />
    </div>
);

const ResistanceRow = ({ piece, view }: { piece: ArmorPiece; view: "mobile" | "tablet" | "desktop" }) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4 py-2 text-sm sm:text-base items-center">
            {/* Kind */}
            <div className="flex items-center gap-1 sm:gap-2">
                <Image
                    src={getArmorKindImage(piece.kind)}
                    width={24}
                    height={24}
                    alt={`${piece.kind} icon`}
                    className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
                <p className="hidden sm:block">{piece.kind}</p>
            </div>

            {/* Name */}
            <p className="truncate">{piece.name}</p>

            {/* Defense */}
            <p className="hidden md:block">{piece.defense.base}</p>

            {/* Resistances */}
            {view === "mobile" && (
                <div className="md:hidden flex justify-between">
                    {ELEMENTS.map((el) => (
                        <p key={el}>{piece.resistances[el as keyof typeof piece.resistances]}</p>
                    ))}
                </div>
            )}

            {view === "tablet" && (
                <div className="hidden md:block lg:hidden">
                    <div className="flex gap-2 justify-between">
                        {ELEMENTS.map((el) => (
                            <div key={el} className="flex items-center gap-1">
                                <Image src={getElementImage(el)} width={16} height={16} alt={el} className="w-4 h-4" />
                                <span>{piece.resistances[el as keyof typeof piece.resistances]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {view === "desktop" &&
                ELEMENTS.map((el) => (
                    <p key={el} className="hidden lg:block">
                        {piece.resistances[el as keyof typeof piece.resistances]}
                    </p>
                ))}
        </div>
    );
};

const ArmorResistanceDisplay = ({ pieces }: ArmorResistancesDisplayProps) => {
    const isMobile = useIsMobile(1024); // Mobile if the width is less than 1024px
    const isTablet = !isMobile && typeof window !== "undefined" && window.innerWidth < 1024;
    const view: "mobile" | "tablet" | "desktop" = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-full md:min-w-0">
                {/* Header */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4 mb-4 font-semibold text-sm sm:text-base">
                    <p>Kind</p>
                    <p>Name</p>
                    <p className="hidden md:block">Defense</p>

                    {view === "mobile" && (
                        <div className="md:hidden flex justify-between col-span-1">
                            {ELEMENTS.map((el) => (
                                <ArmorResistanceTableHeader key={el} header={el[0].toUpperCase()} image={el} />
                            ))}
                        </div>
                    )}

                    {view === "tablet" && <div className="hidden md:block lg:hidden col-span-1">Elements</div>}

                    {view === "desktop" &&
                        ELEMENTS.map((el) => (
                            <div key={el} className="hidden lg:block">
                                <ArmorResistanceTableHeader header={el.charAt(0).toUpperCase() + el.slice(1)} image={el} />
                            </div>
                        ))}
                </div>

                <Divider />

                {/* Body */}
                <div className="space-y-4">
                    {pieces.map((piece) => (
                        <ResistanceRow key={piece.id} piece={piece} view={view} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArmorResistanceDisplay;
