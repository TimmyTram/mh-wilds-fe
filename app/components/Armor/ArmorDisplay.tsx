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
                    <h2 className="text-red-500 text-center flex items-center justify-center">{armorSet.name}</h2>
                </div>
            </div>
        </Link>
    );
}

export default ArmorDisplay;