import { Directive, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges, AfterViewInit {
  @Input('highlight') searchTerm = '';
  @Input() caseSensitive = true;

  private get caseSensitivity(): string { return this.caseSensitive ? '' : 'i'; }


  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightSearchTerm();
  }

  ngAfterViewInit(): void {
    this.highlightSearchTerm();
  }


  highlightSearchTerm() {
    if (!this.searchTerm) {
      this.removePreviouslyMarkedTextInNode();
      return;
    };

    if (this.el.nativeElement) {
      this.removePreviouslyMarkedTextInNode();
      this.highlightedNewTextInNode();
    }
  }

  private removePreviouslyMarkedTextInNode() {
    const node = this.el.nativeElement;
    const markingPattern = new RegExp('<mark>|<\/mark>', 'g');
    const cleanText = node.innerHTML.replace(markingPattern, '');
    node.innerHTML = cleanText;
  }

  private highlightedNewTextInNode() {
    const node = this.el.nativeElement;
    const htmlNegativeLookaheadPattern = '(?![^<>]*>)';
    const searchTermPattern = this.getSearchTerm();
    const searchRegex = new RegExp(searchTermPattern + htmlNegativeLookaheadPattern, 'gmi');
    console.log("using regex:", searchRegex);
    const markedText = node.innerHTML.replace(searchRegex, '<mark>$&</mark>');
    node.innerHTML = markedText;
  }

  private getSearchTerm(){
    let escapedSearchTerm =  `(${this.escapeRegExp(this.searchTerm)})`;
    const spaceToMultiMatchRegex = new RegExp(' ', 'gm');
    escapedSearchTerm = escapedSearchTerm.replace(spaceToMultiMatchRegex, '|');
    return escapedSearchTerm;
  }

  private escapeRegExp(str) {
    return str.replace('/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g', '\\$&');
  }
}
