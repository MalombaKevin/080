import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
  standalone: true
})
export class GreetingPipe implements PipeTransform {

  transform(value: Date | string): string {
    const date = new Date(value);
    const hours = date.getHours();

    if (hours < 12) {
      return 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

}
