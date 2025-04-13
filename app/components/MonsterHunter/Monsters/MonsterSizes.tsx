import { MonsterSize } from "@/app/types/MonsterData";

interface MonsterSizeProps {
    size: MonsterSize;
}

const MonsterSizes = ({ size }: MonsterSizeProps) => {
    return (
        <div>
            <p>{size.base}</p>
            <p>{size.mini}</p>
            <p>{size.silver}</p>
            <p>{size.gold}</p>
        </div>
    );
}

export default MonsterSizes;