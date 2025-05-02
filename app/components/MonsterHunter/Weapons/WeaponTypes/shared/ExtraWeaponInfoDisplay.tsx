interface ExtraWeaponInfoDisplayProps {
    children: React.ReactNode;
    header?: string;
}

// wrapper component for displaying extra weapon information
// this is used for weapons that have specific information that must be displayed and differs on a per weapon basis
const ExtraWeaponInfoDisplay = ({ children, header }: ExtraWeaponInfoDisplayProps) => {
    return (
        <div className="mt-4 flex flex-col justify-center items-center gap-4">
            {header && <h2 className="text-2xl font-bold underline-offset-4 underline italic">{header}:</h2>}
            {children}
        </div>
    );
};

export default ExtraWeaponInfoDisplay;