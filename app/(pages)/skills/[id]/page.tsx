'use client';

import { useParams } from "next/navigation";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { Skill, SkillRank } from "@/app/types/SkillData";


const SkillRanksDisplay = ({ skills }: { skills: SkillRank[] }) => {
    return (
        <div className="flex flex-col gap-2">
            {skills.map((skill: SkillRank) => (
                <div key={skill.id} className="flex flex-row gap-4 p-4 border rounded-md shadow-md">
                    <h2 className="text-xl font-bold">Level: {skill.level}</h2>
                    <p>{skill.description}</p>
                </div>
            ))}
        </div>
    );
}

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData<Skill>('skills', String(id), language)

    if (!isLanguageLoaded) return <p className="p-4">Loading language...</p>;

    console.log(data);

    if (loading) return <p className="p-4">Loading...</p>;
    
    return (
        <>
            {data ? (
                <div>
                    <p>{data.name}</p>
                    <p>{data.kind} skill</p>
                    <p>Description: {data.description}</p>
                    <SkillRanksDisplay skills={data.ranks} />
                </div>
            ) : (
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Error</h1>
                    <p>{error}</p>
                </div>
            )}
        </>
    );
}

export default Page;