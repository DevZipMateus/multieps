
import { Construction, Package2, Layers, Hammer } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const services = [
    {
      icon: Construction,
      title: "Molduras de EPS",
      description: "Molduras de EPS com e sem revestimento cimentício, ideais para acabamentos em fachadas e interiores.",
      features: ["Alta durabilidade", "Fácil instalação", "Leve e resistente", "Acabamento perfeito"]
    },
    {
      icon: Package2,
      title: "Blocos para Fachadas",
      description: "Blocos para volumetrias de fachadas que proporcionam design único e diferenciado para sua construção.",
      features: ["Diversos formatos", "Leveza incomparável", "Redução de carga estrutural", "Fácil manuseio"]
    },
    {
      icon: Layers,
      title: "Chapas de EPS",
      description: "Chapas de EPS para isolamento térmico e acústico em construções civis.",
      features: ["Isolamento térmico", "Isolamento acústico", "Múltiplas espessuras", "Corte sob medida"]
    },
    {
      icon: Hammer,
      title: "Materiais de Fixação",
      description: "Materiais específicos para fixação dos produtos de EPS em diferentes superfícies.",
      features: ["Alta aderência", "Compatível com diversos materiais", "Fácil aplicação", "Resistente às intempéries"]
    }
  ];

  return (
    <section id="servicos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Produtos de EPS com qualidade superior para sua construção
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="fade-in-up" delay={index * 150}>
              <div className="glass-card hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-xl h-full">
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-primary">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-800 mb-2">Características:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Precisa de produtos personalizados?</h3>
          <p className="text-gray-600 mb-6">
            Oferecemos soluções sob medida para atender as necessidades específicas do seu projeto.
            Entre em contato conosco para uma consulta especializada.
          </p>
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
