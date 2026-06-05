import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  tags: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  activeIndex = signal(0);

  experiences: ExperienceItem[] = [
    {
      company: 'iHUB Technologies Pvt. Ltd.',
      role: 'Senior Technical Lead — Web & Healthcare Architecture',
      period: 'Feb 2016 – Present',
      duration: '9+ years',
      type: 'Product Based · Full-time',
      description: 'Architect and lead end-to-end development of a modular clinical web platform (OT scheduling, patient counseling, admissions and UHID-based patient tracking). Led the Angular 12 → 17 migration to standalone components and signals, refactored 80,000+ lines of legacy JavaScript into type-safe TypeScript, and introduced a GraphQL layer that cut API over-fetching by ~40%. Built a shared Angular Material / PrimeNG design system that reduced new-module UI time by 35%, mentoring a team of 8+ engineers while sustaining 99.9% uptime.',
      tags: ['Angular 17+', 'React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Healthcare'],
      current: true,
    },
    {
      company: 'GlobalLogic Technology Solutions',
      role: 'Junior Web Designer & Developer',
      period: 'Oct 2014 – Feb 2016',
      duration: '1.5 years',
      type: 'Service Based · Full-time',
      description: 'Translated UX wireframes into responsive, pixel-perfect web interfaces. Worked closely with UX teams and clients, maintaining clean, well-commented code for easy migration and maintenance.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UX Collaboration'],
    },
    {
      company: 'ViewShadz Enterprise Solutions',
      role: 'Web Design Intern',
      period: 'May 2013 – Oct 2014',
      duration: '1.5 years',
      type: 'Internship',
      description: 'Learned modern web coding and parallel design skills using Adobe tools (Photoshop, Illustrator, CorelDraw). Designed wireframes based on client requirements and created print templates for a student magazine "Insights".',
      tags: ['HTML', 'CSS', 'Photoshop', 'Illustrator', 'CorelDraw', 'Print Design'],
    }
  ];

  setActive(i: number) {
    this.activeIndex.set(i);
  }
}
