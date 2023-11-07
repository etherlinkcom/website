import Link from "next/link";

const IncubatorContent = () => (
    <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-col space-y-2 mb-12">
                <h1 className={"text-5xl font-bold mb-10"}>
                    Build <span className="text-darkGreen">DeFi</span> on Etherlink
                </h1>
                <div className="text-xl leading-normal text-left lg:text-xl xl:text-xl dark:text-gray-300">
                    The Etherlink DeFi Incubator hosted by <Link className="text-darkGreen hover:text-lightGreen cursor-pointer" href="https://www.tzapac.com/" target="_blank" rel="noopener noreferrer">TZAPAC</Link> is:
                    <ul className="list-disc list-inside mt-3 mb-3">
                        <li className="mb-1.5">looking for DeFi experts with a <span className="text-darkGreen">builder mindset 🔨</span></li>
                        <li className="mb-1.5">a dedicated startup programme for <span className="text-darkGreen">DeFi builders</span></li>
                        <li className="mb-1.5">in Singapore 🇸🇬 <span className="text-darkGreen"> 15th Jan 2024 - 12th Feb 2024 🗓️ </span></li>
                    </ul>
                    <div> 👇 Applications for the cohort will close on 10 December 2023 👇 </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
                <a
                    href="https://docs.etherlink.com"
                    target="_blank"
                    rel="noopener"
                    className="inline-block py-3 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black">
                    Apply
                </a>
                <a
                    href=""
                    target="_blank"
                    rel="noopener"
                    className="inline-block py-3 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black">
                    Find Out More
                </a>
            </div>
        </div>
    </div >
)

export default IncubatorContent;