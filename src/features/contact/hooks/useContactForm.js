import { useState } from 'react'

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export function useContactForm(onSuccess) {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      // Simulate asynchronous transmission
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('success')
      onSuccess(formData.name)
      setFormData(INITIAL_STATE)
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
    }
  }

  return {
    formData,
    errors,
    status,
    handleChange,
    handleSubmit,
  }
}
