import { Pipe, PipeTransform } from '@angular/core';
import {  Member } from './member.model'

@Pipe({
  name: 'memberfilter',
  pure: false
})
export class MemberPipe implements PipeTransform {

  transform(input: Member[], memberSkill) {
   var output: Member[] = [];
   if (memberSkill === "rapper") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].skill === memberSkill) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (memberSkill === "rb") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].skill === memberSkill) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (memberSkill === "singer") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].skill === memberSkill) {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
 }
}
