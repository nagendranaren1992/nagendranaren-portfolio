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
      role: 'Senior Web Developer',
      period: 'Feb 2016 – Present',
      duration: '9+ years',
      type: 'Product Based · Full-time',
      description: 'Leading frontend development of a large-scale Hospital Management System. Personally designed and developed multiple billing modules including OP, IP, Pharmacy & Lab. Played a key role in the Patient Journey module and led the Angular 12 → 17 upgrade initiative across the platform.',
      tags: ['Angular 17', 'TypeScript', 'Java', 'RxJS', 'Bootstrap', 'Agile', 'Healthcare'],
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
