import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!==undefined&&value!==null)
{
return _.uniqBy(value,'ParentTask')

}
    return value;
  
      }
  }

