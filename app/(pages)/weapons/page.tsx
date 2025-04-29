'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Weapon } from "@/app/types/api/weapons/Weapon";
import { useState } from "react";
import WeaponToggle from "@/app/components/MonsterHunter/Weapons/WeaponToggle";
import WeaponTable from "@/app/components/MonsterHunter/Weapons/WeaponTable";

const Page = () => {
    const [kind, setKind] = useState("great-sword");
    const { language, isLanguageLoaded } = useLanguageContext();
    const query = `weapons?q={"kind":"${kind}"}&p={"id":true,"name":true,"crafting.row":true,"crafting.column":true, "slots": true, "affinity": true, "sharpness": true, "damage.raw": true, "specials": true}`;
    const { data, loading, error } = useFetchAllMhData<Weapon>(
        query,
        isLanguageLoaded ? language : undefined
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <WeaponToggle currentWeapon={kind} setWeaponKind={setKind} />
            <WeaponTable weapons={data} className="py-10 md:px-10" />
        </div>
    );
};

export default Page;
