import { Weapon } from "@/app/types/api/weapons/Weapon";
import { getCorrectImageKind, getCorrectKind } from "@/app/utils/utils";
import Image from "next/image";
import SharpnessDisplay from "./SharpnessDisplay";
import WeaponRarity from "./WeaponRarity";
import Link from "next/link";

interface WeaponCardProps {
    weapon: Weapon;
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
    return (
        <Link href={`/weapons/${weapon.id}`} className="w-full border-b-4 p-4 sm:p-10 grid grid-cols-12 gap-2 sm:gap-0 hover:bg-cardHover transition-all duration-200 ease-in-out cursor-pointer">
            <div className="col-span-12 sm:col-span-2 text-xs sm:text-base sm:text-left flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
                <WeaponRarity kind={weapon.kind} rarity={weapon.rarity} />
                {weapon.name}
            </div>
            <div className="col-span-12 sm:col-span-2">
                <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center sm:justify-end">
                    {weapon.slots.map((slot: number, index: number) => (
                        <div key={index}>
                            <Image
                                src={`/assets/JewelSlots/jewel_level_${slot}.webp`}
                                width={24}
                                height={24}
                                alt={`Jewel Slot Level ${slot}`}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <p className="col-span-12 sm:col-span-1 text-xs sm:text-base text-center sm:text-right">{weapon.damage.raw}</p>
            <p className="col-span-12 sm:col-span-1 text-xs sm:text-base text-center sm:text-right flex items-center justify-center sm:justify-end gap-2">
                {weapon.specials[0]?.kind && (
                    <Image
                        src={getCorrectImageKind(getCorrectKind(weapon.specials[0]), weapon.specials[0]?.kind)}
                        width={24}
                        height={24}
                        alt={weapon.specials[0]?.kind}
                        className="object-contain"
                    />
                )}
                {weapon.specials[0]?.damage.raw ?? "--"}
            </p>
            <p className="col-span-12 sm:col-span-1 text-xs sm:text-base text-center sm:text-right">
                {weapon.affinity}%
            </p>
            <div className="col-span-12 sm:col-span-5 flex items-center justify-center gap-2 sm:gap-4">
                <SharpnessDisplay sharpness={weapon.sharpness} width={250} />
            </div>
        </Link>
    );
}

export default WeaponCard;