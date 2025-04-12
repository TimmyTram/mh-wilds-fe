import { Monster } from "@/app/types/MonsterData";
import { MonsterWeakness, WeaknessKind } from "@/app/types/MonsterWeakness";

interface MonsterWeaknessChartProps {
    monster: Monster;
}

/**
 * Need this function to determine the correct weakness kind.
 * @param weakness - The weakness object to check.
 * @returns - The correct weakness kind as a string.
 */
function getCorrectWeaknessKind(weakness: MonsterWeakness): string {
    switch (weakness.kind) {
        case "element":
            return weakness.element;
        case "status":
            return weakness.status;
        case "effect":
            return weakness.effect;
        default:
            return "Unknown";
    }
}

const MonsterWeaknessChart = ({ monster }: MonsterWeaknessChartProps) => {
    if (!monster) {
        return <p>Loading...</p>;
    }

    const { weaknesses } = monster;

    return (
        <div className="border">
            <div className="grid grid-cols-2 gap-4">
                <h2 className="text-lg font-bold">Weaknesses</h2>
                <h2 className="text-lg font-bold">Weakness Levels</h2>
            </div>
            {weaknesses && weaknesses.length > 0 && (
                weaknesses.map((weakness: MonsterWeakness, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                        <p>{getCorrectWeaknessKind(weakness)}</p>
                        <p>{weakness.level}</p>
                    </div>
                )))}
        </div>
    );
}

export default MonsterWeaknessChart;
