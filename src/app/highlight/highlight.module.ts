import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from 'app/highlight/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective],
  exports: [HighlightDirective]

})
export class HighlightModule { }
