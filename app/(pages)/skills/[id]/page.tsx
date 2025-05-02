'use client';

import { useParams } from "next/navigation";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { Skill, SkillRank } from "@/app/types/api/skills/SkillData";
import Image from 'next/image';
import Loading from "@/app/components/UI/Loading/Loading";


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

    if (!isLanguageLoaded) return <Loading />;


    if (loading) return <Loading />;

    return (
        <>
            {data ? (
                <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-8 md:col-span-4 border-4 rounded-lg shadow-md p-4">
                        <div className="flex flex-col items-center justify-center mb-4">

                            <Image
                                src={`/assets/SkillIcons/${data.icon.kind}.png`}
                                alt={data.kind.toString()}
                                width={64}
                                height={64}
                                className="w-16 h-16 mb-2"
                            />
                            <p>{data.name}</p>
                        </div>
                        <div className="flex flex-col gap-2 mb-4 items-center justify-center">
                            <p>Type: {data.kind} skill</p>
                            <p>{data.description ? `Description: ${data.description}` : ""}</p>
                        </div>
                    </div>
                    <div className="col-span-8 md:col-span-4 border-4 rounded-lg shadow-md p-4">
                        <h2 className="text-2xl font-bold text-center mb-4">Skill Effects:</h2>
                        <SkillRanksDisplay skills={data.ranks} />
                    </div>
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