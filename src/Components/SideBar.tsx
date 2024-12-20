import {
    ArrowRightStartOnRectangleIcon,
    Bars3Icon,
    BookOpenIcon,
    ChevronDownIcon,
    CloudIcon,
    CodeBracketIcon,
    Cog6ToothIcon,
    HomeIcon,
    PhoneIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const SideBar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isMobileRef = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const isMobileLocal = width < 768;
            if (isMobileLocal) {
                setIsMobile(true);
                isMobileRef.current = true;
            } else {
                setIsMobile(false);
                isMobileRef.current = false;
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative">
            <div className="flex justify-between md:justify-around w-full px-4 items-center">
                <div className="flex items-center justify-center gap-4 h-16">
                    <img src={"/svg/logo.svg"} alt={"logo"} className="w-6" />
                    <h1 className="font-light text-[25px]">CodeAnt AI</h1>
                </div>

                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsSideBarVisible((prevState) => !prevState)}
                        aria-label="Toggle Sidebar"
                    >
                        {isSideBarVisible ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`absolute md:static bottom-0 w-full h-screen md:h-full bg-black/10 translate-y-full md:translate-y-0 flex overflow-hidden transition-all`}
                style={{
                    height: isMobile
                        ? isSideBarVisible
                            ? "calc(100vh - 64px)"
                            : "0px"
                        : "100%",
                }}
            >
                <div className="bg-white w-full h-fit md:h-full flex flex-col">
                    <div className="flex flex-col items-center py-4">
                        <span className="mt-2 text-sm border p-2 rounded-xl flex gap-2 items-center">
                            <span>UtkarshDhairyaPanwar...</span>
                            <ChevronDownIcon className="w-5" />
                        </span>
                    </div>

                    <nav className="flex-1 px-4 py-2 space-y-2">
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium bg-[#1570EF] text-white rounded-lg hover:bg-[#0056b3]"
                            style={{ height: "44px" }}
                        >
                            <HomeIcon className="w-6" />
                            <span className="ml-3 font-semibold">Repositories</span>
                        </button>
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-[#1570EF] hover:text-white"
                            style={{ height: "44px" }}
                        >
                            <CodeBracketIcon className="w-6" />
                            <span className="ml-3 font-semibold">AI Code Review</span>
                        </button>
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-[#1570EF] hover:text-white"
                            style={{ height: "44px" }}
                        >
                            <CloudIcon className="w-6" />
                            <span className="ml-3 font-semibold">Cloud Security</span>
                        </button>
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-[#1570EF] hover:text-white"
                            style={{ height: "44px" }}
                        >
                            <BookOpenIcon className="w-6" />
                            <span className="ml-3 font-semibold">How to Use</span>
                        </button>
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-[#1570EF] hover:text-white"
                            style={{ height: "44px" }}
                        >
                            <Cog6ToothIcon className="w-6" />
                            <span className="ml-3 font-semibold">Settings</span>
                        </button>
                    </nav>

                    <div className="px-4 py-4">
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-[#1570EF] hover:text-white"
                            style={{ height: "44px" }}
                        >
                            <PhoneIcon className="w-5" />
                            <span className="ml-3 font-semibold">Support</span>
                        </button>
                        <button
                            className="flex items-center justify-start w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-[#1570EF] hover:text-white"
                            style={{ height: "44px" }}
                        >
                            <ArrowRightStartOnRectangleIcon className="w-5" />
                            <span className="ml-3 font-semibold">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;