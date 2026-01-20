import { Reveal } from "./Reveal";
import { TechStackItem } from "./TechStackItem"; 
import IconCLanguage from './IconCLanguage';


const technologies = [
  { 
    name: "C", 
    IconComponent: IconCLanguage, 
    color: "#A8B9CC" 
  },
  { 
    name: "Delphi", 
    iconClass: "devicon-delphi-plain", 
    color: "#EE1F35" 
  },
  { 
    name: "PHP", 
    iconClass: "devicon-php-plain", 
    color: "#777BB4" 
  },
  { 
    name: "Python", 
    iconClass: "devicon-python-plain", 
    color: "#3776AB" 
  },
  { 
    name: "Linux", 
    iconClass: "devicon-linux-plain", 
    color: "#facc15"
  },
  { 
    name: "MySQL", 
    iconClass: "devicon-mysql-plain", 
    color: "#4479A1" 
  },
];

export default function TechStack() {
  return (
    <Reveal delay={200}>
      <section className="grid grid-cols-3 gap-8 md:flex md:flex-row md:justify-between place-items-center">
        
        {technologies.map((tech) => (
          <TechStackItem 
            key={tech.name}
            name={tech.name}
            color={tech.color}
            iconClass={tech.iconClass}
            IconComponent={tech.IconComponent}
          />
        ))}

      </section>
    </Reveal>
  );
}
