import { Elderseal, WeaponDamage, WeaponSpecial } from "@/app/types/api/weapons/Weapon";
import { capitalize, getCorrectImageKind, getCorrectKind } from "@/app/utils/utils";
import Image from "next/image";

interface WeaponStatsProps {
    damage: WeaponDamage;
    affinity: number;
    defenseBonus: number;
    elderseal: Elderseal;
    specials: WeaponSpecial[];
    slots: number[];
}

const WeaponStats = ({ damage, affinity, defenseBonus, elderseal, specials, slots }: WeaponStatsProps) => {
    return (
        <div className="w-full flex flex-col justify-center py-4 gap-2">
            <div className="flex justify-between">
                <p>Raw Attack:</p>
                <p>{damage.raw}</p>
            </div>
            <div className="flex justify-between">
                <p>Bloated Attack:</p>
                <p>{damage.display}</p>
            </div>
            <div className="flex justify-between">
                <p>Affinity:</p>
                <p>{affinity} %</p>
            </div>
            <div className="flex justify-between">
                <p>Defense Bonus:</p>
                <p>{defenseBonus}</p>
            </div>
            <div className="flex justify-between">
                <p>Elderseal:</p>
                <p>{elderseal ?? "N/A"}</p>
            </div>
            <div className="flex justify-between">
                <p>{specials[0]?.kind ? capitalize(specials[0].kind.toString()) : "Element"}</p>
                <div className="flex flex-row gap-2 items-center justify-center">
                    {specials[0]?.kind && (
                        <Image
                            src={getCorrectImageKind(getCorrectKind(specials[0]), specials[0]?.kind)}
                            width={24}
                            height={24}
                            alt={specials[0]?.kind}
                            className="object-contain"
                        />
                    )}
                    {specials[0]?.damage.raw ?? "--"}
                </div>
            </div>

            <div className="flex justify-between">
                <p>Slots:</p>
                <div className="flex flex-row gap-2 items-center justify-center">
                    {slots.length > 0 ? (
                        slots.map((slot: number, index: number) => (
                            <div key={index}>
                                <Image
                                    src={`/assets/JewelSlots/jewel_level_${slot}.webp`}
                                    width={24}
                                    height={24}
                                    alt={`Jewel Slot Level ${slot}`}
                                    className="object-contain"
                                />
                            </div>
                        ))
                    ) : (
                        <p>--</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeaponStats;