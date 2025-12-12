import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: 'liquid' | 'specialty';
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