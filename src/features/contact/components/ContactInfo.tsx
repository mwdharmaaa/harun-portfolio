import React from 'react';
import { Copy, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/core/constants/contact.constants';

interface ContactInfoProps {
  onCopyEmail: (email: string) => void;
  onCopyAddress: (address: string) => void;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ onCopyEmail, onCopyAddress }) => {
  return (
    <div className="flex flex-col justify-center max-w-lg">
      {/* Title */}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
        CONTACT
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#8fa7b3] leading-relaxed mt-4 sm:mt-6 font-normal">
        {CONTACT_INFO.description}
      </p>

      {/* Detail Blocks */}
      <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
        {/* Address */}
        <div>
          <span className="text-xs font-mono-tech tracking-[0.2em] text-white uppercase block mb-1">
            {CONTACT_INFO.addressLabel}
          </span>
          <div className="flex items-center gap-2 group">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs sm:text-sm text-[#8fa7b3] group-hover:text-white transition-colors">
              {CONTACT_INFO.address}
            </span>
            <button
              onClick={() => onCopyAddress(CONTACT_INFO.address)}
              className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-white transition-opacity"
              aria-label="Copy Address"
              title="Copy Address"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Email */}
        <div>
          <span className="text-xs font-mono-tech tracking-[0.2em] text-white uppercase block mb-1">
            {CONTACT_INFO.emailLabel}
          </span>
          <div className="flex items-center gap-2 group">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-xs sm:text-sm text-[#8fa7b3] hover:text-cyan-300 transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
            <button
              onClick={() => onCopyEmail(CONTACT_INFO.email)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Copy Email"
              title="Copy Email"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
