'use client'
import React, { useState } from 'react';
import FlagBR from "./br_flag";
import FlagUK from "./uk_flag";
import FlagDE from "./de_flag";


export default function Navbar({ className = "", ...props }: React.HTMLProps<HTMLElement>) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav 
            className={`fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 ${className}`} 
            {...props}
        >
            <div className="relative z-50 flex flex-row items-center justify-between h-16 px-6 max-w-7xl mx-auto bg-gray-900/90 backdrop-blur-md">
                
                {/* --- LOGO --- */}
                <div className="flex-shrink-0">
                    <h1 className="text-xl font-bold text-white tracking-wider cursor-pointer">
                        KGMats.cc
                    </h1>
                </div>

                {/* --- DESKTOP MENU --- */}
                <div className="hidden md:flex flex-row items-center gap-8">
                    <div className="flex flex-row gap-6">
                        <NavLink href="/#about">Sobre mim</NavLink>
                        <NavLink href="/#contacts">Contatos</NavLink>
                        <NavLink href="/projetos">Projetos</NavLink>
                    </div>
                    <div className="h-6 w-px bg-gray-700"></div>
                    <div className="flex flex-row items-center gap-6">
                        <DownloadButton />
                        <div className="flex flex-row items-center gap-3">
                            <LanguageFlag icon={<FlagUK />} />
                            <LanguageFlag icon={<FlagBR />} />
                            <LanguageFlag icon={<FlagDE />} />
                        </div>
                    </div>
                </div>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        {/* Animated Icon Component */}
                        <HamburgerIcon isOpen={isOpen} />
                    </button>
                </div>
            </div>

            <div 
                className={`
                    absolute top-16 left-0 w-full bg-gray-900 border-b border-gray-800 
                    flex flex-col items-center py-6 shadow-xl
                    transition-all duration-300 ease-in-out z-40
                    ${isOpen 
                        ? 'translate-y-0 opacity-100 visible' 
                        : '-translate-y-10 opacity-0 invisible pointer-events-none'
                    }
                `}
            >
                <div className="flex flex-col gap-6 text-center w-full">
                    <MobileNavLink href="/#about" onClick={closeMenu} delay="0ms">Sobre mim</MobileNavLink>
                    <MobileNavLink href="/#contacts" onClick={closeMenu} delay="75ms">Contatos</MobileNavLink>
                    <MobileNavLink href="/projetos" onClick={closeMenu} delay="150ms">Projetos</MobileNavLink>
                    
                    <div className="w-1/3 h-px bg-gray-800 mx-auto my-2"></div>

                    <div className="flex justify-center transition-opacity duration-500 delay-200" style={{opacity: isOpen ? 1 : 0}}>
                        <DownloadButton />
                    </div>

                    <div className="flex flex-row justify-center gap-4 mt-2 transition-opacity duration-500 delay-300" style={{opacity: isOpen ? 1 : 0}}>
                            <LanguageFlag icon={<FlagUK />} />
                            <LanguageFlag icon={<FlagBR />} />
                            <LanguageFlag icon={<FlagDE />} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group">
        {children}
        {/* Simple underline hover animation */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
    </a>
);

const MobileNavLink = ({ href, onClick, children, delay }: { href: string; onClick: () => void; children: React.ReactNode, delay?: string }) => (
    <a 
        href={href} 
        onClick={onClick}
        style={{ transitionDelay: delay }}
        className="text-gray-300 hover:text-white text-lg font-medium py-2 block w-full hover:bg-gray-800/50 transition-all duration-300"
    >
        {children}
    </a>
);

const DownloadButton = () => (
    <a 
        href="/curriculum.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-md border border-white/30 px-4 py-1.5 text-sm font-medium text-white transform active:scale-95 transition-all hover:bg-white hover:text-gray-900"
    >
        Download CV
    </a>
);

const LanguageFlag = ({
    icon,
}: {
    icon: React.ReactElement<{ className?: string }>;
}) => (
    <div className="w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer transform hover:scale-110 duration-200">
        {React.cloneElement(icon, {
            className: "w-full h-full object-cover",
        })}
    </div>
);


const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="relative w-6 h-6 flex justify-center items-center">
        <svg 
            className={`w-6 h-6 absolute transition-all duration-300 ease-out transform ${
                isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg 
            className={`w-6 h-6 absolute transition-all duration-300 ease-out transform ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>

    </div>
);
