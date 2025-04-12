import { Monster } from "@/app/types/MonsterData";
import { monsterMap } from "@/app/types/Associations/Associations";
import Image from "next/image";
import { getImage } from "@/app/utils/utils";

interface MonsterHeaderProps {
    monster: Monster | null;
    imgWidth: number;
    imgHeight: number;
    imgClassName?: string;
}


const MonsterHeader = ({ monster, imgWidth, imgHeight, imgClassName }: MonsterHeaderProps) => {
    
    if (!monster) {
        return <p>Loading...</p>;
    }
    
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={getImage(monster, monsterMap)}
                alt={monster.name}
                width={imgWidth}
                height={imgHeight}
                className={`${imgClassName}`}
            />
            <p className="text-xl font-bold mt-4">{monster.name}</p>
        </div>
    );
};

export default MonsterHeader;