import Image from 'next/image';

interface LocationImageProps {
    imageUrl: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const LocationImage = ({ imageUrl, width, height, alt, className }: LocationImageProps) => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Image
                src={imageUrl}
                alt={alt}
                width={width}
                height={height}
                className={className}
                priority
            />
        </div>
    );
}

export default LocationImage;