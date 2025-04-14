import Link from "next/link";
import { formatCharmSetName } from "@/app/utils/utils";

interface CharmCardProps {
    id: number | undefined;
    name: string;
}

const CharmCard = ({ id, name }: CharmCardProps) => {
    return (
        <Link href={`/charms/${id}`} className="w-[200px]">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <p>{formatCharmSetName(name)}</p>
                </div>
            </div>
        </Link>
    );
};

export default CharmCard;