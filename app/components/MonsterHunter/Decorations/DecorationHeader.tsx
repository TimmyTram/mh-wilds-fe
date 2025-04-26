import Image from "next/image";

interface DecorationHeaderProps {
    name: string;
    slot: number;
    className?: string;
}

const DecorationHeader = ({ name, slot, className }: DecorationHeaderProps) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-center justify-center rounded-lg p-4 bg-card shadow-md w-full h-full">
                <Image
                    src={`/assets/DecorationIcons/decoration_level_${slot}.png`}
                    alt={name}
                    width={64}
                    height={64}
                    className="object-contain"
                />
                <h1 className="text-2xl font-bold">{name}</h1>
            </div>
        </div>
    );
}

export default DecorationHeader;