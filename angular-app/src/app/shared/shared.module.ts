import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    FlexLayoutModule,
    FlexModule,
    MatTooltipModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    FlexLayoutModule,
    FlexModule,
    MatTooltipModule,
    MatCardModule,
  ]
})
export class SharedModule { }
