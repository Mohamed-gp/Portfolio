import type { Island, IslandType } from '@/types';

export const ISLANDS: Record<IslandType, Island> = {
  about: {
    id: 'about',
    name: 'About Island',
    position: [0, 60, -200],
    color: '#10b981',
    icon: '👤',
    description: 'Learn about the pilot behind the controls',
  },
  projects: {
    id: 'projects',
    name: 'Projects Archipelago',
    position: [200, 80, -100],
    color: '#6366f1',
    icon: '🚀',
    description: 'Explore the missions completed',
  },
  skills: {
    id: 'skills',
    name: 'Skills Summit',
    position: [-200, 100, -150],
    color: '#f59e0b',
    icon: '⚡',
    description: 'Technical arsenal and capabilities',
  },
  contact: {
    id: 'contact',
    name: 'Contact Tower',
    position: [150, 50, 50],
    color: '#ec4899',
    icon: '📡',
    description: 'Establish communication',
  },
  hangar: {
    id: 'hangar',
    name: 'Secret Hangar',
    position: [-150, 40, 100],
    color: '#8b5cf6',
    icon: '🛩️',
    description: 'Unlock new aircraft',
  },
};

export const ISLAND_LIST = Object.values(ISLANDS);
