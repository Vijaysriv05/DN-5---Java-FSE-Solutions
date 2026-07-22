import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string | null): void {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    }
  }
}
