export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Logo Design' | 'Web Development' | 'Branding';
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  iconName: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: {
    instagram: string;
    behance: string;
  };
}