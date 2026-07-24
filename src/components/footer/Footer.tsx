import { Link } from 'react-router-dom'
import { SiGithub, SiInstagram, SiX, SiDiscord, SiTelegram } from '@icons-pack/react-simple-icons'
import { footerNav } from '../../data/navigation'

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              
              <span className="font-heading font-bold text-xl text-white">
                Antcode <span className="text-primary">Technology</span>
              </span>
            </Link>
            <p className="text-muted leading-relaxed max-w-sm">
              Building Africa's future through technology engineering, community, 
              education, and open source under one ecosystem.
            </p>
            <div className="flex items-center gap-4">
              {[SiX, SiGithub, SiDiscord, SiTelegram, SiInstagram].map((Icon, i) => (
                <a key={i} href="#" className="text-white/20 hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Ecosystem</h4>
            <ul className="space-y-2.5">
              {footerNav.ecosystem.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Company</h4>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Resources</h4>
            <ul className="space-y-2.5">
              {footerNav.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Contact</h4>
            <div className="space-y-3 font-mono text-xs">
              <p className="text-muted">Bamenda, Cameroon</p>
              <a href="mailto:hello@antcode.tech" className="text-muted hover:text-white transition-colors block">
                hello@antcode.tech
              </a>
              <a href="https://wa.me/237677020718" className="text-muted hover:text-white transition-colors block">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Antcode Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-white/20 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
