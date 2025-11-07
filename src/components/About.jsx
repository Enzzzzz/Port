import { Code2, Palette, Rocket, Zap } from "lucide-react";

const About = () => {
      const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 90 },
    { name: "Git / GitHub", level: 85 },
    { name: "Responsive Design", level: 95 },
  ];

  const features = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código semântico, organizado e fácil de manter",
    },
    {
      icon: Palette,
      title: "Design Moderno",
      description: "Crio interfaces atraentes seguindo as últimas tendências",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimizo aplicações para máxima velocidade e eficiência",
    },
    {
      icon: Zap,
      title: "Responsividade",
      description: "Desenvolvo sites que funcionam perfeitamente em todos os dispositivos",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas font-bold mb-4 text-text">
            Sobre Mim
          </h2>
          <p className="text-text text-lg max-w-3xl mx-auto font-poppins">
            Sou um desenvolvedor front-end apaixonado por criar experiências web excepcionais.
            Com foco em qualidade, performance e design moderno, transformo ideias em realidade digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-poppins mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-portfolio bg-[#141414] hover:bg-[#1b1b1b] border border-border rounded-lg overflow-hidden p-6 text-center hover:shadow-xl hover:shadow-zinc-800"
            >
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-text font-bebas">{feature.title}</h3>
              <p className="text-text text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 font-bebas text-center text-text">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-text font-medium">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#3b3b3b] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-blue-200 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;