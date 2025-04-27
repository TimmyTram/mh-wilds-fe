'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Skill } from "@/app/types/api/skills/SkillData";
import { sortByName } from "@/app/utils/utils";
import SkillCard from "@/app/components/MonsterHunter/Skills/SkillsCard";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<Skill>(`skills?p={"id": true, "name": true, "icon": true}`, isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    const sortedData = data ? sortByName(data, language, item => item.name) : [];

    console.log(sortedData);

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Skills</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}
            <div className="flex flex-wrap gap-4">
                {sortedData.map((skill: Skill) => (
                    <SkillCard key={skill.id} id={skill.id} name={skill.name} icon={skill.icon} />
                ))}
            </div>

        </div>
    );
};

export default Page;