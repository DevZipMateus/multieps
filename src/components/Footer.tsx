
import { Facebook, Instagram, Linkedin, Twitter, Calendar, FileText, Calculator, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MULTI EPS</h3>
            <p className="text-gray-400 mb-6">
              Fabricação de molduras e artefatos de EPS para construção civil. 
              Design e leveza para sua obra.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/multi_eps/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#serviços" className="hover:text-white transition-colors">Molduras de EPS</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Molduras com Revestimento Cimentício</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Blocos para Volumetrias</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Chapas de EPS</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Materiais de Fixação</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://www.instagram.com/multi_eps/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#serviços" className="hover:text-white transition-colors flex items-center">
                  <Calculator className="h-4 w-4 mr-2" />
                  Serviços
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(42) 99837-0067</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>multieps@multieps.com.br</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua Francisco Xavier Scharr, 111</p>
                  <p>Ponta Grossa - PR</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} MULTI EPS. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Responsável: Jean Francisco dos Santos</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
