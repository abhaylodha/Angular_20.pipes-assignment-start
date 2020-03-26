import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
}
)
export class ReversePipe implements PipeTransform {

    transform(value: any) {

        if (value.length > 0) {
            let output = '';
            value.split('').forEach(element => { output = element + output; });
            return output;
        }
        else {
            return value;
        }

    }
}
