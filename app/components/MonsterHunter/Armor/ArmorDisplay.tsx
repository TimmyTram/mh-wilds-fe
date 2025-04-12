import { ArmorSet } from "@/app/types/ArmorData";
import Image from "next/image";
import Link from "next/link";
import { armorSetsMap } from "@/app/types/Associations/Associations";
import { getImage } from "@/app/utils/utils";

interface ArmorDisplayProps {
    armorSet: ArmorSet;
}

function getArmorSetImage(armorSet: ArmorSet) {
    const img = armorSetsMap.get(armorSet.gameId);
    if (img === undefined) return "Unknown";
    return img;
}

const ArmorDisplay = ({ armorSet }: ArmorDisplayProps) => {
    return (
        <Link href={`/armor/${armorSet.id}`} className="w-[200px]">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    {/* For some reason the API does not return the name of the armorset in other languages? */}
                    <p className="text-center text-sm font-semibold">{armorSet.name || (armorSet.pieces[0] && armorSet.pieces[0].name)}</p>
                    <Image 
                        src={getImage(armorSet, armorSetsMap)}
                        width={128}
                        height={128}
                        alt=""
                        className="object-contain"
                    />
                </div>
            </div>
        </Link>
    );
};


export default ArmorDisplay;