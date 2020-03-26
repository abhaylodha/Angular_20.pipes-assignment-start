import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortValues',
  pure : false
})
export class SortValuesPipe implements PipeTransform {

  transform(value: any, sequence: string) {
    const sortSequence = sequence.toUpperCase().split(",")

    if (value.length === 0) {
      return value;
    }

    return (value.sort((a, b) => {
      return ((sortSequence.findIndex((e) => e === a.instanceType.toUpperCase())) -
        (sortSequence.findIndex((e) => e === b.instanceType.toUpperCase())));
    }
    ));
  }

}
