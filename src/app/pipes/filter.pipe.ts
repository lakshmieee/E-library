import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    return value.filter((item: { bookName: string; }) =>
        item.bookName.toLowerCase().includes(filterString.toLowerCase())
    );
  }
}
