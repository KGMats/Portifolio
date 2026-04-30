'use client'
import { ReactNode, useState } from 'react';
import IconMail from './IconMail';
import personalInfo from '../personalInfo';
import { useLang } from '../context/LanguageContext';

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  buttonText?: string;
  onClick?: () => void;
  href?: string;
};

const ContactCard = ({ icon, title, value, buttonText, onClick, href }: ContactCardProps) => (
  <div className="flex flex-1 flex-col bg-black rounded-3xl p-5 border-gray-600 border min-w-[250px]">
    <div className="flex flex-row items-center mb-2">
      {icon}
      <span className="font-source-code font-bold text-xl text-white ml-3">{title}</span>
    </div>
    <span className="font-hack text-gray-400 mb-3 break-all">{value}</span>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="bg-purple-400 w-fit px-6 py-1 mt-auto rounded-2xl transform active:scale-95 transition-transform duration-100 text-black font-semibold hover:bg-purple-300">
        {buttonText}
      </a>
    ) : (
      <button onClick={onClick}
        className="relative bg-purple-400 w-24 h-8 mt-auto rounded-2xl transform active:scale-95 transition-all duration-200 text-black font-semibold hover:bg-purple-300 overflow-hidden">
        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform ${buttonText?.includes('!') || buttonText === 'Copied!' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          {buttonText?.includes('!') || buttonText === 'Copied!' ? '' : buttonText}
        </span>
        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform ${buttonText?.includes('!') || buttonText === 'Copied!' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          {buttonText?.includes('!') || buttonText === 'Copied!' ? buttonText : ''}
        </span>
      </button>
    )}
  </div>
);

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLang();

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
        buttonText={copied ? t.contact.copied : t.contact.copy}
        onClick={handleCopy}
      />
      <ContactCard
        icon={<i className="devicon-linkedin-plain text-2xl text-white"></i>}
        title="Linkedin"
        value="linkedin.com/in/kgmats"
        buttonText={t.contact.connect}
        href={personalInfo.LINKEDIN}
      />
      <ContactCard
        icon={<i className="devicon-github-original text-2xl text-white"></i>}
        title="Github"
        value="github.com/KGMats"
        buttonText={t.contact.follow}
        href={personalInfo.GITHUB}
      />
    </section>
  );
};

export default ContactSection;
