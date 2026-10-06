import React from 'react';
import { Loader2, Send } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

interface ContactFormProps {
  onSuccess: (name: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const { formData, errors, status, handleChange, handleSubmit } = useContactForm(onSuccess);

  return (
    <div className="w-full max-w-md bg-[#162c35]/85 border border-slate-700/60 rounded-md p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white uppercase mb-8">
        CONTACT FORM
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name Input */}
        <div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Your name"
            className="w-full bg-transparent border-b border-slate-700 focus:border-cyan-400 py-2.5 text-sm text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
          />
          {errors.name && (
            <span className="text-[11px] text-rose-400 font-mono-tech mt-1 block">
              {errors.name}
            </span>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Your phone"
            className="w-full bg-transparent border-b border-slate-700 focus:border-cyan-400 py-2.5 text-sm text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Your e-mail"
            className="w-full bg-transparent border-b border-slate-700 focus:border-cyan-400 py-2.5 text-sm text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
          />
          {errors.email && (
            <span className="text-[11px] text-rose-400 font-mono-tech mt-1 block">
              {errors.email}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Message"
            className="w-full bg-transparent border-b border-slate-700 focus:border-cyan-400 py-2.5 text-sm text-white placeholder-[#5d7d8b] focus:outline-none resize-none transition-colors"
          />
          {errors.message && (
            <span className="text-[11px] text-rose-400 font-mono-tech mt-1 block">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-8 py-3 border border-slate-600/80 hover:border-cyan-400 bg-[#14262f] hover:bg-[#1c3845] text-xs font-mono-tech tracking-[0.25em] text-white uppercase rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>SENDING...</span>
              </>
            ) : (
              <>
                <span>SEND MESSAGE</span>
                <Send className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
