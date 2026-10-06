import { useState, useCallback } from 'react'

/**
 * @typedef {Object} ToastMessage
 * @property {string} id
 * @property {'success' | 'info' | 'error'} type
 * @property {string} title
 * @property {string} message
 */

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((title, message, type = 'info') => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    const newToast = { id, type, title, message }

    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3800)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}
