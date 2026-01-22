'use client'

import { ReactNode } from 'react';
import { useState } from 'react';
import IconMail from './IconMail';
import personalInfo from '../personalInfo';

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  buttonText?: string;
  onClick?: () => void;
  href?: string;
};

const ContactCard = ({
    icon,
    title,
    value,
    buttonText,
    onClick,
    href
}:ContactCardProps) => {

  
  return (
    <div className="flex flex-1 flex-col bg-black rounded-3xl p-5 border-gray-600 border min-w-[250px]">
      <div className="flex flex-row items-center mb-2">
        {icon}
        <span className="font-source-code font-bold text-xl text-white ml-3">
          {title}
        </span>
      </div>
      
      <span className="font-hack text-gray-400 mb-3 break-all">
        {value}
      </span>

      {href ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-purple-400 w-fit px-6 py-1 mt-auto rounded-2xl transform active:scale-95 transition-transform duration-100 text-black font-semibold hover:bg-purple-300"
        >
          {buttonText}
        </a>
      ) : (
        <button 
          onClick={onClick}
          className="relative bg-purple-400 w-24 h-8 mt-auto rounded-2xl transform active:scale-95 transition-all duration-200 text-black font-semibold hover:bg-purple-300 overflow-hidden"
        >
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform ${
                buttonText === "Copiado!" ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}>
                Copiar
            </span>

            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform ${
                buttonText === "Copiado!" ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
                Copiado!
            </span>
        </button>
      )}
    </div>
  );
};
const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 mb-20 w-full">
      
      <ContactCard 
        icon={<IconMail className="fill-current text-white w-7 h-7" />}
        title="Email"
        value={personalInfo.EMAIL}
        buttonText={copied ? "Copiado!" : "Copiar"}
        onClick={handleCopy}
      />

      <ContactCard 
        icon={<i className="devicon-linkedin-plain text-2xl text-white"></i>}
        title="Linkedin"
        value="linkedin.com/Kayky-Gibran"
        buttonText="Conectar"
        href={personalInfo.LINKEDIN}
      />

      <ContactCard 
        icon={<i className="devicon-github-original text-2xl text-white"></i>}
        title="Github"
        value={personalInfo.GITHUB}
        buttonText="Seguir"
        href={personalInfo.GITHUB}
      />

    </section>
  );
};


export default ContactSection;
