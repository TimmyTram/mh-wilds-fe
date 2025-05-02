import Link from "next/link";
import Image from "next/image";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-card shadow-lg rounded-lg p-10">
                <Image
                    src={`/assets/MonsterImages/unknown.webp`}
                    alt="Error Image"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                />
                <h1 className="text-4xl font-bold text-red-500">Error</h1>
                <h2 className="text-2xl font-semibold">Something went wrong</h2>
                <p className="text-base">Please try again later.</p>
                <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-4">
                    <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                        Go to Home
                    </Link>
                    <Link href='/status' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                        Check API Status
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;