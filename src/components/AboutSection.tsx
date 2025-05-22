
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Produtos leves e de fácil instalação',
    'Material isolante térmico e acústico',
    'Soluções personalizadas para sua obra',
    'Design diferenciado para fachadas',
    'Redução do peso estrutural da construção',
    'Atendimento personalizado'
  ];

  return (
    <section id="sobre-nós" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça a Multi EPS e nosso compromisso com a qualidade em produtos de EPS para construção civil
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1588877612884-844740900215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Produtos de EPS para construção" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              Nossa Empresa
            </span>
            <h3 className="text-3xl font-bold">Design e Leveza para sua Obra</h3>
            <p className="text-gray-600">
              A Multi EPS é especializada na fabricação de molduras e artefatos de EPS para a construção civil,
              trazendo inovação e qualidade para o mercado de construção. Nossos produtos aliam design, 
              leveza e funcionalidade, sendo a solução ideal para projetos arquitetônicos modernos.
            </p>
            <p className="text-gray-600">
              Trabalhamos com matéria-prima de alta qualidade, garantindo durabilidade e eficiência em todos 
              os nossos produtos. Nossa equipe está sempre pronta para desenvolver soluções personalizadas 
              que atendam às necessidades específicas de cada projeto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
