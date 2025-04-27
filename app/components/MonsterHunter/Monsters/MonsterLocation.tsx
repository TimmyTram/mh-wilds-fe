import { Location } from "@/app/types/api/locations/Location";
import { getLocationThumbnailImage } from "@/app/utils/utils";

interface MonsterLocationProps {
    locations: Location[];
}

const MonsterLocation = ({ locations }: MonsterLocationProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-6">Locations</h2>
            <div className="grid grid-cols-2 gap-4">
                {locations.map((location: Location, index: number) => (
                    <div
                        key={index}
                        className="border-black border-4 dark:border-white p-4 rounded-lg shadow-md bg-card bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${getLocationThumbnailImage(location.gameId)})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        <h3 className="text-xl font-semibold text-center p-2 rounded relative text-white z-10 flex items-center justify-center h-full">
                            {location.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MonsterLocation;