import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'member'
})
export class MemberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
