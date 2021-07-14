import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
    return objs;
    }
    return objs.filter((obj)=> {
    return (obj.description.toLowerCase().includes(term.toLowerCase()));
    })
    }

}
