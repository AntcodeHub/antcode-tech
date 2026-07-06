import { Link } from 'react-router-dom'
import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import { Mail, Phone, MapPin } from 'lucide-react'

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
    <footer className="bg-dark-bg border-t border-white/10 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                AntCode
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Building intelligent software that moves businesses forward. We design, 
              develop, and scale modern solutions for global enterprises.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <SiX size={18} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <SiInstagram size={18} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <SiGithub size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="text-primary mt-0.5" size={18} />
                <span className="text-muted">123 Tech Avenue, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="text-primary" size={18} />
                <a href="mailto:info@antcode.tech" className="text-muted hover:text-white transition-colors">
                  info@antcode.tech
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="text-primary" size={18} />
                <span className="text-muted">+1 (555) 000-0000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} AntCode Technology. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-muted text-xs hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
