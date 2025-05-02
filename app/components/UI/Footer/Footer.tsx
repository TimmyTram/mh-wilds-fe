import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full flex flex-row items-center justify-between bg-sidebar p-4 border-t border-gray-300 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300">
            This application is powered via:{' '}
            <Link
                href="https://docs.wilds.mhdb.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-500"
            >
                https://docs.wilds.mhdb.io/
            </Link>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
            <Link
                href={`status`}
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-500"
            >
                API Status
            </Link>
            </p>
        </footer>
    );
}

export default Footer;