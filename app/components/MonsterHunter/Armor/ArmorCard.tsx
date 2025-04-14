import { ArmorPiece, ArmorSet } from "@/app/types/ArmorData";
import Image from "next/image";
import Link from "next/link";
import { armorSetsMap } from "@/app/types/Associations/Associations";
import { getImage } from "@/app/utils/utils";

interface ArmorCardProps {
    id: number;
    gameId: number;
    name: string;
    pieces: ArmorPiece[];
}


const ArmorCard = ({ id, gameId, name, pieces }: ArmorCardProps) => {
    return (
        <Link href={`/armor/${id}`} className="w-[200px]">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    {/* For some reason the API does not return the name of the armorset in other languages? */}
                    <p className="text-center text-sm font-semibold">{name || (pieces[0] && pieces[0].name)}</p>
                    <Image 
                        src={getImage(gameId, armorSetsMap)}
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


export default ArmorCard;