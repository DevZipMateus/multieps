
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e tirar todas as suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AnimatedSection animation="slide-in-left" className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Telefone</h4>
                    <a href="tel:+5542998370067" className="text-gray-600 hover:text-primary transition-colors">
                      (42) 99837-0067
                    </a>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <a href="mailto:multieps@multieps.com.br" className="text-gray-600 hover:text-primary transition-colors break-words">
                      multieps@multieps.com.br
                    </a>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-gray-600">Rua Francisco Xavier Scharr, 111</p>
                    <p className="text-gray-600">Ponta Grossa - PR</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/multi_eps/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      @multi_eps
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Responsável</h4>
                <p className="text-gray-600">Jean Francisco dos Santos</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" className="lg:col-span-3">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20 h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Nossa Localização</h3>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.678056877241!2d-50.13062!3d-25.108839899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b3273eaa595%3A0x9b8f76e961e766d3!2sMultiEPS!5e0!3m2!1spt-BR!2sbr!4v1716402366979!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-8">
          <div className="fixed bottom-6 right-6 z-40">
            <a 
              href="https://wa.me/5542998370067" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Contato via WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="bi bi-whatsapp">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
