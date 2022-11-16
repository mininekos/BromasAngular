import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borrarInsultos'
})
export class BorrarInsultosPipe implements PipeTransform {

  transform(value: String, args: String): String {
    
    const insultos=args.split(',')
    insultos.forEach(element => {
      if(value.includes(element))
        value=value.replace(element,"$%#@!")
    });      
    return value;
  }

}
