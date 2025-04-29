'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Weapon } from "@/app/types/api/weapons/Weapon";
import { useState } from "react";
import WeaponToggle from "@/app/components/MonsterHunter/Weapons/WeaponToggle";

const Page = () => {
    // by default, the weapon kind is set to great-sword
    const [kind, setKind] = useState("great-sword");
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<Weapon>(
        `weapons?q={"kind":"${kind}"}&p={"id": true,"name": true,"crafting.row": true,"crafting.column": true}`,
        isLanguageLoaded ? language : undefined
      );
      
    console.log(data);

    return (
        <div>
            <WeaponToggle currentWeapon={kind} setWeaponKind={setKind} />
        </div>
    );
}

export default Page;