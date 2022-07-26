import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNumber',
})
export class RandomNumberPipe implements PipeTransform {
  transform(max: number, ...args: number[]): number {
    if (!args.length) return Math.floor(Math.random() * (max + 1));
    if (args.length === 1)
      return Math.floor(Math.random() * (max - args[0] + 1) + args[0]);
    return 0;
  }
}
