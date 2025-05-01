interface WeaponDescriptionProps {
    description: string;
}

const WeaponDescription = ({ description }: WeaponDescriptionProps) => {
    return (
        <div
            className="mt-4 col-span-1 md:col-span-2 lg:col-span-6 border-8 border-bookBorder p-4 rounded-lg text-white"
            style={{
                backgroundImage: `url(/assets/BackgroundImages/notes.jpg)`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <p className="text-sm text-center italic font-semibold">{description ?? "No Description Available for this Weapon."}</p>
        </div>
    );
}

export default WeaponDescription;
