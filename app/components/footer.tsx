import IconMail from "./IconMail";
import personalInfo from "../personalIfno";

export default function Footer() {
    return (
        <footer className="w-full py-10 bg-black border-t border-white/20 flex flex-col items-center justify-center">
            
            {/* Text Section */}
            <div className="flex flex-col items-center text-center space-y-2 mb-6">
                <span className="font-hack text-gray-400 text-sm md:text-base">
                    © 2025 Kayky Matos. All rights reserved.
                </span>
                <span className="font-hack text-gray-500 text-xs md:text-sm">
                    Made with <span className="text-purple-400">coffee</span> & <span className="text-purple-400">code</span> by kgmats.cc
                </span>
            </div>

            {/* Icons Section */}
            <div className="flex flex-row items-center gap-6">
                
                {/* Github */}
                <a 
                    href={personalInfo.GITHUB}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                    aria-label="Github"
                >
                    <i className="devicon-github-original text-2xl"></i>
                </a>

                {/* LinkedIn */}
                <a 
                    href={personalInfo.LINKEDIN}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200"
                    aria-label="LinkedIn"
                >
                    <i className="devicon-linkedin-plain text-2xl"></i>
                </a>

                {/* Email */}
                <a 
                    href={"mailto:" + personalInfo.EMAIL}
                    className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200"
                    aria-label="Email"
                >
                    <IconMail className="w-6 h-6 fill-current" />
                </a>

            </div>
        </footer>
    );
}
