import Link from 'next/link';

interface SkillCardProps {
    id: number;
    name: string;
}

const SkillCard = ({ id, name }: SkillCardProps) => {
    return (
        <Link href={`/skills/${id}`} className="w-[200px]">
            <div className="bg-card hover:bg-cardHover flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <p className="text-center text-xl font-semibold">{name}</p>
                </div>
            </div>
        </Link>
    );
};

export default SkillCard;