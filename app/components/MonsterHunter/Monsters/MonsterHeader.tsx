import { Monster } from "@/app/types/MonsterData";
import { monsterMap } from "@/app/types/Associations/Associations";
import Image from "next/image";
import { getImage } from "@/app/utils/utils";

interface MonsterHeaderProps {
    monster: Monster | null;
}


const MonsterHeader = ({ monster }: MonsterHeaderProps) => {
    
    if (!monster) {
        return <p>Loading...</p>;
    }
    
    return (
        <div className="flex flex-row border">
            <Image
                src={getImage(monster, monsterMap)}
                alt={monster.name}
                width={200}
                height={200}
                className="rounded-lg"
            />
            <p>{monster.name}</p>
        </div>
    );
};

export default MonsterHeader;