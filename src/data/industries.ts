import {
  HeartPulse,
  GraduationCap,
  Landmark,
  Wheat,
  ShoppingBag,
  Building2,
  Factory,
  Zap,
  Truck,
} from 'lucide-react'

export const industries = [
  { id: 'healthcare', title: 'Healthcare', icon: HeartPulse, description: 'Digital health platforms, telemedicine, and medical data systems.' },
  { id: 'education', title: 'Education', icon: GraduationCap, description: 'EdTech platforms, LMS solutions, and learning analytics.' },
  { id: 'finance', title: 'Finance', icon: Landmark, description: 'Fintech apps, payment systems, and banking infrastructure.' },
  { id: 'agriculture', title: 'Agriculture', icon: Wheat, description: 'AgriTech solutions, IoT monitoring, and supply chain tools.' },
  { id: 'retail', title: 'Retail', icon: ShoppingBag, description: 'E-commerce platforms, POS systems, and inventory management.' },
  { id: 'government', title: 'Government', icon: Building2, description: 'Digital governance, citizen services, and secure infrastructure.' },
  { id: 'manufacturing', title: 'Manufacturing', icon: Factory, description: 'Industry 4.0, automation, and production optimization.' },
  { id: 'energy', title: 'Energy', icon: Zap, description: 'Smart grid systems, renewable energy monitoring, and analytics.' },
  { id: 'logistics', title: 'Logistics', icon: Truck, description: 'Fleet management, route optimization, and warehouse systems.' },
]
