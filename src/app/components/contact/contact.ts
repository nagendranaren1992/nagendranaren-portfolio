import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = '';
  email = '';
  message = '';
  submitted = signal(false);

  contacts = [
    {
      icon: '📱',
      label: 'Mobile',
      value: '+91 8074781457',
      href: 'tel:+918074781457'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'appala.naren@gmail.com',
      href: 'mailto:appala.naren@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'nagendranaren1992',
      href: 'https://www.linkedin.com/in/nagendranaren1992'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'nagendranaren1992',
      href: 'https://github.com/nagendranaren1992'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null
    }
  ];

  onSubmit() {
    if (this.name && this.email && this.message) {
      // Opens mailto with prefilled message
      const subject = encodeURIComponent(`Portfolio Contact from ${this.name}`);
      const body = encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`);
      window.location.href = `mailto:appala.naren@gmail.com?subject=${subject}&body=${body}`;
      this.submitted.set(true);
    }
  }
}
