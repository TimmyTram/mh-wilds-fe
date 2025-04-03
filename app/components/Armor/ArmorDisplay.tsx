import { ArmorSet } from "@/app/types/ArmorData";
import Link from "next/link";


interface ArmorDisplayProps {
    armorSet: ArmorSet;
}

const ArmorDisplay = ({ armorSet }: ArmorDisplayProps) => {
    return (
        <Link href={`/armor/${armorSet.id}`}>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md min-w-[100px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    {/* For some reason the API does not return the name of the armorset in other languages?*/}
                    {armorSet.name || (armorSet.pieces[0] && armorSet.pieces[0].name)}
                </div>
            </div>
        </Link>
    );
}

export default ArmorDisplay;