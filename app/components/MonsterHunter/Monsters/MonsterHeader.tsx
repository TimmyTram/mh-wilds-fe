import { Monster } from "@/app/types/MonsterData";
import { monsterMap } from "@/app/types/Associations/Associations";
import Image from "next/image";
import { formatMonsterSpecies, getImage } from "@/app/utils/utils";

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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
            <div className="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-2">
                <Image
                    src={getImage(monster, monsterMap)}
                    alt={monster.name}
                    width={imgWidth}
                    height={imgHeight}
                    className={`${imgClassName}`}
                />
                <p className="text-xl font-bold mt-4">{monster.name}</p>
                <p className="italic font-semibold text-sm mt-1">{formatMonsterSpecies(monster.species)}</p>
            </div>

            <div
                className="mt-4 col-span-1 md:col-span-2 lg:col-span-6 border-8 border-bookBorder p-4 rounded-lg text-white"
                style={{
                    backgroundImage: `url(/assets/BackgroundImages/notes.jpg)`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <h2 className="text-2xl font-bold mb-4">Characteristics</h2>
                <p className="italic font-semibold">{monster.features}</p>
                <h2 className="text-2xl font-bold mt-4 mb-4">Helpful Hints</h2>
                <p className="italic font-semibold">{monster.tips}</p>
            </div>
        </div>
    );
};

export default MonsterHeader;