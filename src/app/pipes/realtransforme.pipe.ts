import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appRealtransforme',
})
export class RealtransformePipe implements PipeTransform {

  transform(value: unknown): string {
    if (typeof value !== 'number') return '';

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

}
