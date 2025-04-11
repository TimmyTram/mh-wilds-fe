import { ArmorPiece } from "@/app/types/ArmorData";
import Divider from "../../UI/Divider/Divider";

interface ArmorResistancesDisplayProps {
    pieces: ArmorPiece[];
}

const ArmorResistanceDisplay = ({ pieces }: ArmorResistancesDisplayProps) => {
    return (
        <>
            <div className="grid grid-cols-8 gap-4 mb-4 font-semibold">
                <p>Kind</p>
                <p>Name</p>
                <p>Defense</p>
                <p>Fire Res</p>
                <p>Water Res</p>
                <p>Thunder Res</p>
                <p>Ice Res</p>
                <p>Dragon Res</p>
            </div>
            <Divider />
            <div className="">
                {pieces.map((piece: ArmorPiece) => (
                    <div key={piece.id} className="grid grid-cols-8 gap-4 mb-4">
                        <p>{piece.kind}</p>
                        <p>{piece.name}</p>
                        <p>{piece.defense.base}</p>
                        <p>{piece.resistances.fire}</p>
                        <p>{piece.resistances.water}</p>
                        <p>{piece.resistances.thunder}</p>
                        <p>{piece.resistances.ice}</p>
                        <p>{piece.resistances.dragon}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ArmorResistanceDisplay;