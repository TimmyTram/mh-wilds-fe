import { SkillRank } from "@/app/types/api/skills/SkillData";

interface WeaponSkillProps {
    skills: SkillRank[];
}

const WeaponSkill = ({ skills }: WeaponSkillProps) => {
    if (!skills || skills.length === 0) {
        return (
            <p className="text-center italic">No skills available</p>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {skills.map((skill: SkillRank, index: number) => (
                <div key={index} className="flex flex-col gap-8">
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <p>Weapon Skill:</p>
                        <p>{skill.skill.name}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <p>Level:</p>
                        <p>{skill.level}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-between">
                        <p>Skill Description:</p>
                        <p>{skill.skill.description}</p>
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-between">
                        <p>Skill Effect:</p>
                        <p>{skill.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default WeaponSkill;