
import { getVersion } from '@/app/actions/api/getVersion';

const Page = async () => {
    const data = await getVersion();

    const isUp = data.status === 200;

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">API Status</h1>
            <div className="mt-8 p-4 border-4 rounded-lg shadow-md bg-card">
                <p className="mt-2 text-lg">
                    Status Code: {data.status}
                </p>
                {isUp ? (
                    <>
                        <p className="mt-1 text-lg">
                            API Version: {new Date(data.version).toLocaleString(undefined, {
                                dateStyle: 'long',
                                timeStyle: 'short',
                            })}
                        </p>
                        <p className="mt-1 text-green-600 dark:text-green-400">Server is healthy.</p>
                    </>
                ) : (
                    <p className="mt-1 text-red-600 dark:text-red-400">Server is down</p>
                )}
            </div>
        </div>
    );
}

export default Page;
