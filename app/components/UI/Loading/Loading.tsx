import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <AiOutlineLoading className="animate-spin text-4xl text-gray-500" />
            </div>
        </div>
    );    
}

export default Loading;