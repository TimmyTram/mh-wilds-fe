import Link from "next/link";
import Image from "next/image";

interface DecorationCardProps {
    id: number;
    name: string;
    slot: number;
}

const DecorationCard = ({ id, name, slot }: DecorationCardProps) => {
    return (
        <Link href={`/decorations/${id}`} className="w-[200px]">
            <div className="bg-card hover:bg-cardHover flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <Image 
                    src={`/assets/DecorationIcons/decoration_level_${slot}.png`}
                    alt={name}
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-2"
                />
                <h2 className="text-lg font-bold text-center">{name}</h2>
            </div>
        </Link> 
    );
}

export default DecorationCard;