import { Monster  } from "@/app/types/MonsterData";
import Image from "next/image";
import Link from "next/link";
import { monsterMap } from "@/app/types/Associations/Associations";


interface MonsterCardProps {
    monster: Monster;
}

function getMonsterImage(monster: Monster) {
    const img = monsterMap.get(monster.gameId);
    if (img === undefined) return "Unknown";
    return img;
}

const MonsterCard = ({ monster }: MonsterCardProps) => {
    return (
        <Link href={`/monsters/${monster.id}`} className="w-[200px]">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <p className="text-center text-sm font-semibold">{monster.name}</p>
                    <Image 
                        src={`/assets/MonsterImages/${getMonsterImage(monster)}.webp`}
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