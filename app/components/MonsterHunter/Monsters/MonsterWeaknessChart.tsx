import { Monster } from "@/app/types/MonsterData";
import { MonsterWeakness } from "@/app/types/MonsterWeakness";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile"
import Star from "../../Stars/Stars";
import { getElementImage, getStatusImage, getEffectImage } from "@/app/utils/utils";
import Image from "next/image";

interface MonsterWeaknessChartProps {
    monster: Monster;
}

type WeaknessType = "element" | "status" | "effect";

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

function getImage(weaknessKind: string, type: WeaknessType): string {
    switch (type) {
        case "element":
            return getElementImage(weaknessKind);
        case "status":
            return getStatusImage(weaknessKind);
        case "effect":
            return getEffectImage(weaknessKind);
    }
}

const LegendDisplay = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-lg font-bold">Legend</h2>
            <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-1">
                    <Star numOfStars={1} color="text-yellow-500" />
                    <p>Effective (More stars = Higher effectiveness)</p>
                </div>
                <div className="flex items-center gap-1">
                <Star numOfStars={1} color="text-gray-500" />
                    <p>Not Listed (Not Effective)</p>
                </div>
            </div>
        </div>
    );
}

const WeaknessDisplay = ({ weaknesses, type, className }: { weaknesses: MonsterWeakness[], type: WeaknessType, className?: string }) => {
    return (
        <>
            {weaknesses.map((weakness: MonsterWeakness, index: number) => (
                <div key={index} className={className}>
                    <div className="flex flex-row items-center gap-1">
                        <p className="font-bold">{getCorrectWeaknessKind(weakness).toUpperCase()}</p>
                        <Image
                            src={getImage(getCorrectWeaknessKind(weakness), type)}
                            alt={getCorrectWeaknessKind(weakness)}
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                    </div>
                    <Star numOfStars={weakness.level} color="text-yellow-500" />
                </div>
            ))}
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
                    <LegendDisplay />
                    <div className="grid grid-cols-2 gap-4">
                        <h2 className="text-lg font-bold">WEAKNESSES</h2>
                        <h2 className="text-lg font-bold">RELATIVE EFFECTIVENESS</h2>
                    </div>
                    <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "element")} type="element" className="grid grid-cols-2 gap-4" />
                    <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "status")} type="status" className="grid grid-cols-2 gap-4" />
                    <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "effect")} type="effect" className="grid grid-cols-2 gap-4" />
                </div>
            ) : (
                <div className="flex flex-row border border-4 p-4 rounded-lg shadow-md bg-card items-center justify-center">
                    <LegendDisplay />
                    <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "element")} type="element" className="flex flex-col items-center p-4" />
                    <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "status")} type="status" className="flex flex-col items-center p-4" />
                    <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "effect")} type="effect" className="flex flex-col items-center p-4" />
                </div>
            )}
        </div>
    );
}

export default MonsterWeaknessChart;