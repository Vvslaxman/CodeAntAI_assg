import { ArrowLongUpIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const AuthLeft = () => {
    return (
        <div className={`hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center`}>
            <img
                src={'/png/logoFaded.png'}
                alt={'logo'}
                className={`absolute left-0 bottom-0 w-[230px] aspect-square`}
            />
            <motion.div
                className="flex rounded-xl shadowCardAuth flex-col w-full max-w-[400px] bg-gray-50"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                }}
            >
                <div className="flex gap-2 items-center border-b p-4">
                    <img src="/svg/logo.svg" alt="logo" className="w-6 h-6" />
                    <span className="font-bold text-gray-700">
                        AI to Detect & Autofix Bad Code
                    </span>
                </div>
                <div className="flex gap-4 justify-between items-center p-4">
                    {[
                        { label: "Language Support", value: "30+" },
                        { label: "Developers", value: "10K+" },
                        { label: "Hours Saved", value: "100K+" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="font-semibold text-lg text-black">
                                {item.value}
                            </span>
                            <span className="text-sm text-gray-500">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <div
    className={`flex rounded-xl shadowCardAuth flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white`}
>
    <div className={`flex justify-between min-w-40`}>
        {/* Animated Graph Image with Hover Effect */}
        <motion.img
            src={'/svg/GraphAuth.svg'}
            alt={'graph'}
            className={`cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
        />
        <div className={`flex flex-col`}>
            {/* Animated "This Week 14%" with Hover Effect */}
            <motion.div
                className={`flex items-center text-primary`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
                <ArrowLongUpIcon className={`w-5`} />
                14%
            </motion.div>
            <motion.div
                className={`font-light text-xs`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ x: 5, color: "#2563eb" }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
                This week
            </motion.div>
        </div>
    </div>
    <div>
        <div className={`flex flex-col`}>
            {/* Animated "Issues Fixed 500K+" with Hover Effect */}
            <motion.span
                className={`font-semibold`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            >
                Issues Fixed
            </motion.span>
            <motion.span
                className={`font-semibold text-2xl`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5, scale: 1.1, color: "#4ade80" }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            >
                500K+
            </motion.span>
        </div>
    </div>
</div>

        </div>
    );
};

export default AuthLeft;
