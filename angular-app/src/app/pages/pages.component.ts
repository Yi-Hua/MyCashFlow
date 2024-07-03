import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { menu } from './menu.model';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, MatToolbarModule, MatSidenavModule, SharedModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})

export class PagesComponent implements OnInit{
  isNavOpened = false;
  menu = menu;

  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnInit(): void { }

  toggleMenu(): void {
    this.isNavOpened = !this.isNavOpened
  }
}
