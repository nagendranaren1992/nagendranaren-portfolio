import { Component, signal } from '@angular/core';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Intro } from './components/intro/intro';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Navbar,
    Intro,
    Skills,
    Experience,
    Projects,
    Contact,
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nagendranaren-portfolio');
}
