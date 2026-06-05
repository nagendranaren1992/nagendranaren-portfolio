import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  roles = ['Senior Technical Lead', 'Web Architect', 'Angular Expert'];
  currentRole = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '80k+', label: 'Lines Refactored' },
    { value: '8+', label: 'Engineers Led' },
    { value: '40%', label: 'Performance Boosted' },
  ];

  floatingCards = [
    { icon: '⚡', value: 'Angular 17+', label: 'TypeScript · React · Next.js', class: 'card-1' },
    { icon: '🏥', value: 'Healthcare', label: 'HMS · EHR/EMR · UHID', class: 'card-2' },
  ];

  ngOnInit() {
    this.typeRole();
  }

  private typeRole() {
    const role = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.currentRole.set(role.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.currentRole.set(role.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === role.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      speed = 400;
    }

    setTimeout(() => this.typeRole(), speed);
  }

  scrollToContact() {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjects() {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
