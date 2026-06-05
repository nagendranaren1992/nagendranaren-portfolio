import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  scrollTo(href: string) {
    this.menuOpen.set(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
