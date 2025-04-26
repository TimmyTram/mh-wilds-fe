interface ItemInfoProps {
    description: string;
    rarity: number;
    carryLimit: number;
    value: number;
    className?: string;
}


const ItemInfo = ({ description, rarity, carryLimit, value, className }: ItemInfoProps) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-start justify-start bg-card p-4 rounded-lg shadow-md w-full h-full">
                <h2 className="text-xl font-bold underline-offset-2 underline">Item Info</h2>
                <p className="text-sm italic indent-2">{description}</p>
                <div className="mt-2">
                    <p className="text-sm">Rarity: {rarity}</p>
                    <p className="text-sm">Carry Limit: {carryLimit}</p>
                    <p className="text-sm">Value: {value} zenny</p>
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;
