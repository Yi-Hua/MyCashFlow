import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private _translate: TranslateService) {
    _translate.addLangs(['en-US', 'zh-TW']);  // Add languages
    _translate.setDefaultLang('en-US');    // Set default language
  }

  changeLanguage(lang: string) {
    this._translate.use(lang);
  }
  ngOnInit(): void {
  }

}
