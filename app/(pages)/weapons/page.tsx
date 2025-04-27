'use client';

import { useLanguageContext } from "@/app/Context/LanguageProvider";
import useFetchAllMhData from "@/app/hooks/fetchAllMhData";
import { Weapon } from "@/app/types/api/weapons/Weapon";
import { useState } from "react";

const Page = () => {
    const [kind, setKind] = useState("bow");
    const { language, isLanguageLoaded } = useLanguageContext();
    const { data, loading, error } = useFetchAllMhData<Weapon>(
        `weapons?q={"kind":"${kind}"}&p={"id": true,"name": true,"crafting.row": true,"crafting.column": true}`,
        isLanguageLoaded ? language : undefined
      );
      

    console.log(data);


    return (
        <div>
            this page is WIP
        </div>
    );
}

export default Page;