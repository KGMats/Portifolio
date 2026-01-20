import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc?: string;
    githubLink?: string;
}

export const ProjectCard = ({ title, description, imageSrc, githubLink}: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 h-full group">
        
        <div className="h-48 overflow-hidden bg-zinc-950 relative">
            {imageSrc ? (

                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  sizes="100vw"
            />

            ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                     <span className="font-source-code text-zinc-600">No Image</span>
                </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>

        <div className="p-8 flex flex-col flex-1">
            <h3 className="font-source-code font-bold text-2xl text-white mb-4">{title}</h3>
            
            <p className="font-hack text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {description}
            </p>

            <a className="bg-purple-500/10 hover:bg-purple-500 hover:text-black text-purple-300 border border-purple-500/20 font-bold w-fit px-6 py-2 rounded-xl transition-all duration-200 text-sm mt-auto"
            href={githubLink? githubLink: "https://www.google.com"}
            target="_blank"
            >
                Ver Implementação
            </a>
        </div>
    </div>
  );
};
