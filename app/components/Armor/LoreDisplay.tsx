import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "@/app/components/UI/Divider/Divider";

interface LoreDisplayProps {
    pieces: ArmorPiece[];
};

const LoreDisplay = ({ pieces }: LoreDisplayProps) => {
    return (
        <>
            {pieces.map((piece: ArmorPiece) => (
                <div key={piece.id}>
                    <div className="flex flex-row items-start justify-start mb-4 gap-4">
                        <p className="text-left">{piece.name}</p>
                        <p className="text-left">{piece.description}</p>
                    </div>
                    <Divider />
                </div>
            ))}
        </>
    );
};

export default LoreDisplay;