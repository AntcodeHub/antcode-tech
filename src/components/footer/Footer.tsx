import { Link } from 'react-router-dom'
import { SiGithub, SiInstagram, SiX, SiCloudflare, SiVercel } from '@icons-pack/react-simple-icons'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'AI Solutions', href: '/services' },
    { name: 'Cybersecurity', href: '/services' },
    { name: 'UI/UX Design', href: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-32 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-mono">A</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white uppercase">
                AntCode <span className="text-primary font-medium">Technology</span>
              </span>
            </Link>
            <p className="text-muted text-lg leading-relaxed max-w-sm">
              Factual engineering for high-throughput distributed systems and 
              neural architectures.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/20 hover:text-primary transition-colors">
                <SiX size={20} />
              </a>
              <a href="#" className="text-white/20 hover:text-primary transition-colors">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="text-white/20 hover:text-primary transition-colors">
                <SiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Systems</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] uppercase text-white/30 tracking-[0.2em]">Node Locality</h4>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start space-x-3">
                <span className="text-primary">ADDR</span>
                <span className="text-muted">0x1A2B Tech Ave, SV, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">MAIL</span>
                <a href="mailto:ops@antcode.tech" className="text-muted hover:text-white transition-colors">
                  ops@antcode.tech
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">PING</span>
                <span className="text-muted">+1.555.0000.0x0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4 opacity-30 grayscale hover:opacity-100 transition-all cursor-default">
             <SiCloudflare size={20} />
             <SiVercel size={18} />
          </div>
          <p className="text-white/10 text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} ANTCODE_TECH // VER_4.2.0_STABLE
          </p>
          <div className="flex items-center space-x-8">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-white/10 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
