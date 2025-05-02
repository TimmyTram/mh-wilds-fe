'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Skill } from "@/app/types/api/skills/SkillData";
import { sortByName } from "@/app/utils/utils";
import SkillCard from "@/app/components/MonsterHunter/Skills/SkillsCard";
import Loading from "@/app/components/UI/Loading/Loading";
import Error from "@/app/components/UI/Error/Error";

const Page = () => {
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<Skill>(`skills?p={"id": true, "name": true, "icon": true}`, isLanguageLoaded ? language : undefined);

    if (!isLanguageLoaded) {
        return <Loading />;
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const sortedData = data ? sortByName(data, language, item => item.name) : [];

    return (
        <div className="px-32 py-4">
            <h1 className="flex justify-center items-center text-4xl pb-10">Skills</h1>
            <div className="flex flex-wrap gap-4">
                {sortedData.map((skill: Skill) => (
                    <SkillCard key={skill.id} id={skill.id} name={skill.name} icon={skill.icon} />
                ))}
            </div>

        </div>
    );
};

export default Page;