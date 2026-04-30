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
    name: "Laravel", 
    iconClass: "devicon-laravel-plain", 
    color: "#FF2D20" 
  },
  { 
    name: "Docker", 
    iconClass: "devicon-docker-plain", 
    color: "#2496ED" 
  },
  { 
    name: "MySQL", 
    iconClass: "devicon-mysql-plain", 
    color: "#4479A1" 
  },
  { 
    name: "PostgreSQL", 
    iconClass: "devicon-postgresql-plain", 
    color: "#336791" 
  },
  { 
    name: "Git", 
    iconClass: "devicon-git-plain", 
    color: "#F05032" 
  },
  { 
    name: "Linux", 
    iconClass: "devicon-linux-plain", 
    color: "#facc15"
  },
  { 
    name: "Flutter", 
    iconClass: "devicon-flutter-plain", 
    color: "#54C5F8" 
  },
  { 
    name: "Django", 
    iconClass: "devicon-django-plain", 
    color: "#0C4B33" 
  },
  { 
    name: "Delphi", 
    iconClass: "devicon-delphi-plain", 
    color: "#EE1F35" 
  },
];

export default function TechStack() {
  return (
    <Reveal delay={200}>
      <section className="grid grid-cols-3 gap-8 md:grid-cols-6 place-items-center">
        
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
