'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Weapon } from "@/app/types/api/weapons/Weapon";
import { useState } from "react";
import WeaponToggle from "@/app/components/MonsterHunter/Weapons/WeaponToggle";
import WeaponTable from "@/app/components/MonsterHunter/Weapons/WeaponTable";
import Loading from "@/app/components/UI/Loading/Loading";

const Page = () => {
    const [kind, setKind] = useState("great-sword");
    const { language, isLanguageLoaded } = useLanguageContext();
    const q = encodeURIComponent(JSON.stringify({ kind }));
    const p = encodeURIComponent(JSON.stringify({
        id: true,
        name: true,
        kind: true,
        rarity: true,
        "crafting.row": true,
        "crafting.column": true,
        slots: true,
        affinity: true,
        sharpness: true,
        "damage.raw": true,
        specials: true,
    }));
    const query = `weapons?q=${q}&p=${p}`;
    const { data, loading, error } = useFetchAllMhData<Weapon>(
        query,
        isLanguageLoaded ? language : undefined
    );

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <WeaponToggle currentWeapon={kind} setWeaponKind={setKind} />
            <WeaponTable weapons={data} className="py-10 md:px-10" />
        </div>
    );
};

export default Page;
