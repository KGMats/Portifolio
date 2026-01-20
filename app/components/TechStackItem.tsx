import React from 'react';

interface TechStackItemProps {
  name: string;
  color: string;
  iconClass?: string; // Devicon
  IconComponent?: React.ElementType; // SVG
}

export const TechStackItem = ({ name, color, iconClass, IconComponent }: TechStackItemProps) => {
  return (
    <div 
      className="group flex flex-col items-center justify-center w-fit cursor-default"
      style={{ "--tech-color": color } as React.CSSProperties}
    >
      
      <div className={`
        text-4xl md:text-5xl text-gray-400 
        transition-all duration-300 
        group-hover:text-[var(--tech-color)] 
        group-hover:scale-110 
        group-hover:drop-shadow-[0_0_10px_var(--tech-color)]
      `}>
        
        {IconComponent ? (
          <IconComponent className="w-full h-full fill-current" />
        ) : (
          <i className={iconClass}></i>
        )}
        
      </div>

      <span className="
        font-hack font-bold text-sm md:text-xl text-center mt-3 md:mt-5 text-gray-500
        transition-colors duration-300
        group-hover:text-white
      ">
        {name}
      </span>
    </div>
  );
};
