import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24 gap-4">
      <div className="flex flex-col items-center">
        <h1>Welcome to the Monster Hunter Wilds Wiki</h1>
        <p>
          This is a web application that provides information about the Monster
          Hunter Wilds.
        </p>
        <p>
          You can navigate to different sections of the website using the links
          in the navigation bar.
        </p>
        <p>
          This application is powered via:{' '}
          <Link
            href="https://docs.wilds.mhdb.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://docs.wilds.mhdb.io/
          </Link>
        </p>
      </div>
    </div>
  );
}
