import React, { useState } from 'react';
import { Shield, FileText, Mail, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          
          <div className="space-y-1">
            <p className="font-bold text-slate-200 text-base">
              Kit Terapéutico para Adolescentes © 2026
            </p>
            <p className="text-slate-500 font-medium">
              Material digital para profesionales.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 font-semibold text-slate-400">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="text-slate-800">•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Términos
            </button>
            <span className="text-slate-800">•</span>
            <button
              onClick={() => setActiveModal('contact')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>

          <div className="pt-4 border-t border-slate-900/80 text-[11px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Este sitio web no forma parte de Meta, Facebook ni de ninguna entidad de Meta Inc. Los materiales ofrecidos son herramientas de apoyo psicoeducativo e intervención profesional para psicólogos, terapeutas y educadores.
          </div>

        </div>
      </footer>

      {/* Modal Dialog for Footer Links */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-slate-800 relative shadow-2xl border border-slate-200">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Política de Privacidad</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
                  <p>Respetamos profundamente la privacidad de los profesionales que adquieren nuestros materiales terapéuticos digitalizados.</p>
                  <p>Los datos ingresados durante la compra son procesados de forma encriptada y 100% segura mediante Hotmart, cumpliendo estándares internacionales de protección de datos personales.</p>
                  <p>No comercializamos ni compartimos información confidencial con terceros no autorizados.</p>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Términos de Uso</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
                  <p>1. <strong>Uso Profesional:</strong> Los materiales digitales están diseñados como herramientas de apoyo para la práctica clínica, psicopedagógica y terapéutica.</p>
                  <p>2. <strong>Licencia Digital:</strong> La adquisición concede una licencia personal e intransferible para imprimir o utilizar los PDFs durante sus consultas profesionales.</p>
                  <p>3. <strong>Propiedad Intelectual:</strong> Queda estrictamente prohibida la reventa, redistribución masiva o modificación con fines comerciales ajenos al comprador.</p>
                </div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Contacto y Soporte</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
                  <p>Si tienes alguna consulta sobre tu pedido, acceso a los PDFs o inquietudes comerciales, nuestro equipo de soporte está atento para atenderte.</p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold space-y-1">
                    <p>Soporte al Cliente</p>
                    <p className="text-emerald-700 font-mono text-xs">soporte@kitterapeutico.com</p>
                  </div>
                  <p className="text-xs text-slate-400">Atención habitual de lunes a viernes en horario laboral.</p>
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
