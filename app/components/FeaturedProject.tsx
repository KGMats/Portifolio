interface FeaturedProjectProps {
  category: string;
  title: string;
  description: string;
  features: string[];
  videoSrc: string;
  githubLink?: string;
}

export const FeaturedProject = ({
  category,
  title,
  description,
  features,
  videoSrc,
  githubLink
}: FeaturedProjectProps) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-auto md:h-[500px] bg-[#121214] rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row overflow-hidden">

      <div className="order-2 md:order-1 relative z-0 flex-1 flex flex-col justify-center p-8 md:p-12 md:pr-20">

        <div className="bg-purple-900/20 border border-purple-500/20 w-fit px-3 py-1 mb-6 rounded-lg">
          <span className="font-mono text-[10px] font-bold text-purple-300 tracking-wider uppercase">
            {category}
          </span>
        </div>

        <h1 className="font-mono font-bold text-xl md:text-2xl text-white mb-4 tracking-tight">
          {title}
        </h1>

        <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
          {description}
        </p>

        <ul className="space-y-2 mb-8 font-mono text-xs text-gray-500">
          {features.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
              {item}
            </li>
          ))}
        </ul>

        <a className="bg-purple-600 hover:bg-purple-500 text-white w-fit px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 shadow-lg shadow-purple-900/20"
        href={githubLink ? githubLink : ""}
        target="_blank"
        >
          Ver implementação
        </a>
      </div>

      <div className="w-full h-64 md:h-full md:w-[60%] border-l border-white/5 md:transform md:-skew-x-6 md:origin-bottom-right overflow-hidden shadow-[-40px_0_60px_-15px_rgba(0,0,0,0.6)] order-1 md:order-2">
        <div className="w-full h-full md:-ml-3">
          <video
            className="w-full h-full object-cover opacity-90"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

