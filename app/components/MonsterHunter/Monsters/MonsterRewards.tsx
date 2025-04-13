import { MonsterReward, RewardCondition } from "@/app/types/MonsterData";
import { formatRewardCondition } from "@/app/utils/utils";

interface MonsterRewardsProps {
    rewards: MonsterReward[];
};

const MonsterRewards = ({ rewards }: MonsterRewardsProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Monster Rewards</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-5xl">
                {rewards.map((reward: MonsterReward, index: number) => (
                    <div
                        key={index}
                        className="p-4 rounded-2xl shadow-md border border-4"
                    >
                        <p className="text-lg font-semibold mb-2 text-center">
                            {reward.item.name}
                        </p>
                        <div className="flex flex-col gap-2">
                            {reward.conditions.map((condition: RewardCondition, conditionIndex: number) => (
                                <div
                                    key={conditionIndex}
                                    className="grid grid-cols-1 lg:grid-cols-2 p-2 bg-card rounded-lg items-center gap-4"
                                >
                                    <p className="text-sm">
                                        {formatRewardCondition(condition.kind)}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">Chance:</span> {condition.chance}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonsterRewards;
