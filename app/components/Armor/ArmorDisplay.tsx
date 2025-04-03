import { ArmorSet } from "@/app/types/ArmorData";


interface ArmorDisplayProps {
    armorSet: ArmorSet;
}

const ArmorDisplay = ({ armorSet }: ArmorDisplayProps) => {
    return (
        <div>
            <h2 className="text-red-500">{armorSet.name}</h2>
            {armorSet.pieces && armorSet.pieces.length > 0 && (
                <ul className="list-disc pl-5">
                    {armorSet.pieces.map((piece) => (
                        <li key={piece.id} className="mb-2">
                            {piece.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ArmorDisplay;