import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "@/app/components/UI/Divider/Divider";

interface LoreDisplayProps {
    pieces: ArmorPiece[];
};

const LoreDisplay = ({ pieces }: LoreDisplayProps) => {
    return (
        <div className="w-full">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                <p>Armor Lore</p>
            </div>
            <Divider />
            <div className="space-y-4 sm:space-y-6 mt-3 sm:mt-4">
                {pieces.map((piece: ArmorPiece) => (
                    <div key={piece.id}>
                        <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                            <p className="text-left font-medium text-sm sm:text-base md:text-lg sm:w-1/4 md:w-1/5">
                                {piece.name}
                            </p>
                            <p className="text-left text-sm sm:text-base sm:w-3/4 md:w-4/5">
                                {piece.description || "No description available."}
                            </p>
                        </div>
                        <Divider />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoreDisplay;