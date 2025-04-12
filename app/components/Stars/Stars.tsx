import { FaStar } from "react-icons/fa";

interface StarProps {
    numOfStars: number;
    color?: string
}

const Star = ({ numOfStars, color }: StarProps) => {
    let stars = Array.from({ length: numOfStars }, (_, index) => (
        <FaStar
            key={index}
            className={`text-2xl ${color ? color : "text-yellow-500"}`}
        />
    ));

    // If the number of stars is less than 3, fill the rest with empty stars 
    if (numOfStars < 3) {
        stars = [
            ...stars,
            ...Array.from({ length: 3 - numOfStars }, (_, index) => (
                <FaStar
                    key={index + numOfStars}
                    className="text-2xl text-gray-300"
                />
            )),
        ];
    }

    return <div className="flex">{stars}</div>;
};

export default Star;