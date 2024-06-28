import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from '../shared/shared.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ RouterOutlet, MatToolbarModule, MatSidenavModule, SharedModule,],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  toggleMenu(): void{
    console.log('Menu!')
  }
}
