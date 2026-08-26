import { LucideIcon } from 'lucide-react';

export interface NavSubItem {
  label: string;
  path: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path?: string;
  children?: NavSubItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  title: string;
  slug?: string;
  description: string;
  image: string;
  category?: 'liquid' | 'industrial' | 'high-purity' | 'specialty' | 'other';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GroupCompany {
  name: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export interface DeliveryOption {
  title: string;
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}