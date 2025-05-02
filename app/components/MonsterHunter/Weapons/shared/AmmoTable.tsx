import { HeavyBowgunAmmo } from "@/app/types/api/weapons/weaponTypes/Heavybowgun";
import { LightBowgunAmmo } from "@/app/types/api/weapons/weaponTypes/Lightbowgun";

const HeaderLabel = ({ children }: { children: React.ReactNode }) => {
    return <span className="text-sm md:text-basecol-span-1 text-center font-bold">{children}</span>;
}

const Label = ({ children }: { children: React.ReactNode }) => {
    return <span className="text-sm lg:text-base col-span-1 text-center">{children}</span>;
}

interface AmmoTableProps {
    ammo: HeavyBowgunAmmo[] | LightBowgunAmmo[];
}

const AmmoTable = ({ ammo }: AmmoTableProps) => {
    return (
        <div className="w-full divide-y divide-black dark:divide-white">
            <div
                className={`grid ${ammo[0] && "rapid" in ammo[0] ? "grid-cols-4" : "grid-cols-3"
                    } gap items-center w-full gap-4 divide-x divide-black dark:divide-white`}
            >
                <HeaderLabel>Ammo Type</HeaderLabel>
                <HeaderLabel>Level</HeaderLabel>
                <HeaderLabel>Capacity</HeaderLabel>
                {ammo[0] && "rapid" in ammo[0] && <HeaderLabel>Rapid Fire</HeaderLabel>}
            </div>
            {ammo.map((ammoItem, index) => (
                <div
                    key={index}
                    className={`grid ${"rapid" in ammoItem ? "grid-cols-4" : "grid-cols-3"
                        } items-center w-full gap-4 divide-x divide-black dark:divide-white`}
                >
                    <Label>{ammoItem.kind}</Label>
                    <Label>{ammoItem.level}</Label>
                    <Label>{ammoItem.capacity}</Label>
                    {"rapid" in ammoItem && <Label>{ammoItem.rapid ? "Yes" : "No"}</Label>}
                </div>
            ))}
        </div>
    );
}

export default AmmoTable;