import { MonsterPart } from "@/app/types/api/monsters/MonsterData";

interface MonsterBreakablePartsProps {
    monsterParts: MonsterPart[];
}

const MonsterBreakableParts = ({monsterParts}: MonsterBreakablePartsProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold p-6 text-center">Monster Breakable Parts</h2>
            {monsterParts.map((part: MonsterPart, index: number) => (
                <div key={index} className="flex flex-col items-center justify-center border-4 bg-card p-4 m-4 rounded-lg">
                    <h3 className="text-lg font-bold">{part.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default MonsterBreakableParts;