import { useState } from 'react'
import { CONTACT_INFO } from '@/core/constants/contact.constants'

export const PresentationContact = ({
  onSuccessMessage,
  onCopyNotice,
}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onSuccessMessage(name)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-2">
      {/* Left Column Information */}
      <div className="flex flex-col justify-center">
        <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
          CONTACT
        </h3>
        <p className="text-[10px] sm:text-xs text-[#8fa7b3] leading-relaxed mt-2 sm:mt-4 max-w-sm">
          {CONTACT_INFO.description}
        </p>

        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs font-mono-tech tracking-[0.2em] text-white uppercase block mb-0.5 font-bold">
              Adress
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(CONTACT_INFO.address)
                onCopyNotice('Address copied to clipboard')
              }}
              className="text-[10px] sm:text-xs text-[#8fa7b3] hover:text-white transition-colors text-left cursor-pointer"
            >
              {CONTACT_INFO.address}
            </button>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-mono-tech tracking-[0.2em] text-white uppercase block mb-0.5 font-bold">
              E-mail
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(CONTACT_INFO.email)
                onCopyNotice('Email copied to clipboard')
              }}
              className="text-[10px] sm:text-xs text-[#8fa7b3] hover:text-white transition-colors text-left cursor-pointer"
            >
              {CONTACT_INFO.email}
            </button>
          </div>
        </div>
      </div>

      {/* Right Column Inset Contact Form Box */}
      <div className="flex justify-end">
        <div className="w-full max-w-sm bg-[#152a32] border border-slate-700/50 p-4 sm:p-6 rounded-none sm:rounded-sm shadow-xl">
          <h4 className="font-display text-sm sm:text-base font-bold tracking-tight text-white uppercase mb-3 sm:mb-4">
            CONTACT FORM
          </h4>
          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-[#2d4d5a] focus:border-cyan-400 py-1 text-xs text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone"
              className="w-full bg-transparent border-b border-[#2d4d5a] focus:border-cyan-400 py-1 text-xs text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your e-mail"
              className="w-full bg-transparent border-b border-[#2d4d5a] focus:border-cyan-400 py-1 text-xs text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full bg-transparent border-b border-[#2d4d5a] focus:border-cyan-400 py-1 text-xs text-white placeholder-[#5d7d8b] focus:outline-none transition-colors"
            />
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-1.5 border border-[#375867] hover:border-cyan-400 bg-[#14262f] hover:bg-[#1c3845] text-[10px] font-mono-tech tracking-[0.25em] text-white uppercase cursor-pointer transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
