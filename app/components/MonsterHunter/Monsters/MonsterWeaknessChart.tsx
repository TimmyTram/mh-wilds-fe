import { Monster } from "@/app/types/api/monsters/MonsterData";
import { MonsterWeakness } from "@/app/types/api/monsters/MonsterWeakness";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile"
import Star from "../../Stars/Stars";
import MonsterAttributeDisplay from "./shared/MonsterAttributeDisplay";

interface MonsterWeaknessChartProps {
    monster: Monster;
}

type WeaknessType = "element" | "status" | "effect";

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
    return <MonsterAttributeDisplay attributes={weaknesses} type={type} className={className} showLevel={true} />;
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
                <div className="border-4 p-4 rounded-lg shadow-md bg-card">
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
                <div className="border-4 p-4 rounded-lg shadow-md bg-card items-center justify-center">
                    <h2 className="text-lg font-bold italic underline underline-offset-4 decoration-2 text-center mb-4">
                        Weaknesses
                    </h2>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <LegendDisplay />
                        <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "element")} type="element" className="flex flex-col items-center p-4" />
                        <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "status")} type="status" className="flex flex-col items-center p-4" />
                        <WeaknessDisplay weaknesses={weaknesses.filter(weakness => weakness.kind === "effect")} type="effect" className="flex flex-col items-center p-4" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MonsterWeaknessChart;