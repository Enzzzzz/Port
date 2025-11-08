import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/myzlgzrg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        e.target.reset();
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch {
      toast.error("Ocorreu um erro inesperado. Verifique sua conexão.");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contatenzz@gmail.com" },
    { icon: Phone, label: "Telefone", value: "+55 (71) " },
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", url: "https://github.com/Enzzzzz" },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/maia.dev/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-poppins font-bold text-text">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground font-poppins text-lg max-w-2xl mx-auto">
            Tem algum projeto em mente? Vamos conversar e criar algo incrível
            juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl mb-6 font-bold font-poppins text-text">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-secondary/70 gap-4 card-portfolio p-4 border border-muted-foreground/20 hover:border-muted-foreground hover:bg-[radial-gradient(circle_at_center,_rgba(153,153,153,0.1),_transparent_90%)] rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-poppins mb-6 text-foreground">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card-portfolio bg-secondary/70 p-8 border border-muted-foreground/20 hover:border-muted-foreground hover:bg-[radial-gradient(circle_at_center,_rgba(153,153,153,0.1),_transparent_90%)] rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
