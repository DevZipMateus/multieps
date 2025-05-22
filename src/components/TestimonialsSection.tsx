import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Os produtos da Multi EPS fizeram grande diferença em nossa construção. As molduras são leves e fáceis de instalar, proporcionando um acabamento perfeito para a fachada.",
      author: "Carlos Silva",
      role: "Engenheiro Civil",
      rating: 5
    },
    {
      content: "A qualidade do EPS fornecido pela Multi EPS é excelente. O material tem ótimo isolamento térmico e acústico, além de reduzir significativamente o peso estrutural da nossa obra.",
      author: "Ana Souza",
      role: "Arquiteta",
      rating: 5
    },
    {
      content: "O atendimento personalizado da equipe da Multi EPS nos ajudou a encontrar soluções específicas para nosso projeto. As molduras de EPS com revestimento cimentício ficaram perfeitas.",
      author: "Marcos Oliveira",
      role: "Construtor",
      rating: 5
    },
    {
      content: "Estamos impressionados com o design diferenciado que conseguimos em nossa fachada usando os produtos da Multi EPS. A instalação foi rápida e o resultado final superou nossas expectativas.",
      author: "Patricia Mendes",
      role: "Proprietária",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <TestimonialCard 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
