import { FaStar } from "react-icons/fa";

interface StarProps {
    numOfStars: number;
    color?: string
    maxNumOfStars?: number;
}

const Star = ({ numOfStars, color, maxNumOfStars }: StarProps) => {
    let stars = Array.from({ length: numOfStars }, (_, index) => (
        <FaStar
            key={index}
            className={`text-2xl ${color ? color : "text-yellow-500"}`}
        />
    ));

    // if we define a max number of stars, we add the rest of the stars as gray 
    if (maxNumOfStars !== undefined && numOfStars < maxNumOfStars) {
        stars = [
            ...stars,
            ...Array.from({ length: maxNumOfStars - numOfStars }, (_, index) => (
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