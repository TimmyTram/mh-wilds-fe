import { Monster } from "@/app/types/MonsterData";
import { MonsterWeakness } from "@/app/types/MonsterWeakness";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile"

interface MonsterWeaknessChartProps {
    monster: Monster;
}

/**
 * Determines the correct weakness kind.
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
    const isMobile = useIsMobile();

    if (!monster) {
        return <p>Loading...</p>;
    }

    const { weaknesses } = monster;

    if (!weaknesses || weaknesses.length === 0) {
        return <p>No weaknesses available.</p>;
    }

    return (
        <div className="">
            {isMobile ? (
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <h2 className="text-lg font-bold">Weaknesses</h2>
                        <h2 className="text-lg font-bold">Weakness Levels</h2>
                    </div>
                    {weaknesses.map((weakness, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4">
                            <p>{getCorrectWeaknessKind(weakness)}</p>
                            <p>{weakness.level}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-row border">
                    {weaknesses.map((weakness, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4">
                            <h2 className="text-lg font-bold">{getCorrectWeaknessKind(weakness)}</h2>
                            <p className="text-sm">{weakness.level}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MonsterWeaknessChart;
