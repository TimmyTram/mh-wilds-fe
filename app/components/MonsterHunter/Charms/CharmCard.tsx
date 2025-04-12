import { CharmSet } from "@/app/types/CharmData";
import Link from "next/link";

interface CharmCardProps {
    charmSet: CharmSet;
}

const CharmCard = ({ charmSet }: CharmCardProps) => {
    return (
        <Link href={`/charms/${charmSet.id}`} className="w-[200px]">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    {charmSet.ranks.map((charm) => (
                        <div key={charm.id} className="flex flex-col items-center justify-center mb-2">
                            <p className="text-center text-sm font-semibold">{charm.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default CharmCard;