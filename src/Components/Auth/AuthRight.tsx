import { useState } from "react";
import { KeyIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";

const AuthRight = () => {
    const [isSaas, setIsSaas] = useState(true);

    const SignInButton = ({ icon, provider, isCustomIcon = false }) => (
        <motion.a
            href={'/dashboard'}
            whileHover={{ scale: 1.01, backgroundColor: '#fafafa' }}
            whileTap={{ scale: 0.99 }}
            className="border items-center font-semibold flex w-full gap-3 p-2 rounded-xl justify-center transition-colors duration-200"
        >
            {isCustomIcon ? (
                <KeyIcon className={`w-5`}/>
            ) : (
                <img src={icon} alt={provider} className={`w-5`}/>
            )}
            Sign in with {provider}
        </motion.a>
    );

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4`}
        >
            <motion.div 
                whileHover={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                className={`bg-white flex flex-col rounded-xl w-full border`}
            >
                <div className={`border-b flex flex-col p-5 w-full gap-4`}>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center justify-center gap-4`}
                    >
                        <motion.img 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            src={'/svg/logo.svg'} 
                            alt={'logo'}
                        />
                        <span className={`font-light text-[30px]`}>CodeAnt AI</span>
                    </motion.div>
                    <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`flex justify-center text-2xl font-semibold mt-2`}
                    >
                        Welcome to CodeAnt AI
                    </motion.div>
                    <div className={`bg-gray-100/70 border rounded-xl`}>
                        <motion.button 
                            className={`p-3 rounded-xl w-1/2 transition-colors duration-300 font-semibold ${isSaas ? 'bg-[#1570EF] text-white' : ''}`}
                            onClick={() => setIsSaas(true)}
                            whileTap={{ scale: 0.98 }}
                        >
                            SAAS
                        </motion.button>
                        <motion.button 
                            className={`p-3 rounded-xl w-1/2 transition-colors duration-300 font-semibold ${isSaas ? '' : 'bg-[#1570EF] text-white'}`}
                            onClick={() => setIsSaas(false)}
                            whileTap={{ scale: 0.98 }}
                        >
                            Self Hosted
                        </motion.button>
                    </div>
                </div>

                <div className={`flex flex-col p-5`}>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={isSaas ? 'saas' : 'self-hosted'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className={`flex items-center justify-center w-full`}
                        >
                            {isSaas ? (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <SignInButton icon="/svg/github.svg" provider="Github" />
                                    <SignInButton icon="/svg/bitbucket.svg" provider="Bitbucket" />
                                    <SignInButton icon="/svg/azure-devops.svg" provider="Azure Devops" />
                                    <SignInButton icon="/svg/gitlab.svg" provider="GitLab" />
                                </div>
                            ) : (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <SignInButton icon="/svg/gitlab.svg" provider="GitLab" />
                                    <SignInButton provider="SSO" isCustomIcon={true} />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.01 }}
                className="cursor-pointer"
            >
                <span>By signing up you agree to the <b>Privacy Policy.</b></span>
            </motion.div>
        </motion.div>
    );
};

export default AuthRight;