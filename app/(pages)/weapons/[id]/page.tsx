'use client';

import { useParams } from "next/navigation";
import useFetchSingleMhData from "@/app/hooks/fetchSingleMhData";
import { Weapon } from "@/app/types/api/weapons/Weapon";
import { useLanguageContext } from "@/app/Context/LanguageProvider";
import WeaponHeader from "@/app/components/MonsterHunter/Weapons/WeaponHeader";
import SharpnessDisplay from "@/app/components/MonsterHunter/Weapons/SharpnessDisplay";
import WeaponStats from "@/app/components/MonsterHunter/Weapons/WeaponStats";
import WeaponSkill from "@/app/components/MonsterHunter/Weapons/WeaponSkill";
import WeaponDescription from "@/app/components/MonsterHunter/Weapons/WeaponDescription";
import WeaponMaterialsDisplay from "@/app/components/MonsterHunter/Weapons/WeaponMaterialDisplay";
import WeaponSpecificDisplay from "@/app/components/MonsterHunter/Weapons/WeaponSpecificDisplay";
import Divider from "@/app/components/UI/Divider/Divider";
import Loading from "@/app/components/UI/Loading/Loading";

const Page = () => {
    const { id } = useParams();
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchSingleMhData<Weapon>('weapons', String(id), language);

    if (!isLanguageLoaded) return <Loading />;
    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    console.log(data);

    return data ? (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 md:p-6 bg-card rounded-lg shadow-lg flex flex-col">
                    <WeaponHeader
                        name={data.name}
                        kind={data.kind}
                        series={data.series}
                        rarity={data.rarity}
                    />
                    <WeaponDescription description={data.description} />
                    <Divider />
                    <WeaponSpecificDisplay weapon={data} />
                </div>

                <div className="flex flex-col space-y-6 p-4 md:p-6 bg-card rounded-lg shadow-lg">
                    {data.sharpness && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Sharpness</h3>
                            <SharpnessDisplay sharpness={data.sharpness} width={200} />
                        </div>
                    )}

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Stats</h3>
                        <WeaponStats
                            damage={data.damage}
                            affinity={data.affinity}
                            defenseBonus={data.defenseBonus}
                            elderseal={data.elderseal}
                            specials={data.specials}
                            slots={data.slots}
                        />
                    </div>
                </div>

                <div className="p-4 md:p-6 bg-card rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <WeaponSkill skills={data.skills} />
                </div>
            </div>
            
            <WeaponMaterialsDisplay crafting={data.crafting} />
        </div>
    ) : (
        <div className="container mx-auto flex items-center justify-center p-8">
            <div className="text-center p-8 border-4 rounded-lg">
                <h1 className="text-2xl font-bold">Weapon not found</h1>
            </div>
        </div>
    );
}

export default Page;