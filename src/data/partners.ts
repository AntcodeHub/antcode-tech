import { University, Building2, Globe, Shield, Users, Briefcase, Award, Heart, Banknote } from "lucide-react";

interface Partner {
  name: string;
  type: string;
  logo?: React.ComponentType<{ className?: string }>;
}

export const trustPartners: Partner[] = [
  { name: 'University of Buea', type: 'University', logo: University },
  { name: 'UNDP Africa', type: 'NGO', logo: Users },
  { name: 'MTN Cameroon', type: 'Partner', logo: Building2 },
  { name: 'Orange Digital', type: 'Partner', logo: Globe },
  { name: 'Ministry of Digital Economy', type: 'Government', logo: Shield },
  { name: 'Google for Startups', type: 'Partner', logo: Award },
  { name: 'AWS Activate', type: 'Partner', logo: Banknote },
  { name: 'Microsoft for Startups', type: 'Partner', logo: Briefcase },
  { name: 'UNICEF Innovation', type: 'NGO', logo: Heart },
  { name: 'African Development Bank', type: 'Partner', logo: Banknote },
]
