import { useState } from 'react';
import type { ContactFormState, ContactFormErrors, SubmitStatus } from '@/core/types/contact.types';

const INITIAL_STATE: ContactFormState = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export function useContactForm(onSuccess: (name: string) => void) {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      // Simulate asynchronous transmission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      onSuccess(formData.name);
      setFormData(INITIAL_STATE);
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  return {
    formData,
    errors,
    status,
    handleChange,
    handleSubmit,
  };
}
