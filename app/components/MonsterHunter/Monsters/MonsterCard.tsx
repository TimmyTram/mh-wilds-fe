import Image from "next/image";
import Link from "next/link";
import { monsterMap } from "@/app/types/Associations/Associations";
import { getImage } from "@/app/utils/utils";

interface MonsterCardProps {
    id: number;
    gameId: number;
    name: string;
}

const MonsterCard = ({ id, gameId, name }: MonsterCardProps) => {
    return (
        <Link href={`/monsters/${id}`} className="w-[200px]">
            <div className="bg-card hover:bg-cardHover flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <p className="text-center text-xl font-semibold">{name}</p>
                    <Image 
                        src={getImage(gameId, monsterMap)}
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

export default MonsterCard;