import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories = [
    {
      title: 'Frontend & Frameworks',
      skills: [
        { name: 'Angular 17+', level: 95, icon: '🅰️' },
        { name: 'TypeScript', level: 92, icon: '📘' },
        { name: 'React / Next.js', level: 85, icon: '⚛️' },
        { name: 'HTML5 / SCSS', level: 95, icon: '🌐' },
        { name: 'RxJS / NgRx', level: 88, icon: '🔄' },
        { name: 'Angular Material / PrimeNG', level: 90, icon: '🎨' },
      ]
    },
    {
      title: 'Backend, DevOps & Domain',
      skills: [
        { name: 'Node.js / GraphQL', level: 85, icon: '🔗' },
        { name: 'REST APIs / Microservices', level: 88, icon: '🛠️' },
        { name: 'Docker / GitHub Actions', level: 82, icon: '🐳' },
        { name: 'Healthcare (HMS / EHR)', level: 90, icon: '🏥' },
        { name: 'AI / LLM Integration', level: 80, icon: '🤖' },
        { name: 'WCAG / Testing (Jest, Cypress)', level: 85, icon: '✅' },
      ]
    }
  ];

  workflows = [
    'Mobile-First & Responsive Design',
    'Cross-Browser Testing & Debugging',
    'Cross-Functional Teams',
    'Agile & Scrum',
    'CI/CD Pipelines',
    'Code Reviews & Mentoring',
  ];
}
