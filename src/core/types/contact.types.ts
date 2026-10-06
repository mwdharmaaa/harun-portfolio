export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
