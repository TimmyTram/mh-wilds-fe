import { Monster } from "@/app/types/MonsterData";
import { MonsterWeakness } from "@/app/types/MonsterWeakness";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile"
import Star from "../../Stars/Stars";
import { getElementImage, getStatusImage } from "@/app/utils/utils";
import Image from "next/image";

interface MonsterWeaknessChartProps {
    monster: Monster;
}

const ALL_ELEMENTS = ["fire", "ice", "water", "thunder", "dragon"];

/**
 * Determines the correct weakness kind.
 * @param weakness - The weakness object to check.
 * @returns - The correct weakness kind as a string.
 */
function getCorrectWeaknessKind(weakness: MonsterWeakness): string {
    switch (weakness.kind) {
        case "element":
            return weakness.element.toUpperCase();
        case "status":
            return weakness.status.toUpperCase();
        case "effect":
            return weakness.effect.toUpperCase();
        default:
            return "Unknown";
    }
}

const MonsterWeaknessList = ({ weaknesses, className }: { weaknesses: MonsterWeakness[], className?: string }) => {
    return (
        <>
            {/* Display all elements, even if missing */}
            {ALL_ELEMENTS.map((element) => {
                const match = weaknesses.find(
                    (weakness) => weakness.kind === "element" && weakness.element?.toLowerCase() === element
                );

                return (
                    <div key={element} className={className}>
                        <div className="flex flex-row items-center gap-1">
                            <p className="text-lg font-bold">{element.toUpperCase()}</p>
                            <Image
                                src={getElementImage(element)}
                                alt={element}
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                        </div>
                        <Star numOfStars={match ? match.level : 0} />
                    </div>
                );
            })}

            {/* Display remaining status and effect weaknesses */}
            {weaknesses
                .filter(w => w.kind !== "element")
                .map((weakness, index) => (
                    <div key={`non-element-${index}`} className={className}>
                        <div className="flex flex-row items-center gap-1">
                            <p className="text-lg font-bold">{getCorrectWeaknessKind(weakness)}</p>

                            {weakness.kind === "status" && (
                                <Image
                                    src={getStatusImage(weakness.status)}
                                    alt={weakness.status}
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            )}
                        </div>
                        <Star numOfStars={weakness.level} />
                    </div>
                ))
            }
        </>
    );
}

const MonsterWeaknessChart = ({ monster }: MonsterWeaknessChartProps) => {
    const isMobile = useIsMobile(1800);

    if (!monster) {
        return <p>Loading...</p>;
    }

    const { weaknesses } = monster;

    if (!weaknesses || weaknesses.length === 0) {
        return <p>No weaknesses available.</p>;
    }

    return (
        <div>
            {isMobile ? (
                <div className="border border-4 p-4 rounded-lg shadow-md bg-card">
                    <div className="grid grid-cols-2 gap-4">
                        <h2 className="text-lg font-bold">WEAKNESSES</h2>
                        <h2 className="text-lg font-bold">WEAKNESS LEVELS</h2>
                    </div>
                    <MonsterWeaknessList weaknesses={weaknesses} className="grid grid-cols-2 gap-4" />
                </div>
            ) : (
                <div className="flex flex-row border border-4 p-4 rounded-lg shadow-md bg-card">
                    <MonsterWeaknessList weaknesses={weaknesses} className="flex flex-col items-center justify-center p-4" />
                </div>
            )}
        </div>
    );
}

export default MonsterWeaknessChart;