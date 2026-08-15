import React, { useState } from 'react';
import { X, Settings, Link, Check, Copy } from 'lucide-react';

interface HotmartConfigModalProps {
  currentBasicUrl: string;
  currentCompleteUrl: string;
  currentUpsellUrl?: string;
  onSave: (basicUrl: string, completeUrl: string, upsellUrl?: string) => void;
  onClose: () => void;
}

export const HotmartConfigModal: React.FC<HotmartConfigModalProps> = ({
  currentBasicUrl,
  currentCompleteUrl,
  currentUpsellUrl = "https://pay.hotmart.com/N107174503A?off=qayx5jvr&checkoutMode=10",
  onSave,
  onClose
}) => {
  const [basicInput, setBasicInput] = useState(currentBasicUrl);
  const [completeInput, setCompleteInput] = useState(currentCompleteUrl);
  const [upsellInput, setUpsellInput] = useState(currentUpsellUrl);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopyCode = () => {
    const codeSnippet = `BASIC_OFFER_URL = "${basicInput}";\nUPSELL_OFFER_URL = "${upsellInput}";\nCOMPLETE_OFFER_URL = "${completeInput}";`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedKey('code');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(basicInput, completeInput, upsellInput);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-slate-800 relative shadow-2xl border border-slate-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-slate-900 text-white">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Configuración de Links Hotmart</h3>
            <p className="text-xs text-slate-500">Configura o prueba tus enlaces de checkout de Hotmart</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>BASIC_OFFER_URL (Kit Básico - US$5)</span>
              <span className="text-emerald-600 text-[11px]">Hotmart 5$</span>
            </label>
            <div className="relative">
              <Link className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={basicInput}
                onChange={(e) => setBasicInput(e.target.value)}
                placeholder="https://pay.hotmart.com/YOUR_BASIC_CODE"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs font-mono text-slate-800"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>UPSELL_OFFER_URL (Pop-up Especial - US$7,50)</span>
              <span className="text-emerald-600 text-[11px]">Hotmart 7.50$</span>
            </label>
            <div className="relative">
              <Link className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={upsellInput}
                onChange={(e) => setUpsellInput(e.target.value)}
                placeholder="https://pay.hotmart.com/YOUR_UPSELL_CODE"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs font-mono text-slate-800"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>COMPLETE_OFFER_URL (Kit Completo - US$10)</span>
              <span className="text-emerald-600 text-[11px]">Hotmart 10$</span>
            </label>
            <div className="relative">
              <Link className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={completeInput}
                onChange={(e) => setCompleteInput(e.target.value)}
                placeholder="https://pay.hotmart.com/YOUR_COMPLETE_CODE"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs font-mono text-slate-800"
              />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-800">Código exportable:</p>
            <code className="block p-2 bg-slate-900 text-emerald-400 rounded-lg text-[11px] font-mono break-all">
              BASIC_OFFER_URL = "{basicInput}";<br />
              UPSELL_OFFER_URL = "{upsellInput}";<br />
              COMPLETE_OFFER_URL = "{completeInput}";
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              {copiedKey === 'code' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'code' ? '¡Copiado!' : 'Copiar variables al portapapeles'}</span>
            </button>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              Aplicar en esta vista previa
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              Cancelar
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
