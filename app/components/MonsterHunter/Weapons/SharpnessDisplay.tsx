import { Sharpness } from "@/app/types/api/weapons/Weapon";

interface SharpnessDisplayProps {
    sharpness: Sharpness;
    width: number;
}

function calculateSharpnessPixels(sharpness: Sharpness, width: number) {
    const pixels = new Map<string, number>();
    for (const [key, value] of Object.entries(sharpness)) {
        pixels.set(key, Math.floor((value / 400) * width));
    }
    return pixels;
}

const colorOrder: (keyof Sharpness)[] = [
    "red", "orange", "yellow", "green", "blue", "white", "purple"
];

const sharpnessColors: Record<keyof Sharpness, string> = {
    red: "bg-[#be3843]",
    orange: "bg-[#d3673d]",
    yellow: "bg-[#c9b232]",
    green: "bg-[#81b034]",
    blue: "bg-[#3a58d7]",
    white: "bg-[#e2e2e2]",
    purple: "bg-[#885aec]",
};

const SharpnessDisplay = ({ sharpness, width }: SharpnessDisplayProps) => {
    if (!sharpness) return null;

    const sharpnessPixels = calculateSharpnessPixels(sharpness, width);

    return (
        <div className="border-4 border-black h-[24px] flex overflow-hidden bg-black"
            style={{ width: `${width}px` }}
        >
            {colorOrder.map((color) => {
                const width = sharpnessPixels.get(color) ?? 0;
                if (width === 0) return null;
                return (
                    <div
                        key={color}
                        className={`${sharpnessColors[color]} h-full`}
                        style={{ width: `${width}px` }}
                    />
                );
            })}
        </div>
    );
};

export default SharpnessDisplay;