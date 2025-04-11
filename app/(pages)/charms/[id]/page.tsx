'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { useParams } from "next/navigation";
import Divider from "../../../components/UI/Divider/Divider";
import { CharmRank, CharmSet } from "@/app/types/CharmData";
import CraftingDisplay from "@/app/components/MonsterHunter/Crafting/CraftingDisplay";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData<CharmSet>('charms', String(id), language);

    if (!isLanguageLoaded) {
        return <p>Loading language...</p>;
    }

    console.log(data);

    return (
        <div className="flex flex-col items-center justify-center">
            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data.</p>}

            <div className="px-4 py-4 w-full sm:px-8 md:px-16 lg:px-32">
                <div className="grid grid-cols-4 gap-4 mb-2 font-semibold">
                    <p>Charm Name</p>
                    <p>Charm Description</p>
                    <p>Rarity</p>
                    <p>Skill</p>
                </div>

                {data && data.ranks && data.ranks.length > 0 && (
                    data.ranks.map((rank: CharmRank, index: number) => (
                        <div key={index} className="grid grid-cols-4 gap-4 mb-2">
                            <p>{rank.name}</p>
                            <p>{rank.description}</p>
                            <p>{rank.rarity}</p>
                            {rank.skills.map((skill) => (
                                <p key={skill.skill.id}>
                                    {skill.skill.name} (Level: {skill.level})
                                </p>
                            ))}
                        </div>
                    ))
                )}
                <Divider />
                {data && data.ranks && data.ranks.length > 0 && (
                    data.ranks.map((rank: CharmRank, index: number) => (
                        <div key={index} className="">
                            <CraftingDisplay itemName={rank.name} crafting={rank.crafting} />
                            <Divider />
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default Page;