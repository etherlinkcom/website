import Link from "next/link";

const HeroContent = () => (
    <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-col space-y-2 mb-12">
                <h1 className={"text-5xl font-bold mb-10"}>
                    Build Web3 on <span className="text-borderGreen">Etherlink</span>
                </h1>
                <div className="text-xl leading-normal text-left lg:text-xl xl:text-2xl dark:text-gray-300">
                    An EVM-compatible optimistic rollup with:
                    <ul className="list-disc list-inside mt-3 mb-3">
                        <li className="mb-1.5"><span className="text-borderGreen">fair </span> transaction ordering</li>
                        <li className="mb-1.5"><span className="text-borderGreen">fast </span>transaction execution</li>
                        <li><span className="text-borderGreen">security</span> as a priority</li>
                    </ul>
                    <div> powered by Tezos <Link className="text-borderGreen hover:text-etherlinkGreen cursor-pointer" href="https://tezos.com/developers/smart-rollups/" target="_blank" rel="noopener noreferrer">Smart Rollup</Link> technology.</div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
                <a
                    href="https://docs.etherlink.com"
                    target="_blank"
                    rel="noopener"
                    className="inline-block py-3 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black">
                    Start Building
                </a>
                <a
                    href="https://bridge.etherlink.com/"
                    target="_blank"
                    rel="noopener"
                    className="inline-block py-3 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black">
                    Bridge to Etherlink
                </a>
            </div>
        </div>
    </div>
)

export default HeroContent;