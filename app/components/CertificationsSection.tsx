'use client'
import { Reveal } from "./Reveal";
import { useLang } from "../context/LanguageContext";

type Cert = {
  name: string;
  issuer: string;
  issuedPt: string;
  issuedEn: string;
  credentialUrl: string;
  skillsPt: string;
  skillsEn: string;
  icon: React.ReactNode;
};

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const CiscoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#1BA0D7"/>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CISCO</text>
  </svg>
);

const certs: Cert[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    issuedPt: "abr de 2026",
    issuedEn: "Apr 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/6YP1V7E26PSH",
    skillsPt: "Análise de dados, Limpeza de dados, SQL, Tableau, R",
    skillsEn: "Data analysis, Data cleaning, SQL, Tableau, R",
    icon: <GoogleIcon />,
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issuedPt: "abr de 2026",
    issuedEn: "Apr 2026",
    credentialUrl: "https://www.credly.com/badges/cisco-intro-cybersecurity",
    skillsPt: "Segurança cibernética, Fundamentos de redes",
    skillsEn: "Cybersecurity, Networking fundamentals",
    icon: <CiscoIcon />,
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    issuedPt: "mar de 2026",
    issuedEn: "Mar 2026",
    credentialUrl: "https://www.credly.com/badges/cisco-networking-basics",
    skillsPt: "Redes de computadores",
    skillsEn: "Computer networking",
    icon: <CiscoIcon />,
  },
];

export default function CertificationsSection() {
  const { lang, t } = useLang();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
      {certs.map((cert, i) => (
        <Reveal key={i} delay={i * 100}>
          <div className="flex flex-col bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 rounded-2xl p-5 h-full transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              {cert.icon}
              <div>
                <p className="text-xs text-gray-500 font-hack">{cert.issuer}</p>
                <p className="text-xs text-gray-500 font-hack">
                  {t.certs.issuedOn} {lang === 'pt' ? cert.issuedPt : cert.issuedEn}
                </p>
              </div>
            </div>

            <h3 className="font-source-code font-bold text-white text-sm leading-snug mb-3 flex-1">
              {cert.name}
            </h3>

            <p className="text-xs text-gray-500 font-hack mb-4">
              <span className="text-gray-400">{t.certs.skills}: </span>
              {lang === 'pt' ? cert.skillsPt : cert.skillsEn}
            </p>

            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-purple-400 hover:text-purple-300 border border-purple-500/20 hover:border-purple-400/50 bg-purple-500/5 hover:bg-purple-500/10 px-4 py-2 rounded-xl transition-all duration-200 w-fit mt-auto"
            >
              {t.certs.viewCred} ↗
            </a>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
