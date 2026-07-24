import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Mail, MessageCircle, Send, CheckCircle, Upload, X, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  preferredContact: 'email' | 'whatsapp'
  file: File | null
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    file: null
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  // const [captchaQuestion, setCaptchaQuestion] = useState('')
  const [captchaResult, setCaptchaResult] = useState(0)

  // Simple math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    // const question = `${num1} + ${num2} = ?`
    // setCaptchaQuestion(question)
    setCaptchaResult(num1 + num2)
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    if (parseInt(captchaAnswer) !== captchaResult) {
      newErrors.name = 'Please solve the CAPTCHA correctly'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF, images, and Word documents are allowed')
        return
      }
      setFormData(prev => ({ ...prev, file }))
    }
  }

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Create email link
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
${formData.file ? `Attachment: ${formData.file.name}\n` : ''}
Message:
${formData.message}

Preferred Contact Method: ${formData.preferredContact}
    `.trim()

    const emailSubject = encodeURIComponent(`New Contact: ${formData.subject}`)
    const emailBodyEncoded = encodeURIComponent(emailBody)
    const emailLink = `mailto:hello@antcode.tech?subject=${emailSubject}&body=${emailBodyEncoded}`

    // Create WhatsApp link
    const whatsappMessage = encodeURIComponent(
      `*New Contact from Antcode Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n${formData.file ? `\n*Attachment:* ${formData.file.name}\n` : ''}\n*Message:*\n${formData.message}`
    )
    const whatsappLink = `https://wa.me/237677020718?text=${whatsappMessage}`

    // Open the preferred contact method
    if (formData.preferredContact === 'email') {
      window.open(emailLink, '_blank')
    } else {
      window.open(whatsappLink, '_blank')
    }

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        file: null
      })
      setCaptchaAnswer('')
      generateCaptcha()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  return (
    <div className="w-full">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-4">Message Sent!</h3>
          <p className="text-muted">
            {formData.preferredContact === 'email' 
              ? 'Your email client has been opened. Please send the message to complete.'
              : 'WhatsApp has been opened. Please send the message to complete.'}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
                Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-white/10 focus:border-primary'
                }`}
                placeholder="Ibrahim fonyuy"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'
                }`}
                placeholder="ibrahim@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:outline-none transition-colors"
                placeholder="+237 677 020 718"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
                Subject <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors ${
                  errors.subject ? 'border-red-500' : 'border-white/10 focus:border-primary'
                }`}
                placeholder="Project Inquiry"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.subject}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
              Project Brief (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
              >
                <Upload size={18} className="text-primary" />
                <span className="text-white/60 text-sm">
                  {formData.file ? formData.file.name : 'Upload PDF, Image, or Word document (max 5MB)'}
                </span>
              </label>
              {formData.file && (
                <button
                  type="button"
                  onClick={removeFile}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, preferredContact: 'email' }))}
                className={`p-4 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                  formData.preferredContact === 'email'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                }`}
              >
                <Mail size={18} />
                <span className="font-mono text-sm">Email</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, preferredContact: 'whatsapp' }))}
                className={`p-4 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                  formData.preferredContact === 'whatsapp'
                    ? 'border-green-500 bg-green-500/10 text-green-500'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                }`}
              >
                <MessageCircle size={18} />
                <span className="font-mono text-sm">WhatsApp</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
              Message <span className="text-red-700">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary'
              }`}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          {/* <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
              Security Check <span className="text-red-700">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono">
                {captchaQuestion}
              </div>
              <input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="w-24 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-primary focus:outline-none transition-colors"
                placeholder="?"
              />
            </div>
          </div> */}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full font-mono uppercase tracking-widest"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={16} />
                Send Message
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
