import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "../../UI/Divider/Divider";
import Image from "next/image";

interface ArmorResistancesDisplayProps {
    pieces: ArmorPiece[];
}

function getArmorKindImage(kind: string) {
    return `/assets/ArmorIcons/${kind}_piece.png`;
}

function getElementImage(element: string) {
    return `/assets/ElementIcons/${element}.png`;
}

interface ArmorResistanceTableHeaderProps {
    header: string;
    image: string;
}

const ArmorResistanceTableHeader = ({header, image}: ArmorResistanceTableHeaderProps) => {
    return (
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
}

const ArmorResistanceDisplay = ({ pieces }: ArmorResistancesDisplayProps) => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-full md:min-w-0">
                {/* Table Header */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4 mb-4 font-semibold text-sm sm:text-base">
                    <p>Kind</p>
                    <p>Name</p>
                    <p className="hidden md:block">Defense</p>
                    
                    {/* Element headers - responsive layout */}
                    <div className="md:hidden flex justify-between col-span-1">
                        <ArmorResistanceTableHeader header="F" image="fire" />
                        <ArmorResistanceTableHeader header="W" image="water" />
                        <ArmorResistanceTableHeader header="T" image="thunder" />
                        <ArmorResistanceTableHeader header="I" image="ice" />
                        <ArmorResistanceTableHeader header="D" image="dragon" />
                    </div>
                    
                    {/* Desktop headers */}
                    <div className="hidden md:block lg:hidden col-span-1">Elements</div>
                    <div className="hidden lg:block">
                        <ArmorResistanceTableHeader header="Fire" image="fire" />
                    </div>
                    <div className="hidden lg:block">
                        <ArmorResistanceTableHeader header="Water" image="water" />
                    </div>
                    <div className="hidden lg:block">
                        <ArmorResistanceTableHeader header="Thunder" image="thunder" />
                    </div>
                    <div className="hidden lg:block">
                        <ArmorResistanceTableHeader header="Ice" image="ice" />
                    </div>
                    <div className="hidden lg:block">
                        <ArmorResistanceTableHeader header="Dragon" image="dragon" />
                    </div>
                </div>
                
                <Divider />
                
                {/* Table Body */}
                <div className="space-y-4">
                    {pieces.map((piece: ArmorPiece) => (
                        <div key={piece.id} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4 py-2 text-sm sm:text-base items-center">
                            {/* Kind with icon */}
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
                            
                            <p className="truncate">{piece.name}</p>
                            
                            <p className="hidden md:block">{piece.defense.base}</p>
                            
                            <div className="md:hidden flex justify-between">
                                <p>{piece.resistances.fire}</p>
                                <p>{piece.resistances.water}</p>
                                <p>{piece.resistances.thunder}</p>
                                <p>{piece.resistances.ice}</p>
                                <p>{piece.resistances.dragon}</p>
                            </div>
                            
                            {/* Tablet layout */}
                            <div className="hidden md:block lg:hidden">
                                <div className="flex gap-2 justify-between">
                                    <div className="flex items-center gap-1">
                                        <Image src={getElementImage("fire")} width={16} height={16} alt="Fire" className="w-4 h-4" />
                                        <span>{piece.resistances.fire}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image src={getElementImage("water")} width={16} height={16} alt="Water" className="w-4 h-4" />
                                        <span>{piece.resistances.water}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image src={getElementImage("thunder")} width={16} height={16} alt="Thunder" className="w-4 h-4" />
                                        <span>{piece.resistances.thunder}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image src={getElementImage("ice")} width={16} height={16} alt="Ice" className="w-4 h-4" />
                                        <span>{piece.resistances.ice}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image src={getElementImage("dragon")} width={16} height={16} alt="Dragon" className="w-4 h-4" />
                                        <span>{piece.resistances.dragon}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Desktop resistance layout */}
                            <p className="hidden lg:block">{piece.resistances.fire}</p>
                            <p className="hidden lg:block">{piece.resistances.water}</p>
                            <p className="hidden lg:block">{piece.resistances.thunder}</p>
                            <p className="hidden lg:block">{piece.resistances.ice}</p>
                            <p className="hidden lg:block">{piece.resistances.dragon}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArmorResistanceDisplay;