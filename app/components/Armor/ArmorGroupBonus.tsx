import { Bonus } from "@/app/types/ArmorData";
import Divider from "../UI/Divider/Divider";

interface ArmorGroupBonusProps {
    bonus: Bonus;
    groupBonus: Bonus;
}

const ArmorGroupBonus = ({ bonus, groupBonus }: ArmorGroupBonusProps) => {
    return (
        <>
            <h2 className="text-4xl text-left mb-4 font-semibold">Armor Set Bonus</h2>
            <Divider />
            <div className="flex flex-col items-start justify-start mb-4">
                <p className="font-semibold text-2xl mb-2">
                    {bonus.skill.name}
                </p>
                {bonus.ranks.map((rank) => (
                    <div key={rank.id} className="flex flex-col items-start justify-start mb-2">
                        <p className="">{`+${rank.pieces} ${rank.skill.description}`}</p>
                    </div>
                ))}
                <p className="font-semibold text-2xl mb-2">
                    {groupBonus.skill.name}
                </p>
                {groupBonus.ranks.map((rank) => (
                    <div key={rank.id} className="flex flex-col items-start justify-start mb-2">
                        <p className="">{`+${rank.pieces} ${rank.skill.description}`}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ArmorGroupBonus;