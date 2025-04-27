import Link from 'next/link';
import { SkillIcon } from '@/app/types/api/skills/SkillData';
import Image from 'next/image';

interface SkillCardProps {
    id: number;
    name: string;
    icon: SkillIcon;
}

const SkillCard = ({ id, name, icon }: SkillCardProps) => {
    return (
        <Link href={`/skills/${id}`} className="w-[200px]">
            <div className="bg-card hover:bg-cardHover flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-[200px] h-[280px]">
                <div className="flex flex-col items-center justify-center mb-4">
                    <Image
                        src={`/assets/SkillIcons/${icon.kind}.png`}
                        alt={icon.kind.toString()}
                        width={64}
                        height={64}
                        className="w-16 h-16 mb-2"     
                    />
                    <p className="text-center text-xl font-semibold">{name}</p>
                </div>
            </div>
        </Link>
    );
};

export default SkillCard;