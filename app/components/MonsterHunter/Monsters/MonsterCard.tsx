import { Monster  } from "@/app/types/MonsterData";
import Image from "next/image";
import Link from "next/link";
import { monsterMap } from "@/app/types/Associations/Associations";
import { getImage } from "@/app/utils/utils";

interface MonsterCardProps {
    monster: Monster;
}

const MonsterCard = ({ monster }: MonsterCardProps) => {
    return (
        <Link href={`/monsters/${monster.id}`} className="w-[200px]">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <p className="text-center text-sm font-semibold">{monster.name}</p>
                    <Image 
                        src={getImage(monster, monsterMap)}
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