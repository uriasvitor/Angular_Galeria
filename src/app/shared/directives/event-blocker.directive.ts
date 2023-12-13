import { Directive, HostListener } from "@angular/core";

@Directive({
  selector:'[app-event-blocker]'
})
export class EventBlockerDirective{
  @HostListener('dragover', ['$event'])
  public dragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  public dragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }



}
