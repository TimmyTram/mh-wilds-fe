import { Monster } from "@/app/types/MonsterData";
import { MonsterResistances } from "@/app/types/MonsterResistances";
import MonsterAttributeDisplay from "@/app/components/MonsterHunter/Monsters/shared/MonsterAttributeDisplay";

interface MonsterResistancesChartProps {
    monster: Monster;
}

type ResistanceType = "element" | "status" | "effect";

const ResistancesDisplay = ({ resistances, type, className }: { resistances: MonsterResistances[], type: ResistanceType, className?: string }) => {
    return <MonsterAttributeDisplay attributes={resistances} type={type} className={className} showLevel={false} />;
}

const MonsterResistancesChart = ({ monster }: MonsterResistancesChartProps) => {
    return (
        <>
            <div className="border-4 rounded-lg shadow-md p-4 bg-card">
                <h2 className="text-lg font-bold italic font-bold underline underline-offset-4 decoration-2 text-center mb-4">
                    Resistances
                </h2>
                <div className="flex flex-row justify-center items-center gap-4">
                    <ResistancesDisplay
                        resistances={monster.resistances.filter((resistance: MonsterResistances) => resistance.kind === "element")}
                        type="element"
                        className="flex flex-row items-center gap-1"
                    />
                    <ResistancesDisplay
                        resistances={monster.resistances.filter((resistance: MonsterResistances) => resistance.kind === "status")}
                        type="status"
                        className="flex flex-row items-center gap-1"
                    />
                    <ResistancesDisplay
                        resistances={monster.resistances.filter((resistance: MonsterResistances) => resistance.kind === "effect")}
                        type="effect"
                        className="flex flex-row items-center gap-1"
                    />
                </div>
            </div>
        </>
    );
};

export default MonsterResistancesChart;