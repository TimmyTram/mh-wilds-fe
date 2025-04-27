import { SkillRank } from "@/app/types/api/skills/SkillData";

interface DecorationInfoProps {
    description: string;
    rarity: number;
    value: number;
    skills: SkillRank[];
    className?: string;
}

const DecorationInfo = ({ description, rarity, value, skills, className }: DecorationInfoProps) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-start justify-start bg-card p-4 rounded-lg shadow-md w-full h-full">
                <h2 className="text-xl font-bold underline-offset-2 underline mb-4">Decoration Info</h2>
                <p className="text-sm italic indent-2">{description}</p>
                <div className="mt-4 space-y-2">
                    <p className="text-sm">
                        <span className="font-semibold">Rarity:</span> {rarity}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Value:</span> {value} zenny
                    </p>
                    <div>
                        <p className="text-sm">Skills:</p>
                        <ul className="list-disc list-inside pl-5 space-y-1">
                            {skills.map((skill: SkillRank, index: number) => (
                                <li key={index} className="text-sm">
                                    <div className="flex flex-col">
                                        <span className="font-bold">{skill.skill.name}</span>
                                        <span className="text-sm">Level {skill.level}</span>
                                        <span className="text-xs italic">{skill.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DecorationInfo;