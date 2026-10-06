import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

export const ContactSection = ({
  onSuccessMessage,
  onCopyNotice,
}) => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 sm:px-12 md:px-16"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Information */}
        <ContactInfo
          onCopyEmail={(email) => {
            navigator.clipboard.writeText(email)
            onCopyNotice('Email copied to clipboard')
          }}
          onCopyAddress={(address) => {
            navigator.clipboard.writeText(address)
            onCopyNotice('Address copied to clipboard')
          }}
        />

        {/* Right Column Contact Form */}
        <div className="flex justify-start lg:justify-end">
          <ContactForm onSuccess={onSuccessMessage} />
        </div>
      </div>
    </section>
  )
}
