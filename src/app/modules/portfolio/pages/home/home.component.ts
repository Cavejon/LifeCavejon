import { Component, inject, OnInit } from '@angular/core';

//components
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { JourneyComponent } from '../../components/journey/journey.component';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ShowcaseComponent,
    SkillsComponent,
    AboutMeComponent,
    JourneyComponent,
    ProjectsComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }
}
