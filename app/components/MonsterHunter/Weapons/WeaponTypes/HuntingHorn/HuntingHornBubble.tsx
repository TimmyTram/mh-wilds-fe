import { HuntingHornBubble } from "@/app/types/api/weapons/weaponTypes/Huntinghorn";

interface HuntingHornBubbleProps {
    bubble: HuntingHornBubble;
}

const HuntingHornBubbleDisplay = ({ bubble }: HuntingHornBubbleProps) => {
    return (
        <>
            <h2 className="text-xl font-bold italic underline-offset-4 underline">Echo Bubble Effect:</h2>
            <p className="">{bubble.name}</p>
        </>
    );
};

export default HuntingHornBubbleDisplay;