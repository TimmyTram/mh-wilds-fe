import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "@/app/components/UI/Divider/Divider";

interface LoreDisplayProps {
    pieces: ArmorPiece[];
};

const LoreDisplay = ({ pieces }: LoreDisplayProps) => {
    return (
        <>
            <div className="text-3xl font-semibold mb-4">
                <p>Armor Lore</p>
            </div>
            <Divider />
            {pieces.map((piece: ArmorPiece) => (
                <div key={piece.id}>
                    <div className="flex flex-row items-start justify-start mb-4 gap-4">
                        <p className="text-left">{piece.name}</p>
                        <p className="text-left">{piece.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default LoreDisplay;