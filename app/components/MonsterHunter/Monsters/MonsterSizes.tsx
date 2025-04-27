import { MonsterSize } from "@/app/types/api/monsters/MonsterData";
import Image from "next/image";
import { getCrownImage } from "@/app/utils/utils";

interface MonsterSizeProps {
    size: MonsterSize;
}

const MonsterSizesCard = ({ title, value, size }: { title: string; value: number; size?: 'large' | 'small' | 'silver' }) => {
    return (
        <div className="py-4 border-4 rounded-lg shadow-md flex flex-col items-center justify-center bg-card">
            <p className="text-xs sm:text-sm md:text-base">{title}</p>
            <p className="text-xs sm:text-sm md:text-base">{value}</p>
            {size && <Image src={getCrownImage(size)} alt={size} width={24} height={24} />}
        </div>
    );
}

const MonsterSizes = ({ size }: MonsterSizeProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 mt-6 text-center">Monster Sizes</h2>
            <div className="grid grid-cols-4 gap-4">
                <MonsterSizesCard title="Base" value={size.base} />
                <MonsterSizesCard title="Silver Crown" value={size.silver} size={'silver'} />
                <MonsterSizesCard title="Small Crown" value={size.mini} size={'small'} />
                <MonsterSizesCard title="Large Crown" value={size.gold} size={'large'}/>
            </div>
        </div>
    );
}

export default MonsterSizes;