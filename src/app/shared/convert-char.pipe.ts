import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertChar'
})
export class ConvertChar implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}