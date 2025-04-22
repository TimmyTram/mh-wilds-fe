import Image from 'next/image';
import { MonsterWeakness } from '@/app/types/MonsterWeakness';
import { MonsterResistances } from '@/app/types/MonsterResistances';
import { getCorrectImageKind, getCorrectKind } from '@/app/utils/utils';
import Star from '../../../Stars/Stars';

/**
 * @description A shared component that displays the icons and names of the weakness or resistances of a monster
 * @param attributes - The attributes to display. This can be either MonsterWeakness or MonsterResistances.
 * @param type - The type of the attributes. This can be either 'element', 'status', or 'effect'.
 * @param className - Optional className to apply to the container div.
 * @param showLevel - Optional boolean to determine if the level should be displayed. Default is false.
 * @returns 
 */
const MonsterAttributeDisplay = ({
    attributes,
    type,
    className,
    showLevel = false
}: {
    attributes: (MonsterWeakness | MonsterResistances)[],
    type: 'element' | 'status' | 'effect',
    className?: string,
    showLevel?: boolean
}) => {
    return (
        <>
            {attributes.map((attribute, index) => (
                <div key={index} className={className}>
                    <div className="flex flex-row items-center gap-1">
                        <p className="font-bold">{getCorrectKind(attribute).toUpperCase()}</p>
                        <Image
                            src={getCorrectImageKind(getCorrectKind(attribute), type)}
                            alt={getCorrectKind(attribute)}
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                    </div>
                    {showLevel && 'level' in attribute && (
                        <Star numOfStars={attribute.level} color="text-yellow-500" />
                    )}
                </div>
            ))}
        </>
    );
};

export default MonsterAttributeDisplay;