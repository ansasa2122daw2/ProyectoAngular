import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chekiado',
  pure: false,
})
export class ChekiadoPipe implements PipeTransform {
  constructor() {}

  transform(value: any): any {
    const resultPostscheked = [];
    const resultTodosFalsos = [];
    let falso = 0;
    let posts = 0;
    for (const post of value) {
      posts++;
      if (post.checked) {
        resultPostscheked.push(post);
      }else{
        falso ++;
      }
      resultTodosFalsos.push(post);
    }
    if(falso == posts){
      return resultTodosFalsos;
    }
    return resultPostscheked;
    
  }
}
