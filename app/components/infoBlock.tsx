import React from 'react';

interface InfoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}

const InfoBlock = ({ 
  label, 
  value, 
  className = "",
  ...props
}: InfoBlockProps) => {
    
  return (
    <div 
      className={`flex flex-1 flex-col ${className}`} 
      {...props} 
    >
      <span className="font-hack text-2xl font-bold text-white mb-1">
        {label}
      </span>
      <span className="font-hack text-gray-400 text-lg">
        {value}
      </span>
    </div>
  );
};

export default InfoBlock;
