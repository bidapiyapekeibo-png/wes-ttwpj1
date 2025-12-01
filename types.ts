import React from 'react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}