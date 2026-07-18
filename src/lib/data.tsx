import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export const socials = [
  { href: 'https://github.com/Sanskar-Parab',            icon: <FaGithub size={28} />,   label: 'GitHub', bg: '#000000', color: '#ffffff', shape: 'square' },
  { href: 'https://www.linkedin.com/in/sanskar-parab/', icon: <FaLinkedinIn size={24} />, label: 'LinkedIn', bg: '#0077b5', color: '#ffffff', shape: 'circle' },
  { href: 'mailto:your-email@example.com',               icon: <FaEnvelope size={22} />,     label: 'Email', bg: '#ea4335', color: '#ffffff', shape: 'circle' },
];

export const skills = {
  'Frontend':      ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  'Backend':       ['Node.js', 'Express.js', 'MySQL'],
  'Programming Languages': ['Java', 'Python', 'JavaScript'],
  'Tools':         ['Git', 'GitHub', 'VS Code', 'Docker', 'n8n'],
  'AI & Automation': ['OpenRouter', 'Hugging Face', 'Pinecone', 'Vector Databases'],
};

export const projects = [
  {
    num: '01',
    title: 'FinMate AI',
    desc: 'Built an AI-powered personal finance assistant that analyzes expenses, answers financial queries using Retrieval-Augmented Generation (RAG), supports voice interactions, and integrates Telegram for seamless communication.',
    image: './finmate.png',
    tech: ['n8n', 'Telegram Bot', 'Pinecone', 'Hugging Face', 'OpenRouter', 'Google Drive'],
    link: '#',
    note: null,
  },
  {
    num: '02',
    title: 'AI Hotel Restaurant Assistant',
    desc: 'An intelligent assistant for hotels and restaurants that automates reservations, handles menu inquiries, manages guest requests, and provides AI-driven recommendations through a conversational interface.',
    image: './ai-hotel.png',
    tech: ['n8n', 'AI Agent', 'Telegram Bot', 'OpenRouter'],
    link: '#',
    note: null,
  },
  {
    num: '03',
    title: 'More Projects Coming Soon',
    desc: 'I\'m actively building new tools and applications. This spot will be filled with my next project — stay tuned!',
    image: './coming-soon.png',
    tech: [],
    link: '#',
    note: 'In Development',
  },
];
