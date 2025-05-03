import Image from "next/image";
import Link from "next/link";
import { wikiText } from "./constants/constants";
import { helpfulLinks } from "./constants/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 md:p-24">
      <div className="flex flex-col items-center gap-8">

        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to the {" "}
          <span className="italic bg-gradient-to-r from-wildsLight to-wildsDark text-transparent bg-clip-text">
            Monster Hunter Wilds Wiki
          </span>
        </h1>

        {/* Two box setup left Logo | Right about wiki */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">

          {/* LOGO */}
          <div className="w-full md:w-1/2 bg-card rounded-lg shadow-lg flex items-center justify-center p-10">
            <Image
              src={`/logo.webp`}
              alt="Logo"
              width={300}
              height={300}
              className="rounded-lg"
              priority
            />
          </div>

          {/* ABOUT WIKI */}
          <div className="w-full md:w-1/2 bg-card rounded-lg shadow-lg">
            <div className="p-10 flex flex-col gap-4">

              {/* About the Wiki */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About the Wiki</h2>
                <p className="text-sm md:text-lg">
                  {wikiText}
                </p>
              </div>

              {/* Links to other resources */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Helpful Links:</h2>
                <div className="text-sm md:text-lg">
                  <ul className="list-disc list-inside">
                    {Array.from(helpfulLinks.entries()).map(([name, link]) => (
                      <li key={name} className="mb-2">
                        <Link
                          href={link}
                          target="_blank"
                          className="text-blue-500 hover:underline"
                          rel="noopener noreferrer"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="w-full flex flex-col items-center border-4 bg-card rounded-lg shadow-lg p-10">
                  
        </div> */}

      </div>
    </div>
  );
}