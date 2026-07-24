import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export function TerminalForm() {
  const [input, setInput] = useState('')
  const [history, setLines] = useState<string[]>([
    'Initializing Antcode Technologies CLI v4.2.0',
    'Secure connection established.',
    'Type "help" for a list of commands.',
    '',
  ])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()
    let response = `Command not found: ${cmd}`

    if (cmd === 'help') {
      response = 'Available: email, service, message, execute, clear'
    } else if (cmd.startsWith('email')) {
      response = 'Email address set successfully.'
    } else if (cmd.startsWith('service')) {
      response = 'Service type selected.'
    } else if (cmd === 'execute') {
      response = 'Run initialized. Project submission in progress...'
      setIsSubmitted(true)
    } else if (cmd === 'clear') {
       setLines([])
       setInput('')
       return
    }

    setLines(prev => [...prev, `> ${input}`, response, ''])
    setInput('')
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto glass-card bg-black/80 rounded-xl shadow-2xl border border-white/10 overflow-hidden font-mono text-sm terminal-flicker">
      {/* Terminal Header */}
      <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] text-white/20 uppercase tracking-widest">
          antcode-terminal - zsh
        </div>
        <div className="w-12" />
      </div>

      {/* Terminal Body */}
      <div className="p-8 h-[400px] overflow-y-auto custom-scrollbar text-white/70 relative">
        <div className="scanline pointer-events-none" />
        <div className="space-y-1 relative z-10">
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('>') ? 'text-primary' : ''}>
              {line}
            </div>
          ))}
          
          {!isSubmitted && (
            <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-2">
              <span className="text-primary font-bold">{`>`}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none flex-grow text-white"
                placeholder="type command..."
              />
            </form>
          )}

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 pt-4"
            >
              [SUCCESS] Handshake complete. Our engineers will reach out within 24 hours.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
