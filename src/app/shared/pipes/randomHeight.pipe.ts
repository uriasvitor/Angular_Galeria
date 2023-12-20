import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomHeight'
})
export class RandomHeightPipe implements PipeTransform {
  transform(maxHeight: number): string {
    const randomHeight = Math.floor(Math.random() * maxHeight);

    if(randomHeight < 260){
      return 'px'
    }

    return `${randomHeight}px`;
  }
}
