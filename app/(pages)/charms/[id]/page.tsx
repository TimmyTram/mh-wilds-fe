'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { useParams } from "next/navigation";
import Divider from "../../../components/UI/Divider/Divider";
import { CharmRank, CharmSet } from "@/app/types/api/charms/CharmData";
import CraftingDisplay from "@/app/components/MonsterHunter/Crafting/CraftingDisplay";
import { useIsMobile } from "@/app/hooks/frontend/useIsMobile";
import { SkillRank } from "@/app/types/api/skills/SkillData";
import Loading from "@/app/components/UI/Loading/Loading";
import Error from "@/app/components/UI/Error/Error";

const CharmHeader = () => (
    <div className="hidden md:grid grid-cols-4 gap-4 mb-2 font-semibold text-base md:text-lg">
        <p>Charm Name</p>
        <p>Charm Description</p>
        <p>Rarity</p>
        <p>Skill</p>
    </div>
);

const CharmRow = ({ rank }: { rank: CharmRank }) => (
    <div className="hidden md:grid grid-cols-4 gap-4 mb-2 text-sm md:text-base">
        <p className="break-words">{rank.name}</p>
        <p className="break-words">{rank.description}</p>
        <p>{rank.rarity}</p>
        <div className="space-y-1">
            {rank.skills.map((skill: SkillRank) => (
                <p key={skill.id}>
                    {skill.skill?.name} (Level: {skill.level})
                </p>
            ))}
        </div>
    </div>
);

const CharmMobileCard = ({ rank }: { rank: CharmRank }) => (
    <div className="block md:hidden p-4 border rounded-md shadow-md space-y-2 mb-4">
        <p className="font-bold text-base">{rank.name}</p>
        <p className="text-sm">{rank.description}</p>
        <p className="text-sm">Rarity: {rank.rarity}</p>
        <div className="mt-2 space-y-1">
            {rank.skills.map((skill: SkillRank) => (
                <p key={skill.id} className="text-sm">
                    {skill.skill?.name} (Level: {skill.level})
                </p>
            ))}
        </div>
    </div>
);

const CharmCraftingSection = ({ ranks }: { ranks: CharmRank[] }) => (
    <div className="space-y-6">
        {ranks.map((rank, index) => (
            <div key={index}>
                <CraftingDisplay itemName={rank.name} zennyCost={rank.crafting.zennyCost} crafting={rank.crafting.materials} />
                <Divider />
            </div>
        ))}
    </div>
);

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, error, loading } = useFetchSingleMhData<CharmSet>('charms', String(id), language);
    const isMobile = useIsMobile(768);

    if (!isLanguageLoaded) return <Loading />;

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <div className="w-full px-4 md:px-8 py-4 overflow-x-auto">

            <div className="min-w-full">
                {!isMobile && <CharmHeader />}
                <Divider />

                {data?.ranks?.length ? (
                    <>
                        {data.ranks.map((rank: CharmRank, index: number) => (
                            <div key={index}>
                                {isMobile ? <CharmMobileCard rank={rank} /> : <CharmRow rank={rank} />}
                            </div>
                        ))}

                        <Divider />
                        <CharmCraftingSection ranks={data.ranks} />
                    </>
                ) : (
                    <p className="mt-4">No ranks available.</p>
                )}
            </div>
        </div>
    );
};

export default Page;
