import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      number: '01',
      name: 'Hospital Billing Platform',
      desc: 'End-to-end billing system covering OP, IP, Pharmacy & Lab modules for a large-scale hospital management enterprise application. Serves real healthcare providers.',
      tags: ['Angular 17', 'Java', 'SQL', 'Bootstrap'],
      icon: '🏥',
      featured: true,
    },
    {
      number: '02',
      name: 'Patient Journey Module',
      desc: 'Full patient workflow tracker improving provider-patient interaction across all hospital departments. Built with Angular reactive forms and RxJS state management.',
      tags: ['Angular', 'RxJS', 'TypeScript'],
      icon: '🧭',
      featured: false,
    },
    {
      number: '03',
      name: 'Responsive Web Templates',
      desc: 'Designed and coded multiple mobile-first client websites at GlobalLogic, translating UX wireframes into pixel-perfect, accessible interfaces.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      icon: '🖥️',
      featured: false,
    },
    {
      number: '04',
      name: 'Healthcare Dashboard',
      desc: 'Analytics dashboard providing real-time insights for hospital administrators, featuring data visualisations for patient metrics and billing summaries.',
      tags: ['Angular', 'Charts', 'REST APIs'],
      icon: '📊',
      featured: false,
    },
    {
      number: '05',
      name: 'Angular 12→17 Migration',
      desc: 'Led the migration of a large production Angular application from v12 to v17 — adopting standalone components, signals, and new control flow syntax.',
      tags: ['Angular 17', 'Signals', 'Migration'],
      icon: '⬆️',
      featured: false,
    },
    {
      number: '06',
      name: 'Portfolio Website',
      desc: 'This portfolio — built with Angular 17, SCSS, and GitHub Actions CI/CD. Auto-deploys to GitHub Pages on every push.',
      tags: ['Angular 17', 'SCSS', 'GitHub Actions'],
      icon: '🚀',
      featured: false,
      link: 'https://github.com/nagendranaren1992/nagendranaren-portfolio'
    },
  ];
}
